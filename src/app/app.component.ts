// Ref https://alligator.io/angular/stripe-elements/

import { Component, ViewChild } from '@angular/core';
import { StripeComponent } from './stripe/stripe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('stripeComponent') stripeComponent: StripeComponent;

  constructor() {
  }

  getStripeToken() {
    this.stripeComponent.getStripeToken().subscribe(token => {
      console.log(token);
    });
  }
}
