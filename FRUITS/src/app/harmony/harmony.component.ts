import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/http';
import { RequestOptions} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {AppService} from '../app.service' ;
import {Instrument} from '../instrument';
import { NgModule, Injectable } from '@angular/core';

@Component({

  selector: 'app-harmony',
  templateUrl: './harmony.component.html',
  styleUrls: ['./harmony.component.css'],
  providers : [AppService],

})

export class HarmonyComponent implements OnInit {
items: any;
   newItem: string;
   title: string;
   price: string;
   quatity: string;
   Instrumentdetails: Instrument[];

  constructor( private appservice : AppService,private http: HttpClient ) { }


  ngOnInit() {
   this.http.get('http://localhost:7070/instruments').
   subscribe(res => {this.items = res
   console.log(this.items)});
  }
 

}
