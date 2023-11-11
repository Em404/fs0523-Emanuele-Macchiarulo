const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGExMTMyNWM5NzAwMTg3ZjlmNzciLCJpYXQiOjE2OTk2MTMyMDEsImV4cCI6MTcwMDgyMjgwMX0.YvXqXfAJXB9OqrxYaJfH1svJQd7gVdPvo8EIW-u-epw";

// prendo il template
const getTemplate = () => {
  let template = document.getElementsByTagName("template")[0];
  return template.content.cloneNode(true);
};

const backOfficeAreaBtn = document.querySelector("#backOfficeArea")
backOfficeAreaBtn.addEventListener("click", () => {
  location.href = "../g5/back-office.html"
})

// const detailsBtn = document.querySelector("#details")
// detailsBtn.addEventListener("click", () => {
//   location.href = "../g5/product-info.html"
// })

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
    let productDetails = template.querySelector("#details");
    let productImg = template.querySelector("#img");

    productName.innerText = product.name
    productBrand.innerText = product.brand
    productDesc.innerText = product.description
    productPrice.innerText = product.price
    productDetails.href = "product-info.html?id="+product._id
    productImg.src = product.imageUrl

    // console.log(template);

    document.querySelector("#target").append(template)
  });

  return products;
}

getProducts()