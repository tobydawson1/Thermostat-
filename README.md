## Makers Academy - Week 5

# Thermostat-JS

[Task](#Task) | [Installation](#Installation) | [Functionality](#Functionality) |

Technologies: Javascript, Jasmine, Rspec, HTML, CSS

![Thermostat](screenshots/thermostat.png)

# Task

We needed to build a simple Thermostat.
This was a afternoon project during my time at Makers Academy.

# Installation

1. Fork this repoistory and clone  it to your local machine then change into the directory

```
$ git clone git@github.com:tobydawson1/Thermostat-js
$ cd Thermostat-js
```

2. Load dependencies with bundle:

```
$ gem install bundle
$ bundle
```

3. Run the jasmine spech runner for tests and coverage

```
$ open SpecRunner.html
```

4. Run the index file

```
$ open index.html
```


# Funtionality

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
* Use a jQuery AJAX call to get the weather information for London from a weather API. Display the weather information to the user.
