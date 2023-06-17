import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }

  getWeather(ciudad: string) {

    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=867a062c569d1e4215e06a21d8688a29`)
  }
  getIcon(icon: string) {

    return this.http.get(`https://openweathermap.org/img/wn/${icon}@2x.png`)
  }

}
