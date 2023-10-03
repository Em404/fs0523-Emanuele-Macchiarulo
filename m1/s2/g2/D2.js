/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function greater() {
  let numOne = 5;
  let numTwo = 10;

  if(numOne > numTwo){
    console.log('Il numero più grande è '+numOne);
  }else{
    console.log('Il numero più grande è '+numTwo);
  }

}

greater();


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function notFive() {
  let num = 10
  if(num != 5){
    console.log('not equal');
  }
  else {
    console.log('equal to 5');
  }
}

notFive();


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function esercizioTre() {
  let num = 10
  if(num % 5 == 0){
    console.log('Il numero è divisibile per 5');
  }else {
    console.log('Il numero non è divisibile per 5');
  }
  // console.log(num % 5);
}

esercizioTre();

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function esercizioQuattro() {
  let x = 2;
  let y = 10;
  if (x == 8 || y == 8) {
    console.log('il valore di uno dei numeri è 8');
  }else if (x + y == 8 || x - y == 8 || y - x == 8 ) {
    console.log('Il risultato è 8');
  }
  else {
    console.log('Nessun requisito soddisfatto');
  }
}

esercizioQuattro();

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function esercizioCinque() {
  let totalShoppingCart = 50;
  if (totalShoppingCart > 50) {
    console.log('Spedizione gratuita! Il totale è ' +  totalShoppingCart);
  }else {
    totalShoppingCart += 10;
    console.log('Costo di spedizione aggiunta. Il totale è ' + totalShoppingCart);
  }
}

esercizioCinque();

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function esercizioSei() {
  let totalShoppingCart = 50;
  let blackFriday = 0.2;
  let discount = totalShoppingCart * blackFriday;
  totalShoppingCart = totalShoppingCart - discount
  if (totalShoppingCart > 50) {
    console.log('Spedizione gratuita! Il totale è ' +  totalShoppingCart);
  }else {
    totalShoppingCart += 10;
    console.log('Costo di spedizione aggiunta. Il totale è ' + totalShoppingCart);
  }
}

esercizioSei();

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

function esercizioSette() {
  let x = 2
  let y = 4
  let z = 6

}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function esercizioOtto() {
  let x = 2
  console.log(typeof x);
}

esercizioOtto();

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function esercizioNove() {
  let x = 2
  if(x % 2 == 0){
    console.log('Il numero è pari');
  } else {
    console.log('Il numero è dispari');
  }
}

esercizioNove();

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

function esercizioDieci() {
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
}

esercizioDieci();

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

function esercizioUndici() {
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  me.city = 'Toronto'
  console.log(me);

}

esercizioUndici();

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

function esercizioDodici() {
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  delete me.lastName
  console.log(me);

}

esercizioDodici();

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

function esercizioTredici() {
  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  me.skills.pop();
  console.log(me);

}

esercizioTredici();

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

function esercizioQuattordici () {
  let x = 0
  let max = 10
  const num = []
  for (let i = 0; i < max; i++){
    x++
    num.push(x);
  }
  console.log(num);
}

esercizioQuattordici();

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

function esercizioQuindici () {
  let x = 0
  let max = 10
  const num = []
  for (let i = 0; i < max; i++){
    x++
    num.push(x);
  }
  num.splice(9, 1, 100)
  console.log(num);
}

esercizioQuindici();
