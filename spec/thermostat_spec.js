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
});

