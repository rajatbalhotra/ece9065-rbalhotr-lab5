import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { InstrumentsComponent } from './instruments/instruments.component';
import { InstrumentComponent } from './instruments/instrument/instrument.component';
import { InstrumentListComponent } from './instruments/instrument-list/instrument-list.component'

@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    InstrumentComponent,
    InstrumentListComponent
    
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
