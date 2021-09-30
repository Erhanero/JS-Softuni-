function create(words) {
   let divOutput = document.getElementById("content")
   for (let word of words) {
      let newDiv = document.createElement("div");
      let newP = document.createElement("p");
      newP.textContent = word;
      newP.style.display = "none";
      newDiv.appendChild(newP);
      divOutput.addEventListener("click", solve);

      divOutput.appendChild(newDiv)



   }
   function solve(e) {
      e.target.querySelector("p").style.display = ""
      console.log(e.target.children[0]);
   }

}