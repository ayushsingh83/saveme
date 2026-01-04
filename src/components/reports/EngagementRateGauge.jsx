import React from 'react';

const EngagementRateGauge = () => {
  const engagement = 78;

  const getStatus = (value) => {
    if (value >= 85) return { label: 'Good', color: 'text-green-400 bg-green-500/10' };
    if (value >= 70) return { label: 'Stable', color: 'text-blue-400 bg-blue-500/10' };
    if (value >= 50) return { label: 'Degraded', color: 'text-yellow-400 bg-yellow-500/10' };
    return { label: 'Critical', color: 'text-red-400 bg-red-500/10' };
  };

  const status = getStatus(engagement);
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (engagement / 100) * circumference;

  return (
    <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
      <h3 className="text-lg font-semibold text-white mb-4 text-center">Volunteer Engagement Rate</h3>

      {/* Circular Gauge */}
      <div className="flex justify-center items-center mb-6">
        <div className="relative w-40 h-40">
          <svg width="160" height="160" style={{ transform: 'rotate(-90deg)' }}>
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="45"
              fill="none"
              stroke="rgba(107, 114, 128, 0.2)"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">{engagement}</div>
              <div className="text-xs text-gray-400">Percent</div>
            </div>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className="text-center mb-4">
        <div className={`inline-block text-sm px-3 py-1 rounded-full border font-medium ${status.color}`}>
          Status: {status.label}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-slate-800/30 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-cyan-400">156</div>
          <div className="text-gray-400">Active Volunteers</div>
        </div>
        <div className="bg-slate-800/30 rounded-lg p-2 text-center">
          <div className="text-lg font-bold text-green-400">89%</div>
          <div className="text-gray-400">Availability</div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="mt-4 pt-4 border-t border-gray-700/20 space-y-2 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Active in Operations</span>
          <span className="text-cyan-400 font-semibold">156 / 156</span>
        </div>
        <div className="w-full bg-slate-700/40 rounded-full h-1.5">
          <div className="bg-cyan-500 h-full rounded-full" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default EngagementRateGauge;
