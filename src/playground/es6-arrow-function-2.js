//arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a + b;
}

const addArrow = (a, b) => {
    // console.log(arguments);  //we dont's have access to arguments
    return a + b; 
}
console.log(addArrow(23, 23, 89));

//this keyword - no longer bound to arrow functions

const user = {
    name: 'Bob',
    cities: ['Mexico', 'Moscow', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });

        // const that = this;
        // this.cities.forEach(function(city) {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());