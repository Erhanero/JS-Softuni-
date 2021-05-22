function login(passwordList) {
    let userName = passwordList[0];
    let passwordAsList = userName.split('');
    let passwordAsListReverse = passwordAsList.reverse();
    let password = passwordAsListReverse.join('');

    let index = 1;
    let currentPassword = passwordList[index];
    let falsePassword = 0;

    while (true) {

        currentPassword = passwordList[index];
        if (currentPassword != password) {

            if (falsePassword == 3) {
                console.log(`User ${userName} blocked!`)
                break;
            }
            console.log('Incorrect password. Try again.');
            falsePassword++;
        }

        if (currentPassword === password) {
            console.log(`User ${userName} logged in.`)
            break;
        }

        index++
    }
}
