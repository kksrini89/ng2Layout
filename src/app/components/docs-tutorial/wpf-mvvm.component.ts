import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wpf-mvvm',
  templateUrl: './wpf-mvvm.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none; }
a:hover{
    text-decoration: underline;
}`]
})
export class WpfMvvmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
