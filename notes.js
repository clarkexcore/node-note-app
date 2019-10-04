//Modules
const fs = require("fs");
const chalk = require("chalk");

//Add Notes Function.
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.bold.inverse("New Note Added"));
    } else {
        console.log(chalk.red.bold.inverse("Note title taken. ERROR ERROR."));
    }

}

//Remove Notes function
const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length < notes.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.bold.inverse("Your Note has beeen deleted."));
    } else {
        console.log(chalk.red.bold.inverse("Please use a title matching your notes."));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.cyan.bold.inverse("Your Notes"))
    notes.forEach((note) => console.log(note.title));
}

const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) => note.title === title);

    if(findNote){
        console.log(chalk.cyan.bold.inverse(findNote.title));
        console.log(findNote.body);
    } else {
        console.log(chalk.red.bold.inverse("There is no note of that title"));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e){
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}