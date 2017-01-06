import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-generation',
  templateUrl: './code-generation.component.html',
  styles: [`a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}`]
})
export class CodeGenerationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
