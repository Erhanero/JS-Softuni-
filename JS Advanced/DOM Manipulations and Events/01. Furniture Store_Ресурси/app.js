window.addEventListener('load', solve);

function solve() {
    let addButton = document.querySelector("#add");
    addButton.addEventListener("click", addFunc);

    let modelInput = document.querySelector("#model");
    let yearInput = document.querySelector("#year");
    let descriptionInput = document.querySelector("#description");
    let priceInput = document.querySelector("#price");
    let tableTbody = document.querySelector("#furniture-list");
    let totalPrice = 0;

    function addFunc(e) {
        e.preventDefault();
        let yearValue = Number(yearInput.value);
        let priceValue = Number(priceInput.value);

        if (yearValue < 0 || priceValue < 0 || modelInput.value == "" || descriptionInput.textcontent == "") {
            return;
        }


        let trInfo = document.createElement("tr");
        trInfo.setAttribute("class", "info");
        trInfo.innerHTML = `<td>${modelInput.value}</td><td>${priceValue.toFixed(2)}</td>
        <td><button class="moreBtn">More Info</button>
        <button class="buyBtn">Buy it</button></td>
        `

        let trHide = document.createElement("tr");
        trHide.setAttribute("class", "hide");
        trHide.innerHTML = `<td>Year: ${yearValue}</td>
        <td colspan="3">Description: ${descriptionInput.value}</td>`

        tableTbody.appendChild(trInfo);
        tableTbody.appendChild(trHide)

        modelInput.value = "";
        yearInput.value = "";
        priceInput.value = "";
        descriptionInput.value = "";


    }
    document.querySelector("#information").addEventListener("click", moreFunc);


    function moreFunc(e) {
        if (e.target.tagName == "BUTTON" && e.target.textContent == "More Info" || e.target.textContent == "Less Info") {
            let button = e.target;
            let tr = e.target.parentElement.parentElement.nextElementSibling;
            button.textContent = button.textContent == "More Info" ? "Less Info" : "More Info";
            tr.style.display = tr.style.display == "contents" ? "none" : "contents";

        } else if (e.target.tagName == "BUTTON" && e.target.textContent == "Buy it") {
            let price = e.target.parentElement.parentElement.querySelectorAll("td")[1].textContent;
            e.target.parentElement.parentElement.remove();

            let totalPrice = document.querySelector(".total-price");
            totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2)


        }
    }
}
