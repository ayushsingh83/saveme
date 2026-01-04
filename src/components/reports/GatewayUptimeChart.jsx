import React from 'react';
import { Activity, TrendingUp } from 'lucide-react';

const GatewayUptimeChart = () => {
  const uptimeData = [
    { gateway: 'Gateway A', uptime: 99.8, incidents: 1, status: 'Excellent' },
    { gateway: 'Gateway B', uptime: 99.2, incidents: 3, status: 'Good' },
    { gateway: 'Gateway C', uptime: 98.5, incidents: 5, status: 'Good' },
    { gateway: 'Gateway D', uptime: 97.8, incidents: 8, status: 'Stable' },
  ];

  const avgUptime = (uptimeData.reduce((sum, gw) => sum + gw.uptime, 0) / uptimeData.length).toFixed(1);

  const getStatusColor = (uptime) => {
    if (uptime >= 99.5) return 'text-green-400 bg-green-500/10';
    if (uptime >= 99) return 'text-emerald-400 bg-emerald-500/10';
    if (uptime >= 98) return 'text-yellow-400 bg-yellow-500/10';
    return 'text-orange-400 bg-orange-500/10';
  };

  return (
    <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700/20">
        <div className="bg-cyan-500/10 p-2.5 rounded-lg">
          <Activity className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Gateway Network Uptime</h3>
          <p className="text-xs text-gray-400">Last 30 days availability</p>
        </div>
      </div>

      {/* Overall stats */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        <div className="bg-slate-800/30 rounded-lg p-3 text-center">
          <div className="text-3xl font-bold text-green-400">{avgUptime}%</div>
          <div className="text-xs text-gray-400 mt-1">Avg Uptime</div>
        </div>
        <div className="bg-slate-800/30 rounded-lg p-3 text-center">
          <div className="text-3xl font-bold text-cyan-400">4</div>
          <div className="text-xs text-gray-400 mt-1">Active Gateways</div>
        </div>
        <div className="bg-slate-800/30 rounded-lg p-3 text-center">
          <div className="text-3xl font-bold text-orange-400">17</div>
          <div className="text-xs text-gray-400 mt-1">Total Incidents</div>
        </div>
      </div>

      {/* Individual gateway stats */}
      <div className="space-y-3">
        {uptimeData.map((gw, idx) => (
          <div key={idx} className="bg-slate-800/20 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium text-white text-sm">{gw.gateway}</div>
              <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(gw.uptime)}`}>
                {gw.status}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-700/40 rounded-full h-2 mb-2">
              <div
                className="bg-gradient-to-r from-green-500 to-cyan-500 h-full rounded-full transition-all"
                style={{ width: `${gw.uptime}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Uptime: {gw.uptime}%</span>
              <span className="text-gray-500">{gw.incidents} incidents</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GatewayUptimeChart;
