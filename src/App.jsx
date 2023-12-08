
import React, { useState } from 'react';
import TodoList from './Todolist.jsx';


const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo app', completed: true },
  ]);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAdd = (text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, text, completed: false },
    ]);
  };

  const handleRename = (id, text) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onRename={handleRename}
      />
      <div className="mt-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="p-2 border rounded"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
              handleAdd(e.target.value.trim());
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
};

export default App;
