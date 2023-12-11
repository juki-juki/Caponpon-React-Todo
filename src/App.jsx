
import React, { useState } from 'react';
import TodoList from './Todolist';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Learn React',
      completed: false,
      dueDate: '2023-12-31',
      description: 'Refresher',
    },
    {
      id: 2,
      text: 'Build a Todo app',
      completed: true,
      dueDate: '2023-12-15',
      description: 'Submission Dec 11, 7PM.',
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
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Todo List</h1>
      <div className="mb-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-teal-600">
                {calculateProgress()}%
              </span>
            </div>
          </div>
          <div className="flex mb-2">
            <div className="w-full bg-gray-200 rounded-full">
              <div
                className="w-full h-2 bg-teal-600 rounded-full"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>
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
          className="p-2 border rounded mb-2 w-full"
        />
        <input
          type="date"
          placeholder="Due date"
          className="p-2 border rounded mb-2 w-full"
        />
        <textarea
          placeholder="Task description"
          className="p-2 border rounded mb-2 w-full"
        ></textarea>
        <button
          onClick={() => {
          
            const nameInput = document.querySelector('input[placeholder="Task name"]');
            const dueDateInput = document.querySelector('input[placeholder="Due date"]');
            const descriptionInput = document.querySelector('textarea[placeholder="Task description"]');
            
            const name = nameInput.value.trim();
            const dueDate = dueDateInput.value.trim();
            const description = descriptionInput.value.trim();

            if (name) {
              handleAdd(name, dueDate, description);

              nameInput.value = '';
              dueDateInput.value = '';
              descriptionInput.value = '';
            }
          }}
          className="p-2 bg-blue-500 text-white rounded w-full"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default App;
