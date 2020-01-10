import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    `
    h1 {
      color: red;
    }
    `

    ]
})
export class AppComponent {
  title = 'app';

  // class property
  name:string = "Mr Ibrahim";

  // changing the name via button click
  changeName() {
    this.name = "Alsaddig Ibrahim";
  }
}
