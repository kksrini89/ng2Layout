import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { DocsComponent } from './components/docs/docs.component';
import { DocsGuideComponent } from './components/docs-guide/docs-home.component';
import { DocsGuide1Component } from './components/docs-guide/docs-guide1.component';
import { DocsGuide2Component } from './components/docs-guide/docs-guide2.component';
import { DocsTutorial1Component } from './components/docs-tutorial/docs-tutorial1.component';
import { DocsTutorial2Component } from './components/docs-tutorial/docs-tutorial2.component';
import { HomeComponent } from './components/home/home.component';
import { CreateNewProjectComponent } from './components/docs-guide/create-new-project.component';
import { SetDBConnectionComponent } from './components/docs-guide/set-dbconnection.component';
import { SetProjectOptionsComponent } from './components/docs-guide/set-project-options.component';
import { VirtualKeysComponent } from './components/docs-guide/virtual-keys.component';
import { DbExplorerComponent } from './components/docs-guide/db-explorer.component';
import { CodeTemplateExplorerComponent } from './components/docs-guide/code-template-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    FeaturesComponent,
    DocsGuideComponent,
    DocsGuide1Component,
    DocsGuide2Component,
    DocsTutorial1Component,
    DocsTutorial2Component,
    HomeComponent,
    CreateNewProjectComponent,
    SetDBConnectionComponent,
    SetProjectOptionsComponent,
    VirtualKeysComponent,
    DbExplorerComponent,
    CodeTemplateExplorerComponent
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
