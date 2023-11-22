"use strict";
class LavoratoreAutonomoAbs {
    constructor(redditoAnnuoLordo) {
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
    calcolaRedditoAnnuoNetto() {
        const tasse = this.calcolaTasse();
        const redditoNetto = this.redditoAnnuoLordo - tasse;
        return redditoNetto;
    }
}
class LavoratoreAutonomo extends LavoratoreAutonomoAbs {
    constructor(redditoAnnuoLordo, codiceReddito) {
        super(redditoAnnuoLordo);
        this.codiceReddito = codiceReddito;
    }
    calcolaTasse() {
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
