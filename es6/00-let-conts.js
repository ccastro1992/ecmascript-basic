// Variables
let first_name = "Cristhian"
console.log(first_name);

var last_name = "Castro";
console.log(last_name);

const animal = "Perro";
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Kiwi"; // block scope
        const fruit3 = "Banana"; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();