import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './sidebar/contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordComponent } from './sidebar/dashbord/dashbord.component';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
{ path: 'sidebar', component: SidebarComponent ,

  children: [
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashbordComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // Default child route
]
},



  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];
