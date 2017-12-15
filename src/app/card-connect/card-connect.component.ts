import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-card-connect',
  templateUrl: './card-connect.component.html',
  styleUrls: ['./card-connect.component.css']
})
export class CardConnectComponent implements OnInit, AfterViewInit {

  cardConnectHandler = this.receiveCardConnectMessage.bind(this);
  cardConnectData: any;
  months: any[] = [
    { id: 1, month: '01 - January' },
    { id: 2, month: '02 - February' },
    { id: 3, month: '03 - March' },
    { id: 4, month: '04 - April' },
    { id: 5, month: '05 - May' },
    { id: 6, month: '06 - June' },
    { id: 7, month: '07 - July' },
    { id: 8, month: '08 - August' },
    { id: 9, month: '09 - September' },
    { id: 10, month: '10 - October' },
    { id: 11, month: '11 - November' },
    { id: 12, month: '12 - December' }
  ];
  currentDate = new Date();
  years = _.map(_.range(0, 40), (index: number) => {
    return {
      id: index,
      year: this.currentDate.getFullYear() + index
    };
  });

  constructor() { }

  ngOnInit() {
    this.cardConnectData = {
      cardNumber: 0,
      cardExpMonth: 0,
      cardExpYear: 0,
      cardCVV: 0
    }
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', this.cardConnectHandler, false);
    }
  }

  receiveCardConnectMessage(event: any) {
    if (event.origin === 'https://fts.cardconnect.com:6443') {
        const token = JSON.parse(event.data);
        this.cardConnectData.cardNumber = token.message;
    }
  }

  getCardConnectData() {
    return this.cardConnectData
  }
}
