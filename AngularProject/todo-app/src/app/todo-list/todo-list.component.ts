
// import { ReactiveFormsModule } from '@angular/forms'; 
// import { CommonModule } from '@angular/common'; 
// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { addTodo, toggleTodo, deleteTodo } from '../store/todo.actions';
// import { selectAllTodos } from '../store/todo.selectors';
// import { StoreModule } from '@ngrx/store';
// import { Todo } from '../models/todo.model';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-todo-list',
//   templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.css']
// })
// export class TodoListComponent {
//   todoForm: FormGroup;
//   todos$: Observable<Todo[]>;

//   constructor(private fb: FormBuilder, private store: Store) {
//     this.todoForm = this.fb.group({
//       title: ['', Validators.required]
//     });

//     // تأكد من تهيئة todos$ بعد تهيئة store
//     this.todos$ = this.store.select(selectAllTodos);
//   }

//   addTodo(): void {
//     if (this.todoForm.valid) {
//       const newTodo: Todo = {
//         id: Date.now(),
//         title: this.todoForm.value.title,
//         completed: false
//       };
//       this.store.dispatch(addTodo({ todo: newTodo }));
//       this.todoForm.reset();
//     }
//   }
// }

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { addTodo, toggleTodo, deleteTodo } from '../store/todo.actions';
import { selectAllTodos } from '../store/todo.selectors';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoForm: FormGroup;
  todos$: Observable<Todo[]>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required]
    });

    this.todos$ = this.store.select(selectAllTodos);
  }

  addTodo(): void {
    if (this.todoForm.valid) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.todoForm.value.title,
        completed: false
      };
      this.store.dispatch(addTodo({ todo: newTodo }));
      this.todoForm.reset();
    }
  }

  toggleComplete(id: number): void {
    this.store.dispatch(toggleTodo({ id }));
  }

  deleteTask(id: number): void {
    this.store.dispatch(deleteTodo({ id }));
  }
}
