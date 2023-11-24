interface ISmartphone {
  carica: number; //rappresenta il quantitativo di euro disponibile per le chiamate
  numeroChiamate: number; //numero chiamate effettuate
  costoMinuto: number; //il costo delle chiamate

  // extra
  registroChiamate: Chiamata[]; //proprietà registroChiamate che contenga un array di oggetti

  ricarica(euro: number): void; //permette di incrementare il credito residuo( carica )
  numero404(): string; //mostra il credito residuo (comprensivo di valuta)
  getNumeroChiamate(): number; //restituisce il numero delle chiamate effettuate
  chiamata(min: number): void; //effettua virtualmente una chiamata. Inserendo il numero di minuti pari alla durata della chiamata riduce il credito residuo, ed incrementa il numero di chiamate
  azzeraChiamata(): void; //azzera il contatore di chiamate

  // extra
  mostraRegistroChiamate(): void; //mostra tutte le chiamate effettuate
  filtraChiamatePerDataOra(dataOra: Date): Chiamata[]; //mostra solo le chiamate effettuate in una determinata data ed ora
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

    const nuovaChiamata: Chiamata = {
      id: this.numeroChiamate,
      durata: min,
      dataOra: new Date(),
    };
    this.registroChiamate.push(nuovaChiamata);
  }

  azzeraChiamata(): void {
    this.numeroChiamate = 0;
  }

  // extra
  mostraRegistroChiamate(): void {
    console.log("Registro chiamate:");
    this.registroChiamate.forEach((chiamata) => {
      console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} secondi, Data/Ora: ${chiamata.dataOra}`);
    });
  }

  filtraChiamatePerDataOra(dataOra: Date): Chiamata[] {
    const chiamateFiltrate = this.registroChiamate.filter((chiamata) => chiamata.dataOra.getTime() === dataOra.getTime());
    return chiamateFiltrate;
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

samsung.mostraRegistroChiamate()

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
