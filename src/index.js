var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require ('./starwars-names.json');

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames)
};

// added test comment - 17feb2019