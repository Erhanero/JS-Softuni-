function train(input) {

    let train = input.shift().split(" ").map(Number);
    let maxPassenger = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(" ");
        let command = current[0];

        if (command == "Add") {
            let passengers = Number(current[1]);
            train.push(passengers);
        } else {
            command = Number(command);
            for (let j = 0; j < train.length; j++) {
                if (train[j] + command <= maxPassenger) {
                    train[j] += command;
                    break;
                }
            }
        }


    }
    return train.join(" ")
}
