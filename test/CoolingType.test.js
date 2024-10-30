
const {expect} = require('chai');
const PassiveCooling = require('../src/cooling/PassiveCooling');
const HiActiveCooling = require('../src/cooling/HiActiveCooling');
const MedActiveCooling = require('../src/cooling/MedActiveCooling');

describe('Cooling Type  Tests', () => {
  it('infers TOO_LOW for Passive Cooling when temperature is lower than the minimum', () => {
    const passiveCooling = new PassiveCooling();
    expect(passiveCooling.classifyTemperature(-1)).to.equal('TOO_LOW');
  });

  it('infers TOO_HIGH for Passive Cooling when temperature is higher than the maximum', () => {
    const passiveCooling = new PassiveCooling();
    expect(passiveCooling.classifyTemperature(36)).to.equal('TOO_HIGH');
  });

  it('infers NORMAL for Passive Cooling when temperature is within the limit', () => {
    const passiveCooling = new PassiveCooling();
    expect(passiveCooling.classifyTemperature(30)).to.equal('NORMAL');
  });

  it('infers TOO_LOW for Hi Active Cooling when temperature is lower than the minimum', () => {
    const hiActiveCooling = new HiActiveCooling();
    expect(hiActiveCooling.classifyTemperature(-5)).to.equal('TOO_LOW');
  });

  it('infers TOO_HIGH for Hi Active Cooling when temperature is higher than the maximum', () => {
    const hiActiveCooling = new HiActiveCooling();
    expect(hiActiveCooling.classifyTemperature(46)).to.equal('TOO_HIGH');
  });

  it('infers NORMAL for Hi Active Cooling when temperature is within the limit', () => {
    const hiActiveCooling = new HiActiveCooling();
    expect(hiActiveCooling.classifyTemperature(40)).to.equal('NORMAL');
  });

  it('infers TOO_LOW for Med Active Cooling when temperature is lower than the minimum', () => {
    const medActiveCooling = new MedActiveCooling();
    expect(medActiveCooling.classifyTemperature(0)).to.equal('NORMAL');
  });

  it('infers TOO_HIGH for Med Active Cooling when temperature is higher than the maximum', () => {
    const medActiveCooling = new MedActiveCooling();
    expect(medActiveCooling.classifyTemperature(41)).to.equal('TOO_HIGH');
  });

  it('infers NORMAL for Med Active Cooling when temperature is within the limit', () => {
    const medActiveCooling = new MedActiveCooling();
    expect(medActiveCooling.classifyTemperature(35)).to.equal('NORMAL');
  });
});
