'use strict';

// argument object - no longer bound with arrow function

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(23, 43));

// this keyword - no longer bound

var user = {
    name: 'Marcin',
    cities: ['Gdansk', 'Sopot', 'Grajewo'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' Marcin haved lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challange area

var multiplier = {
    numbers: [2, 4, 7],
    multiplayBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplayBy;
        });
    }
};
console.log(multiplier.multiply());
