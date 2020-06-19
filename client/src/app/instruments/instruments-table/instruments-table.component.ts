import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InstrumentApi } from 'src/app/models/instrument.model';

@Component({
  selector: 'app-instruments-table',
  templateUrl: './instruments-table.component.html',
  styleUrls: ['./instruments-table.component.less'],
})
export class InstrumentsTableComponent {
  @Input() filteredInstruments: InstrumentApi[];
  @Input() columnHeader;
  @Input() columnInfoHeaders;
  @Output() instrumentDeleted = new EventEmitter<number>();
  objectKeys = Object.keys;

  constructor() {}

  deleteInstrument(instrument: InstrumentApi) {
    this.instrumentDeleted.emit(instrument.instrumentId);
  }
}
