import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Command } from 'protractor';



@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(){
    let loggedIn = Math.random() < 0.5;

    if(!loggedIn){
      alert("You're not logged in and will be redirected to Login page!");
      this.router.navigate(["/login"]);
    }

    return loggedIn;
  }
}
