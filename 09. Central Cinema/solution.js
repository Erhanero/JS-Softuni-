function solve() {
    document.querySelector("#container button").addEventListener("click", addMovie);
    let moviesList = document.querySelector("#movies ul");
    document.querySelector("#archive button ").addEventListener("click", clear)


    function addMovie(e) {
        e.preventDefault()
        let inputs = document.querySelectorAll("input");
        let name = inputs[0];
        let hall = inputs[1];
        let price = inputs[2];
        if (name.value && hall.value && price.value && isNaN(price.value) == false) {
            let li = document.createElement("li");

            let span = document.createElement("span");
            span.textContent = name.value;

            let strong = document.createElement("strong");
            strong.textContent = hall.value;

            let div = document.createElement("div");

            let priceStrong = document.createElement("strong");
            priceStrong.textContent = Number(price.value).toFixed(2);


            let input = document.createElement("input");
            input.setAttribute('placeholder', 'Tickets Sold')

            let button = document.createElement("button");
            button.textContent = "archive";
            button.addEventListener("click", archive);

            div.appendChild(priceStrong);
            div.appendChild(input);
            div.appendChild(button);

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(div);

            moviesList.appendChild(li)

            name.value = "";
            hall.value = "";
            price.value = "";

        }
    }

    function archive(e) {
        let ticketsInput = e.target.parentElement.querySelector("input");
        let archive = document.querySelector("#archive ul");

        console.log(isNaN(ticketsInput.value));
        if (!isNaN(ticketsInput.value)) {


            let currentMovie = e.target.parentElement.parentElement;

            let li = document.createElement("li");

            let span = currentMovie.querySelector("span");

            let price = currentMovie.querySelector("div strong");
            let strong = document.createElement("strong");
            strong.textContent = `Total amount: ${(ticketsInput.value * price.textContent).toFixed(2)}`;

            let button = document.createElement("button");
            button.textContent = "Delete";
            button.addEventListener("click", remove);

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(button);

            archive.appendChild(li)
        }

    }
    function remove(e) {
        e.target.parentElement.remove()
    }

    function clear() {
        let allLi = document.querySelectorAll("#archive ul li");
        for (let li of allLi) [
            li.remove()
        ]
    }

}