import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location:any){
    return this.http.get(

       ' https://api.weatherapi.com/v1/current.json?key=3b8587d5d3264a46948184252230808&q='+location+'&aqi=no'

    );

}
}
