'use strict';

//arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};

var addArrow = function addArrow(a, b) {
    // console.log(arguments);  //we dont's have access to arguments
    return a + b;
};
console.log(addArrow(23, 23, 89));

//this keyword - no longer bound to arrow functions

var user = {
    name: 'Bob',
    cities: ['Mexico', 'Moscow', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

        // const that = this;
        // this.cities.forEach(function(city) {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 6],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
