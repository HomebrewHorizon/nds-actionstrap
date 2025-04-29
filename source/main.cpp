#include <nds.h>
#include <fat.h>
#include <stdio.h>
#include <unistd.h>

void executeScript(const char* scriptPath) {
    FILE* script = fopen(scriptPath, "r");
    if (!script) {
        iprintf("Error: Cannot open %s\n", scriptPath);
        return;
    }
    
    iprintf("Executing %s...\n", scriptPath);
    // Here, you'd need a JavaScript interpreter like Duktape to run JS scripts
    fclose(script);
}

void showMenu() {
    consoleClear();
    iprintf("Please select an action:\n");
    iprintf("A - action.ts\n");
    iprintf("B - action.js\n");
}

int main() {
    consoleDemoInit(); // Initialize text console
    if (!fatInitDefault()) {
        iprintf("Failed to initialize filesystem!\n");
        return 1;
    }

    showMenu();

    while(1) {
        scanKeys();
        int keys = keysDown();

        if(keys & KEY_A) {
            executeScript("sd:/scripts/action.ts");
        } else if(keys & KEY_B) {
            executeScript("sd:/scripts/action.js");
        }

        swiWaitForVBlank();
    }

    return 0;
}
