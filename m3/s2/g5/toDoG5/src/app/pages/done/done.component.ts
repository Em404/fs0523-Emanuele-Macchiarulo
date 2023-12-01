import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss',
})
export class DoneComponent {
  todos: Todo[] = [];
  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.loadDoneTodos();
  }

  loadDoneTodos(): void {
    this.todoSvc.getDone().then((todos) => {
      this.todos = todos;
    });
  }

  restore(id: number) {
    this.todoSvc.toggleCompletion(id).then(() => {
      this.loadDoneTodos();
    });
  }

  delete(id: number | undefined) {
    if (!id) return;
    this.todoSvc.delete(id).then((res) => {
      this.todos = this.todos.filter((p) => p.id != id);
      alert(`Task con id ${id} eliminato`);
    });
  }
}
