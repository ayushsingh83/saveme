import React, { useState } from 'react';
import { Eye, Pause, CheckCircle, Clock, AlertTriangle, Zap } from 'lucide-react';

const LiveAlertsList = ({ alerts = [] }) => {
  const [activeTab, setActiveTab] = useState('all');
  const mockAlerts = alerts.length > 0 ? alerts : [
    {
      id: 1,
      name: 'Cyclone Warning - Zone B',
      type: 'SMS',
      priority: 'critical',
      recipients: 15420,
      delivered: 15210,
      failed: 210,
      status: 'active',
      timestamp: new Date(Date.now() - 5 * 60000),
    },
    {
      id: 2,
      name: 'Coastal Flooding Alert',
      type: 'All',
      priority: 'high',
      recipients: 8950,
      delivered: 8645,
      failed: 305,
      status: 'active',
      timestamp: new Date(Date.now() - 15 * 60000),
    },
    {
      id: 3,
      name: 'Evacuation Order - Zone A',
      type: 'GPS',
      priority: 'critical',
      recipients: 12300,
      delivered: 12180,
      failed: 120,
      status: 'in-progress',
      timestamp: new Date(Date.now() - 45 * 60000),
    },
    {
      id: 4,
      name: 'Storm Surge Update',
      type: 'Push',
      priority: 'high',
      recipients: 25000,
      delivered: 24890,
      failed: 110,
      status: 'in-progress',
      timestamp: new Date(Date.now() - 2 * 3600000),
    },
    {
      id: 5,
      name: 'All Clear - Zone C',
      type: 'All',
      priority: 'low',
      recipients: 18750,
      delivered: 18750,
      failed: 0,
      status: 'resolved',
      timestamp: new Date(Date.now() - 4 * 3600000),
    },
    {
      id: 6,
      name: 'Shelter Opening - Zone D',
      type: 'SMS',
      priority: 'medium',
      recipients: 6200,
      delivered: 6200,
      failed: 0,
      status: 'resolved',
      timestamp: new Date(Date.now() - 6 * 3600000),
    },
  ];

  const tabs = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'resolved', label: 'Resolved' },
  ];

  const filteredAlerts = mockAlerts.filter(
    (alert) => activeTab === 'all' || alert.status === activeTab
  );

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return 'text-red-400 bg-red-500/10 border-red-500/30';
      case 'high':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/30';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'low':
        return 'text-green-400 bg-green-500/10 border-green-500/30';
      default:
        return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active':
        return <Zap className="w-4 h-4 text-green-400 animate-pulse" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-400 animate-pulse" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-gray-400" />;
      default:
        return null;
    }
  };

  const formatTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);

    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  };

  const deliveryRate = (delivered, total) => {
    return ((delivered / total) * 100).toFixed(1);
  };

  return (
    <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/20">
        <div className="bg-blue-500/10 p-2.5 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">Live Alerts</h3>
          <p className="text-xs text-gray-400">Track all active and historical alerts</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border whitespace-nowrap ${
              activeTab === tab.value
                ? 'bg-blue-500/20 border-blue-500/50 text-blue-300'
                : 'bg-slate-800/30 border-gray-700/40 text-gray-400 hover:border-gray-600/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Alerts Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700/30">
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Alert Name</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Priority</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Recipients</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Delivery</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert) => (
                <tr key={alert.id} className="border-b border-gray-700/15 hover:bg-gray-800/20 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-white">{alert.name}</div>
                    <div className="text-xs text-gray-500">{formatTime(alert.timestamp)}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-300">{alert.type}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded border ${getPriorityColor(alert.priority)}`}>
                      {alert.priority.charAt(0).toUpperCase() + alert.priority.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{alert.recipients.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-slate-700/40 rounded-full h-2 min-w-20">
                        <div
                          className="bg-green-500 h-full rounded-full transition-all"
                          style={{
                            width: `${deliveryRate(alert.delivered, alert.recipients)}%`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-green-400">
                        {deliveryRate(alert.delivered, alert.recipients)}%
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(alert.status)}
                      <span className="text-gray-300 text-xs capitalize">{alert.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-400 hover:text-blue-300 transition-colors p-1.5 hover:bg-blue-500/10 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      {alert.status !== 'resolved' && (
                        <button className="text-yellow-400 hover:text-yellow-300 transition-colors p-1.5 hover:bg-yellow-500/10 rounded">
                          <Pause className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-8 text-center text-gray-400">
                  No {activeTab !== 'all' ? activeTab : ''} alerts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary Footer */}
      <div className="mt-4 pt-4 border-t border-gray-700/20 grid grid-cols-3 gap-4">
        <div>
          <div className="text-xs text-gray-400">Total Alerts</div>
          <div className="text-lg font-semibold text-white">{filteredAlerts.length}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Recipients Reached</div>
          <div className="text-lg font-semibold text-green-400">
            {filteredAlerts
              .reduce((sum, a) => sum + a.delivered, 0)
              .toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-400">Avg Delivery Rate</div>
          <div className="text-lg font-semibold text-green-400">
            {(
              filteredAlerts.reduce((sum, a) => sum + deliveryRate(a.delivered, a.recipients), 0) /
              (filteredAlerts.length || 1)
            ).toFixed(1)}
            %
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAlertsList;
