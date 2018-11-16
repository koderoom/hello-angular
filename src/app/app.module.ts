import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { CdacComponent } from './cdac/cdac.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    CdacComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
