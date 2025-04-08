import React from 'react';
import { FaListUl, FaCheckSquare, FaTasks } from 'react-icons/fa';

const TaskFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="flex justify-center w-full mb-4">
      <div className="flex justify-center space-x-2">
        <button
          className={`px-4 py-2 rounded flex items-center space-x-2 ${
            filter === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
          onClick={() => onFilterChange('all')}
        >
          <FaListUl />
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
          <FaTasks />
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
          <FaCheckSquare />
          <span>Completadas</span>
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;