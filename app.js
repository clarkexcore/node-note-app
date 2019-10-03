//Modules
const chalk = require('chalk');
const yargs = require('yargs');
//Created Files.
const getNotes = require('./notes.js');

//Customize Yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    handler: function(){
        console.log("Adding a new note");
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function(){
        console.log("Removing the note");
    }
})

//Create a read command
yargs.command({
    command: "read",
    describe: "Reading a note",
    handler: function(){
        console.log("Reading a note");
    }
})

//Create a listing command
yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function(){
        console.log("List all the notes");
    }
})

// console.log(process.argv);
console.log(yargs.argv);