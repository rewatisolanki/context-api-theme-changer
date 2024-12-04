import React from 'react';
import { Home, BarChart2, Users, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
];

export function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {navItems.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Icon className="w-4 h-4" />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </nav>
  );
}