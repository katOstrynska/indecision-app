'use strict';

var nameVar = 'Bob';
var nameVar = 'inny Bob';
console.log('nameVar', nameVar);

var nameLet = 'Sara';
nameLet = 'inna Sara';
console.log('nameLet', nameLet);

var nameConst = 'Jerome';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}
var petName = getPetName();
console.log(petName);

//Block scoping

var fullName = 'Bob Bobinski';
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
