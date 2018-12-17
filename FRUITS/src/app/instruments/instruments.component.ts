import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/http';
import { RequestOptions} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {AppService} from '../app.service' ;
import {Instrument} from '../instrument';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css'],

  providers : [AppService],
})
export class InstrumentsComponent implements OnInit {

title = 'HARMONY';
  items: any;
   newItem: string;
   Instrumentdetails: Instrument[]; 
   constructor( private appservice : AppService,private http: HttpClient ) {

  } 


  ngOnInit() {
this.http.get('http://localhost:7070/instruments').
   subscribe(res => {this.items = res
   console.log(this.items)}); }
   
  
  AddInstrument() {
        console.log(this.newItem)
        this.http.post("http://localhost:7070/new", { title: this.newItem })
            .subscribe(res => { this.http.get('http://localhost:7070/instruments').subscribe(res => {this.items = res});
                
            });

 
 }
}
