import { ITodoList } from './../interface/interface1';
import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 /**Get the todoDetail from todo-app  */
 @Input() todoDetail: ITodoList[];

 private searchData: string;

 ngOnInit() {
   this.searchData = '';
 };

}
