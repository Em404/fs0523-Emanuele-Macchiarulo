let cartStorage = localStorage.getItem("cart");
let cartArray = cartStorage ? JSON.parse(cartStorage) : [];

console.log(cartArray);

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => res.json())
  .then((libri) => {
    let target = document.querySelector("#target");

    libri.forEach((libro) => {
      //creo un clone
      let clone = getCardClone();

      //identifico i pezzi con cui interagire
      let img = clone.querySelector("#img");
      let title = clone.querySelector("#title");
      let price = clone.querySelector("#price");
      let addToCart = clone.querySelector("#add");
      let discard = clone.querySelector("#remove");

      //modifico i pezzi appena identificati
      img.src = libro.img;
      title.innerText = libro.title;
      price.innerText = libro.price;

      addToCart.addEventListener("click", () => {
        cartArray.push(libro);
        localStorage.setItem("cart", JSON.stringify(cartArray));
      });

      discard.addEventListener("click", () => {
        clone.remove()
      } )

      //faccio si che questi cloni appaiano
      target.append(clone);
    });
  });

function getCardClone() {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
}

/* fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => res.json())
  .then((res) => {
    // console.log(res)
    let row = document.querySelector("#row");
    res.forEach((book) => {
      // row.append(createCard(book.img, book.title, book.price));

      let clone = getCard()
      let img = document.querySelector("#img");
      let title = document.querySelector("#title");
      let price = document.querySelector("#price");

      console.log(img, title, price);

      img.src = book.img
      title.innerHTML = book.title;
      price.innerHTML = book.price;

      row.append(clone)

    });
  }); 

const getCard = () => {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
};*/

// const createCard = (img, title, price) => {
//   console.log(img, title, price);

//   const divCol = document.createElement("div");
//   divCol.classList.add("col-sm-12", "col-md-4", "col-lg-3");
//   divCol.setAttribute("id", "col");

//   const divCard = document.createElement("div");
//   divCard.classList.add("card", "mb-5");

//   const imgCard = document.createElement("img");
//   imgCard.classList.add("card-img-top");
//   imgCard.setAttribute("src", img);

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

//   const cardTitle = document.createElement("h5");
//   cardTitle.classList.add("card-title");
//   cardTitle.setAttribute("id", "title");
//   cardTitle.innerHTML = title;

//   const cardText = document.createElement("p");
//   cardText.classList.add("card-text");
//   cardText.setAttribute("id", "price");
//   cardText.innerHTML = price;

//   const discardBtn = document.createElement("a");
//   discardBtn.classList.add("btn", "btn-outline-danger");
//   discardBtn.setAttribute("id", "discard");
//   discardBtn.innerHTML = "Scarta";

//   const addBtn = document.createElement("a");
//   addBtn.classList.add("btn", "btn-danger");
//   addBtn.setAttribute("id", "add");
//   addBtn.innerHTML = "Aggiungi al carrello";

//   cardBody.append(cardTitle);
//   cardBody.append(cardText);
//   cardBody.append(discardBtn);
//   cardBody.append(addBtn);

//   divCard.append(imgCard);
//   divCard.append(cardBody);

//   divCol.append(divCard);

//   return divCol;
// };
