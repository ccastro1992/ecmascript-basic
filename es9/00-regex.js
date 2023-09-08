const regex = /(\d{4})-(\d{2})-(\d{2})/;

const matchars = regex.exec("2023-02-02");

console.table(matchars)