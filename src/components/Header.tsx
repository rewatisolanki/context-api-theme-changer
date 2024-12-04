import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Navigation } from './Navigation';
import { Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 w-full py-4 px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Dashboard
          </h1>
          <Navigation />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}