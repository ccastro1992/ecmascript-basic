class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // metodos
    #speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    // get - set
    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}

const cris = new user('David', 23);
console.log(cris.uAge);
console.log(cris.uAge = 20);