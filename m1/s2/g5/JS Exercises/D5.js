/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

pets.forEach(function (pet, index) {
  console.log(pet);
});

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let pet = pets.shift();
console.log(pet);
pets.push(pet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

function generateLicensePlate() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let plate = "";
  for (let i = 0; i < 2; i++) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    plate += randomLetter;
  }
  for (let i = 0; i < 3; i++) {
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    plate += randomNumber;
  }
  for (let i = 0; i < 2; i++) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    plate += randomLetter;
  }
  return plate;
}

console.log(generateLicensePlate());

cars.forEach(function (car, index) {
  car.licensePlate = generateLicensePlate();
});

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const car = {
  brand: "Audi",
  model: "A1",
  color: "black",
  licensePlate: generateLicensePlate(),
  trims: ["sportback", "business", "s-line"],
};

cars.push(car);
console.log(cars);

cars.forEach((car, index) => {
  car.trims.pop();
});

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

cars.forEach((car, index) => {
  justTrims.push(car.trims[0]);
});

// cars.forEach(car => justTrims.push(car.trims[0]))

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

cars.forEach((car) => {
  if (car.color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
});

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;
while (i <= numericArray.indexOf(32)) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const numbersArray = [];

charactersArray.forEach((char) => {
  switch (char) {
    case "a":
      numbersArray.push(1);
      break;
    case "b":
      numbersArray.push(2);
      break;
    case "c":
      numbersArray.push(3);
      break;
    case "d":
      numbersArray.push(4);
      break;
    case "e":
      numbersArray.push(5);
      break;
    case "f":
      numbersArray.push(6);
      break;
    case "g":
      numbersArray.push(7);
      break;
    case "h":
      numbersArray.push(8);
      break;
    case "i":
      numbersArray.push(9);
      break;
    case "j":
      numbersArray.push(10);
      break;
    case "k":
      numbersArray.push(11);
      break;
    case "l":
      numbersArray.push(12);
      break;
    case "m":
      numbersArray.push(13);
      break;
    case "n":
      numbersArray.push(14);
      break;
    case "o":
      numbersArray.push(15);
      break;
    case "p":
      numbersArray.push(16);
      break;
    case "q":
      numbersArray.push(17);
      break;
    case "r":
      numbersArray.push(18);
      break;
    case "s":
      numbersArray.push(19);
      break;
    case "t":
      numbersArray.push(20);
      break;
    case "u":
      numbersArray.push(21);
      break;
    case "v":
      numbersArray.push(22);
      break;
    case "w":
      numbersArray.push(23);
      break;
    case "x":
      numbersArray.push(24);
      break;
    case "y":
      numbersArray.push(25);
      break;
    case "z":
      numbersArray.push(26);
      break;

    default:
      break;
  }
});

console.log(numbersArray);
