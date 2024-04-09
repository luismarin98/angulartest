import { Routes } from '@angular/router';
import { HomeComponent } from './src/home/home.component';
import { AboutComponent } from './src/about/about.component';
import { ContactComponent } from './src/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: AboutComponent},
    { path: 'contacto', component: ContactComponent}
];
