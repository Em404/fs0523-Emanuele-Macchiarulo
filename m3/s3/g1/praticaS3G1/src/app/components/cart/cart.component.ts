import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private productSvc: ProductsService) {}
  cart: Iproduct[] = [];

  products: Iproduct [] = []

  ngOnInit(): void {
    this.productSvc.cart$.subscribe((prod) => {
      this.products.push(prod)
    });
  }
}
