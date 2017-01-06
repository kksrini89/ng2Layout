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
import { GenerateAppComponent } from './components/docs-tutorial/generate-app.component';
import { Angularjs1XComponent } from './components/docs-tutorial/angularjs1-x.component';
import { Angular2SpaComponent } from './components/docs-tutorial/angular2-spa.component';
import { AspnetMvcComponent } from './components/docs-tutorial/aspnet-mvc.component';
import { AspnetWebComponent } from './components/docs-tutorial/aspnet-web.component';
import { WpfMvvmComponent } from './components/docs-tutorial/wpf-mvvm.component';
import { WebApiComponent } from './components/docs-tutorial/web-api.component';
import { WcfComponent } from './components/docs-tutorial/wcf.component';
import { DataAccessLayerComponent } from './components/docs-tutorial/data-access-layer.component';

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
    CodeTemplateExplorerComponent,
    GenerateAppComponent,
    Angularjs1XComponent,
    Angular2SpaComponent,
    AspnetMvcComponent,
    AspnetWebComponent,
    WpfMvvmComponent,
    WebApiComponent,
    WcfComponent,
    DataAccessLayerComponent
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
