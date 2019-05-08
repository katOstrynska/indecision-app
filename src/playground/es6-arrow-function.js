function square(x) {
    return x*x;
}

console.log(square(9));

// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => x*x; //only if arrow function return sth

console.log(squareArrow(9));

const getName = (name) => {
    return name.split(' ')[0]
}

console.log(getName('Bob Bobinsky'));

const getNameArr = (name) => name.split(' ')[0];

console.log(getNameArr('Bob Bobinsky'));