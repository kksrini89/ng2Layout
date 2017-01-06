import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspnet-mvc',
  templateUrl: './aspnet-mvc.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}`]
})
export class AspnetMvcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
