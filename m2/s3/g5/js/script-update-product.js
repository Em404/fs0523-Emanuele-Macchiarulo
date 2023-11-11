const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGExMTMyNWM5NzAwMTg3ZjlmNzciLCJpYXQiOjE2OTk2MTMyMDEsImV4cCI6MTcwMDgyMjgwMX0.YvXqXfAJXB9OqrxYaJfH1svJQd7gVdPvo8EIW-u-epw";


let url = new URLSearchParams(location.search);
let selectedID=url.get("id");
console.log(selectedID);
console.log(url);

async function getProductData() {
  const response = await fetch(`${apiUrl}${selectedID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const productResp = await response.json();
  console.log(productResp);
  fillData(productResp)

  return productResp;
}

getProductData();

const fillData = (productResp) => {
  let name = productResp.name;
  let brand = productResp.brand;
  let description = productResp.description;
  let price = productResp.price;
  let imageUrl = productResp.imageUrl;

  const productName = document.querySelector("#pName");
  productName.value = name;

  const productBrand = document.querySelector("#pBrand");
  productBrand.value = brand;

  const productDesc = document.querySelector("#pDesc");
  productDesc.value = description;

  const productPrice = document.querySelector("#pPrice");
  productPrice.value = price;

  const productImg = document.querySelector("#pImg");
  productImg.value = imageUrl;
};

// modifico uno prodotto
const modifyProductBtn = document.querySelector("#modify");

const product = {
  'name': '',
  'description': '',
  'brand': '',
  'imageUrl': '',
  'price': 100
}

async function updateProductData() {
  const response = await fetch(`${apiUrl}${selectedID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const productResp = await response.json();
  console.log(productResp);
  return productResp;
}


modifyProductBtn.addEventListener("click", (e) => {
  e.preventDefault();

  product.name = document.querySelector("#pName").value;
  product.brand = document.querySelector("#pBrand").value;
  product.description = document.querySelector("#pDesc").value;
  product.price = parseFloat(document.querySelector("#pPrice").value);
  product.imageUrl = document.querySelector("#pImg").value;

  console.log(selectedID);
  console.log(product);

  updateProductData();

  // fetch(`${apiUrl}${selectedID}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${apiKey}`,
  //   },
  //   body: JSON.stringify(product),
  // })
  //   .then((res) => {
  //     console.log(res);
  //     res.json()})
  //   .then((products) => {
  //     console.log(products);
  //     location.href = "../g5/back-office.html";
  //   });
});

// resetta form modifica prodotto
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  emptyField();
});

const emptyField = () => {
  const productName = document.querySelector("#pName");
  productName.value = "";

  const productBrand = document.querySelector("#pBrand");
  productBrand.value = "";

  const productDesc = document.querySelector("#pDesc");
  productDesc.value = "";

  const productPrice = document.querySelector("#pPrice");
  productPrice.value = "";

  const productImg = document.querySelector("#pImg");
  productImg.value = "";
};
