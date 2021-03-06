import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import { Weather } from '../weather.model';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';

@Component({
  selector: 'local-forecast',
  templateUrl: './local-forecast.component.html',
  styleUrls: ['./local-forecast.component.css']
})
export class LocalForecastComponent implements OnInit {

  lati: number;
  loti: number;
  forecast: Observable<any>;
  data: any;
  weatherForecastData: Weather["name"]["temp"]["main"][];
  fiveDayForecastData: Weather[];
  city: string;
  errorMessage: any;
  constructor(private weatherService: WeatherService) { }

  onSubmit(city: string){
    console.log(city)
    this.errorMessage = ' '
    this.weatherService.getWeatherByCityName(city).subscribe(data =>{
      this.fiveDayForecastData = (data);
      console.log(this.fiveDayForecastData);
    }, error => (this.errorMessage = "City by the name of " + city +" was not found." + " 3Please input a valid city", error))
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lati = position.coords.latitude;
       this.loti = position.coords.longitude;
     });
   } else {
     /// default coords
    this.lati = 60;
    this.loti = 40;
   }
  }

  getForecast() {
    return this.weatherService.getCurrentWeather(this.lati, this.loti).subscribe(data =>  {
      this.weatherForecastData = (data);
      console.log(this.weatherForecastData);
    });
  }

  getFiveDayForecast() {
    return this.weatherService.getWeatherByCityName(this.city).subscribe(data => {
      this.weatherForecastData = (data);
      console.log(this.weatherForecastData);
    });
  }




  /// Helper to make weather icons work
  /// better solution is to map icons to an object 
  //weatherIcon(icon) {
  //  switch (icon) {
   //   case 'partly-cloudy-day':
    //    return 'wi wi-day-cloudy'
    //  case 'clear-day':
   //     return 'wi wi-day-sunny'
    //  case 'partly-cloudy-night':
    //    return 'wi wi-night-partly-cloudy'
    //  default:
      //  return `wi wi-day-sunny`
 //   }
 // }

}