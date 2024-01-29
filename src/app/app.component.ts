import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite'
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  ngOnInit(): void {
    initFlowbite();
  }

  isLoginView:boolean=true;
  constructor(private router: Router){
   
   
    this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe((event: any) => {
    const currentURL = event.url;
    console.log(currentURL);
    if (currentURL === '/' || currentURL === '/forgot' || currentURL === '/new') {
      this.isLoginView = true;
    } else {
      this.isLoginView = false;
    }
  });
  }
}
