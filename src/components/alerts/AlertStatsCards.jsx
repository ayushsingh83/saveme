import React, { useState, useEffect } from 'react';
import { AlertTriangle, Send, Radio, CheckCircle } from 'lucide-react';
import { dashboardMetricsAPI } from '../../api/apiLoaders';

const AlertStatsCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadAlertStats = async () => {
      try {
        const statsData = await dashboardMetricsAPI.getAlertStats();
        setCards(statsData);
      } catch (error) {
        console.error('Failed to load alert stats:', error);
      }
    };
    loadAlertStats();
  }, []);

  const iconMap = {
    total_alerts: AlertTriangle,
    alerts_sent: Send,
    broadcasts: Radio,
    delivery_health: CheckCircle
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => {
        const Icon = iconMap[card.id];
        return (
          <div
            key={idx}
            className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-600/0 via-transparent to-gray-600/0 group-hover:from-gray-500/10 group-hover:to-gray-500/5 transition-all duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-3">
                <div className={`${card.bg_icon} p-2.5 rounded-lg transition-transform duration-300 group-hover:scale-110`}>
                  {Icon && <Icon className={`w-5 h-5 ${card.icon_color}`} />}
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
