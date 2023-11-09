const apiKey = "Im6nzeX0lx0UEESlhgO6YkQN7uTVb7NilPbcEY05U4JsgdZlHsa1ZQHD";
const urlKeyOne = "https://api.pexels.com/v1/search?query=pizza";
const urlKeyTwo = "https://api.pexels.com/v1/search?query=hamburger";

const btnOne = document.querySelector("#buttonOne");
const btnTwo = document.querySelector("#buttonTwo");

const btnHide = document.querySelector("#btnHide");
const btnView = document.querySelector("#btnView");

function getClone() {
  let temp = document.getElementsByTagName("template")[0];
  return temp.content.cloneNode(true);
}

async function queryApiOne() {
  const response = await fetch(urlKeyOne, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Im6nzeX0lx0UEESlhgO6YkQN7uTVb7NilPbcEY05U4JsgdZlHsa1ZQHD",
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
    let textHtml = clone.querySelector('#textMuted')

    imgHtml.src = img.src.medium;
    titleHtml.innerText = img.alt;
    textHtml.innerText = img.id

    target.append(clone);
  });
}

btnOne.addEventListener("click", () => {
  queryApiOne();
});

async function queryApiTwo() {
  const response = await fetch(urlKeyTwo, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Im6nzeX0lx0UEESlhgO6YkQN7uTVb7NilPbcEY05U4JsgdZlHsa1ZQHD",
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

    imgHtml.src = img.src.medium;
    titleHtml.innerText = img.alt;

    target.append(clone);
  });
}

btnTwo.addEventListener("click", () => {
  queryApiTwo();
});
