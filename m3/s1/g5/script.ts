interface ISmartphone {
  carica: number; //rappresenta il quantitativo di euro disponibile per le chiamate
  numeroChiamate: number; //numero chiamate effettuate
  costoMinuto: number; //il costo delle chiamate

  // extra
  registroChiamate: Chiamata[];

  ricarica(euro: number): void; //permette di incrementare il credito residuo( carica )
  numero404(): string; //mostra il credito residuo (comprensivo di valuta)
  getNumeroChiamate(): number; //restituisce il numero delle chiamate effettuate
  chiamata(min: number): void; //effettua virtualmente una chiamata. Inserendo il numero di minuti pari alla durata della chiamata riduce il credito residuo, ed incrementa il numero di chiamate
  azzeraChiamata(): void; //azzera il contatore di chiamate

  // extra
  mostraRegistroChiamate(): void;
  filtraChiamatePerDataOra(dataOra: Date): Chiamata[];
  chiama(numero: number): void;
}

// extra
interface Chiamata {
  id: number;
  durata: number;
  dataOra: Date;
}

class Smartphone implements ISmartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;

  // extra
  registroChiamate: Chiamata[] = [];
  private idChiamata: number = 1;

  constructor(_carica: number, _numeroChiamate: number, _costoMinuto: number) {
    this.carica = _carica;
    this.numeroChiamate = _numeroChiamate;
    this.costoMinuto = _costoMinuto;
  }

  ricarica(euro: number): void {
    this.carica = this.carica + euro;
  }

  numero404(): string {
    return "Credito residuo: €" + this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  chiamata(min: number): void {
    this.numeroChiamate++;
    let costoChiamata = min * this.costoMinuto;
    this.carica = this.carica - costoChiamata;
  }

  azzeraChiamata(): void {
    this.numeroChiamate = 0;
  }

  // extra
  mostraRegistroChiamate(): void {

  }

  filtraChiamatePerDataOra(dataOra: Date): Chiamata[] {
  
  }

  chiama(numero: number): void {

  }
}

let samsung: Smartphone = new Smartphone(10, 0, 1);
let pixel: Smartphone = new Smartphone(15, 2, 0.2);
let iphone: Smartphone = new Smartphone(20, 3, 1);

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
