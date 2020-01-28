import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-sm navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item"><a routerLink="/home" class="nav-link">Home</a></li>
        <li class="nav-item"><a routerLink="/contact" class="nav-link">Contact</a></li>
        <li class="nav-item"><a routerLink="/about" class="nav-link">About</a></li>
      </ul>
    </nav>
    <br /><br />
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Handling Form Events with Observables</h2>
          <br />
          <div class="form-group">
            <label for="txtStockPrice">Stock Price: </label>
            <input type="text"
                    class="form-control"
                    id="txtStockPrice"
                    placeholder="Enter stock price..."
                    [formControl]="searchInput">
          </div>
        </div>
      </div>
      <br /><br />
      <div class="row">
        <div class="col">
          <h4 class="txt-bold">Results: {{ convertedStockPrice }}</h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .navbar {
      background-color: green;
    }
    .txt-bold {
      font-weight: bold;
      background-color: lightgreen;
      border: 1px solid darkgreen;
      width: 60%;
      margin: auto;
    }
    .container {
      text-align: center;
    }
    .form-group {
      width: 60%;
      margin: auto;
    }
  `]
})
export class AppComponent {
  searchInput = new FormControl('');
  convertedStockPrice: string;

  constructor(){
    this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string){

    this.convertedStockPrice = `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;

  }
}
