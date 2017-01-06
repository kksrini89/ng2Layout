import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-api',
  templateUrl: './web-api.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}`]
})
export class WebApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
