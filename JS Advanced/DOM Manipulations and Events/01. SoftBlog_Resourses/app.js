function solve() {
   let button = document.querySelector("form button ");
   button.addEventListener("click", create);

   function create(e) {
      e.preventDefault()
      let authorInput = document.querySelector("#creator");
      let titleInput = document.querySelector("#title");
      let categoryInput = document.querySelector("#category")
      let contentInput = document.querySelector("#content");
      let section = document.querySelector("main section")

      let article = document.createElement("article");

      let h1 = document.createElement("h1");
      h1.textContent = titleInput.value;

      let categoryP = document.createElement("p");
      categoryP.textContent = "Category:"

      let categoryStrong = document.createElement("strong");
      categoryStrong.textContent = categoryInput.value;

      let creatorP = document.createElement("p");
      creatorP.textContent = "Creator:";

      let creatorStrong = document.createElement("strong");
      creatorStrong.textContent = authorInput.value;

      let contentP = document.createElement("p");
      contentP.textContent = contentInput.textContent;

      let div = document.createElement("div");
      div.classList.add("buttons");

      let deleteButton = document.createElement("button");
      deleteButton.classList.add("btn")
      deleteButton.classList.add("delete");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", remove)

      let archiveButton = document.createElement("button");
      archiveButton.classList.add("btn");
      archiveButton.classList.add("archive");
      archiveButton.textContent = "Archive";
      archiveButton.addEventListener("click", archive)

      article.appendChild(h1);
      categoryP.appendChild(categoryStrong);
      article.appendChild(categoryP);
      creatorP.appendChild(creatorStrong);
      article.appendChild(creatorP);
      article.appendChild(contentP);
      div.appendChild(deleteButton);
      div.appendChild(archiveButton);
      article.appendChild(div);
      section.appendChild(article)



   }

   function remove(e) {
      e.target.parentNode.parentNode.remove()
   }

   function archive(e) {
      let article = e.target.parentNode.parentNode;
      let articleTitle = article.querySelector("h1")
      let archiveOl = document.querySelector(".archive-section ol");
      let olList = Array.from(archiveOl.querySelectorAll("li"));
      let newLi = document.createElement("li");
      newLi.textContent = articleTitle.textContent;
      article.remove()

      olList.push(newLi);
      olList.sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => {
            archiveOl.appendChild(li)
         })


   }
}
