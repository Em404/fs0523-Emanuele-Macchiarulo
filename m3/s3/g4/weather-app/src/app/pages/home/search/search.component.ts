import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(
    private homeSvc: HomeService,
    private datePipe: DatePipe,
    private authSvc: AuthService
  ) {}

  searchQuery: string = '';
  citysrc: any;
  weatherForecast: any;
  citySel: any;

  isMainVisible: boolean = false;

  search() {
    this.homeSvc.searchCity(this.searchQuery).subscribe((data) => {
      if (data && data.length > 0) {
        this.isMainVisible = true;
        this.citysrc = data[0];
        const lat = data[0].lat;
        const lon = data[0].lon;

        this.homeSvc.getWeather(lat, lon).subscribe((forecast) => {
          if (forecast && forecast.city) {
            this.citySel = forecast.city;

            this.weatherForecast = forecast.list;
          }
        });
      }
    });

    this.searchQuery = '';
  }

  formatDateTime(dateTime: string): string {
    const formattedDate = this.datePipe.transform(dateTime, 'dd/MM HH:mm');
    return formattedDate || dateTime;
  }

  addFavorite() {
    this.authSvc.addFavorite(this.citySel).subscribe(data => {
    })
  }

  // getIcon(code: string, dimension: string) {
  //   return this.homeSvc.getWeatherIcon(code, dimension).subscribe((data) => {
  //     return data
  //   })
  // }

}
