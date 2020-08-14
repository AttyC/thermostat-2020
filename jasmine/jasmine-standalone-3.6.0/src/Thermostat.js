  'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.maximumTemperature = 25;
    this.powerSavingMode = true;

  }
  getCurrentTemperature() {
    return this.temperature;
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  getPowerSavingMode() {
    return this.powerSavingMode;
  }
  turnOffPowerSavingMode() {
    this.powerSavingMode = false;
    this.maximumTemperature = 32;
  }
  turnOnPowerSavingMode() {
    this.powerSavingMode = true;
    this.maximumTemperature = 25;
  }

  up() {
    if (this.powerSavingMode && this.temperature >= 25) {
        return this.temperature = 25;
      }
    else if (!this.powerSavingMode && this.temperature >= 32) {
      return this.temperature = 32;
    }
    console.log('this.temperature', this.temperature)
    return this.temperature += 1;
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }


}
