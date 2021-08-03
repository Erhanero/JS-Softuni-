function solve(arr) {
    let activationKey = arr.shift();
    for (let command of arr) {
        command = command.split(">>>");
        if (command[0] == "Slice") {
            let startIndex = Number(command[1])
            let endIndex = Number(command[2])
            let deleteWord = activationKey.substring(startIndex, endIndex);
            activationKey = activationKey.replace(deleteWord, "");
            console.log(activationKey)

        } else if (command[0] == "Contains") {
            if (activationKey.includes(command[1])) {
                let indexOfWord = activationKey.indexOf(command[1]);
                let wordLength = command[1].length
                let containWord = activationKey.substring(indexOfWord, indexOfWord + wordLength);
                console.log(`${activationKey} contains ${containWord}`)
            } else {
                console.log(`Substring not found!`)
            }
        } else if (command[0] == "Flip") {
            if (command[1] == "Lower") {
                let replaceWord = activationKey.substring(Number(command[2]), Number(command[3]));
                let replaceWordToLowerCase = replaceWord.toLowerCase();
                activationKey = activationKey.replace(replaceWord, replaceWordToLowerCase)
                console.log(activationKey)
            } else if (command[1] == "Upper") {
                let replaceWord = activationKey.substring(Number(command[2]), Number(command[3]));
                let replaceWordToUpperCase = replaceWord.toUpperCase();
                activationKey = activationKey.replace(replaceWord, replaceWordToUpperCase);
                console.log(activationKey)
            }
        } else if (command[0] == "Generate") {
            console.log(`Your activation key is: ${activationKey}`)

        }
    }
}
