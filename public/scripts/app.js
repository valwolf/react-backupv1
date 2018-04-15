'use strict';

//arguments object

// const add = (a,b) => {
//     console.log(arguments);
//     return a+b;
// };
// console.log(add(5,2));

//this keyword-kod arrow func. koristi this iz nivoa iznad

var user = {
    name: 'Valentin',
    cities: ['Zagreb', 'Salzburg'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

//Challenge

var multiplier = {
    numbers: [2, 4],
    multiplyBy: 4,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
