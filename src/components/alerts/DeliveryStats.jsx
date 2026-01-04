import React, { useMemo } from 'react';
import { BarChart3, PieChart as PieChartIcon } from 'lucide-react';

const DeliveryStats = () => {
  const deliveryData = useMemo(
    () => ({
      sent: 24580,
      failed: 820,
      byType: {
        sms: { count: 12300, delivery: 98.5 },
        push: { count: 8950, delivery: 97.2 },
        gps: { count: 3330, delivery: 99.1 },
      },
    }),
    []
  );

  const successRate = (deliveryData.sent / (deliveryData.sent + deliveryData.failed)) * 100;

  const totalByType = Object.values(deliveryData.byType).reduce(
    (sum, type) => sum + type.count,
    0
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Sent vs Failed */}
      <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/20">
          <div className="bg-emerald-500/10 p-2.5 rounded-lg">
            <BarChart3 className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold text-white">Delivery Performance</h3>
        </div>

        {/* Bar visualization */}
        <div className="space-y-4">
          {/* Sent Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Successfully Sent</span>
              <span className="text-lg font-bold text-green-400">{deliveryData.sent.toLocaleString()}</span>
            </div>
            <div className="w-full bg-slate-700/40 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full" style={{ width: '100%' }} />
            </div>
          </div>

          {/* Failed Bar */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Failed / Pending</span>
              <span className="text-lg font-bold text-red-400">{deliveryData.failed.toLocaleString()}</span>
            </div>
            <div className="w-full bg-slate-700/40 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-red-500 to-orange-500 h-full rounded-full"
                style={{
                  width: `${(deliveryData.failed / (deliveryData.sent + deliveryData.failed)) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Success Rate Summary */}
        <div className="mt-6 pt-6 border-t border-gray-700/20">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Overall Success Rate</span>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-green-400">{successRate.toFixed(1)}%</div>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Out of {(deliveryData.sent + deliveryData.failed).toLocaleString()} total delivery attempts
          </div>
        </div>
      </div>

      {/* Type Breakdown */}
      <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/20">
          <div className="bg-cyan-500/10 p-2.5 rounded-lg">
            <PieChartIcon className="w-5 h-5 text-cyan-400" />
          </div>
          <h3 className="text-lg font-semibold text-white">Alert Types Breakdown</h3>
        </div>

        {/* Type breakdowns */}
        <div className="space-y-4">
          {/* SMS */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-300">SMS</span>
              </div>
              <span className="font-semibold text-blue-400">{deliveryData.byType.sms.count.toLocaleString()}</span>
            </div>
            <div className="w-full bg-slate-700/40 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full"
                style={{ width: `${(deliveryData.byType.sms.count / totalByType) * 100}%` }}
              />
            </div>
            <div className="mt-1 text-xs text-gray-500">
              {deliveryData.byType.sms.delivery}% delivery success
            </div>
          </div>

          {/* Push Notifications */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-sm text-gray-300">Push Notifications</span>
              </div>
              <span className="font-semibold text-purple-400">{deliveryData.byType.push.count.toLocaleString()}</span>
            </div>
            <div className="w-full bg-slate-700/40 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-purple-500 h-full rounded-full"
                style={{ width: `${(deliveryData.byType.push.count / totalByType) * 100}%` }}
              />
            </div>
            <div className="mt-1 text-xs text-gray-500">
              {deliveryData.byType.push.delivery}% delivery success
            </div>
          </div>

          {/* GPS Alerts */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-sm text-gray-300">GPS Alerts</span>
              </div>
              <span className="font-semibold text-orange-400">{deliveryData.byType.gps.count.toLocaleString()}</span>
            </div>
            <div className="w-full bg-slate-700/40 rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-orange-500 h-full rounded-full"
                style={{ width: `${(deliveryData.byType.gps.count / totalByType) * 100}%` }}
              />
            </div>
            <div className="mt-1 text-xs text-gray-500">
              {deliveryData.byType.gps.delivery}% delivery success
            </div>
          </div>
        </div>

        {/* Total count */}
        <div className="mt-6 pt-6 border-t border-gray-700/20">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-300">Total Alerts Sent</span>
            <span className="font-bold text-white">{totalByType.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStats;
