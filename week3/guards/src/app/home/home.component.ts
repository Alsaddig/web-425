import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

      <h1 class="home">Home Component</h1>

  `,
  styles: [
    `
      .home {
        background-color: red;
        color: pink;
        text-align: center;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
