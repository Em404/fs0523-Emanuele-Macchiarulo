"use strict";
class Smartphone {
    constructor(_carica, _numeroChiamate, _costoMinuto) {
        // extra
        this.registroChiamate = [];
        this.idChiamata = 1;
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
    }
    azzeraChiamata() {
        this.numeroChiamate = 0;
    }
    // extra
    mostraRegistroChiamate() {
    }
    filtraChiamatePerDataOra(dataOra) {
    }
    chiama(numero) {
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
