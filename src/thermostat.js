function Thermostat() {
    this.temp = 20;
}

Thermostat.prototype.temperature = function() {
    return this.temp
}

Thermostat.prototype.increase = function() {
    return this.temp += 1
    
}

Thermostat.prototype.decrease = function() {
    return this.temp -= 1
}

