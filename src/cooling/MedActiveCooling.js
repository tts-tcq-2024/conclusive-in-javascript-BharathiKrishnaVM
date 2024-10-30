const CoolingType = require('./CoolingType');

class MedActiveCooling extends CoolingType {
  constructor() {
    super(0, 40);  // Passing the specific limits to the parent class
  }
}

module.exports = MedActiveCooling;
