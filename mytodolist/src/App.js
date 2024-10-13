import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodos from './AddTodos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  addTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = (index) => {
    this.setState((prevState) => {
      const todos = [...prevState.todos];
      todos.splice(index, 1);
      return { todos };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List App</h1>
          <AddTodos addTodo={this.addTodo} />
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </header>
      </div>
    );
  }
}

export default App;
