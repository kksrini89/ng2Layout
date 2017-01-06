import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular2-spa',
  templateUrl: './angular2-spa.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}`]
})
export class Angular2SpaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
