import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { InstrumentSearchComponent } from './instrument-search/instrument-search.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentsComponent,
    InstrumentDetailComponent,
    MessagesComponent,
    DashboardComponent,
    InstrumentSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
   HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
