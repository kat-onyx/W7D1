import React from 'react';


class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.done,
    };

    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    const { done } = this.state;
    this.setState({
      done: !done,
    });
  }

  render() {
    const { todo } = this.props;
    const { done } = this.state;
    return (
      <li>
        {todo.title}
        <button type="submit" onSubmit={this.toggleDone}>{done === true ? 'Undo' : 'Done'}</button>
      </li>
    );
  }
}

export default TodoListItem;
