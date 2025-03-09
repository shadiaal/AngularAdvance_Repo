// import { createReducer, on } from '@ngrx/store';
// import { addTodo, toggleTodo, deleteTodo } from './todo.actions';
// import { Todo } from '../models/todo.model';

// export interface State {
//   todos: Todo[];
// }

// export const initialState: State = {
//   todos: []
// };

// export const todoReducer = createReducer(
//   initialState,
//   on(addTodo, (state, { todo }) => ({
//     ...state,
//     todos: [...state.todos, todo]
//   })),
//   on(toggleTodo, (state, { id }) => ({
//     ...state,
//     todos: state.todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     )
//   })),
//   on(deleteTodo, (state, { id }) => ({
//     ...state,
//     todos: state.todos.filter(todo => todo.id !== id)
//   }))
// );
import { createReducer, on } from '@ngrx/store';
import { addTodo, toggleTodo, deleteTodo } from './todo.actions'; // تأكد من أن المسار صحيح

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => [...state, todo]),
  on(toggleTodo, (state, { id }) =>
    state.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  ),
  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id))
);
