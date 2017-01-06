import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-requirements',
  templateUrl: './system-requirements.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
  `]
})
export class SystemRequirementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
