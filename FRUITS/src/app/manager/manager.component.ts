import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/http';
import { RequestOptions} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {AppService} from '../app.service' ;
import {Instrument} from '../instrument';
import { NgModule, Injectable } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers : [AppService],
})
export class ManagerComponent implements OnInit {
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
   console.log(this.items)}); }
   
  
  AddInstrument() {
        console.log(this.title)
        this.http.post("http://localhost:7070/new", { title: this.title,price: this.price,quantity: this.quantity })
        .subscribe(res=>{});
             //.subscribe(res => { this.http.get('http://localhost:7070/instruments').subscribe(res => {this.items = res});
                
            });


            updateInstrument(col: Instrument){
            console.log(col);

            this.http.put("http://localhost:7070/updateins",{ title: col.title,price: col.price,quantity: col.quantity })
            .subscribe(res=>{console.log(res)});                
            }

            deleteInstrument(col: Instrument){

            this.http.post("http://localhost:7070/removeins",{ title: col.title,price: col.price,quantity: col.quantity })
            .subscribe(res=>{console.log(res)});
             

            }

}
