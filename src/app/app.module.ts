import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { CdacComponent } from './cdac/cdac.component';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    CdacComponent,
    Comp1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
