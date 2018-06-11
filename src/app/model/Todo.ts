export default class Todo {
  private _title:string;
  private _isDone:boolean;

  constructor(title:string, isDone:boolean){
    this._title=title;
    this._isDone=isDone;
  }

  get title() {
    return this._title;
  }

  set title(title:string){
    this._title=title;
  }

  get isDone() {
    return this._isDone;
  }

  set isDone(isDone:boolean){
    this._isDone=isDone;
  }
}
