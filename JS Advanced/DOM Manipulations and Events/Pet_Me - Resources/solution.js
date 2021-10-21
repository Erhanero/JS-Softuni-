function solve() {
    let addButton = document.querySelector("#container button");
    addButton.addEventListener("click", addPet);

    let nameInput = document.querySelector("input[placeholder=Name]");
    let ageInput = document.querySelector("input[placeholder=Age]")
    let kindInput = document.querySelector("input[placeholder=Kind]")
    let currentOwnerInput = document.querySelector("input[placeholder='Current Owner']");
    let ulAdoptionSection = document.querySelector("#adoption ul");


    function addPet(e) {
        e.preventDefault();
        if (nameInput.value == "" || ageInput.value == "" || ageInput.value == NaN || kindInput.value == "" || currentOwnerInput.value == "") {
            return;
        }

        let li = document.createElement("li");

        let p = document.createElement("p");
        p.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`

        let span = document.createElement("span");
        span.textContent = `Owner: ${currentOwnerInput.value}`;

        let button = document.createElement("button");
        button.textContent = "Contact with owner";
        button.addEventListener("click", takeIt)


        li.appendChild(p)
        li.appendChild(span);
        li.appendChild(button);

        ulAdoptionSection.appendChild(li)

        nameInput.value = "";
        ageInput.value = "";
        kindInput.value = "";
        currentOwnerInput.value = "";

        function takeIt() {
            let div = document.createElement("div");

            let input = document.createElement("input");
            input.setAttribute("placeholder", "Enter your names");
            button.remove()
            let takeButton = document.createElement("button");
            takeButton.textContent = "Yes! I take it!";
            takeButton.addEventListener("click", adopted.bind(null, input, li));

            div.appendChild(input)
            div.appendChild(takeButton)
            li.appendChild(div)
        }





    }
    function adopted(input, petList) {
        console.log(petList);
        let adoptedSection = document.querySelector("#adopted ul");

        if (input.value == "") {
            return
        }

        let newOwner = input.value;
        petList.querySelector("div").remove();

        let button = document.createElement("button");
        button.textContent = "Checked";
        button.addEventListener("click", remove.bind(null, petList));

        let newSpan = petList.querySelector("span").textContent = `New Owner: ${newOwner}`

        petList.appendChild(button)

        adoptedSection.appendChild(petList)


    }
    function remove(petList) {
        petList.remove()
    }


}

