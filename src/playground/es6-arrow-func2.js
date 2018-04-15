//arguments object

// const add = (a,b) => {
//     console.log(arguments);
//     return a+b;
// };
// console.log(add(5,2));

//this keyword-kod arrow func. koristi this iz nivoa iznad

const user = {
    name:'Valentin',
    cities: ['Zagreb','Salzburg'],
    printPlacesLived() {
       return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    numbers: [2,4],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};
console.log(multiplier.multiply());