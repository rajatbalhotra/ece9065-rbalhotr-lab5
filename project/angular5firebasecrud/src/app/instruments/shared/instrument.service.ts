import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Instrument } from './instrument.model';
@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
instrumentList: AngularFireList<any>;
selectedInstrument: Instrument = new Instrument();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.instrumentList = this.firebase.list('instruments');
    return this.instrumentList;

  }

  insertInstrument(instrument : Instrument)
  {
    this.instrumentList.push({
    name: instrument.name,
availability: instrument.availability,
description: instrument.description,
image: instrument.image,
price: instrument.price,
quantity: instrument.quantity,
rating: instrument.rating
    
    });
    }
    updateInstrument(instrument : Instrument){
      this.instrumentList.update(instrument.$key,
      {
       name: instrument.name,
availability: instrument.availability,
description: instrument.description,
image: instrument.image,
price: instrument.price,
quantity: instrument.quantity,
rating: instrument.rating
      
      });
    }
    deleteInstrument($key : string){
      this.instrumentList.remove($key);
    }

}
