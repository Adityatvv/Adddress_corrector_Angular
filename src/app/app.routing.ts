import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

const appRoutes : Routes = [
    {path:'main', component: AppComponent },
    {path:'child', component: ChildComponent},
    {path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);