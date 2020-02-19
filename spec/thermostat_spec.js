describe('Thermostat', function() {
    var thermostat

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it('starts at 20c', function() {
        expect(thermostat.temperature()).toEqual(20);
    });

    it('increases in temp', function() {
        
        expect(thermostat.increase()).toEqual(21);
    });
 
    it('decreases in temp', function() {
        expect(thermostat.decrease()).toEqual(19);
    });
});

