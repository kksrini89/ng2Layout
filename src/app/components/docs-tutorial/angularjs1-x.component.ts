import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularjs1-x',
  templateUrl: './angularjs1-x.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}`]
})
export class Angularjs1XComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
