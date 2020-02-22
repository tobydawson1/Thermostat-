function Thermostat() {
    this.temp = 20;
    this.minimumTemperature = 10;
    this.powerSaving = true;
    this.defaultTemp = 20;
    this.lowUsage = 18;
    this.mediumUsage = 25;
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

Thermostat.prototype.pSaver = function(){
    if (this.powerSaving === true){
        this.powerSaving = false
    }else {
        this.powerSaving = true
    }
    
} 

Thermostat.prototype.reset = function() {
    this.temp = this.defaultTemp

}

Thermostat.prototype.usage = function() {
    if (this.temp <= this.lowUsage)
        return 'low-usage';
    else if (this.temp > this.lowUsage && this.temp < this.mediumUsage)
        return 'medium-usage';
    else 
        return 'high-usage';

}


