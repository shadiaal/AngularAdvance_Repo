// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';  
// import { TodoListComponent } from './todo-list/todo-list.component';
// import { StoreModule } from '@ngrx/store';
// import { todoReducer } from './store/todo.reducer';
// @NgModule({
//   declarations: [
//     TodoListComponent,
//     // TodoItemComponent
//   ],
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,  
//     StoreModule.forRoot({ todos: todoReducer })
//   ],
//   providers: [],
//   bootstrap: [TodoListComponent]
// })
// export class AppModule {}
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import { StoreModule } from '@ngrx/store';
// import { todoReducer } from './store/todo.reducer';
// import { AppComponent } from './app.component';
// import { TodoListComponent } from './todo-list/todo-list.component';
// import { CommonModule } from '@angular/common'; 
// @NgModule({
//   declarations: [AppComponent, TodoListComponent],
//   imports: [
//     BrowserModule,
//     CommonModule,
//     ReactiveFormsModule,
//     StoreModule.forRoot({ todos: todoReducer })
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // إضافة
import { StoreModule } from '@ngrx/store'; // إضافة
import { todoReducer } from './store/todo.reducer';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CommonModule } from '@angular/common'; // إضافة

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule, // تأكد من إضافته
    StoreModule.forRoot({ todos: todoReducer }) // تأكد من تهيئة الـ Store
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
