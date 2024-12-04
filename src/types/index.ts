export interface Activity {
  id: string;
  userName: string;
  userAvatar?: string;
  timestamp: Date;
  type: 'login' | 'purchase' | 'update' | 'other';
}

export interface Trend {
  value: string;
  positive: boolean;
}

export interface MetricCard {
  title: string;
  value: string;
  trend?: Trend;
  icon: React.ReactNode;
}