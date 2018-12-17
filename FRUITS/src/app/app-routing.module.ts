import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { ManagerComponent } from './manager/manager.component';
import { HarmonyComponent } from './harmony/harmony.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
{path: 'signIn', component: SigninComponent},
{path: 'instruments', component: InstrumentsComponent},
{path: '', redirectTo:'/instruments' pathMatch:'full'},
{path: 'manager', component: ManagerComponent},
{path: 'harmony', component: HarmonyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
