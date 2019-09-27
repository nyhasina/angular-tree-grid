import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CdkTreeModule} from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

