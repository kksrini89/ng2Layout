import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { DocsComponent } from './components/docs/docs.component';
import { DocsGuide1Component } from './components/docs-guide/docs-guide1.component';
import { DocsGuide2Component } from './components/docs-guide/docs-guide2.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    FeaturesComponent,
    DocsGuide1Component,
    DocsGuide2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),   
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
