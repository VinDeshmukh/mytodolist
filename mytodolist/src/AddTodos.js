// src/AddTodos.js
import React, { Component } from 'react';
import './AddTodos.css';

class AddTodos extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.trim()) {
      this.props.addTodo(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    return (
      <form className="add-todos" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddTodos;
