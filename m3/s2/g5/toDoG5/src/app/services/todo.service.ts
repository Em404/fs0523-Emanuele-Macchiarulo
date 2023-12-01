import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  apiUrl: string = 'http://localhost:3000/todos';

  getAll(): Promise<Todo[]> {
    return fetch(this.apiUrl).then((res) => res.json());
  }

  getById(id: number): Promise<Todo> {
    return fetch(this.apiUrl + `/${id}`).then((res) => res.json());
  }

  getToDo(): Promise<Todo[]> {
    const url = `${this.apiUrl}?completed=false`;
    return fetch(url).then((response) => response.json());
  }

  getDone(): Promise<Todo[]> {
    const url = `${this.apiUrl}?completed=true`;
    return fetch(url).then((response) => response.json());
  }

  create(todo: Partial<Todo>): Promise<Todo> {
    todo = this.toBoolean(todo);
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then((res) => res.json());
  }

  delete(id: number): Promise<Todo> {
    return fetch(this.apiUrl + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  toBoolean<T>(todo: Partial<Todo>) {
    todo.completed = Boolean(Number(todo.completed));
    return todo as T;
  }

  toggleCompletion(id: number): Promise<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return fetch(url)
      .then((response) => response.json())
      .then((todo: Todo) => {
        todo.completed = !todo.completed;
        return fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ completed: todo.completed }),
        }).then((response) => response.json());
      });
  }
}
