const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
}

const play = (playerOne: number, playerTwo: number): string => {
  const randomNumber = generateRandomNumber(1, 100)

  const diffPlayerOne = Math.abs(randomNumber - playerOne);
  const diffPlayerTwo = Math.abs(randomNumber - playerTwo);

  if (diffPlayerOne === diffPlayerTwo) {
      return "È un pareggio!";
  } else if (diffPlayerOne < diffPlayerTwo) {
      return `Il giocatore 1 ha vinto! Il numero casuale era ${randomNumber}.`;
  } else {
      return `Il giocatore 2 ha vinto! Il numero casuale era ${randomNumber}.`;
  }

}

const numberPlayerOne = 13;
const numberPlayerTwo = 23; 

const result = play(numberPlayerOne, numberPlayerTwo);
console.log(result);
