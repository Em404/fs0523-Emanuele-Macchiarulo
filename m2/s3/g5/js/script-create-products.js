const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGExMTMyNWM5NzAwMTg3ZjlmNzciLCJpYXQiOjE2OTk2MTMyMDEsImV4cCI6MTcwMDgyMjgwMX0.YvXqXfAJXB9OqrxYaJfH1svJQd7gVdPvo8EIW-u-epw";

// salva nuovo prodotto
const saveNewProductBtn = document.querySelector("#add");

const newProduct = {
  'name': '',
  'description': '',
  'brand': '',
  'imageUrl': '',
  'price': 100
}

saveNewProductBtn.addEventListener("click", (e) => {
  e.preventDefault();

  newProduct.name = document.querySelector("#newName").value;
  newProduct.brand = document.querySelector("#newBrand").value;
  newProduct.description = document.querySelector("#newDesc").value;
  newProduct.price = document.querySelector("#newPrice").value;
  newProduct.imageUrl = document.querySelector("#newImg").value;

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(newProduct),
  }).then((res) => res.json())
  .then(products => {
    console.log(products);
  })

  emptyFieldAddProduct();

});

// resetta form nuovo prodotto
const resetBtn = document.querySelector("#newReset");
resetBtn.addEventListener("click", () => {
  emptyFieldAddProduct();
});

const emptyFieldAddProduct = () => {
  const newProductName = document.querySelector("#newName");
  newProductName.value = "";

  const newProductBrand = document.querySelector("#newBrand");
  newProductBrand.value = "";

  const newProductDesc = document.querySelector("#newDesc");
  newProductDesc.value = "";

  const newProductPrice = document.querySelector("#newPrice");
  newProductPrice.value = "";

  const newProductImg = document.querySelector("#newImg");
  newProductImg.value = "";
}