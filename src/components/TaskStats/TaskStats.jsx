import React from 'react';
import { FaTasks, FaClipboardList } from 'react-icons/fa';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <FaClipboardList className="text-blue-500 text-2xl" />
      <p className="text-lg font-semibold text-gray-700">
        Pendientes: <span className="text-2xl font-bold text-blue-600">{pendingTasks}</span>
      </p>
      <FaTasks className="text-gray-600 text-2xl" />
      <p className="text-lg font-semibold text-gray-700">
        Total: <span className="text-2xl font-bold text-gray-800">{totalTasks}</span>
      </p>
    </div>
  );
};

export default TaskStats;