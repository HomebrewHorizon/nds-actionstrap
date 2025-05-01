// 🚀 ActionStrap - TypeScript Action Handler
import * as fs from "fs";
import * as AS from "AS";
import * as ES from "ES";

class ActionStrap {
    private actionName: string;

    constructor(actionName: string) {
        this.actionName = actionName;
    }

    execute() {
        console.log(`Executing action: ${this.actionName}...`);
        this.performAction();
    }

    private performAction() {
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

    private readFile(filePath: string) {
        try {
            const data = fs.readFileSync(filePath, "utf8");
            console.log(`📖 File Content:\n${data}`);
        } catch (error) {
            console.log(`❌ Error reading file: ${error.message}`);
        }
    }

    private writeFile(filePath: string, content: string) {
        try {
            fs.writeFileSync(filePath, content, "utf8");
            console.log(`✅ Successfully wrote to ${filePath}`);
        } catch (error) {
            console.log(`❌ Error writing file: ${error.message}`);
        }
    }
}

// 🏗 Initialize & Execute
const action = new ActionStrap("InitFromJS"); // Change action here
action.execute();

const action = new ExecStrap();
action.execute();
