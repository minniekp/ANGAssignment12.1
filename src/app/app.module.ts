import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodosDropdownService } from './todos-dropdown.service';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterTodosPipe } from './filter-todos.pipe';
import { MyUppercasePipe } from './my-uppercase.pipe';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full'},
  { path: 'todos', component: TodosComponent },
  { path: 'todosList', component: TodosListComponent },
  { path: 'taskDetail/:id', component: TaskDetailComponent },
  { path: '**', component: PageNotFoundComponent }
  
];


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FilterTodosPipe,
    MyUppercasePipe,
    TaskDetailComponent,
    TodosListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodosDropdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
