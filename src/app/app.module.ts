import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TOTS_CORE_PROVIDER, TotsCoreModule } from '@tots/core';
import { TotsFormModule } from '@tots/form';
import { TotsTableModule } from '@tots/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsTableComponent } from './modules/clients-table/clients-table.component';

@NgModule({
  declarations: [AppComponent, ClientsTableComponent],
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
    TotsTableModule,
  ],
  providers: [
    {
      provide: TOTS_CORE_PROVIDER,
      useValue: {
        baseUrl: 'https://agency-coda.uc.r.appspot.com/',
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
