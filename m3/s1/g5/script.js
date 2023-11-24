"use strict";
class Smartphone {
    constructor(_carica, _numeroChiamate, _costoMinuto) {
        // extra
        this.registroChiamate = [];
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.costoMinuto = _costoMinuto;
    }
    ricarica(euro) {
        this.carica = this.carica + euro;
    }
    numero404() {
        return "Credito residuo: €" + this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        this.numeroChiamate++;
        let costoChiamata = min * this.costoMinuto;
        this.carica = this.carica - costoChiamata;
        const nuovaChiamata = {
            id: this.numeroChiamate,
            durata: min,
            dataOra: new Date(),
        };
        this.registroChiamate.push(nuovaChiamata);
    }
    azzeraChiamata() {
        this.numeroChiamate = 0;
    }
    // extra
    mostraRegistroChiamate() {
        console.log("Registro chiamate:");
        this.registroChiamate.forEach((chiamata) => {
            console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} secondi, Data/Ora: ${chiamata.dataOra}`);
        });
    }
    filtraChiamatePerDataOra(dataOra) {
        const chiamateFiltrate = this.registroChiamate.filter((chiamata) => chiamata.dataOra.getTime() === dataOra.getTime());
        return chiamateFiltrate;
    }
}
let samsung = new Smartphone(10, 0, 1);
let pixel = new Smartphone(15, 2, 0.2);
let iphone = new Smartphone(20, 3, 1);
samsung.ricarica(10);
console.log(samsung);
samsung.chiamata(1);
console.log(samsung);
samsung.chiamata(1);
console.log(samsung);
samsung.chiamata(1);
console.log(samsung);
samsung.chiamata(1);
console.log(samsung);
console.log(samsung.numero404());
console.log(samsung.getNumeroChiamate());
samsung.mostraRegistroChiamate();
const dataOraFiltro = new Date();
const chiamateFiltrate = samsung.filtraChiamatePerDataOra(dataOraFiltro);
console.log("Chiamate filtrate per data/ora:", chiamateFiltrate);
samsung.azzeraChiamata();
console.log(samsung);
// pixel.ricarica(10);
// console.log(pixel);
// pixel.chiamata(1);
// console.log(pixel);
// pixel.chiamata(1);
// console.log(pixel);
// pixel.chiamata(1);
// console.log(pixel);
// pixel.chiamata(1);
// console.log(pixel);
// console.log(pixel.numero404());
// console.log(pixel.getNumeroChiamate());
// pixel.azzeraChiamata();
// console.log(pixel);
// iphone.ricarica(10);
// console.log(iphone);
// iphone.chiamata(1);
// console.log(iphone);
// iphone.chiamata(1);
// console.log(iphone);
// iphone.chiamata(1);
// console.log(iphone);
// iphone.chiamata(1);
// console.log(iphone);
// console.log(iphone.numero404());
// console.log(iphone.getNumeroChiamate());
// iphone.azzeraChiamata();
// console.log(iphone);
