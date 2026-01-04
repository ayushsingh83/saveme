import React from 'react';
import { MapPin, Radio, Shield, AlertCircle, Zap } from 'lucide-react';

const DashboardMapPanel = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-gray-700/30 rounded-xl overflow-hidden backdrop-blur-sm">
      {/* Map Container */}
      <div className="relative w-full h-96 bg-gradient-to-br from-slate-950 to-slate-900 border-b border-gray-700/30">
        {/* Mock Map with Disaster Zones */}
        <div className="w-full h-full relative overflow-hidden">
          {/* Gradient background simulating map */}
          <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {/* Map background */}
            <defs>
              <radialGradient id="disaster1" cx="35%" cy="40%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0.05" />
              </radialGradient>
              <radialGradient id="disaster2" cx="70%" cy="60%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.05" />
              </radialGradient>
              <radialGradient id="disaster3" cx="60%" cy="30%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.05" />
              </radialGradient>
            </defs>

            {/* Subtle map base */}
            <rect width="800" height="400" fill="#0f172a" />

            {/* Disaster zones circles */}
            <circle cx="280" cy="160" r="100" fill="url(#disaster1)" />
            <circle cx="560" cy="240" r="80" fill="url(#disaster2)" />
            <circle cx="480" cy="120" r="60" fill="url(#disaster3)" />

            {/* Safe zones (green) */}
            <circle cx="100" cy="80" r="40" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.4" />
            <circle cx="700" cy="320" r="35" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.4" />

            {/* SOS Markers */}
            <g id="sos-markers">
              {/* Red alert markers */}
              <circle cx="280" cy="160" r="8" fill="#dc2626" />
              <circle cx="280" cy="160" r="12" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.5" />

              <circle cx="320" cy="140" r="8" fill="#dc2626" />
              <circle cx="320" cy="140" r="12" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.5" />

              <circle cx="560" cy="240" r="8" fill="#ef4444" />
              <circle cx="560" cy="240" r="12" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
            </g>

            {/* Gateway Markers (Blue) */}
            <g id="gateway-markers">
              <rect x="150" y="250" width="16" height="16" rx="2" fill="#3b82f6" />
              <rect x="650" y="150" width="16" height="16" rx="2" fill="#3b82f6" />
              <rect x="420" y="300" width="16" height="16" rx="2" fill="#3b82f6" />
            </g>

            {/* Mesh connection lines */}
            <g stroke="#10b981" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
              <line x1="280" y1="160" x2="150" y2="250" />
              <line x1="560" y1="240" x2="650" y2="150" />
              <line x1="420" y1="80" x2="420" y2="300" />
            </g>
          </svg>

          {/* Map Controls - Top Right */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-8 h-8 bg-slate-800/80 border border-gray-600/50 rounded-lg flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors">
              <span className="text-sm">+</span>
            </button>
            <button className="w-8 h-8 bg-slate-800/80 border border-gray-600/50 rounded-lg flex items-center justify-center text-gray-300 hover:bg-slate-700 transition-colors">
              <span className="text-sm">−</span>
            </button>
          </div>
        </div>
      </div>

      {/* Legend Section */}
      <div className="p-4 bg-slate-900/40 border-t border-gray-700/30">
        <div className="text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">Legend</div>

        <div className="grid grid-cols-2 gap-3">
          {/* Active SOS */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
            <span className="text-xs text-gray-400">Active SOS</span>
          </div>

          {/* Gateway */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 shadow-lg shadow-blue-500/30"></div>
            <span className="text-xs text-gray-400">Gateway</span>
          </div>

          {/* Safe Zone */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-emerald-500 bg-emerald-500/10"></div>
            <span className="text-xs text-gray-400">Safe Zone</span>
          </div>

          {/* Offline Zone */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-500 bg-gray-500/10"></div>
            <span className="text-xs text-gray-400">Offline Zone</span>
          </div>
        </div>
      </div>

      {/* Map Stats Footer */}
      <div className="grid grid-cols-4 gap-0 border-t border-gray-700/30 text-xs text-gray-400">
        <div className="px-4 py-2 border-r border-gray-700/30 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 text-red-400" />5 Alerts
        </div>
        <div className="px-4 py-2 border-r border-gray-700/30 flex items-center gap-1">
          <MapPin className="w-3 h-3 text-blue-400" />2 Zones
        </div>
        <div className="px-4 py-2 border-r border-gray-700/30 flex items-center gap-1">
          <Radio className="w-3 h-3 text-emerald-400" />Gateway
        </div>
        <div className="px-4 py-2 flex items-center gap-1">
          <Zap className="w-3 h-3 text-orange-400" />Connectivity
        </div>
      </div>
    </div>
  );
};

export default DashboardMapPanel;
