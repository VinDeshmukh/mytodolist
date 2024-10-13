// src/TodoList.js
import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  handleDelete = (index) => {
    this.props.deleteTodo(index);
  };

  render() {
    return (
      <div className="todo-list">
        <h2>Todo List</h2>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="delete-button"
                onClick={() => this.handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
