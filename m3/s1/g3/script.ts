abstract class LavoratoreAutonomoAbs {
  protected redditoAnnuoLordo: number;

  constructor(redditoAnnuoLordo: number) {
    this.redditoAnnuoLordo = redditoAnnuoLordo;
  }

  abstract calcolaTasse(): number;

  calcolaRedditoAnnuoNetto(): number {
    const tasse = this.calcolaTasse();
    const redditoNetto = this.redditoAnnuoLordo - tasse;
    return redditoNetto;
  }
}

class LavoratoreAutonomo extends LavoratoreAutonomoAbs {
  private codiceReddito: string;

  constructor(redditoAnnuoLordo: number, codiceReddito: string) {
    super(redditoAnnuoLordo);
    this.codiceReddito = codiceReddito;
  }

  calcolaTasse(): number {
    let percentualeTasse = 0.2; //20%
    if (this.codiceReddito === "A") {
      percentualeTasse = 0.15; // Codice reddito A, tassa al 15%
    }

    return this.redditoAnnuoLordo * percentualeTasse;
  }
}

const lavoratore = new LavoratoreAutonomo(50000, "B");
const redditoNettoLavoratore = lavoratore.calcolaRedditoAnnuoNetto();
console.log(`Reddito netto del lavoratore: ${redditoNettoLavoratore}`);
