function arrayManipulator(arr, commandArr) {

    for (let i = 0; i < commandArr.length; i++) {
        let current = commandArr[i].split(" ");
        let command = current[0];

        if (command === "add") {
            let index = Number(current[1]);
            let element = Number(current[2]);
            arr.splice(index, 0, element);

        } else if (command === "addMany") {
            command = current.shift();
            let index = Number(current.shift());
            arr.splice(index, 0, ...current);
            arr = arr.map(Number);

        } else if (command === "contains") {
            let element = Number(current[1]);
            let result = arr.indexOf(element);
            console.log(result);

        } else if (command === "remove") {
            let index = Number(current[1]);
            arr.splice(index, 1);

        } else if (command === "shift") {
            let position = current[1];
            for (let i = 1; i <= position; i++) {
                let firstNum = arr.shift();
                arr.push(firstNum);

            }
        } else if (command === "sumPairs") {
            let result = [];
            for (let i = 0; i < arr.length - 1; i += 2) {
                if (arr.length % 2 !== 0) {
                    arr.push(0);
                }
                let firstNum = arr[i];
                let secondNum = arr[i + 1]
                let sum = firstNum + secondNum;
                result.push(sum);

            }
            arr = result;
        } else if (command === "print") {
            console.log(`[ ${arr.join(", ")} ]`)
        }
    }
}
