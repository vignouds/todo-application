import Todo from '../model/Todo';

export default class TodoApi {

  private _todos: Array<Todo> = [];

  fetchTodo():Promise<Array<Todo>> {
    return new Promise((resolve)=>{
      setTimeout(()=> {
        resolve(this._todos)
      }, 1);
    });
  }

  addTodo(todo: Todo) {
      this._todos.push(todo)
  }

  removeTodo(todoDel: Todo) {
    this._todos.splice(this._todos.indexOf(todoDel), 1);
  }

}
