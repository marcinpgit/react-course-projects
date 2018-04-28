function square (x) {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(7));

const fullName = 'Ola Moni';

const getFirstName = (name) => {
    return name.split(' ')[0];
};

const getFirstNameShort = (name) => name.split(' ')[0];

console.log(getFirstName(fullName));
console.log(getFirstNameShort('Monika Wikt'));