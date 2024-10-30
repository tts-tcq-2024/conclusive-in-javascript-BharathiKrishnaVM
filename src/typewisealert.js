const PassiveCooling = require('./cooling/PassiveCooling');
const HiActiveCooling = require('./cooling/HiActiveCooling');
const MedActiveCooling = require('./cooling/MedActiveCooling');
const ControllerAlert = require('./alert/ControllerAlert');
const EmailAlert = require('./alert/EmailAlert');

const coolingStrategies = {
  'PASSIVE_COOLING': PassiveCooling,
  'HI_ACTIVE_COOLING': HiActiveCooling,
  'MED_ACTIVE_COOLING': MedActiveCooling,
};

function getCooling(coolingType) {
  const Class = coolingStrategies[coolingType];
  if (!Class) {
    throw new Error('Unknown cooling type');
  }
  return new Class();
}

function getAlert(alertTarget) {
  switch(alertTarget) {
    case 'TO_CONTROLLER':
      return new ControllerAlert();
    case 'TO_EMAIL':
      return new EmailAlert();
    default:
      throw new Error('Unknown alert target');
  }
}

function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const cooling = getCooling(batteryChar.coolingType);
  const breachType = cooling.classifyTemperature(temperatureInC);
  const alert = getAlert(alertTarget);
  alert.sendAlert(breachType);
}

module.exports = {
  checkAndAlert
};
