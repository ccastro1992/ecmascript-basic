const user = {username: 'Cris', age: 30, country: 'ECU'};

const {username, ...values} = user;

console.log(username);
console.log(values);