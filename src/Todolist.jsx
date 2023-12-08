
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onToggle, onDelete, onRename }) => {
  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onRename={onRename}
        />
      ))}
    </div>
  );
};

export default TodoList;
