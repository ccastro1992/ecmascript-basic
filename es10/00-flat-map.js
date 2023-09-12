//FLAT
const array = [1, 5, 8, 3, 2, 7, [89, 80, 80, [479, 458, 896]]];

console.log(array);
console.log(array.flat(3));


//FLAT MAP
const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]))