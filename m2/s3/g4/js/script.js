const apiKey = "Im6nzeX0lx0UEESlhgO6YkQN7uTVb7NilPbcEY05U4JsgdZlHsa1ZQHD";
const urlKey = "https://api.pexels.com/v1/search?query=";

const btnSearch = document.querySelector("#btnSearch");

const btnOne = document.querySelector("#buttonOne");
const btnTwo = document.querySelector("#buttonTwo");

const btnHide = document.querySelector("#btnHide");
const btnView = document.querySelector("#btnView");

function getClone() {
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

  const imgs = data.photos;
  console.log(imgs);
  imgs.forEach((img) => {
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

btnOne.addEventListener("click", () => {
  getImage('pizza');
});

btnTwo.addEventListener("click", () => {
  getImage('hamburger');
});

btnSearch.addEventListener("click", () => {
  let imgToSearch = document.getElementById("imgToSearch");
  getImage(imgToSearch.value)
  imgToSearch.value = ''
});
