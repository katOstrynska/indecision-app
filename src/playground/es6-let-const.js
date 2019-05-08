var nameVar = 'Bob';
var nameVar = 'inny Bob';
console.log('nameVar', nameVar);

let nameLet = 'Sara';
nameLet = 'inna Sara';
console.log('nameLet', nameLet);

const nameConst = 'Jerome';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}
const petName = getPetName();
console.log(petName);

//Block scoping

var fullName = 'Bob Bobinski';
let firstName;
if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);