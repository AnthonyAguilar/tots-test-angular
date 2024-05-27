import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TotsAuthModule } from '@tots/auth';
import { TOTS_CORE_PROVIDER, TotsCoreModule } from '@tots/core';
import { TotsDateColumnModule } from '@tots/date-column';
import { TotsEditableColumnsModule } from '@tots/editable-columns';
import { TotsTableModule } from '@tots/table';
import { TotsFormModule } from '@tots/form/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './modules/customer-table/customer-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,

    /** Tots Libraries */
    TotsCoreModule,
    TotsFormModule,
    TotsAuthModule,
    TotsTableModule,
    TotsDateColumnModule,
    TotsEditableColumnsModule,
    
  ],
  providers: [
    {
      provide: TOTS_CORE_PROVIDER,
      useValue: {
        baseUrl: 'https://agency-coda.uc.r.appspot.com/'
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
