function addItem() {

    let inputText = document.getElementById("newItemText");
    let inputValue = document.getElementById("newItemValue");
    let select = document.getElementById("menu");
    let newOption = document.createElement("option");
    let valueForOption = newOption.setAttribute("value", inputValue.value);
    newOption.textContent = inputText.value;
    select.appendChild(newOption);
    inputText.value = "";
    inputValue.value = ""
}