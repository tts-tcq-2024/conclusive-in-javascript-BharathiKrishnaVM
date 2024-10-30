const PassiveCooling = require('./PassiveCooling');
const HiActiveCooling = require('./HiActiveCooling');
const MedActiveCooling = require('./MedActiveCooling');
const ControllerAlert = require('./ControllerAlert');
const EmailAlert = require('./EmailAlert');
const CoolingContext = require('./CoolingContext');
const AlertContext = require('./AlertContext');

function getCooling(coolingType) {
  const strategies = {
    PASSIVE_COOLING: new PassiveCooling(),
    HI_ACTIVE_COOLING: new HiActiveCooling(),
    MED_ACTIVE_COOLING: new MedActiveCooling(),
  };

  return strategies[coolingType] || null;
}

function getAlert(alertTarget) {
  const strategies = {
    TO_CONTROLLER: new ControllerAlert(),
    TO_EMAIL: new EmailAlert(),
  };

  return strategies[alertTarget] || null;
}

function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const cooling = getCooling(batteryChar.coolingType);
  if (!cooling) {
    throw new Error('Invalid cooling type');
  }

  const coolingContext = new CoolingContext(cooling);
  const breachType = coolingContext.classifyTemperature(temperatureInC);

  const alert = getAlert(alertTarget);
  if (!alert) {
    throw new Error('Invalid alert target');
  }

  const alertContext = new AlertContext(alert);
  alertContext.sendAlert(breachType);
}

module.exports = { checkAndAlert };
