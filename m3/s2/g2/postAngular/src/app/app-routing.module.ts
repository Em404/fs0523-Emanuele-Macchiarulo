import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title:'Home page'
  },
  {
    path:'post-attivi',
    component: ActivePostComponent,
    title:'Pagina post attivi'
  },
  {
    path:'post-inattivi',
    component: InactivePostComponent,
    title:'Pagina post inattivi'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
