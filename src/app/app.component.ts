import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  toolbarColor = '#1976D2';
  // title = 'app works!';
  constructor(private router: Router) { }
  
  onBrandClick() {
    this.router.navigate(['']);
  }
  onGetStarted() {
    this.router.navigate(['']);
  }
}
