window.addEventListener('load', solve);

function solve() {
    let genreInput = document.querySelector("input[id=genre]");
    let nameInput = document.querySelector("input[id=name]")
    let authorInput = document.querySelector("input[id=author]")
    let dateInput = document.querySelector("input[id=date]");
    let button = document.querySelector("button[id=add-btn]");
    button.addEventListener("click", append);

    function append(e) {
        e.preventDefault();
        if (genreInput.value == "" || nameInput.value == "" || authorInput.value == "" || dateInput.value == "") {
            return;
        }

        let divContainer = document.querySelector(".all-hits-container");

        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "hits-info")
        divInfo.innerHTML = `<img src="./static/img/img.png">
            <h2>Genre: ${genreInput.value}</h2>
            <h2>Name: ${nameInput.value}</h2>
            <h2>Author: ${authorInput.value}</h2>
            <h3>Date: ${dateInput.value}</h3>`

        let likeButton = document.createElement("button");
        likeButton.setAttribute("class", "like-btn");
        likeButton.textContent = "Like song";
        likeButton.addEventListener("click", likeSong.bind(null, likeButton))

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "save-btn");
        saveButton.textContent = "Save song";
        saveButton.addEventListener("click", saveSong)



        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("class", "delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteSong)

        divInfo.appendChild(saveButton);
        divInfo.appendChild(likeButton);
        divInfo.appendChild(deleteButton);
        divContainer.appendChild(divInfo);

        nameInput.value = "";
        genreInput.value = "";
        authorInput.value = "";
        dateInput.value = "";
    }

    function likeSong(likeButton) {
        let totalLikesP = document.querySelector("#total-likes .likes p");
        let totalLikes = Number(totalLikesP.textContent.split(": ")[1]);
        totalLikes++;
        totalLikesP.textContent = `Total Likes: ${totalLikes}`;
        likeButton.disabled = true;

    }

    function saveSong(e) {
        let savedDiv = document.querySelector(".saved-container");
        let currentDiv = e.target.parentElement;

        e.target.nextElementSibling.remove();
        e.target.remove();
        savedDiv.appendChild(currentDiv);

    }

    function deleteSong(e) {
        e.target.parentElement.remove()
    }

}