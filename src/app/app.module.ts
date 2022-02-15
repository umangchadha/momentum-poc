import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentumComponent } from './components/momentum/momentum.component';
import { MaterialDesignModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { BodyComponent } from './components/shared/body/body.component';
import { FundsGridComponent } from './components/funds-grid/funds-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { DateRangePickerComponent } from './components/shared/date-range-picker/date-range-picker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './components/shared/autocomplete/autocomplete.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BlankComponent } from './components/shared/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    MomentumComponent,
    TopNavComponent,
    SideNavComponent,
    BodyComponent,
    FundsGridComponent,
    DateRangePickerComponent,
    AutocompleteComponent,
    BlankComponent,
  ],
  imports: [
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FlexLayoutModule,
    NgxDaterangepickerMd.forRoot(),
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
