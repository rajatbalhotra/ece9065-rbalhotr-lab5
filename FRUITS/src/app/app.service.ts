import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Instrument } from './instrument';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  public getRequest(){
    return this.http.get('http://localhost:7070/instruments').subscribe((data) => { console.log(data);
   });
    //console.log(data)
    }
    }
