import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-app',
  templateUrl: './generate-app.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}
  `]
})
export class GenerateAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
