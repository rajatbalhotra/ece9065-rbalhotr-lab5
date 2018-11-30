import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Instrument } from '../instrument';
import { InstrumentService }  from '../instrument.service';
@Component({
  selector: 'app-instrument-detail',
  templateUrl: './instrument-detail.component.html',
  styleUrls: ['./instrument-detail.component.css']
})
export class InstrumentDetailComponent implements OnInit {
 @Input() instrument: Instrument;
  constructor(
  private route: ActivatedRoute,
    private instrumentService: InstrumentService,
    private location: Location ) { }

  ngOnInit(): void {
  this.getInstrument();
  }
  getInstrument(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.instrumentService.getInstrument(id)
      .subscribe(instrument => this.instrument = instrument);
  }
   goBack(): void {
    this.location.back();
  }

  save(): void {
    this.instrumentService.updateInstrument(this.instrument)
      .subscribe(() => this.goBack());
  }
}
