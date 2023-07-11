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


// spread operator
let person = { name: 'Cristhian', age: 30 }
let country = 'ECU'

let data = { ...person, country }
console.log(data);

let data2 = { id: 1, ...person, country }
console.log(data2)

// rest
function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(12, 2, 32, 43, 4)



function solution(json1 = {
    name: 'Mr. Michi',
    food: 'Pescado',
  },
  json2 = {
    age: 12,
    color: 'Blanco',
  }) {
    // Tu código aquí 👈 


    return { ...json1, ...json2 }

}

console.log(solution({
    name: "Bigotes",
    food: "Pollito"
}),)
