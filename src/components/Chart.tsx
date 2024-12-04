import React from 'react';

export function Chart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Overview</h3>
      <div className="h-64 flex items-end justify-between space-x-2">
        {[40, 70, 35, 50, 90, 30, 80].map((height, i) => (
          <div key={i} className="w-full">
            <div
              className="bg-blue-500 dark:bg-blue-400 rounded-t transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-500"
              style={{ height: `${height}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
    </div>
  );
}