import React, { useState } from 'react';
import { RefreshCw, Send, Search } from 'lucide-react';
import AlertStatsCards from '../../components/alerts/AlertStatsCards';
import CreateAlertForm from '../../components/alerts/CreateAlertForm';
import LiveAlertsList from '../../components/alerts/LiveAlertsList';
import BroadcastHistory from '../../components/alerts/BroadcastHistory';
import DeliveryStats from '../../components/alerts/DeliveryStats';

const AlertsBroadcastPage = () => {
  const [alerts, setAlerts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleSendAlert = (alertData) => {
    setAlerts((prev) => [
      {
        id: prev.length + 1,
        name: alertData.message.substring(0, 50) + (alertData.message.length > 50 ? '...' : ''),
        type: alertData.deliveryMode === 'all' ? 'All' : alertData.deliveryMode.toUpperCase(),
        priority: alertData.priority,
        recipients: Math.floor(Math.random() * 20000) + 5000,
        delivered: Math.floor(Math.random() * 15000) + 4500,
        failed: Math.floor(Math.random() * 500),
        status: 'active',
        timestamp: new Date(),
      },
      ...prev,
    ]);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Alerts & Broadcasts</h1>
              <p className="text-gray-400">Manage and broadcast critical alerts to all areas</p>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search alerts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-800/50 border border-gray-700/40 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none transition-colors duration-200 w-64"
                />
              </div>

              {/* Refresh Button */}
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                  isRefreshing
                    ? 'bg-gray-700/30 border-gray-700/30 text-gray-500 cursor-not-allowed'
                    : 'bg-slate-800/50 border-gray-700/40 text-gray-300 hover:border-gray-600/50 hover:text-white'
                }`}
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline text-sm font-medium">Refresh</span>
              </button>

              {/* Send Alert (Primary) */}
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 hover:bg-red-500/30 hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-200 font-medium">
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">New Alert</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="mb-6">
          <AlertStatsCards />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Create Alert Form - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <CreateAlertForm onSendAlert={handleSendAlert} />
          </div>

          {/* Broadcast History - Takes 1 column */}
          <div className="lg:col-span-1">
            <BroadcastHistory />
          </div>
        </div>

        {/* Live Alerts List */}
        <div className="mb-6">
          <LiveAlertsList alerts={alerts} />
        </div>

        {/* Delivery Analytics */}
        <div className="mb-6">
          <DeliveryStats />
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-600 py-4 border-t border-gray-800">
          <p>Emergency Alert System - All alerts are recorded and tracked for audit purposes</p>
        </div>
      </div>
    </div>
  );
};

export default AlertsBroadcastPage;
