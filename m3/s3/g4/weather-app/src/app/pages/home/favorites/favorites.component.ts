import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  favorite: any;
  weatherFavorite:any = []


  constructor(
    private authSvc: AuthService,
    private datePipe: DatePipe,
    private homeSvc: HomeService
    ){}

  ngOnInit(){
    this.authSvc.getFavorite().subscribe(fav => {
      this.favorite = fav;
      this.favorite.forEach((el:any) => {
        this.homeSvc.getWeather(el.coord.lat, el.coord.lon).subscribe(data => {
          this.weatherFavorite.push(data);
        })
      });

    })
  }

  removeFavorite(cityId:any) {

    this.authSvc.removeFavorite(cityId).subscribe(() => {
      this.weatherFavorite = this.weatherFavorite.filter((fav:any) => fav.city.id !== Number(cityId));
    });
  }

  formatDateTime(dateTime: string): string {
    const formattedDate = this.datePipe.transform(dateTime, 'dd/MM HH:mm');
    return formattedDate || dateTime;
  }


}
