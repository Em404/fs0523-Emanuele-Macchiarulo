import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor(private todoSvc:TodoService, private router:Router) {}
  newTodo:Partial<Todo> = {
    completed:false
  };

  oldTodo:Todo|null = null;
  loading:boolean = false;

  save(){
    this.loading = true;
    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false
      this.oldTodo = res;
      this.newTodo = {
        completed:false
      }

    })
  }
}
