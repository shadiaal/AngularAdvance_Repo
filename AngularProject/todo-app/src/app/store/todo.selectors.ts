import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './todo.reducer';

export const selectTodoState = createFeatureSelector<State>('todos');

export const selectAllTodos = createSelector(
  selectTodoState,
  (state: State) => state.todos
);
