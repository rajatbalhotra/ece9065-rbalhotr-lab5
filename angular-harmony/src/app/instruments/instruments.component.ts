import { Component , Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/http';
import { RequestOptions} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Instrument } from '../instrument';

import { InstrumentService } from '../instrument.service';

@Injectable()
@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css'],
  providers : [InstrumentService]

})
export class InstrumentsComponent {


 items: any;
   newItem: string;
   constructor(private http: HttpClient) { this.http.get('http://localhost:7070/instruments').subscribe(res => {this.items = res}); }
   //onClick() {
       //this._productService.getData()
          //  .subscribe(res => {this.items = res});
    //}
  //public getRequest(){
    
 //ngOnInit() {
 //}
   AddInstrument() {
        console.log(this.newItem)
        this.http.post("http://localhost:7070/new", { title: this.newItem })
            .subscribe(res => { this.http.get('http://localhost:7070/instruments').subscribe(res => {this.items = res});
                
            });

 
 }
 }
