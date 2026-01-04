import React from 'react';
import { Wifi, Radio, WifiOff } from 'lucide-react';

const ConnectivityBadge = ({ type }) => {
  const connectivityConfig = {
    internet: {
      icon: <Wifi className="w-3 h-3" />,
      label: 'Internet',
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/50',
      text: 'text-blue-400'
    },
    mesh: {
      icon: <Radio className="w-3 h-3" />,
      label: 'Mesh',
      bg: 'bg-emerald-500/20',
      border: 'border-emerald-500/50',
      text: 'text-emerald-400'
    },
    offline: {
      icon: <WifiOff className="w-3 h-3" />,
      label: 'Offline',
      bg: 'bg-gray-500/20',
      border: 'border-gray-500/50',
      text: 'text-gray-400'
    }
  };

  const config = connectivityConfig[type] || connectivityConfig.offline;

  return (
    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg font-medium text-xs border ${config.bg} ${config.border} ${config.text} whitespace-nowrap`}>
      {config.icon}
      {config.label}
    </span>
  );
};

export default ConnectivityBadge;
