import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  constructor(private productSvc:ProductsService){}
  favorites: Iproduct[] = [];

  ngOnInit(): void {
    this.productSvc.favorites$.subscribe(favorites => {
      this.favorites = favorites;
    });
  }

}
