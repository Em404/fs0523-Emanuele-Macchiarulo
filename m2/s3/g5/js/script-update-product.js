const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGExMTMyNWM5NzAwMTg3ZjlmNzciLCJpYXQiOjE2OTk2MTMyMDEsImV4cCI6MTcwMDgyMjgwMX0.YvXqXfAJXB9OqrxYaJfH1svJQd7gVdPvo8EIW-u-epw";

let url = new URLSearchParams(location.search);
let selectedID=url.get("id");
console.log(selectedID);
console.log(url);
console.log(apiUrl + selectedID);

async function getProductData() {
  const response = await fetch(apiUrl + selectedID, {
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
const productUpdated = {
  'name': '',
  'description': '',
  'brand': '',
  'imageUrl': '',
  'price': 100
}

const modifyProductBtn = document.querySelector("#modify");

modifyProductBtn.addEventListener("click", (e) => {
  e.preventDefault();

  productUpdated.name = document.querySelector("#pName").value;
  productUpdated.brand = document.querySelector("#pBrand").value;
  productUpdated.description = document.querySelector("#pDesc").value;
  productUpdated.price = parseFloat(document.querySelector("#pPrice").value);
  productUpdated.imageUrl = document.querySelector("#pImg").value;

  console.log(selectedID);
  console.log(productUpdated);
  console.log(apiUrl + selectedID);

  // updateProductData();

  fetch(apiUrl + selectedID, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(productUpdated)
  })
  .then(res => res.json())

  // location.href = "/back-office.html"
});

// async function updateProductData() {
//   const response = await fetch(apiUrl + selectedID,  {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${apiKey}`,
//     },
//     body: JSON.stringify(productUpdated)
//   });
//   const updatedProductResp = await response.json();
//   console.log(updatedProductResp);
// }

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
