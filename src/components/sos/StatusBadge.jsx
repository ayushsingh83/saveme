import React from 'react';

const StatusBadge = ({ type, value }) => {
  const getBadgeStyles = () => {
    if (type === 'status') {
      // Handle both 'New' and 'new', 'Assigned' and 'assigned', etc.
      const normalizedValue = String(value).toLowerCase();
      switch (normalizedValue) {
        case 'new':
          return 'bg-red-500/20 text-red-400 border-red-500/30 animate-pulse';
        case 'assigned':
          return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
        case 'resolved':
          return 'bg-green-500/20 text-green-400 border-green-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    } else if (type === 'connectivity') {
      const normalizedValue = String(value).toLowerCase();
      switch (normalizedValue) {
        case 'online':
          return 'bg-green-500/20 text-green-400 border-green-500/30';
        case 'mesh':
          return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
        case 'offline':
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
        default:
          return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      }
    }
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  // Format display value
  const getDisplayValue = () => {
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getBadgeStyles()}`}>
      {getDisplayValue()}
    </span>
  );
};

export default StatusBadge;
