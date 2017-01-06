import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcf',
  templateUrl: './wcf.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}
  `]
})
export class WcfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
