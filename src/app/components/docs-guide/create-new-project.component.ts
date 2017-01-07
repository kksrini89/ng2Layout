import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}
a:hover{
    text-decoration: underline;
}
`]
})
export class CreateNewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
