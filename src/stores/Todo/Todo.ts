import { makeAutoObservable } from 'mobx';
import { services } from '../../services';
import { TodoProps } from '../../features/TodoProps';

class Todo {
    
  constructor() {
    makeAutoObservable(this);
  }
  
  elements: Array<TodoProps> = [];
  
  setElements = (elements: Array<TodoProps> ) => {
    this.elements = elements;
  };
  
  getElements = () => {
    services.todo.get().then((data) => this.setElements(data.elements));
  };
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createTodo = (todo: TodoProps) => {
    services.todo.post(todo).then((data) => this.setElements(data));
  };
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeTodo = (id: number) => {
    services.todo.remove(id).then((data) => this.setElements(data));
  };
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateTodo = (todo: TodoProps) => {
    services.todo.update(todo).then((data) => this.setElements(data));
  };
    
}

export default new Todo();