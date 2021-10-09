function validate() {
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", validateForm);
    let checkBox = document.querySelector("#company[type=checkbox]");
    checkBox.addEventListener("change", isCompany);


    function isCompany(e) {
        let companyFieldset = document.getElementById("companyInfo");


        companyFieldset.style.display = e.target.checked ? "block" : "none"
        if (e.target.checked) {
            let isCompany = true;
        }
    }

    function validateForm(e) {
        e.preventDefault();
        let usernameInput = document.getElementById("username");
        let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("password");
        let confirmPasswordInput = document.getElementById("confirm-password");
        let isCorrectValue = true;



        let userNameRegex = /[\w\d]{3,20}/;
        let userNameIsValid = userNameRegex.test(usernameInput.value);
        changeBorderStlye(usernameInput, userNameIsValid)

        let passwordRegex = /[\w\d_]{5,15}/;
        let passwordIsValid = passwordRegex.test(passwordInput.value);
        let confirmPasswordValid = passwordRegex.test(passwordInput.value);
        let passwordsValid = passwordIsValid &&
            confirmPasswordValid &&
            passwordInput.value == confirmPasswordInput.value
        changeBorderStlye(passwordInput, passwordIsValid);
        changeBorderStlye(confirmPasswordInput, passwordsValid);


        let emailRegex = /^.*@.*\..*$/;
        let emailIsValid = emailRegex.test(emailInput.value);
        changeBorderStlye(emailInput, emailIsValid);

        let checkBox = document.getElementById('company');
        let companyNumberIsValid = false;
        let companyNumberInput = document.getElementById("companyNumber");

        if (checkBox.checked) {
            if (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999) {
                companyNumberIsValid = true;
                changeBorderStlye(companyNumberInput, companyNumberIsValid)

            }
        }

        let validDiv = document.getElementById("valid");
        validDiv.style.display = isCorrectValue ? "block" : "none";



        function changeBorderStlye(input, isValid) {
            if (isValid == false) {
                input.style.border = "2px solid red";
                isCorrectValue = false;

            } else {
                input.style.border = "none"
            }
        }





    }
}
