import { Injectable } from '@angular/core';
import {Http}from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey = '6dbe8bcf182218c69403cade48a52f22';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=&APPID='+this.apiKey;
  }

  getWheather(city, country){
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID='+this.apiKey;

    return this.http.get(this.url)
      .map(res => res.json());     

  }

}
