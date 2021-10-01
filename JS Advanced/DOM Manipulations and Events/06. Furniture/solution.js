function solve() {
  let [inputTextArea, outputTextArea] = Array.from(document.querySelectorAll("#exercise textarea"));
  let [generateButton, buyButton] = Array.from(document.querySelectorAll("#exercise button"));

  generateButton.addEventListener("click", generate);
  buyButton.addEventListener("click", buy);

  function generate(e) {
    let data = JSON.parse(inputTextArea.value);
    let table = document.querySelector(".table tbody");

    for (let el of data) {
      let newRow = document.createElement("tr");

      let nameTd = document.createElement("td")
      let priceTd = document.createElement("td")
      let factorTd = document.createElement("td")
      let imgTd = document.createElement("td")
      let inputTd = document.createElement("td")

      let newImg = document.createElement("img");
      newImg.setAttribute("src", el.img);
      imgTd.appendChild(newImg);

      let nameP = document.createElement("p");
      nameP.textContent = el.name;
      nameTd.appendChild(nameP);

      let inputP = document.createElement("input");
      inputP.setAttribute("type", "checkbox");
      inputTd.appendChild(inputP);

      let priceP = document.createElement("p");
      priceP.textContent = el.price;
      priceTd.appendChild(priceP);

      let factorP = document.createElement("p");
      factorP.textContent = el.decFactor;
      factorTd.appendChild(factorP)

      newRow.appendChild(imgTd)
      newRow.appendChild(nameTd)
      newRow.appendChild(priceTd)
      newRow.appendChild(factorTd)
      newRow.appendChild(inputTd)

      table.appendChild(newRow)

    }
  }

  function buy(e) {

    let table = document.querySelector(".table tbody");
    let inputCheckList = table.querySelectorAll("tr td:last-child input");
    let name = [];
    let price = [];
    let factor = [];

    for (let check of inputCheckList) {
      if (check.checked) {

        let checkRowElements = Array.from(check.parentElement.parentElement.querySelectorAll("td p"));
        name.push(checkRowElements[0].textContent);
        price.push(Number(checkRowElements[1].textContent));
        factor.push(Number(checkRowElements[2].textContent));
      }
    }
    let totalPrice = price.reduce((a, x) => a + x);
    let averageFactor = factor.reduce((a, x) => a + x) / factor.length;

    outputTextArea.textContent = `Bought furniture: ${name.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageFactor}`;

  }

}