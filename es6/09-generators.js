
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Cris', 'Javier', 'Steph', 'Kari']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



function* getId() {
    // Tu código aquí 👈
    let michiIds = []
    while (true) {
        let new_id = Math.floor(Math.random() * (100 - 1) + 1);
        if (!michiIds.includes(new_id)) {
            michiIds.push(new_id);
            yield new_id;
        }
    }
}

const id = getId()
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
