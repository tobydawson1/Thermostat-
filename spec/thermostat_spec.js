describe('Thermostat', function() {
    var thermostat

    beforeEach(function() {
        thermostat = new Thermostat();
        
    });

    it('starts at 20c', function() {
        expect(thermostat.temperature()).toEqual(20);
    });

    it('increases in temp', function() {
        
        expect(thermostat.increase(1)).toEqual(21);
    });
 
    it('decreases in temp', function() {
        expect(thermostat.decrease(1)).toEqual(19);
    });

    it('throws error at minimum temperature', function() {
        thermostat.decrease(10)
        expect(function(){thermostat.decrease();}).toThrow(new Error("Temperature is too low"));
    });

    it('it shows if saving mode can be turned off', function() {
        thermostat.pSaver()
        expect(thermostat.powerSaving).toBe(false)
    });

    it('shows that power saving mode is on by default', function() {
        expect(thermostat.powerSaving).toBe(true)
    });

    it('has a reset funtion', function() { 
        thermostat.reset()
        expect(thermostat.temp).toBe(20)
    });

    it('has low usage', function() {
        thermostat.decrease(3)
        expect(thermostat.usage()).toEqual('low-usage')
    }); 

    it('has medium usage', function() {
        expect(thermostat.usage()).toEqual('medium-usage')
    });

    it('as high usage', function() {
        thermostat.increase(6)
        expect(thermostat.usage()).toEqual('high-usage')
    });
});

