export class Todo {
  id: number;
  title: string;
  complete: boolean;

  constructor(values: ITodo = {id: '', title: '', complete: false}) {
    Object.assign(this, values);
  }
}

export interface ITodo {
  id: string;
  title: string;
  complete: boolean;
}
