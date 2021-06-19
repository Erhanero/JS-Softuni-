function arrayManipulations(array) {

    let myArr = array.shift().split(" ").map(Number);



    for (let i = 0; i < array.length; i++) {
        let current = array[i].split(" ");
        let command = current[0];
        let firstNum = Number(current[1]);
        let secondNum = Number(current[2]);
        if (command == "Add") {
            add(firstNum);
        } else if (command == "Remove") {
            remove(firstNum);
        } else if (command == "RemoveAt") {
            removeAt(firstNum)
        } else if (command == "Insert") {
            insert(secondNum, firstNum)
        }

       }
    function add(num) {
        myArr.push(num)
    }
    function remove(num) {
        myArr = myArr.filter(x => x !== num)
    }
    function removeAt(num) {
        myArr.splice(num, 1);
    }
    function insert(secondNumber, firstNumber) {
        myArr.splice(secondNumber, 0, firstNumber)
    }

    return myArr;
}
