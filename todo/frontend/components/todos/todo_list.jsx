import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos, receiveTodo }) => {
  const list = todos.map(todo => <TodoListItem key={todo.id} todo={todo} />);

  return (
    <ul>
      {list}
    </ul>
  );
};

export default TodoList;
