import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.scss']
})
export class NewPassComponent {
  constructor(private router: Router){}
  continue(){
    this.router.navigate(['dashboard/detail']);
  }
}
