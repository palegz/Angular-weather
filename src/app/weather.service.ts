import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Weather } from './weather.model';



@Injectable()
export class WeatherService {

  apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=61.474361699999996&lon=23.7593812&APPID=2ccc32cc195c49726f1ee7f58a717fb6';

  constructor(private http: HttpClient) {
   }

   getCurrentWeather(lati: number, loti: number): Observable<any> {
    let params = new HttpParams()
    params = params.set('lat', lati.toString() )
    params = params.set('lng', loti.toString() )
    console.log("Api fetched")
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${(lati)}&lon=${loti}&APPID=2ccc32cc195c49726f1ee7f58a717fb6&units=metric`);
   }
   
}