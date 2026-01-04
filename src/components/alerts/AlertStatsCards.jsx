import React from 'react';
import { AlertTriangle, Send, Radio, CheckCircle } from 'lucide-react';

const AlertStatsCards = () => {
  const cards = [
    {
      icon: AlertTriangle,
      label: 'Total Alerts',
      value: '248',
      subtext: 'All alerts created',
      color: 'from-slate-900/40 to-slate-800/40',
      iconColor: 'text-orange-400',
      bgIcon: 'bg-orange-500/10',
    },
    {
      icon: Send,
      label: 'Alerts Sent',
      value: '198',
      subtext: 'Successfully delivered',
      color: 'from-slate-900/40 to-slate-800/40',
      iconColor: 'text-green-400',
      bgIcon: 'bg-green-500/10',
      badge: 'Active',
    },
    {
      icon: Radio,
      label: 'Broadcasts',
      value: '12',
      subtext: 'Active channels',
      color: 'from-slate-900/40 to-slate-800/40',
      iconColor: 'text-blue-400',
      bgIcon: 'bg-blue-500/10',
    },
    {
      icon: CheckCircle,
      label: 'Delivery Health',
      value: '99.2%',
      subtext: 'System status: Good',
      color: 'from-slate-900/40 to-slate-800/40',
      iconColor: 'text-emerald-400',
      bgIcon: 'bg-emerald-500/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/0 via-transparent to-gray-600/0 group-hover:from-gray-500/10 group-hover:to-gray-500/5 transition-all duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div className={`${card.bgIcon} p-2.5 rounded-lg transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                {card.badge && (
                  <span className="text-xs bg-green-500/20 text-green-300 px-2.5 py-1 rounded-full font-medium border border-green-500/40 animate-pulse">
                    {card.badge}
                  </span>
                )}
              </div>

              <div className="mb-2">
                <div className="text-3xl font-bold text-white">{card.value}</div>
                <div className="text-xs text-gray-400 font-medium">{card.label}</div>
              </div>

              <div className="text-xs text-gray-500">{card.subtext}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlertStatsCards;
