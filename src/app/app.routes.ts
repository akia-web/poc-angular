import { Routes } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {path:'contact', component: ContactComponent},
    {path:'', component: HomeComponent},
];
