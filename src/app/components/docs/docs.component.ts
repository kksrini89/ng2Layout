import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  guides: any[] = [];

  constructor() {
    this.guides.push('one');
    this.guides.push('two');
  }

  toggleGuideFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  toggleTutorialFunc() {
    document.getElementById("tutorialContent").classList.toggle("show");
  }

  ngOnInit() {
  }

}
