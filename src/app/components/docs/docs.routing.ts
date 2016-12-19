import { Routes, RouterModule } from '@angular/router';

import { DocsGuideComponent } from './../docs-guide/docs-home.component';
import { DocsGuide2Component } from './../docs-guide/docs-guide2.component';
import { DocsGuide1Component } from './../docs-guide/docs-guide1.component';
import { DocsTutorial1Component } from './../docs-tutorial/docs-tutorial1.component';
import { DocsTutorial2Component } from './../docs-tutorial/docs-tutorial2.component';

export const Docs_Routes: Routes = [
    { path: '', component: DocsGuideComponent },
    { path: 'docsGuide1', component: DocsGuide1Component },
    { path: 'docsGuide2', component: DocsGuide2Component },
    { path: 'docsTutorial1', component: DocsTutorial1Component },
    { path: 'docsTutorial2', component: DocsTutorial2Component },
];