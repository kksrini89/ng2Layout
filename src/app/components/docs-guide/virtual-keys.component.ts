import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-keys',
  templateUrl: './virtual-keys.component.html',
  styles: [
`.hero {
    box-sizing: border-box;
    box-shadow: none;
    padding: 48px 48px 32px 48px;
    position: relative;
    height: 168px;
}
.background-sky {
    background-color: #1976D2;
    background: -webkit-linear-gradient(305deg,#0D47A1,#42A5F5);
    background: linear-gradient(145deg,#0D47A1,#42A5F5);
    color: #fff;
}
.hero .hero-title {
    display: inline-block;
    font-size: 28px;
    font-weight: 400;
    float: left;
    line-height: 48px;
    margin: 0 8px 0 0;
    text-transform: uppercase;
}
.banner{
    background: rgba(236,239,241,0.24);
    /*border-bottom: 1px solid #ECEFF1;*/
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 200;
    padding: 32px 48px;
    min-height: 97px;
}
article.docs-content{
    padding: 48px;
}
.nextTopic-section{
    color: #455A64;
    margin: 0 0 32px 0;
    padding: 32px;
    background: rgba(236,239,241,0.24);
    border-left: 4px solid #00BCD4;
    /*border-left: 4px solid palevioletred; padding: 5px;background-color: whitesmoke;padding-bottom: 10px;*/
}
.footer-toolbar{
    background:rgba(236,239,241,0.24);
    font-size: 14px; 
}a{
    color: #1976D2;
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}
`]
})
export class VirtualKeysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
