import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodosService } from './todos.service';
import { TodosDropdownService} from './todos-dropdown.service';
import { ITodoList} from './interface/interface1';
import { ITodoType} from './interface/interface2';
import { CommonFunction } from "./common";



declare const alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [TodosService],
})
export class AppComponent implements OnInit{
  /**Public variable */
  todosArray: ITodoList[] = [];
  todoType: ITodoType[] = [];

  private searchData: string;
  todosModel: ITodoList;
  todoDetail: ITodoList;

  // Using constructor, call the todoService.
  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private todoService: TodosService, private todoDropdownService: TodosDropdownService) { }

  ngOnInit() {
    this.todoModel();
    this.todoType = this.todoDropdownService.getTodoType();
    this.todosArray = this.todoService.getTodoList();
  }

  todoModel() {
    /**Define default values */
    return this.todosModel = {
      firstName: '',
      lastName: '',
      email: '',
      dob: new CommonFunction().getCurrentDate()
    };
  };

  /**Add a todo */
  addTodo(values) {
    this.todoDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      dob: values.Dob
    };
    // /**Call function from service. */
    this.todoService.addTodo(this.todoDetail);
    // Using 3rd party library to show message.
    alertify.notify('Todo Added Successfully', 'success', 3);
    this.todoService.getTodoList();
  };

}
  

