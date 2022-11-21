const commands = (command: string) => {
    switch (command) {
        case "help":
            return [
                ["help: Shows this help message"],
                ["clear: Clears the terminal"],
                ["exit: Exits the terminal"],
                ["echo: Prints the given text"],
            ];
        case "clear":
            return [];
    }
}

const clear = () => {

}

export {commands}