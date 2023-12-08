import React, { useState } from 'react';

const Todo = ({ todo, onToggle, onDelete, onRename }) => {
    const [isEditing, setEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
  
    const handleEdit = () => {
      setEditing(true);
    };
  
    const handleSave = () => {
      onRename(todo.id, newText);
      setEditing(false);
    };
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-2"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="p-1 border rounded"
          />
          <button
            onClick={handleSave}
            className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
            className="mr-2"
          >
            {todo.text}
          </span>
          <button
            onClick={handleEdit}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
