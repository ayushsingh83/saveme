import React, { useState } from 'react';
import { Clock, MessageSquare } from 'lucide-react';

const BroadcastHistory = () => {
  const [broadcasts] = useState([
    {
      id: 1,
      title: 'Cyclone Warning - Zone B',
      timestamp: new Date(Date.now() - 5 * 60000),
      engagement: 98.5,
      recipients: 15420,
      message: 'Severe cyclone warning for Zone B. Seek shelter immediately.',
    },
    {
      id: 2,
      title: 'Coastal Flooding Update',
      timestamp: new Date(Date.now() - 25 * 60000),
      engagement: 97.2,
      recipients: 8950,
      message: 'Flood levels rising in coastal areas. Evacuate low-lying regions.',
    },
    {
      id: 3,
      title: 'Emergency Shelter Alert',
      timestamp: new Date(Date.now() - 1.5 * 3600000),
      engagement: 99.1,
      recipients: 12300,
      message: 'Emergency shelter opened at community center. Transport available.',
    },
    {
      id: 4,
      title: 'Evacuation Order Zone A',
      timestamp: new Date(Date.now() - 3 * 3600000),
      engagement: 94.6,
      recipients: 18750,
      message: 'Mandatory evacuation order for Zone A. All residents must leave.',
    },
    {
      id: 5,
      title: 'Road Closure Notice',
      timestamp: new Date(Date.now() - 5.5 * 3600000),
      engagement: 92.8,
      recipients: 25000,
      message: 'Main highway closed due to flooding. Use alternate routes.',
    },
    {
      id: 6,
      title: 'Weather Update',
      timestamp: new Date(Date.now() - 8 * 3600000),
      engagement: 88.3,
      recipients: 6200,
      message: 'Storm expected to weaken by evening. Stay alert.',
    },
    {
      id: 7,
      title: 'Supply Distribution Center',
      timestamp: new Date(Date.now() - 10 * 3600000),
      engagement: 91.5,
      recipients: 9800,
      message: 'Food and water distribution at main plaza. Come prepared.',
    },
  ]);

  const formatTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  return (
    <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700/20">
        <div className="bg-purple-500/10 p-2.5 rounded-lg">
          <Clock className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Broadcast History</h3>
          <p className="text-xs text-gray-400">Recent broadcasts and engagement</p>
        </div>
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        {broadcasts.map((broadcast) => (
          <div
            key={broadcast.id}
            className="bg-slate-800/30 border border-gray-700/40 rounded-lg p-4 hover:border-gray-600/50 transition-all group cursor-pointer"
          >
            {/* Title and Time */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">
                  {broadcast.title}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">{formatTime(broadcast.timestamp)}</p>
              </div>
            </div>

            {/* Message Preview */}
            <p className="text-xs text-gray-400 mb-3 line-clamp-2">
              {broadcast.message}
            </p>

            {/* Engagement Stats */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Engagement</span>
                <span className="text-green-400 font-medium">{broadcast.engagement}%</span>
              </div>
              <div className="w-full bg-slate-700/40 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all"
                  style={{ width: `${broadcast.engagement}%` }}
                />
              </div>
            </div>

            {/* Recipients */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{broadcast.recipients.toLocaleString()} recipients</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-700/20 text-xs text-gray-500 text-center">
        Showing {broadcasts.length} recent broadcasts
      </div>
    </div>
  );
};

export default BroadcastHistory;
