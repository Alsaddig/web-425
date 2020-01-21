import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
      <h1 class="home">Please Login Here!</h1>
     `,
  styles: [`
  .home{
    background-color:yellow;
    margin:20px;
  }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
