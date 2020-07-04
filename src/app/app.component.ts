import { Component } from '@angular/core';
import {TodoDataService} from '../services/todo-data.service';
import {Todo} from '../models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
})
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
    this.todoDataService = todoDataService;
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodo(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleCompleteStatus(todo);
  }
}
