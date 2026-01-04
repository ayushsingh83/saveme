import React from 'react';
import { Radio, Smartphone, Wifi, Battery, Activity, Settings } from 'lucide-react';

const MeshNetworkCard = () => {
  const [settings, setSettings] = React.useState({
    autoGateway: true,
    relayOptimization: true
  });

  return (
    <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-gray-700/30 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-emerald-400" />
          <h3 className="text-lg font-semibold text-white">Mesh Network Status</h3>
        </div>
        <div className="flex items-center gap-1 px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span className="text-xs font-medium text-emerald-300">Active</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Connected Devices */}
        <div className="bg-slate-800/30 border border-gray-700/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Connected Devices</span>
            <Smartphone className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">26</div>
          <div className="text-xs text-gray-500 mt-1">+2 in last 5m</div>
        </div>

        {/* Active Gateways */}
        <div className="bg-slate-800/30 border border-gray-700/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Active Gateways</span>
            <Radio className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-white">3</div>
          <div className="text-xs text-gray-500 mt-1">All optimal</div>
        </div>

        {/* Avg Battery */}
        <div className="bg-slate-800/30 border border-gray-700/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Battery Level</span>
            <Battery className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-white">87%</div>
          <div className="text-xs text-gray-500 mt-1">Average</div>
        </div>

        {/* Data Relay */}
        <div className="bg-slate-800/30 border border-gray-700/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Data Relay</span>
            <Activity className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">145<span className="text-lg text-gray-400">/s</span></div>
          <div className="text-xs text-gray-500 mt-1">Packets</div>
        </div>
      </div>

      {/* Settings Toggles */}
      <div className="space-y-3 pt-4 border-t border-gray-700/30">
        {/* Auto Gateway Selection */}
        <div className="flex items-center justify-between p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-colors">
          <div className="flex items-center gap-3">
            <Settings className="w-4 h-4 text-gray-400" />
            <div>
              <div className="text-sm font-medium text-white">Auto Gateway Selection</div>
              <div className="text-xs text-gray-500">Automatically switch to best gateway</div>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.autoGateway}
              onChange={(e) => setSettings({ ...settings, autoGateway: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
          </label>
        </div>

        {/* Relay Optimization */}
        <div className="flex items-center justify-between p-3 bg-slate-800/20 rounded-lg hover:bg-slate-800/40 transition-colors">
          <div className="flex items-center gap-3">
            <Wifi className="w-4 h-4 text-gray-400" />
            <div>
              <div className="text-sm font-medium text-white">Relay Optimization</div>
              <div className="text-xs text-gray-500">Optimize data relay routes</div>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.relayOptimization}
              onChange={(e) => setSettings({ ...settings, relayOptimization: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-600"></div>
          </label>
        </div>
      </div>

      {/* Device Health Indicator */}
      <div className="mt-4 p-3 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span className="text-xs font-medium text-emerald-300">System Health: Excellent</span>
        </div>
        <div className="w-full bg-slate-800/50 rounded-full h-1.5">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-1.5 rounded-full" style={{ width: '95%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default MeshNetworkCard;
