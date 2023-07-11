// arrays destructuring

let fruits = ['Apple', 'Banana']
let [a, b] = fruits;
console.log(a, fruits[1]);

// objects destructuring

let user = {
    username: 'Oscar',
    age: 14
}

let { username, age } = user
console.log(username, age)