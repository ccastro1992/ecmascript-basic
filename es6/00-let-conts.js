// Variables
let first_name = "Cristhian"
console.log(first_name);

var last_name = "Castro";
console.log(last_name);

const animal = "Perro";
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Apple";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana";
    }
    console.log(fruit1);
    console.log(fruit2); // Error let puede ser usado dentro del bloque de declaracion
    console.log(fruit3);
}

fruits();