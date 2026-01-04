import React from 'react';
import { TrendingUp, Zap, Users, Clock } from 'lucide-react';

const ReportsStatsCards = ({ dateRange = '30' }) => {
  const getStats = () => {
    switch (dateRange) {
      case '7':
        return [
          { icon: TrendingUp, label: 'Total SOS Requests', value: '342', unit: 'last 7 days', color: 'text-blue-400', bgIcon: 'bg-blue-500/10' },
          { icon: Zap, label: 'Resources Dispatched', value: '285', unit: 'units deployed', color: 'text-orange-400', bgIcon: 'bg-orange-500/10' },
          { icon: Users, label: 'Total Volunteer Hours', value: '1,240', unit: 'hours contributed', color: 'text-green-400', bgIcon: 'bg-green-500/10' },
          { icon: Clock, label: 'Avg Response Time', value: '4.2m', unit: 'priority requests', color: 'text-purple-400', bgIcon: 'bg-purple-500/10' },
        ];
      case '90':
        return [
          { icon: TrendingUp, label: 'Total SOS Requests', value: '2,847', unit: 'last 90 days', color: 'text-blue-400', bgIcon: 'bg-blue-500/10' },
          { icon: Zap, label: 'Resources Dispatched', value: '2,156', unit: 'units deployed', color: 'text-orange-400', bgIcon: 'bg-orange-500/10' },
          { icon: Users, label: 'Total Volunteer Hours', value: '12,580', unit: 'hours contributed', color: 'text-green-400', bgIcon: 'bg-green-500/10' },
          { icon: Clock, label: 'Avg Response Time', value: '5.8m', unit: 'priority requests', color: 'text-purple-400', bgIcon: 'bg-purple-500/10' },
        ];
      case '30':
      default:
        return [
          { icon: TrendingUp, label: 'Total SOS Requests', value: '847', unit: 'last 30 days', color: 'text-blue-400', bgIcon: 'bg-blue-500/10' },
          { icon: Zap, label: 'Resources Dispatched', value: '654', unit: 'units deployed', color: 'text-orange-400', bgIcon: 'bg-orange-500/10' },
          { icon: Users, label: 'Total Volunteer Hours', value: '4,320', unit: 'hours contributed', color: 'text-green-400', bgIcon: 'bg-green-500/10' },
          { icon: Clock, label: 'Avg Response Time', value: '4.8m', unit: 'priority requests', color: 'text-purple-400', bgIcon: 'bg-purple-500/10' },
        ];
    }
  };

  const stats = getStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/0 via-transparent to-gray-600/0 group-hover:from-gray-500/10 group-hover:to-gray-500/5 transition-all duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div className={`${stat.bgIcon} p-2.5 rounded-lg transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>

              <div className="mb-2">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </div>

              <div className="text-xs text-gray-500">{stat.unit}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReportsStatsCards;
