import { Routes, RouterModule } from '@angular/router';

import { GenerateDatabaseTriggersComponent } from './../docs-tutorial/generate-database-triggers.component';
import { GenerateStoredProcedureComponent } from './../docs-tutorial/generate-stored-procedure.component';
import { CodeGenerationComponent } from './../docs-tutorial/code-generation.component';
import { DataAccessLayerComponent } from './../docs-tutorial/data-access-layer.component';
import { WcfComponent } from './../docs-tutorial/wcf.component';
import { WebApiComponent } from './../docs-tutorial/web-api.component';
import { WpfMvvmComponent } from './../docs-tutorial/wpf-mvvm.component';
import { AspnetWebComponent } from './../docs-tutorial/aspnet-web.component';
import { AspnetMvcComponent } from './../docs-tutorial/aspnet-mvc.component';
import { Angularjs1XComponent } from './../docs-tutorial/angularjs1-x.component';
import { Angular2SpaComponent } from './../docs-tutorial/angular2-spa.component';
import { GenerateAppComponent } from './../docs-tutorial/generate-app.component';

import { CreateNewProjectComponent } from './../docs-guide/create-new-project.component';
import { SetDBConnectionComponent } from './../docs-guide/set-dbconnection.component';
import { SetProjectOptionsComponent } from './../docs-guide/set-project-options.component';
import { VirtualKeysComponent } from './../docs-guide/virtual-keys.component';
import { DbExplorerComponent } from './../docs-guide/db-explorer.component';
import { CodeTemplateExplorerComponent } from './../docs-guide/code-template-explorer.component';

import { DocsGuideComponent } from './../docs-guide/docs-home.component';
import { DocsGuide2Component } from './../docs-guide/docs-guide2.component';
import { DocsGuide1Component } from './../docs-guide/docs-guide1.component';
import { DocsTutorial1Component } from './../docs-tutorial/docs-tutorial1.component';
import { DocsTutorial2Component } from './../docs-tutorial/docs-tutorial2.component';

export const Docs_Routes: Routes = [
    { path: '', redirectTo: 'docsGuide', pathMatch: 'full' },
    { path: 'docsGuide', component: DocsGuideComponent },
    // { path: 'docsGuide1', component: DocsGuide1Component },
    { path: 'createNewProject', component: CreateNewProjectComponent },
    { path: 'setDBConnection', component: SetDBConnectionComponent },
    { path: 'setProjectOptions', component: SetProjectOptionsComponent },
    { path: 'virtualKeys', component: VirtualKeysComponent },
    { path: 'dbexplorer', component: DbExplorerComponent },
    { path: 'codetemplateexplorer', component: CodeTemplateExplorerComponent },
    // { path: 'docsGuide2', component: DocsGuide2Component },

    //{ path: 'docsTutorial1', component: DocsTutorial1Component },
    //{ path: 'docsTutorial2', component: DocsTutorial2Component }
    { path: 'generateApp', component: GenerateAppComponent },
    { path: 'angular2Spa', component: Angular2SpaComponent },
    { path: 'angularjs1X', component: Angularjs1XComponent },
    { path: 'aspnetMvc', component: AspnetMvcComponent },
    { path: 'aspnetWeb', component: AspnetWebComponent },
    { path: 'wpfMvvm', component: WpfMvvmComponent },
    { path: 'webApi', component: WebApiComponent },
    { path: 'wcf', component: WcfComponent },
    { path: 'dataAccess', component: DataAccessLayerComponent },
    { path: 'codegenerate', component: CodeGenerationComponent },
    { path: 'generateStoredProcedure', component: GenerateStoredProcedureComponent },
    { path: 'generateDatabaseTriggers', component: GenerateDatabaseTriggersComponent }
];