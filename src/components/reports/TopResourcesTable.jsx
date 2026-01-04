import React from 'react';
import { Zap, AlertTriangle, TrendingUp } from 'lucide-react';

const TopResourcesTable = () => {
  const resources = [
    {
      rank: 1,
      name: 'Medical Kits (Large)',
      units: 245,
      utilization: 92,
      status: 'Critical',
      statusColor: 'text-red-400 bg-red-500/10',
    },
    {
      rank: 2,
      name: 'Ambulances',
      units: 187,
      utilization: 85,
      status: 'Normal',
      statusColor: 'text-green-400 bg-green-500/10',
    },
    {
      rank: 3,
      name: 'Water & Food Supplies',
      units: 156,
      utilization: 78,
      status: 'Normal',
      statusColor: 'text-green-400 bg-green-500/10',
    },
    {
      rank: 4,
      name: 'Rescue Equipment',
      utilization: 72,
      units: 124,
      status: 'Normal',
      statusColor: 'text-green-400 bg-green-500/10',
    },
    {
      rank: 5,
      name: 'Shelter Tents',
      units: 98,
      utilization: 65,
      status: 'Normal',
      statusColor: 'text-green-400 bg-green-500/10',
    },
  ];

  return (
    <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700/20">
        <div className="bg-orange-500/10 p-2.5 rounded-lg">
          <Zap className="w-5 h-5 text-orange-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">Top Resources Dispatched</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700/30">
              <th className="text-left py-3 px-3 text-gray-400 font-medium">Rank</th>
              <th className="text-left py-3 px-3 text-gray-400 font-medium">Resource</th>
              <th className="text-center py-3 px-3 text-gray-400 font-medium">Units</th>
              <th className="text-center py-3 px-3 text-gray-400 font-medium">Utilization</th>
              <th className="text-left py-3 px-3 text-gray-400 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.rank} className="border-b border-gray-700/15 hover:bg-gray-800/20 transition-colors">
                <td className="py-3 px-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold">
                    {resource.rank}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <div className="font-medium text-white">{resource.name}</div>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="text-gray-300 font-semibold">{resource.units}</span>
                </td>
                <td className="py-3 px-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-slate-700/40 rounded-full h-2 min-w-20">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all"
                        style={{ width: `${resource.utilization}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-300 font-medium">{resource.utilization}%</span>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${resource.statusColor}`}>
                    {resource.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary footer */}
      <div className="mt-4 pt-4 border-t border-gray-700/20 grid grid-cols-3 gap-4">
        <div>
          <div className="text-xs text-gray-400">Total Units</div>
          <div className="text-lg font-bold text-white">{resources.reduce((sum, r) => sum + r.units, 0)}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Avg Utilization</div>
          <div className="text-lg font-bold text-blue-400">
            {(resources.reduce((sum, r) => sum + r.utilization, 0) / resources.length).toFixed(1)}%
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Critical Items</div>
          <div className="text-lg font-bold text-red-400">
            {resources.filter((r) => r.status === 'Critical').length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopResourcesTable;
