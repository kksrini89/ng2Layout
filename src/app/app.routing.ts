import { DOCS_Routing } from './components/docs/docs.routing';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './components/features/features.component';
import { DocsComponent } from './components/docs/docs.component';

const APP_ROUTES: Routes = [
    { path: '', component: DocsComponent },
    { path: 'docs', component: DocsComponent, children: [DOCS_Routing] },
    { path: 'features', component: FeaturesComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);