let epiTabellone = document.querySelector('#epi-tombola'); //tabellone
let numbers = epiTabellone.querySelector('.numeri'); //numeri
let button = epiTabellone.querySelector('.button')

for (let i = 1; i <= 76; i++) {
  let numero = document.createElement('div');
  numero.classList.add('numero');
  numero.setAttribute('id', i)
  numero.innerText = i;
  numbers.append(numero)
}

button.addEventListener('click', function() {
  let numeroSorted = generaNumero();
  console.log(numeroSorted);
  let numero = document.getElementById(numeroSorted)
  numero.classList.add('sorted')
})

const generaNumero = () => {
  const numeriEstratti = new Set(); //Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection.

  const numeroEstratto = Math.floor(Math.random() * 76) + 1;

  if (!numeriEstratti.has(numeroEstratto)) {
    numeriEstratti.add(numeroEstratto)
  }

  return numeroEstratto;
};
