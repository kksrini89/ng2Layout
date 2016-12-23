import { Docs_Routes } from './components/docs/docs.routing';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DocsComponent } from './components/docs/docs.component';
import { FeaturesComponent } from './components/features/features.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'docs', component: DocsComponent, children: Docs_Routes },
    { path: 'features', component: FeaturesComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);