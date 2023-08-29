// Declaracion
class User { };

// Instancia de User
//const newUser = new User();

class user {
    // metodos
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();

console.log(gndx.greeting());

const bebloper = new user();

console.log(bebloper.greeting());

// constructor

class user {
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user();

// this 

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setters - getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metodos
    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    // get - set
    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const cris = new user('David', 23);
console.log(cris.uAge);
console.log(cris.uAge = 20);