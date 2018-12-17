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
   addinstrument: Array<{title: string, price: number, quantity: number, total: number}>= []; 
   title: string;
   price: number;
   quantity: number;
   Instrumentdetails: Instrument[];
   shop: any;
  constructor( private appservice : AppService,private http: HttpClient ) { }


  ngOnInit() {
   this.http.get('http://localhost:7070/instruments').
   subscribe(res => {this.items = res
   console.log(this.items)});
  }
 showshoppingcart(comp:Instrument){
 console.log(comp)
   this.shop=true;
   this.addinstrument.push({
   title: comp.title, price: comp.price, quantity: 1, total: comp.price*1
   })
   console.log(this.addinstrument)
 }

 removerow(comp)
 {this.addinstrument.splice(comp,1)}

 increment(comp){
 comp.quantity=comp.quantity+1;
 comp.total=comp.quantity*comp.price;

 }
  decrement(comp){
 comp.quantity=comp.quantity-1;
 comp.total=comp.quantity*comp.price;
 }

 cancel(){
this.addinstrument=[];
 }


}
