import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) {}

  apiUrl: string = "https://dummyjson.com/products"
  favorites: Iproduct[] = []
  cart: Iproduct[] = []

  favoritesSubject = new Subject<Iproduct[]>();
  cartSubject = new Subject<Iproduct[]>();
  favorites$ = this.favoritesSubject.asObservable();
  cart$ = this.cartSubject.asObservable();

  getAll():Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.apiUrl)
  }

  toggleFavorite(product: Iproduct): void {
    const index = this.favorites.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(product);
    }
    this.favoritesSubject.next([...this.favorites]);
  }

  getFavorites(): Iproduct[] {
    return this.favorites;
  }

  addToCart(product: Iproduct): void {
    this.cart.push(product);
    this.cartSubject.next([...this.cart]);
  }

  getCart(): Iproduct[] {
    return this.cart;
  }

}
