import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspnet-web',
  templateUrl: './aspnet-web.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}`]
})
export class AspnetWebComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
