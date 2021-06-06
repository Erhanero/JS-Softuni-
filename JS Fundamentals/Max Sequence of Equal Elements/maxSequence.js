function maxSequence(array) {

    let currentSequence = [];
    let maxSequence = [];

    for (let i = 0; i < array.length; i++) {

        currentSequence = [];
        let currentNum = array[i];
        currentSequence.push(currentNum)


        for (let j = i + 1; j < array.length; j++) {

            let currentNum2 = array[j];
            if (currentNum2 != currentNum) {
                break;

            } else {
                currentSequence.push(currentNum2)
            }
        }
        if (currentSequence.length > maxSequence.length)

            maxSequence = currentSequence;
    }
    console.log(maxSequence.join(" "))
}
