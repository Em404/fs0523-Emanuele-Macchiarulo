"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Cloth {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    //Alternativa 1
    // constructor(
    //   public _id:number,
    //   public _codprod:number,
    //   public _collezione:string,
    //   public _capo:string,
    //   public _modello:number,
    //   public _quantita:number,
    //   public _colore:string,
    //   public _prezzoivaesclusa:number,
    //   public _prezzoivainclusa:number,
    //   public _disponibile:string,
    //   public _saldo:number
    // ) {}
    //Alternativa 2
    // constructor(
    //   _id!:number,
    //   _codprod!:number,
    //   _collezione!:string,
    //   _capo:string,
    //   _modello!:number,
    //   _quantita!:number,
    //   _colore!:string,
    //   _prezzoivaesclusa!:number,
    //   _prezzoivainclusa!:number,
    //   _disponibile!:string,
    //   _saldo!:numbe
    // )
    getSaldoCapo() {
        return this.prezzoivainclusa * (this.saldo / 100);
    }
    getAcquistoCapo() {
        const sconto = this.getSaldoCapo();
        const totale = this.prezzoivainclusa - sconto;
        return totale;
    }
}
function call() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch("Abbigliamento.json");
        let clothings = yield res.json();
        console.log(clothings);
        for (let cloth of clothings) {
            console.log(cloth.codprod);
        }
        return clothings;
    });
}
call();
