import React from 'react';
import { FaTasks, FaClipboardList } from 'react-icons/fa';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div
      className="p-10 bg-white rounded-xl shadow-lg border border-gray-300"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}
    >
      <FaClipboardList className="text-blue-500 text-5xl" />
      <p className="text-2xl font-semibold text-gray-700">
        Pendientes: <span className="text-4xl font-bold text-blue-600">{pendingTasks}</span>
      </p>
      <span className="mx-3"> | </span>
      <FaTasks className="text-gray-600 text-5xl" />
      <p className="text-2xl font-semibold text-gray-700">
        Total: <span className="text-4xl font-bold text-gray-800">{totalTasks}</span>
      </p>
    </div>
  );
};

export default TaskStats;