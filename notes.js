//Modules
const fs = require("fs");
const chalk = require("chalk");

//Get Notes Function
const getNotes = function() {
    return "Your Notes...";
}


//Add Notes Function.
const addNote = function(title, body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log("New Note Added");
    } else {
        console.log("Note title taken. ERROR ERROR.");
    }

}

//Remove Notes function
const removeNote = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title !== title;
    })

    if (notesToKeep.length < notes.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.bold.inverse("Your Note has beeen deleted."));
    } else {
        console.log(chalk.red.bold.inverse("Please use a title matching your notes."));
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = function(){
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