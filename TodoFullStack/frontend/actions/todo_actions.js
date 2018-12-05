import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo,
});

export const fetchAllTodos = () => (dispatch, getState) => {
  APIUtil.fetchAllTodos()
    .then(allTodos => dispatch(receiveTodos(allTodos)));
};

export const createTodo = todo => (dispatch, getState) => {
  APIUtil.createTodo(todo)
    .then(
      todoData => dispatch(receiveTodo(todoData)),
      err => dispatch(receiveErrors(err.responseJSON)),
    ).then(
      () => dispatch(clearErrors()),
    );
};
