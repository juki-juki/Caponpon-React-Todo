import React, { useState } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/outline';

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
    <div className="flex items-center mb-4 bg-white shadow-md p-4 rounded-lg">
      <div className="flex-grow">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="mr-2 h-6 w-6 text-blue-500 cursor-pointer"
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
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex items-center">
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
                className="mr-2 text-lg font-medium"
              >
                {todo.text}
              </span>
              <span className="text-gray-500 mr-2">{todo.dueDate}</span>
              <PencilIcon
                onClick={handleEdit}
                className="w-6 h-6 text-green-500 cursor-pointer"
              />
              <TrashIcon
                onClick={() => onDelete(todo.id)}
                className="w-6 h-6 text-red-500 cursor-pointer ml-2"
              />
            </div>
          )}
        </div>
        <p className="text-gray-500 mt-2 text-sm">{todo.description}</p>
      </div>
    </div>
  );
};

export default Todo;
