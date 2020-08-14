describe("Thermostat", function(){

  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Default settings', () => {
    it("temperature should be 20 degrees by default", function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
    it("power saving mode should be on by default", function(){
      expect(thermostat.getPowerSavingMode()).toBeTruthy();
    })
  })

  describe('Check minimum and maximum temperatures', function(){
    it("minimum temp should be 10 degrees", function(){
      expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
    })
    it("maximum temp should be 25 degrees if powerSavingMode is ON", function(){
      thermostat.getPowerSavingMode();
      expect(thermostat.maximumTemperature).toEqual(25)
    })
    it("maximum temp should be 32 degrees if powerSavingMode is OFF", function(){
      thermostat.turnOffPowerSavingMode();
      thermostat.getPowerSavingMode();
      expect(thermostat.maximumTemperature).toEqual(32)
    })
  })

  describe('Temperature increases', () => {
    it("should increase the temp with an up function", function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
    it("temp increase should not exceed 25 degrees if power saving mode is ON", function(){
      thermostat.getPowerSavingMode(); // on
        for (let i = 0; i < 5; i++ ) {
        thermostat.up();
        }
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    })
    it("temp should not exceed 32 degrees if power saving mode is OFF", function(){
      thermostat.turnOffPowerSavingMode();
      thermostat.getPowerSavingMode();
      for (let i = 0; i < 12; i ++) {
        thermostat.up();
      }
      expect(thermostat.maximumTemperature).toEqual(32)
    })
  })

  describe('Temperature decreases', () => {
    it("should decrease the temp with a down function", function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19); 
    });
    // don't go below min temp
  });

  describe("Power saving mode checks", function(){
    it("turn OFF power saving mode", function(){
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.getPowerSavingMode()).toBeFalsy();
    })
    it("turn ON power saving mode", function(){
      thermostat.turnOnPowerSavingMode();
      expect(thermostat.getPowerSavingMode()).toBeTruthy();
    })
  })

  describe("Reset function", function(){
    it("current temperature will be reset to 20 degrees when reset function called", function(){
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    })
  })

  describe("Current energy usage", function(){
    it("current energy usage should be LOW if below 18", function(){
      for (let i = 0; i < 3; i++ ) {
        thermostat.down();
      }
      expect(thermostat.getCurrentEnergyUsage()).toEqual('Low usage')
    })
    it("current energy usage should be MEDIUM if between 18-25", function(){
      thermostat.up();
      expect(thermostat.getCurrentEnergyUsage()).toEqual('Medium usage')
    })
    it("current energy usage should be HIGH if above 25", function(){
      for (let i = 0; i < 6; i++ ) {
        thermostat.up();
      }
      expect(thermostat.getCurrentEnergyUsage()).toEqual('Medium usage')
    })
  })
})
