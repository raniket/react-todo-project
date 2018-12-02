import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  let todoList = todos.length ? (
    todos.map(todo => (
      <div className="collection-item" key={todo.id}>
        <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
      </div>
    ))
  ) : (
    <p className="center">You don't have any todos.</p>
  );

  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
