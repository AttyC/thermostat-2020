  'use strict';

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.maximumTemperature = 25;
    this.powerSavingMode = true;
    this.currentEnergyUsage;
    this.LOW_USAGE = 18;
    this.MEDIUM_USAGE = 25;

  }

  getCurrentTemperature() {
    return this.temperature;
  }
  getCurrentEnergyUsage() {
    if (this.temperature <= this.LOW_USAGE) {
      return this.currentEnergyUsage = 'Low usage'
    } else if (this.temperature <= this.MEDIUM_USAGE) {
      return this.currentEnergyUsage = 'Medium usage'
    } else {return this.currentEnergyUsage = 'High usage'}
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
    return this.temperature += 1;
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1
  }
  reset(){
    return this.temperature === 20;
  }

}
