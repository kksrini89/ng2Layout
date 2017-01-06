import { RouterModule, Routes } from '@angular/router';
import { Docs_Routes } from './components/docs/docs.routing';

import { HomeComponent } from './components/home/home.component';
import { DocsComponent } from './components/docs/docs.component';
import { FeaturesComponent } from './components/features/features.component';
import { SystemRequirementsComponent } from './components/features/system-requirements.component';
import { ComparisonComponent } from './components/features/comparison.component';
import { ActivateCodeBhagatComponent } from './components/features/activate-code-bhagat.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'docs', component: DocsComponent, children: Docs_Routes },
    { path: 'features', component: FeaturesComponent },
    { path: 'comparison', component: ComparisonComponent },
    { path: 'systemRequirements', component: SystemRequirementsComponent },
    { path: 'activateCodeBhagat', component: ActivateCodeBhagatComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);