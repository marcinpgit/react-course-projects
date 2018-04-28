// argument object - no longer bound with arrow function

const add =  (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(23, 43));

// this keyword - no longer bound

const user = {
    name: 'Marcin',
    cities: ['Gdansk', 'Sopot', 'Grajewo'],
    printPlacesLived () {
        return this.cities.map( (city) => this.name + ' has lived in ' + city);

        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' Marcin haved lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

// Challange area

const multiplier = {
    numbers: [2, 4, 7],
    multiplayBy: 2,
    multiply () {
        return this.numbers.map(num => num * this.multiplayBy);
    }
};
console.log(multiplier.multiply());