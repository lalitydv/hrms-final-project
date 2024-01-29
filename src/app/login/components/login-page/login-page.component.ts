import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
constructor(private router: Router){}
  gotoDashboard(){
  
    this.router.navigate(['dashbord']);
  }
  gotoForgot(){
    this.router.navigate(['forgot']);

  }
}
