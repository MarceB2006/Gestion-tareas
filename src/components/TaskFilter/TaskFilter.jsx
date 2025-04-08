import React from 'react';
import { FaListUl, FaCheckSquare, FaTasks } from 'react-icons/fa'; // Importa los iconos que necesitas

const TaskFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      <button
        className={`px-4 py-2 rounded flex items-center space-x-2 ${
          filter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        onClick={() => onFilterChange('all')}
      >
        <FaListUl /> {/* Icono para "Todas" */}
        <span>Todas</span>
      </button>
      <button
        className={`px-4 py-2 rounded flex items-center space-x-2 ${
          filter === 'active'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        onClick={() => onFilterChange('active')}
      >
        <FaTasks /> {/* Icono para "Activas" */}
        <span>Activas</span>
      </button>
      <button
        className={`px-4 py-2 rounded flex items-center space-x-2 ${
          filter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        onClick={() => onFilterChange('completed')}
      >
        <FaCheckSquare /> {/* Icono para "Completadas" */}
        <span>Completadas</span>
      </button>
    </div>
  );
};

export default TaskFilter;