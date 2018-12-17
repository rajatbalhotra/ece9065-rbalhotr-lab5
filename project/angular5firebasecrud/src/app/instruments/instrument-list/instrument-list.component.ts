import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../shared/instrument.service';
@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit {

  constructor(private instrumentService : InstrumentService) { }

  ngOnInit() {
  }

}
