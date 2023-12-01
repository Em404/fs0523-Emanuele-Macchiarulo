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

  loadTodos(): void {
    this.todoSvc.getToDo().then((todos) => {
      this.todos = todos;
    });
  }

  done(id: number): void {
    this.todoSvc.toggleCompletion(id).then(() => {
      this.loadTodos();
    });
  }

  delete(id: number) {
    if (!id) return;
    this.todoSvc.delete(id).then((res) => {
      this.todos = this.todos.filter((p) => p.id != id);
      alert(`Task con id ${id} eliminato`);
    });
  }

  update() {

  }
}
