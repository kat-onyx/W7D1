import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false,
    };
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({ title: e.target.value });
  }

  renderInputTitle() {
    const { title } = this.state;
    return (
      <input
        type="text"
        value={title}
        onChange={this.handleChange()}
      />
    );
  }

  renderInputBody() {
    const { body } = this.state;
    return (
      <input
        type="text"
        value={body}
        onChange={this.handleChange()}
      />
    );
  }
}
