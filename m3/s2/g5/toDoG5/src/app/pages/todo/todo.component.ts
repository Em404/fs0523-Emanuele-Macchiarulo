import { Todo } from './../../models/todo';
import { TodoService } from './../../services/todo.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todos: Todo[] = [];
  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  // get todo non completati
  loadTodos(): void {
    this.todoSvc.getToDo().then((todos) => {
      this.todos = todos;
    });
  }

  // toggle todo
  done(id: number): void {
    this.todoSvc.toggleCompletion(id).then(() => {
      this.loadTodos();
    });
  }

  // eliminazione todo
  delete(id: number) {
    if (!id) return;
    this.todoSvc.delete(id).then((res) => {
      this.todos = this.todos.filter((p) => p.id != id);
      alert(`Task con id ${id} eliminato`);
    });
  }

  // creazione nuovo todo
  newTodo:Partial<Todo> = {
    completed:false
  };

  oldTodo:Todo|null = null;
  loading:boolean = false;

  // salva nuovo todo
  save(){
    this.loading = true;
    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false
      this.oldTodo = res;
      this.newTodo = {
        completed:false
      }
      this.loadTodos();
    })
  }

}
