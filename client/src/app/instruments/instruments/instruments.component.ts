import { Component, OnInit } from '@angular/core';
import { InstrumentsService } from 'src/app/core/instruments.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/shared/dialog-box/dialog-box.component';
import { InstrumentApi } from 'src/app/models/instrument.model';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.less'],
})
export class InstrumentsComponent implements OnInit {
  private instrumentsData = [];
  public filteredInstruments = [];
  public searchTerm = '';
  public columnInfoHeaders = { instrumentId: 'id', name: 'Name', symbol: 'Symbol', instrumentType: 'Type' };
  public columnHeader = { ...this.columnInfoHeaders, action: 'Actions' };

  constructor(private instrumentsService: InstrumentsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.instrumentsService.getAll().subscribe((data) => {
      this.instrumentsData = data;
      // creating a deep copy
      this.filteredInstruments = JSON.parse(JSON.stringify(this.instrumentsData));
      this.sortInstruments();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '260px',
      data: {
        fields: this.columnInfoHeaders,
        action: 'Add Instrument',
      },
    });

    dialogRef.afterClosed().subscribe(this.onDialogClosed.bind(this));
  }

  private onDialogClosed(result) {
    if (result) {
      this.instrumentsService.add(result.data).subscribe(
        (data: InstrumentApi) => {
          this.instrumentsData.push(data);
          this.filterInstruments();
        },
        (err) => {
          console.log('Error Adding:' + err);
        }
      );
    }
  }

  applyFilter(value: string) {
    const searchValue = value.trim().toLowerCase();
    this.searchTerm = searchValue;
    this.filterInstruments();
  }

  deleteInstrument(instrumentId: string) {
    this.instrumentsService.remove(instrumentId).subscribe(
      () => {
        this.instrumentsData = this.instrumentsData.filter(
          (item: InstrumentApi) => item.instrumentId !== Number(instrumentId)
        );
        this.filterInstruments();
      },
      (err) => {
        console.log('Error deleting:' + err);
      }
    );
  }

  private sortInstruments() {
    return this.filteredInstruments.sort((instrumentA, instrumentB) => {
      return instrumentA.instrumentId - instrumentB.instrumentId;
    });
  }

  private filterInstruments() {
    this.filteredInstruments = this.instrumentsData.filter((instrument) => {
      return (
        instrument.name.toLowerCase().includes(this.searchTerm) ||
        instrument.instrumentType.includes(this.searchTerm)
      );
    });

    this.sortInstruments();
  }
}
