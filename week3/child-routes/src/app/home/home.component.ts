import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to the home page!</h1>
  `,
  styles: [`
  h1{
     color: green;
    margin:20px;
    padding:20px;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
