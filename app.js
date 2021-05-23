const chalk = require("chalk");
const { string } = require("yargs");
const yargs = require("yargs")
const notes = require("./notes.js");

yargs.version('1.1.0')


yargs.command({
  command: 'add',
  describe: 'To add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  }, // its value is object and used to describe the options the command can have
  handler(argv){
    notes.addnotes(argv.title,argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: "To remove a note",
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.removenotes(argv.title)
  }
})

yargs.command({
  command: 'list',
  describe: 'To list the notes',
  handler(){
    notes.listnotes()
  }
})

yargs.command({
  command: 'read',
  describe: 'To read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.readnote(argv.title)
  }
})

yargs.parse()   //same as console.log(yargs.argv)







// const mess = notes() 
// console.log(mess)


// console.log(chalk.blue.inverse.bold('Success!'))

// console.log(process.argv)
// a = process.argv[2]
// if (a === "add"){
//   console.log("adding..")
// }
// fs.writeFileSync("note.txt","Welcome")
// fs.appendFileSync("note.txt","first line")