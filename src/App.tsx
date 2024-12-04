import React from 'react';
import { TodoProvider } from './contexts/TodoContext';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="max-w-2xl mx-auto py-12 px-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Todo List
              </h1>
              <ThemeToggle />
            </div>
            <div className="space-y-6">
              <AddTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;