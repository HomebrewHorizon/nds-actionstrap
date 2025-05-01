// 🚀 ActionStrap - JavaScript Action Executor
const fs = require("fs");
const AS = require("AS");
const ES = require("ES");

class ActionStrap {
    constructor(actionName) {
        this.actionName = actionName;
    }

    execute() {
        console.log(`Executing action: ${this.actionName}...`);
        this.performAction();
    }

    performAction() {
        switch (this.actionName) {
            case "log-message":
                console.log("🚀 Hello from ActionStrap!");
                break;

            case "read-file":
                this.readFile("sd:/scripts/example.txt");
                break;

            case "write-file":
                this.writeFile("sd:/scripts/output.txt", "🚀 ActionStrap wrote this!");
                break;

            case "run-custom-script":
                console.log("⚡ Running embedded JavaScript...");
                eval(`console.log("Hello from embedded JS!")`);
                break;

            default:
                console.log("⚠️ Unknown action.");
                break;
        }
    }

    readFile(filePath) {
        try {
            const data = fs.readFileSync(filePath, "utf8");
            console.log(`📖 File Content:\n${data}`);
        } catch (error) {
            console.log(`❌ Error reading file: ${error.message}`);
        }
    }

    writeFile(filePath, content) {
        try {
            fs.writeFileSync(filePath, content, "utf8");
            console.log(`✅ Successfully wrote to ${filePath}`);
        } catch (error) {
            console.log(`❌ Error writing file: ${error.message}`);
        }
    }
}

// 🏗 Initialize & Execute
const action = new ActionStrap("WinMsgLinuxServer"); // Change action name here
action.execute();

const action = new ExecStrap();
action.execute(value=2);

ES.exec(AS.action(WinMsgLinuxServer));
    { fs.readFileSync(filePathRegister.fs)
          } console.log("Successfully executed ${AS.action}");