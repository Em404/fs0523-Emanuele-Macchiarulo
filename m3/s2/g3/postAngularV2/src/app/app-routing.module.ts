import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActiveComponent } from './components/active/active.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   title:'Home page'
  // },
  {
    path: '',
    component: HomeComponent,
    title:'The POSTS | Home'
  },
  {
    path:'post-attivi',
    component: ActiveComponent,
    title:'The POSTS | Posts attivi'
  },
  {
    path:'post-inattivi',
    component: InactiveComponent,
    title:'The POSTS | Posts inattivi'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
