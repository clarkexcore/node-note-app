const getNotes = require('./notes.js');
const chalk = require('chalk');

const green = chalk.bold.red.inverse("Success!!!!");

const msg = getNotes();
console.log(msg);
console.log(green);