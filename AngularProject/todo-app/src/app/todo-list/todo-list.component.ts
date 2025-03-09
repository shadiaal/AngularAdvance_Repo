import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-todo-list',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required]]  
    });
  }

  ngOnInit(): void {}

  addTodo(): void {
    if (this.todoForm.valid) {
      console.log(this.todoForm.value.title); 
      this.todoForm.reset(); 
    }
  }
}





