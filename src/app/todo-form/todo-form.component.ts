import { Component, OnInit } from '@angular/core';
import Todo from '../model/Todo';
import TodoServices from '../services/TodoServices';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers: [
    TodoServices
  ]
})

export class TodoFormComponent implements OnInit {
  private _title: string = "";
  private _isDone: boolean = false;

  constructor(private todoServices: TodoServices) { }

  handleClick() {
    let todo = new Todo(this._title, this._isDone);
    this.todoServices.addTodo(todo);
  }

  ngOnInit() {
  }

}
