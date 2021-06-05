function arrayRotation(array, num) {

    for (let i = 1; i <= num; i++) {
        let firstNumber = array[0];
        for (let j = 0; j < array.length - 1; j++) {
            array[j] = array[j + 1]


        }
        let lastNumber = array.length - 1;
        array[lastNumber] = firstNumber


    }
    console.log(array.join(" "))
}
