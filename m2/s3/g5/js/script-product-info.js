const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGExMTMyNWM5NzAwMTg3ZjlmNzciLCJpYXQiOjE2OTk2MTMyMDEsImV4cCI6MTcwMDgyMjgwMX0.YvXqXfAJXB9OqrxYaJfH1svJQd7gVdPvo8EIW-u-epw";


let url = new URLSearchParams(location.search);
let selectedID=url.get("id");
console.log(selectedID);
console.log(url);

// prendo il template
const getTemplate = () => {
  let template = document.getElementsByTagName("template")[0];
  return template.content.cloneNode(true);
};


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

const fillData = (productResp) => {
  console.log(productResp);
  let name = productResp.name;
  let brand = productResp.brand;
  let description = productResp.description;
  let price = productResp.price;
  let imageUrl = productResp.imageUrl;

  console.log(name);

  let card = document.createElement("div")
  card.classList.add("col-12", "col-md-4", "col-lg-3")
  let template = getTemplate();

  let productName = template.querySelector("#productName");
  productName.innerText = name;

  let productBrand = template.querySelector("#brand");
  productBrand.innerText = brand;

  let productDesc = template.querySelector("#productDesc");
  productDesc.innerText = description;

  let productPrice = template.querySelector("#price");
  productPrice.innerText = price;

  let productImg = template.querySelector("#img");
  productImg.src = imageUrl;

  card.append(template)
  document.querySelector("#target").append(card)
};

getProductData();