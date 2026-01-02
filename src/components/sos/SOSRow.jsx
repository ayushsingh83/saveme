import React from 'react';
import StatusBadge from './StatusBadge';

const SOSRow = ({ data, onAssign, onResolve }) => {
  const timeSinceTriggered = () => {
    const now = new Date();
    const triggered = new Date(data.triggeredAt);
    const diffMs = now - triggered;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 1) return 'Just now';
    if (diffMins === 1) return '1 min ago';
    return `${diffMins} min ago`;
  };

  const getEmergencyTypeColor = (type) => {
    switch (type) {
      case 'Medical': return 'text-red-400';
      case 'Fire': return 'text-orange-400';
      case 'Flood': return 'text-blue-400';
      case 'Trapped': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getEmergencyIcon = (type) => {
    switch (type) {
      case 'Medical': return '🏥';
      case 'Fire': return '🔥';
      case 'Flood': return '🌊';
      case 'Trapped': return '🏔️';
      default: return '⚠️';
    }
  };

  return (
    <tr className="hover:bg-gray-700/20 transition-colors duration-200">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-white">{data.sosId}</div>
        <div className="text-sm text-gray-400">{data.userId}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <span className="text-lg mr-2">{getEmergencyIcon(data.emergencyType)}</span>
          <span className={`text-sm font-medium ${getEmergencyTypeColor(data.emergencyType)}`}>
            {data.emergencyType}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
        {data.location}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
        {timeSinceTriggered()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge type="connectivity" value={data.connectivity} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge type="status" value={data.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          {data.status === 'New' && (
            <button
              onClick={() => onAssign(data.sosId)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md transition-colors duration-200"
            >
              Assign
            </button>
          )}
          {data.status !== 'Resolved' && (
            <button
              onClick={() => onResolve(data.sosId)}
              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded-md transition-colors duration-200"
            >
              Resolve
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default SOSRow;
