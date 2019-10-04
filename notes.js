//Modules
const fs = require("fs");
const chalk = require("chalk");

//Get Notes Function
const getNotes = () =>  "Your Notes...";


//Add Notes Function.
const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}