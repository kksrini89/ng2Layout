import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-access-layer',
  templateUrl: './data-access-layer.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}`]
})
export class DataAccessLayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
