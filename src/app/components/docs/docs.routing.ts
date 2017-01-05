import { Routes, RouterModule } from '@angular/router';

import { CodeTemplateExplorerComponent } from './../docs-guide/code-template-explorer.component';
import { DbExplorerComponent } from './../docs-guide/db-explorer.component';
import { VirtualKeysComponent } from './../docs-guide/virtual-keys.component';
import { SetProjectOptionsComponent } from './../docs-guide/set-project-options.component';
import { SetDBConnectionComponent } from './../docs-guide/set-dbconnection.component';
import { CreateNewProjectComponent } from './../docs-guide/create-new-project.component';

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
    { path: 'docsGuide2', component: DocsGuide2Component },
    { path: 'docsTutorial1', component: DocsTutorial1Component },
    { path: 'docsTutorial2', component: DocsTutorial2Component }
];