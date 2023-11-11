const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGExMTMyNWM5NzAwMTg3ZjlmNzciLCJpYXQiOjE2OTk2MTMyMDEsImV4cCI6MTcwMDgyMjgwMX0.YvXqXfAJXB9OqrxYaJfH1svJQd7gVdPvo8EIW-u-epw";

// prendo il template
const getTemplate = () => {
  let template = document.getElementsByTagName("template")[0];
  return template.content.cloneNode(true);
};

// prendo i prodotti back office
async function getProductsBackOffice() {
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
    let card = document.createElement("div")
    card.classList.add("col-12", "col-md-4", "col-lg-3")
    console.log(product._id);

    let template = getTemplate();

    let productName = template.querySelector("#boProductName");
    let productBrand = template.querySelector("#boBrand");
    let productDesc = template.querySelector("#boProductDesc");
    let productPrice = template.querySelector("#boPrice");
    let productMod = template.querySelector("#modify");
    let productImg = template.querySelector("#boImg");
    let deleteBtn = template.querySelector("#delete")

    productName.innerText = product.name
    productBrand.innerText = product.brand
    productDesc.innerText = product.description
    productPrice.innerText = product.price
    productMod.href = "update-product.html?id="+product._id
    productImg.src = product.imageUrl

    // console.log(template);

    deleteBtn.addEventListener('click',function(){
      fetch(apiUrl + product._id,{
          method:'DELETE',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
      }).then(res => {
          if(res.status === 200){
              card.remove();
              console.log(`Il prodotto ${product.name} è stato eliminato`);
          }
      })
    })

    card.append(template)
    document.querySelector("#target").append(card)
  });

  return products;
}

getProductsBackOffice()

