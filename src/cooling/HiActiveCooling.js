const CoolingType = require('./CoolingType');

class HiActiveCooling extends CoolingType {
  constructor() {
    super(0, 45);  // Passing the specific limits to the parent class
  }
}

module.exports = HiActiveCooling;
