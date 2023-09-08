
function* iterate(array) {
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Cris', 'Javier', 'Steph', 'Kari']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);