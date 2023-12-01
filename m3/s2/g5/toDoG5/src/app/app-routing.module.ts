import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { DoneComponent } from './pages/done/done.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    title:'To Do List | To Do!'
  },
  {
    path: 'completed',
    component: DoneComponent,
    title:'To Do List | Completed!'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
