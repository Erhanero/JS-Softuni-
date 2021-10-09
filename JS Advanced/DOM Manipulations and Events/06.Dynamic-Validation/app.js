function validate() {
    let emailInput = document.getElementById("email");
    emailInput.addEventListener("change", emailValidation);

    function emailValidation(e) {
        let emailRegex = /[a-z]+@[a-z]+.[a-z]+/;
        let emailIsValid = emailRegex.test(emailInput.value);

        if (!emailIsValid) {
            emailInput.classList.add("error")
        } else {
            emailInput.classList.remove("error")
        }
    }
}