import {Injectable} from '@angular/core';
import Todo from '../Model/Todo';
import TodoApi from './TodoApi';

@Injectable()
export default class TodoService {

  constructor(private todoApi:TodoApi) {}

  getTodo(): Promise<Array<Todo>> {
    return this.todoApi.fetchTodo();
  }

  addTodo(todo: Todo) {
    this.todoApi.addTodo(todo);
  }

removeTodo(todo: Todo) {
    this.todoApi.removeTodo(todo);
  }
}
