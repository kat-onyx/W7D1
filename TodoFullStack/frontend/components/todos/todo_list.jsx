import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    const { fetchAllTodos } = this.props;
    fetchAllTodos();
  }

  render() {
    const {
      todos,
      receiveTodo,
      createTodo,
      errors,
    } = this.props;

    const list = todos.map(todo => <TodoListItem key={todo.id} todo={todo} />);

    return (
      <div>
        <ul>
          {list}
        </ul>

        <TodoForm createTodo={createTodo} errors={errors} />
      </div>
    );
  }
}

export default TodoList;
