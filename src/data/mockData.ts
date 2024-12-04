import { Activity, MetricCard } from '../types';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import React from 'react';

export const mockActivities: Activity[] = [
  {
    id: '1',
    userName: 'John Doe',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    type: 'login'
  },
  {
    id: '2',
    userName: 'Alice Smith',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    type: 'purchase'
  },
  {
    id: '3',
    userName: 'Bob Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    type: 'update'
  },
  {
    id: '4',
    userName: 'Emma Wilson',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    type: 'other'
  }
];

export const mockMetrics: MetricCard[] = [
  {
    title: 'Total Users',
    value: '12,345',
    icon: <Users className="w-6 h-6 text-blue-500" />,
    trend: { value: '12% vs last week', positive: true }
  },
  {
    title: 'Revenue',
    value: '$34,567',
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
    trend: { value: '8% vs last week', positive: true }
  },
  {
    title: 'Orders',
    value: '1,234',
    icon: <ShoppingCart className="w-6 h-6 text-purple-500" />,
    trend: { value: '5% vs last week', positive: false }
  },
  {
    title: 'Growth',
    value: '+23.4%',
    icon: <TrendingUp className="w-6 h-6 text-orange-500" />
  }
];