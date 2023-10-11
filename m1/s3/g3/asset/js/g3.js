let buttonSaveItem = document.getElementById("save-item");

buttonSaveItem.addEventListener("click", function () {
  let target = document.getElementById("ol-target");
  let targetDone = document.getElementById("ol-targetdone");
  let input = document.getElementById("item");

  let li = document.createElement("li"); //<li></li>
  li.classList.add("list-item"); //<li class="list-item"></li>
  // li.innerText = input.value; //<li class="list-item">testo</li>

  let button = document.createElement("button");
  button.classList.add("delete-item");
  button.setAttribute("id", "delete-item");
  button.innerText = "Elimina";

  let divButton = document.createElement("div");
  let divText = document.createElement("div");

  if (!input.value) return; //se il campo è vuoto uso return per terminare la funzione

  divText.addEventListener("click", function () {
    li.classList.add("done");
    divText.append(input.value);
    divButton.append(button);
    li.append(divText, divButton);
    targetDone.append(li);
  });

  divText.append(input.value);
  divButton.append(button);
  li.append(divText, divButton);

  target.append(li); //inserisco l'elemento generato nel documento

  input.value = ""; //svuoto l'input
});

// let buttonDeleteItem = document.getElementById("#delete-item");
// console.log(buttonDeleteItem);
// buttonDeleteItem.addEventListener("click", function () {
//   console.log("clickato");
// });
