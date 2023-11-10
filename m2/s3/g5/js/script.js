const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGExMTMyNWM5NzAwMTg3ZjlmNzciLCJpYXQiOjE2OTk2MTMyMDEsImV4cCI6MTcwMDgyMjgwMX0.YvXqXfAJXB9OqrxYaJfH1svJQd7gVdPvo8EIW-u-epw";

// prendo il template
const getTemplate = () => {
  let template = document.getElementsByTagName("template")[0];
  return template.content.cloneNode(true);
};

// prendo i prodotti
async function getProducts() {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const products = await response.json();
  console.log(products);

  products.forEach((product) => {
    let template = getTemplate();

    let productName = template.querySelector("#productName");
    let productBrand = template.querySelector("#brand");
    let productDesc = template.querySelector("#productDesc");
    let productPrice = template.querySelector("#price");
    // let productDetails = template.querySelector("#details");
    let productImg = template.querySelector("#img");

    productName.innerText = product.name
    productBrand.innerText = product.brand
    productDesc.innerText = product.description
    productPrice.innerText = product.price
    // productDetails.href = "update-product.html?="+products.id
    productImg.innerText = product.imageUrl

    console.log(template);

    document.querySelector("#target").append(template)
  });

  return products;
}

getProducts()

// salva nuovo prodotto
const saveNewProductBtn = document.querySelector("#add");

const newProduct = {
  'name': 'suit',
  'description': 'Good Choise',
  'brand': 'Rip Curl',
  'imageUrl': 'https://www.thenauticstore.com/5585-large_default/3mm-chest-zip-mute-da-surf-modello-2022-black.jpg',
  'price': 100
}

saveNewProductBtn.addEventListener("click", (e) => {
  e.preventDefault();

  newProduct.name = document.querySelector("#newName").value;
  newProduct.brand = document.querySelector("#newBrand").value;
  newProduct.description = document.querySelector("#newDesc").value;
  newProduct.price = Number(document.querySelector("#newPrice").value);
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

const emptyFieldAddProduct = () => {
  const newProductName = document.querySelector("#newName");
  newProductName.value = "";

  const newProductBrand = document.querySelector("#newBrand");
  newProductBrand.value = "";

  const newProductDesc = document.querySelector("#newDesc");
  newProductDesc.value = "";

  const newProductPrice = Number(document.querySelector("#newPrice"));
  newProductPrice.valueOf = "";

  const newProductImg = document.querySelector("#newImg");
  newProductImg.value = "";
}

// resetta form nuovo prodotto
const resetBtn = document.querySelector("#newReset");
resetBtn.addEventListener("click", () => {
  emptyFieldAddProduct();
});
