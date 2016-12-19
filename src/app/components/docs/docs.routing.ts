import { Routes, RouterModule } from '@angular/router';

import { DocsGuide2Component } from './../docs-guide/docs-guide2.component';
import { DocsGuide1Component } from './../docs-guide/docs-guide1.component';

const Docs_Routes: Routes = [
    { path: 'docsGuide1', component: DocsGuide1Component },
    { path: 'docsGuide2', component: DocsGuide2Component },
];

export const DOCS_Routing = RouterModule.forChild(Docs_Routes);