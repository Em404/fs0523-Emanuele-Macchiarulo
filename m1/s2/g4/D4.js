/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

// function area(l1, l2) {
//   return l1 * l2;
// }

//arrow function
const area = (l1, l2) => {
  return l1 * l2;
};

let risultato = area(2, 8);
console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

// function crazySum(x, y) {
//   if (x === y) {
//     return (x + y) * 3;
//   } else {
//     return x + y;
//   }
// }

const crazySum = (x, y) => {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
};

let risultatoCrazySum = crazySum(2, 2);
console.log(risultatoCrazySum);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = (x) => {
  let y = 19;
  if (x < y) {
    return x - y;
  } else {
    return (x - y) * 3;
  }
};

console.log(crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = (n) => {
  return (n >= 20 && n <= 100) || n == 400 ? true : false;
  // if (n >= 20 && n <= 100 || n == 400) {
  //     console.log(n);
  //     return true;
  // }else {
  //     return false;
  // }
};

console.log(boundary(20));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = (s) => {
  e = "EPICODE";
  return s === "EPICODE" ? s : e + s;
  // if (s === 'EPICODE') {
  //     return s;
  // }else {
  //     return e + s;
  // }
};
console.log(epify("gg"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = (n) => {
  return n % 3 == 0 || n % 7 == 0 ? true : false;
  // if (n % 3 == 0 || n % 7 == 0) {
  //     console.log('ok');
  // }else {
  //     console.log('not ok');
  // }
};

console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = (s) => {
  let gnirts = [...s].reverse().join("");
  return gnirts;
};

console.log(reverseString("ciao"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = (s) => {
  const words = s.split(/\s+/);

  // Itera attraverso ciascuna parola e rendi maiuscola la prima lettera
  const capitalizedWords = words.map((word) => {
    // Assicurati che la parola non sia vuota
    if (word.length > 0) {
      // Combina la prima lettera maiuscola con il resto della parola in minuscolo
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return "";
    }
  });

  // Unisci le parole in una stringa di nuovo
  const resultString = capitalizedWords.join(" ");

  return resultString;
};

console.log(upperFirst("vedemo se funge"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = (s) => {
    return s.slice(1, -1);
}

console.log(cutString('abcde'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = (n) => {
    const randomNumbers = []
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

console.log(giveMeRandom(5));