"use strict";
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const play = (playerOne, playerTwo) => {
    const randomNumber = generateRandomNumber(1, 100);
    const diffPlayerOne = Math.abs(randomNumber - playerOne);
    const diffPlayerTwo = Math.abs(randomNumber - playerTwo);
    if (diffPlayerOne === diffPlayerTwo) {
        return "Pareggio!";
    }
    else if (diffPlayerOne < diffPlayerTwo) {
        return `Vince il giocatore 1! Il numero casuale era ${randomNumber}.`;
    }
    else {
        return `Vince il giocatore 2! Il numero casuale era ${randomNumber}.`;
    }
};
const numberPlayerOne = 13;
const numberPlayerTwo = 23;
const result = play(numberPlayerOne, numberPlayerTwo);
console.log(result);
