import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(property) {
    return (e) => {
      e.preventDefault();
      this.setState({ [property]: e.target.value });
    };
  }


  handleSubmit(e) {
    e.preventDefault();

    const { receiveTodo } = this.props;
    const todo = {
      ...this.state,
      id: new Date().getTime(),
    };

    receiveTodo(todo);

    this.setState({
      title: '',
      body: '',
    });
  }

  renderInputTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="input-title">
        Title:
        <input
          id="input-title"
          type="text"
          value={title}
          onChange={this.handleChange('title')}
        />
      </label>
    );
  }

  renderInputBody() {
    const { body } = this.state;
    return (
      <label htmlFor="input-body">
        Body:
        <input
          id="input-body"
          type="text"
          value={body}
          onChange={this.handleChange('body')}
        />
      </label>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInputTitle()}
        {this.renderInputBody()}

        <button type="submit">Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
