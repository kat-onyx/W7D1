import {
  receiveTodo, receiveTodos, RECEIVE_TODO, RECEIVE_TODOS,
} from '../actions/todo_actions';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false,
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true,
  },
};

const objectTodos = (todos) => {
  const objTodos = {};

  for (let i = 0; i < todos.length; i += 1) {
    const { id } = todos[i];
    const todo = todos[i];

    objTodos[id] = todo;
  }

  return objTodos;
};

const updateTodo = (todo) => {
  const newTodos = {};

  newTodos[todo.id] = todo;

  return newTodos;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      return {
        ...state,
        ...objectTodos(action.todos),
      };
    case RECEIVE_TODO:
      return {
        ...state,
        ...updateTodo(action.todo),
      };
    default:
      return state;
  }
};

export default todosReducer;
