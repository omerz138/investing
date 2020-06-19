import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentsTableComponent } from './instruments-table/instruments-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { InstrumentsComponent } from './instruments/instruments.component';

@NgModule({
  declarations: [InstrumentsTableComponent, InstrumentsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    SharedModule,
    MatButtonModule,
  ],
})
export class InstrumentsModule {}
