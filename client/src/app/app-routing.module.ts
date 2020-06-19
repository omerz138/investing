import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstrumentsComponent } from './instruments/instruments/instruments.component';

const routes: Routes = [
  {
    path: '',
    component: InstrumentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
