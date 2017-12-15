// Ref https://alligator.io/angular/stripe-elements/

import { Component, ViewChild } from '@angular/core';
import { StripeComponent } from './stripe/stripe.component';
import { CardConnectComponent } from "./card-connect/card-connect.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('stripeComponent') stripeComponent: StripeComponent;
  @ViewChild('cardConnectComponent') cardConnectComponent: CardConnectComponent;

  constructor() {
  }

  getStripeToken() {
    this.stripeComponent.getStripeToken().subscribe(token => {
      console.log(token);
    });
  }

  getCardConnectToken() {
    const cardConnectData = this.cardConnectComponent.getCardConnectData();
    console.log(cardConnectData);
  }
}
