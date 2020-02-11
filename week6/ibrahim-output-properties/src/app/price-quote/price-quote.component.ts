import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PriceQuote } from './price-quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quote',
  template: `
    <strong>
      Inside PriceQuoteComponent:
      {{priceQuote?.stockSymbol}}
      {{priceQuote?.lastPrice | currency: 'USD'}}
    </strong>
  `,
  styles: [
    `
    :host {
      background-color:pink;
    }
    `
  ]
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(2000).subscribe(data =>{
      this.priceQuote = {
        stockSymbol: 'IBM',
        lastPrice: 100 * Math.random()
      };

      this.lastPrice.emit(this.priceQuote);
    });
   }

  ngOnInit() {
  }

}
