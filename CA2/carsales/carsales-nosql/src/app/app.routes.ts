import { Routes } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', component:CarListComponent},
    { path: 'search', component:CarListComponent},
    { path: 'about', component:AboutComponent}
];
