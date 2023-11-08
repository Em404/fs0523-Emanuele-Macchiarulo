const row = document.querySelector("#row");
// const col = document.querySelector("#col");
// const img = document.querySelector('#img')
// const title = document.querySelector('#title')
// const price = document.querySelector('#price')
// const discard = document.querySelector('#discard')

discard.addEventListener("click", () => {
  col.remove();
});

const createCard = (img, title, price) => {
  console.log(img, title, price);

  const divCol = document.createElement("div");
  divCol.classList.add("col-sm-12", "col-md-4", "col-lg-3");
  divCol.setAttribute("id", "col");

  const divCard = document.createElement("div");
  divCard.classList.add("card", "mb-5");

  const imgCard = document.createElement("img");
  imgCard.classList.add("card-img-top");
  imgCard.setAttribute("src", img);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.setAttribute("id", "title");
  cardTitle.innerHTML = title;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.setAttribute("id", "price");
  cardText.innerHTML = price;

  const discardBtn = document.createElement("a");
  discardBtn.classList.add("btn", "btn-outline-danger");
  discardBtn.setAttribute("id", "discard");
  discardBtn.innerHTML = "Scarta";

  const addBtn = document.createElement("a");
  addBtn.classList.add("btn", "btn-danger");
  addBtn.setAttribute("id", "add");
  addBtn.innerHTML = "Aggiungi al carrello";

  cardBody.append(cardTitle);
  cardBody.append(cardText);
  cardBody.append(discardBtn);
  cardBody.append(addBtn);

  divCard.append(imgCard);
  divCard.append(cardBody);

  divCol.append(divCard);

  return divCol;
};

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => res.json())
  .then((res) => {
    // console.log(res)
    res.forEach((book) => {
      row.append(createCard(book.img, book.title, book.price));
    });
  });
