const AS = require("as") // Main Centeral Script

class ASReqPath
    constructor(actionCommand) {
        this.actionCommand = actionCommand;
    }

    execute() {
        console.log("./bash-inst.sh");
        this.actionCommand();
    }
  
    actionCommand() {
        switch (this.actionCommand) {
          case "command-output":
              console.log("Installing Bash thru /.zyx")
              break;
  
