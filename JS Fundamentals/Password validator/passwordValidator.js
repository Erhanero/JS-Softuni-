function passwordValidator(password) {
    function isLengthSixAndTen(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function consistsOnlyLettersAndDigits(password) {
        for (let i = 0; i < password.length; i++) {
            let current = password[i];
            let charToAs = current.charCodeAt(0);
            if (!(charToAs >= 48 && charToAs <= 57) && !(charToAs >= 65 && charToAs <= 90) && !(charToAs >= 97 && charToAs <= 122)) {
                return false;
            }
        }
        return true;

    }
    function hasAtLeastTwoDigits(password) {
        let count = 0;
        for (let i = 0; i < password.length; i++) {
            let current = password[i];
            let currentToAs = current.charCodeAt(0);
            if (currentToAs >= 48 && currentToAs <= 57) {
                count++
            }
        }

        if (count >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let isLengthValid = isLengthSixAndTen(password);
    let containsLettersAndDigits = consistsOnlyLettersAndDigits(password);
    let containsAtLeastTwoDigits = hasAtLeastTwoDigits(password);

    if (isLengthValid && containsLettersAndDigits && containsAtLeastTwoDigits) {
        console.log("Password is valid");
        return;
    }
    if (isLengthValid == false) {
        console.log("Password must be between 6 and 10 characters");

    }
    if (containsLettersAndDigits == false) {
        console.log("Password must consist only of letters and digits");
    }
    if (containsAtLeastTwoDigits == false) {
        console.log("Password must have at least 2 digits");
    }
}
passwordValidator("login");
