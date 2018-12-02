import React, { Component } from 'react';
import Todos from './Todos';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    todos: [{ id: 1, content: 'Buy milk' }, { id: 2, content: 'Buy Brade' }]
  };

  addTodo = item => {
    item['id'] = Math.random();
    let todos = [...this.state.todos, item];
    this.setState({
      todos: todos
    });
  };

  deleteTodo = id => {
    console.log(id);
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddNinja addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
