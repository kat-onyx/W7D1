import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => {
  const list = todos.map(todo => <TodoListItem key={todo.id} todo={todo} />);

  return (
    <div>
      <ul>
        {list}
      </ul>

      <TodoForm receiveTodo={receiveTodo} />
    </div>
  );
};

export default TodoList;
