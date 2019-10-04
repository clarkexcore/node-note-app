const chalk = require('chalk');
const yargs = require('yargs');
//Created Files.
const notes = require('./notes.js');

//Customize Yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Title for note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "The body of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

//Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            description: "Title for removed note",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

//Create a listing command
yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        notes.listNotes();
    }
})

//Create a read command
yargs.command({
    command: "read",
    describe: "Reading a note",
    builder: {
        title: {
            description: "Title for reading note",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})


yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);