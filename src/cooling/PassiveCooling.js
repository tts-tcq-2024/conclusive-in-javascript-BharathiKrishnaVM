const CoolingType = require('./CoolingType');

class PassiveCooling extends CoolingType {
  constructor() {
    super(0, 35);  // Passing the specific limits to the parent class
  }
}

module.exports = PassiveCooling;
