import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/price-quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ibrahim-output-properties';
  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote){
    this.priceQuote = event;
  }
}
