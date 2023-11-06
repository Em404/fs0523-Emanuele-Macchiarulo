// esercizio 1
class User {
  //metodo per rendere diamica la creazione dell'oggetto
  constructor(fn, ln, a, l) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    this.location = l;
  }

  compareAge(user) {
    if (this.age > user.age) {
      console.log('Older is ', this.lastName);
    } else {
      console.log('Older is ', user.lastName);
    }
  }
}

let p1 = new User("zi", "macchia", 25, "latina");
let p2 = new User("lo", "zorc", 24, "latina");
const whoIsOlder = p1.compareAge(p2);

// esercizio 2
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(petArray) {
    const petsWithSameOwner = petArray.filter((pet) => pet.ownerName == this.ownerName)
    console.log('pet with same owner ', petsWithSameOwner);
    console.log(petsWithSameOwner.length);
    if(petsWithSameOwner.length >= 2) {
      return true
    }else{
      return false
    }
  }

}

const petArray = []

function createPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  addPetToList(newPet);

  petArray.push(newPet)
  console.log(petArray);

  newPet.hasSameOwner(petArray)

  clearForm();
}

function addPetToList(pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = `Pet Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petList.appendChild(listItem);
}

function clearForm() {
  document.getElementById("petName").value = "";
  document.getElementById("ownerName").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";
}

