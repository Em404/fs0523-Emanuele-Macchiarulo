import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiKey: string = '1133f48a2224dd93bd0fb8aa7e71bd09';
  private apiUrl: string = 'http://api.openweathermap.org/geo/1.0/direct';
  private apiUrl2: string = 'http://api.openweathermap.org/data/2.5/forecast';
  private apiUrlIcon: string = 'http://openweathermap.org/img/wn';

  constructor(private http: HttpClient) {}

  searchCity(cityName: string): Observable<any> {
    const url = `${this.apiUrl}?q=${cityName}&limit=5&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  getWeather(lat:number, lon:number): Observable<any> {
    const url = `${this.apiUrl2}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  // getWeatherIcon(code: string, dimension: string): Observable<any> {
  //   const url = `${this.apiUrlIcon}/${code}/${dimension}.png`;
  //   return this.http.get(url);
  // }

}
