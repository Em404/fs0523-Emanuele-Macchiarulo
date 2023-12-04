import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title:'Shopping | Home'
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    title:'Shopping | Preferiti'
  },
  {
    path: 'cart',
    component: CartComponent,
    title:'Shopping | Carrello'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
