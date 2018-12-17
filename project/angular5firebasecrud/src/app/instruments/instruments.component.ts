import { Component, OnInit } from '@angular/core';

import { InstrumentService } from './shared/instrument.service'
@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css'],
  providers :[InstrumentService]
})
export class InstrumentsComponent implements OnInit {

  constructor(private instrumentService : InstrumentService) { }

  ngOnInit() {
  }

}
