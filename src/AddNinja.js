import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: ''
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    });
  };

  render() {
    return (
      <div className="center col s4 ">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Add Todo: </label>
          <input
            type="text"
            id="content"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
