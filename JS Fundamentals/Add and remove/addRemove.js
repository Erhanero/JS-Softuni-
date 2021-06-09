function addRemove(array) {
    let newArray = [];
    let count = 0;

    for (let i = 0; i < array.length; i++) {

        let current = array[i];
        if (current === "add") {
            newArray.push(count += 1)
        } else {
            count += 1
            newArray.pop();
        }
    }
    console.log(newArray.join(" "))
}
