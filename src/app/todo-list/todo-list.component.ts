import { Component, OnInit } from '@angular/core';
import Todo from '../model/Todo';
import TodoServices from '../services/TodoServices';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [
    TodoServices
  ]
})

export class TodoListComponent implements OnInit {

  private _todos:Array<Todo>;

  get todos():Array<Todo>{
    return this._todos;
  }

  set todos(value: Array<Todo>){
    this._todos = value;
  }

  handleTodoDeleted(todo){
    this.todoService.removeTodo(todo);
  }

  constructor(private todoService: TodoServices) { }

  ngOnInit() {
      this.todoService.getTodo().then(value => this.todos = value);
  }
}
