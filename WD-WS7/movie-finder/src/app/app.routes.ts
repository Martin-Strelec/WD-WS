import { Routes } from '@angular/router';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';

export const routes: Routes = [
    { path: '', component:SearchtitleComponent},
    { path: 'search', component:SearchtitleComponent},
    { path: 'about', component:SearchtitleComponent}
];
