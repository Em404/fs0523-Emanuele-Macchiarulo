class MotherAccount {

  name:string
  surname:string
  balance:number

  constructor(_name:string, _surname:string, _balance:number) {
    this.name = _name
    this.surname = _surname
    this.balance = _balance
  }

  public deposit (amount:number):void {
    this.balance = this.balance + amount
    console.log("Mother Account new balance after deposit", this.balance);
  }

  public withDraw (amount:number):void {
    this.balance = this.balance - amount
    console.log("Mother Account new balance after withdraw", this.balance);
  }  

}

class SonAccount extends MotherAccount {

  public deposit (amount:number):void {
    this.balance = this.balance + amount
    console.log("Son Account new balance after deposit", this.balance);
  }

  public withDraw (amount:number):void {
    this.balance = this.balance - amount
    console.log("Son Account new balance after withdraw", this.balance);
  }

}

let mom:MotherAccount = new MotherAccount("Roberta", "Canale", 20)
mom.deposit(100)
mom.withDraw(30)

let son:SonAccount = new SonAccount("Emanuele", "Macchiarulo", 20)
son.deposit(100)
son.withDraw(30)