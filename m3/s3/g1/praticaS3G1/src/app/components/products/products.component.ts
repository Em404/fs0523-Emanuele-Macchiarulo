import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private productSvc: ProductsService) {}
  products: Iproduct[] = [];

  ngOnInit(): void {
    this.productSvc.getAll().subscribe((products) => {
      this.products = products;
      console.log(products);

    });
  }

  toggleFavorite(product: Iproduct): void {
    this.productSvc.toggleFavorite(product);
  }

  addToCart(product: Iproduct): void {
    this.productSvc.addToCart(product);
  }
}
