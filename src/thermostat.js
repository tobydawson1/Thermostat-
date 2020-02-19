function Thermostat() {
    this.temp = 20;
    this.minimumTemperature = 10;
}

Thermostat.prototype.temperature = function() {
    return this.temp
}

Thermostat.prototype.increase = function(increment) {
    return this.temp += increment
    
}

Thermostat.prototype.decrease = function(increment) {
    if (this.temp <= this.minimumTemperature)
        throw new Error("Temperature is too low")
    else
    return this.temp -= increment
}

