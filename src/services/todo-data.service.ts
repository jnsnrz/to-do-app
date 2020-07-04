import { Injectable } from '@angular/core';
import {ITodo, Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId = 0;
  todos: Todo[] = [];

  constructor() { }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(item => item.id === id).pop();
  }

  addTodo(item: Todo): TodoDataService {
    if (!item.id) {
      item.id = ++this.lastId;
    }
    this.todos.push(item);
    return this;
  }

  updateTodo(id: number, values: {}): Todo {
    const todo = this.getTodoById(id);

    if (!todo) {
      return null;
    }

    Object.assign(todo, values);

    return todo;
  }

  deleteTodo(id: number): TodoDataService {
    this.todos = this.todos.filter(item => item.id !== id);
    return this;
  }

  toggleCompleteStatus(todo: Todo): Todo {
    return this.updateTodo(todo.id, {complete: !todo.complete});
  }
}
