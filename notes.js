const fs = require('fs')
const chalk = require("chalk")

const getnotes = ()=>{
  return "Your notes..."
}



//Add notes
const addnotes= (title,body)=>{
  const notesData = loadNotes()

  // For duplicate titles
  //const duplicates = notesData.filter((note)=> title===note.title)  // "note" will iterate over all notes present in the file...It will keep on searching even if the duplicate note is found
  
  // filter returns array of matches and find returns first match
  const duplicate = notesData.find((note)=> title===note.title) // return note if duplicate is present then stops

  debugger

  if(!duplicate){
    notesData.push({
      title: title,
      body: body
    })
    saveNotes(notesData)
    console.log(chalk.green.bold("Note Added"))
  }
  else{
    console.log(chalk.red.bold("Not Added"))
    
  }

}


// REmove Notes
const removenotes = (title)=>{
  const notesData = loadNotes()
  const notesTokeep = notesData.filter((note)=> note.title != title) //notesTokeep contains the notes for which it returns true
    
  if(notesTokeep.length == notesData.length){
    console.log(chalk.red.bold("Note not found"))
  }
  else{
    saveNotes(notesTokeep)
    console.log(chalk.green.bold("Note Removed"))
  }


}

//List notes
const listnotes=()=>{
  const allnotes= loadNotes()
  console.log(chalk.yellow.bold("YOUR NOTES"))

  allnotes.forEach(element => {
    console.log(element.title)
  });

}

// Read note
const readnote=(title)=>{
  const notesData=loadNotes()
  const note = notesData.find((element)=> element.title===title)
  if(note){
    console.log(chalk.yellow.bold(note.title)+ " "+ note.body)

  }else{
    console.log("Note not found")
  }

}


//Convert the new notes into string and write into the file
const saveNotes =(notesData)=>{
  const notes = JSON.stringify(notesData)
  fs.writeFileSync("notes.json",notes)
}

//Load the notes already present in file
const loadNotes = ()=>{
  try{
    const buffer = fs.readFileSync('notes.json')
    const Jsondata = buffer.toString()
    return JSON.parse(Jsondata)
  }
  catch(e){
    return []
  }
}

module.exports = {
  getnotes: getnotes,
  addnotes: addnotes,
  removenotes: removenotes,
  listnotes: listnotes,
  readnote: readnote
}