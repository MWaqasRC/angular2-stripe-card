import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StripeComponent } from './stripe/stripe.component';
import { CardConnectComponent } from './card-connect/card-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    StripeComponent,
    CardConnectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
