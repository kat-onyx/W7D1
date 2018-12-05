import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodo, fetchAllTodos, createTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors,
});

const mapDispatchToProp = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  fetchAllTodos: todos => dispatch(fetchAllTodos(todos)),
  createTodo: todo => dispatch(createTodo(todo)),
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProp)(TodoList);

export default TodoListContainer;
