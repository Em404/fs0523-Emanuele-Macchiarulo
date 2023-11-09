const apiKey = "Im6nzeX0lx0UEESlhgO6YkQN7uTVb7NilPbcEY05U4JsgdZlHsa1ZQHD";
const urlKey = "https://api.pexels.com/v1/search?query=";

const btnSearch = document.querySelector("#btnSearch");

const btnOne = document.querySelector("#buttonOne");
const btnTwo = document.querySelector("#buttonTwo");

const btnHide = document.querySelector("#btnHide");
const btnView = document.querySelector("#btnView");

const getClone = () => {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
}

async function getImage(query) {
  const response = await fetch(urlKey + query, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: apiKey,
    },
  });
  const data = await response.json();
  console.log(data);
  return data
}

const replaceImages = (imgs) => {

  // const imgs = data.photos;
  console.log(imgs);
  imgs.forEach((img, i) => {
    console.log(img);
    let clone = getClone();

    let imgHtml = clone.querySelector("#imgHtml");
    let titleHtml = clone.querySelector("#titleHtml");
    let textHtml = clone.querySelector("#textMuted");

    imgHtml.src = img.src.medium;
    titleHtml.innerText = img.alt;
    textHtml.innerText = img.id;

    target.append(clone);
  });

}

[btnOne, btnTwo].forEach(button => {
  button.addEventListener('click', getAndReplace)
})

async function getAndReplace() {
  let query = this.getAttribute('data-query')
  console.log(query);
  let immagini = await getImage(query)
  console.log(immagini.photos);
  replaceImages(immagini.photos)
}

// btnOne.addEventListener("click", () => {
//   getImage('pizza');
// });

// btnTwo.addEventListener("click", () => {
//   getImage('hamburger');
// });

btnSearch.addEventListener("click", async () => {
  let imgToSearch = document.getElementById("imgToSearch");
  let immagini = await getImage(imgToSearch.value)
  replaceImages(immagini.photos)
  imgToSearch.value = ''
});
