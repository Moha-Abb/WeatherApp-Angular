import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';
import { DataService } from '../services/Shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ciudad: string = '';
  icon: any
  tempAlta: number = 0;
  tempBaja: number = 0;
  humedad: number = 0;
  cielo: string = '';
  buscando = false;
  constructor(private weatherApi: WeatherApiService, private dataService: DataService) {

    this.dataService.ciudad$.subscribe(_ciudad => {
      this.ciudad = _ciudad || ''
    })
  }
  ngOnInit(): void {

    this.dataService.searchEvent$.subscribe(() => {
      this.buscando = true;

      this.buscarClima();
    });

  }
  buscarClima() {
    this.weatherApi.getWeather(this.ciudad).subscribe({
      next: (response: any) => {
        console.log(response.weather[0].icon);
        this.icon = response.weather[0].icon
        this.tempAlta = (response.main.temp_max) / 10
        this.tempBaja = response.main.temp_min / 10
        this.humedad = response.main.humidity
        this.cielo = response.weather[0].main

      },
      error: err => {
        console.log(err)
        this.icon = ''
        this.ciudad = 'Esta Ciudad No Existe'
        this.tempAlta = 0
        this.tempBaja = 0
        this.humedad = 0
        this.cielo = ''
      },
      complete: () => console.log('Peticion terminada')
    })
  }

}
