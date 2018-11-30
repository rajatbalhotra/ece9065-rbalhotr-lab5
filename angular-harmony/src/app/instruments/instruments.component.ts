import { Component, OnInit } from '@angular/core';
import { Instrument } from '../instrument';

import { InstrumentService } from '../instrument.service';
@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

instruments: Instrument[];

  constructor(private instrumentService: InstrumentService) { }
 

  ngOnInit() {
  this.getInstruments();
  }


   getInstruments(): void {
  this.instrumentService.getInstruments()
  .subscribe(instruments => this.instruments = instruments);
}
 add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.instrumentService.addInstrument({ name } as Instrument)
      .subscribe(instrument => {
        this.instruments.push(instrument);
      });
  }
 
  delete(instrument: Instrument): void {
    this.instruments = this.instruments.filter(h => h !== instrument);
    this.instrumentService.deleteInstrument(instrument).subscribe();
  }

}
