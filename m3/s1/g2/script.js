"use strict";
class MotherAccount {
    constructor(_name, _surname, _balance) {
        this.name = _name;
        this.surname = _surname;
        this.balance = _balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Mother Account new balance after deposit", this.balance);
    }
    withDraw(amount) {
        this.balance = this.balance - amount;
        console.log("Mother Account new balance after withdraw", this.balance);
    }
}
class SonAccount extends MotherAccount {
    deposit(amount) {
        this.balance = this.balance + amount;
        console.log("Son Account new balance after deposit", this.balance);
    }
    withDraw(amount) {
        this.balance = this.balance - amount;
        console.log("Son Account new balance after withdraw", this.balance);
    }
}
let mom = new MotherAccount("Roberta", "Canale", 20);
mom.deposit(100);
mom.withDraw(30);
let son = new SonAccount("Emanuele", "Macchiarulo", 20);
son.deposit(100);
son.withDraw(30);
