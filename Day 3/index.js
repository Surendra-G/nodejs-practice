
// accessing the values using the object concepot
const operator = require("./operator");
console.log(operator.add(5,5));
console.log(operator.personname);

//accessing through property
const {add, personname} = require('./operator');
console.log(add(5,5));
console.log(personname);

const chalk = require('chalk');

console.log(chalk.green("Hello, my name is Surendra Giri"));