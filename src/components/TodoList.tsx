import React from 'react';
import { useTodo } from '../contexts/TodoContext';
import { Check, Trash2 } from 'lucide-react';

export function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useTodo();

  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
        No todos yet. Add one above!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center space-x-3">
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                ${
                  todo.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
            >
              {todo.completed && <Check className="w-3 h-3 text-white" />}
            </button>
            <span
              className={`${
                todo.completed
                  ? 'text-gray-400 dark:text-gray-500 line-through'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}