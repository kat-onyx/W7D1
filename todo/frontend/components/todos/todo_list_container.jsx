import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
});

const mapDispatchToProp = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
});

const TodoListContainer = connect(mapStateToProps, mapDispatchToProp)(TodoList);

export default TodoListContainer;
