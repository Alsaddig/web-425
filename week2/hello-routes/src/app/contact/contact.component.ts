import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container">
      <div class="row">
        <h2>
          this is my  Contact page welcome everyone.
        </h2>
      </div>
    </div>
  `,
  styles: [
    `
      body {
        margin-top: 20px;
      }
      h2 {
        text-align: center;
        color: red;
        animation: zoominoutcontact 10s forwards;
      }
      @keyframes zoominoutcontact {
        0% {
          transform: scale(1,1);
        }
        50% {
          transform: scale(1.2,1.2);
        }
        100%{
          transform: scale(1,1);
        }
      }
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
