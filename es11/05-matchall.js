const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banana, Kiwi, Orange, etc, etc'

for (const match of fruit.matchAll(regex)){
    console.log(match);
}