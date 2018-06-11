import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor() { }

  barTitle() {
  this.todo.isDone = !this.todo.isDone;
  }

  @Output()
  todoDeleted:EventEmitter<Todo> = new EventEmitter<Todo>();

  deleteTodo() {
    this.todoDeleted.emit(this.todo);
  }

  ngOnInit() {
  }
}
