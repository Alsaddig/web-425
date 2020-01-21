import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
    This is a great product!
    </p>
  `,
  styles: [
    `
      p {
        font-family: cursive;
        color: gold;
        background-color: black;
        width: 60%;
        margin: auto;
      }
    `
  ]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
