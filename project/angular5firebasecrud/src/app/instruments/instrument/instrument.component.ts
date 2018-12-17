import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../shared/instrument.service';
@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {

  constructor(private instrumentService : InstrumentService ) { }

  ngOnInit() {
  }

}
