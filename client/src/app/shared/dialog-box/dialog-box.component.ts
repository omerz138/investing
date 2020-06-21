import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstrumentApi } from 'src/app/models/instrument.model';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.less'],
})
export class DialogBoxComponent {
  public action: string;
  public returnedData: InstrumentApi = {};
  public errorMessage = '';
  objectKeys = Object.keys;

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  doAction() {
    if (this.vaildateValues()) {
      this.dialogRef.close({ data: this.returnedData });
    }
  }

  vaildateValues() {
    for (const key of Object.keys(this.data.fields)) {
      if (!this.returnedData[key]) {
        this.errorMessage = 'Please fill all the fields';
        return false;
      }
    }

    if (isNaN(this.returnedData.instrumentId)) {
      this.errorMessage = 'Instrument id must be of type number';
      return false;
    }

    return true;
  }

  closeDialog() {
    this.dialogRef.close({ data: null });
  }
}
