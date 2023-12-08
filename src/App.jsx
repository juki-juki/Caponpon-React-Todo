// src/App.js
import React, { useState } from 'react';
import TodoList from './Todolist';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      completed: false,
      dueDate: '2023-12-31',
      description: 'Start learning React for web development.',
    },
    {
      id: 2,
      text: 'Build a Todo app',
      completed: true,
      dueDate: '2023-12-15',
      description: 'Create a simple Todo app using React.',
    },
  ]);

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleAdd = (text, dueDate, description) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        text,
        completed: false,
        dueDate: dueDate || null,
        description: description || '',
      },
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

  const calculateProgress = () => {
    const totalTasks = todos.length;
    const completedTasks = todos.filter((todo) => todo.completed).length;

    return totalTasks === 0 ? 0 : Math.floor((completedTasks / totalTasks) * 100);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <progress className="w-full" value={calculateProgress()} max="100">
          {calculateProgress()}%
        </progress>
      </div>
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onRename={handleRename}
      />
      <div className="mt-4">
        <input
          type="text"
          placeholder="Task name"
          className="p-2 border rounded mb-2"
        />
        <input
          type="date"
          placeholder="Due date"
          className="p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Task description"
          className="p-2 border rounded mb-2"
        ></textarea>
        <button
          onClick={() => {
            // Extract values from input fields
            const nameInput = document.querySelector('input[placeholder="Task name"]');
            const dueDateInput = document.querySelector('input[placeholder="Due date"]');
            const descriptionInput = document.querySelector('textarea[placeholder="Task description"]');
            
            const name = nameInput.value.trim();
            const dueDate = dueDateInput.value.trim();
            const description = descriptionInput.value.trim();

            // Check if name is not empty
            if (name) {
              handleAdd(name, dueDate, description);

              // Clear input fields
              nameInput.value = '';
              dueDateInput.value = '';
              descriptionInput.value = '';
            }
          }}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default App;
