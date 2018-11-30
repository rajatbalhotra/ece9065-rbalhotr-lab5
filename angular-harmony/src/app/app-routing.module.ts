import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentsComponent }      from './instruments/instruments.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { InstrumentDetailComponent }  from './instrument-detail/instrument-detail.component';

const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:id', component: InstrumentDetailComponent },
  { path: 'instruments', component: InstrumentsComponent }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
