import React from 'react';

const StatusBadge = ({ type, value }) => {
  const getBadgeStyles = () => {
    if (type === 'status') {
      switch (value) {
        case 'New':
          return 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse';
        case 'Assigned':
          return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
        case 'Resolved':
          return 'bg-green-500/20 text-green-400 border-green-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    } else if (type === 'connectivity') {
      switch (value) {
        case 'Online':
          return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'Mesh':
          return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
        case 'Offline':
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    }
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getBadgeStyles()}`}>
      {value}
    </span>
  );
};

export default StatusBadge;
