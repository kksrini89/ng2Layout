import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-stored-procedure',
  templateUrl: './generate-stored-procedure.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}`]
})
export class GenerateStoredProcedureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
