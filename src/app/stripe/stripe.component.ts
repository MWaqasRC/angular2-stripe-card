import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

declare var Stripe: any;

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements AfterViewInit, OnDestroy {

  @Input() stripePublicKey: string;
  @Input() stripeCardOptions: any;
  @ViewChild('cardInfo') cardInfo: ElementRef;
  private stripe: any;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.onInitStripe()
    }
  }

  onInitStripe() {
    this.stripe = Stripe(this.stripePublicKey);
    const elements = this.stripe.elements();
    this.card = elements.create('card', this.stripeCardOptions);
    this.card.mount(this.cardInfo.nativeElement);
    this.card.addEventListener('change', this.cardHandler);
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  getStripeToken(): Observable<string> {
    return Observable.from(this.stripe.createToken(this.card).then(function (result) {
      return result;
    }));
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }
}
