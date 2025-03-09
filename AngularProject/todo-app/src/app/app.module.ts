import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  
import { TodoListComponent } from './todo-list/todo-list.component';


@NgModule({
  declarations: [
    TodoListComponent,
    // TodoItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,  
  
  ],
  providers: [],
  bootstrap: [TodoListComponent]
})
export class AppModule {}
