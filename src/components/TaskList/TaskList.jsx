import React, { useState } from 'react';
import { FaCheck, FaEdit, FaTrash, FaSave, FaTimes, FaRegCircle } from 'react-icons/fa';

function TaskList({ tasks, filter, onTaskUpdate, onTaskDelete }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleEdit = (task) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description);
  };

  const handleSaveEdit = (task) => {
    onTaskUpdate({ ...task, title: editedTitle, description: editedDescription });
    setEditingTaskId(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="card-container">
      {filteredTasks.map(task => (
        <div key={task.id} className="card">
          {editingTaskId === task.id ? (
            <div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="border p-1 mb-1 w-full"
                  style={{ flex: 1, textAlign: 'center' }}
                />
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="border p-1 mb-1 w-full"
                  style={{ flex: 1, textAlign: 'center' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={() => handleSaveEdit(task)}
                  className="bg-blue-500 text-white p-1 rounded mr-2"
                >
                  <FaSave size={16} className="inline-block mr-1" /> Guardar
                </button>
                <button
                  onClick={() => setEditingTaskId(null)}
                  className="bg-gray-300 p-1 rounded"
                >
                  <FaTimes size={16} className="inline-block mr-1" /> Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Fecha de creación: {formatDate(task.createdAt)}</p>
              <button
                onClick={() => onTaskUpdate({ ...task, completed: !task.completed })}
                className="bg-green-500 text-white p-1 rounded mr-2"
              >
                {task.completed ? (
                  <>
                    <FaCheck size={16} className="inline-block mr-1" /> Completada
                  </>
                ) : (
                  <>
                    <FaRegCircle size={16} className="inline-block mr-1" /> Sin completar
                  </>
                )}
              </button>
              <button
                onClick={() => handleEdit(task)}
                className="bg-blue-500 text-white p-1 rounded mr-2"
              >
                <FaEdit size={16} className="inline-block mr-1" /> Editar
              </button>
              <button
                onClick={() => onTaskDelete(task.id)}
                className="bg-red-500 text-white p-1 rounded"
              >
                <FaTrash size={16} className="inline-block mr-1" /> Eliminar
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;