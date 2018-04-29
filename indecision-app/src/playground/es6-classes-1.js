class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi, I am ' + this.name + ' !';
        return `Hi. I am test ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

const me = new Person('Marcin Pluzynski', 17);
console.log(me.getDescription('Marcin Pluzynski'));

const other = new Person();
console.log(other.getDescription());