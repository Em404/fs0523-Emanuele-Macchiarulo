let buttonSaveItem = document.getElementById("save-item");

buttonSaveItem.addEventListener("click", function () {
  let targetListToDo = document.getElementById("ol-target");
  let targetListDone = document.getElementById("ol-targetdone");
  let input = document.getElementById("item");

  let li = document.createElement("li"); //<li></li>
  li.classList.add("list-item"); //<li class="list-item"></li>
  // li.innerText = input.value; //<li class="list-item">testo</li>

  let buttonDelete = document.createElement("button");
  buttonDelete.classList.add("delete-item");
  buttonDelete.setAttribute("id", "delete-item");
  buttonDelete.innerText = "Elimina";

  let divText = document.createElement("div");
  let divButton = document.createElement("div");
  divButton.classList.add("delete-button")

  if (!input.value) return; //se il campo è vuoto uso return per terminare la funzione

  buttonDelete.addEventListener("click", function () {
    console.log("clickato");
    li.remove();
  });
  
  divText.addEventListener("click", function () {
    li.classList.add("done");
    divText.append(input.value);
    divButton.append(buttonDelete);
    li.append(divText, divButton);
    targetListDone.append(li);
  });

  divText.append(input.value);
  divButton.append(buttonDelete);
  li.append(divText, divButton);

  targetListToDo.append(li); //inserisco l'elemento generato nel documento
  
  input.value = ""; //svuoto l'input

});