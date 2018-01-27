import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class GoogleapiService {

  urlVal: string = '';
  constructor(private http: Http) { }

  logService(address: string){
    console.log(address);
    this.urlVal = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ address+'&key=AIzaSyDdvDfNEvs-dCxhMTaDceZyrIagC4-ZwsU';
    return this.http.get(this.urlVal).map(
        (res) => res.json()
      ).share();
  }

}
