import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TEST
import { receiveTodo, receiveTodos, fetchAllTodos } from './actions/todo_actions';
import allTodos from './reducers/selectors';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TEST
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchAllTodos = fetchAllTodos;


  ReactDOM.render(
    <Root store={store} />,
    root,
  );
});
