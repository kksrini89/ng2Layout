import { Docs_Routes } from './components/docs/docs.routing';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './components/features/features.component';
import { DocsComponent } from './components/docs/docs.component';

const APP_ROUTES: Routes = [
    { path: '', component: DocsComponent },
    { path: 'docs', component: DocsComponent, children: Docs_Routes },
    { path: 'features', component: FeaturesComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);