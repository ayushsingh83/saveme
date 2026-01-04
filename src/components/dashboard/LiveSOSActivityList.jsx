import React, { useState } from 'react';
import { Clock, MapPin, Phone, HelpCircle } from 'lucide-react';

const LiveSOSActivityList = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const allSosRequests = [
    {
      id: 1,
      name: 'Abby Johnson',
      avatar: 'AJ',
      emergencyType: 'Medical',
      location: 'Medical Clinic K.',
      timeElapsed: '8 min',
      distance: '1.2 km',
      status: 'assigned',
      assignedTo: 'John M.',
      bgColor: 'from-red-500/20 to-red-600/10',
      textColor: 'text-red-400',
      statusColor: 'bg-yellow-500/20 text-yellow-400'
    },
    {
      id: 2,
      name: 'Cherry Patel',
      avatar: 'CP',
      emergencyType: 'Flood',
      location: 'Flood Zone B',
      timeElapsed: '10 min',
      distance: '840 m',
      status: 'in-progress',
      assignedTo: 'Ryan M.',
      bgColor: 'from-blue-500/20 to-blue-600/10',
      textColor: 'text-blue-400',
      statusColor: 'bg-blue-500/20 text-blue-400'
    },
    {
      id: 3,
      name: 'Taylor Wilson',
      avatar: 'TW',
      emergencyType: 'Trapped',
      location: 'Ryan M.',
      timeElapsed: '2 hr',
      distance: '5.2 km',
      status: 'new',
      assignedTo: null,
      bgColor: 'from-purple-500/20 to-purple-600/10',
      textColor: 'text-purple-400',
      statusColor: 'bg-red-500/20 text-red-400'
    },
    {
      id: 4,
      name: 'Raheel Bhaskar',
      avatar: 'RB',
      emergencyType: 'Fire',
      location: '5.7 km',
      timeElapsed: '1 hr',
      distance: '9.2 km',
      status: 'assigned',
      assignedTo: 'Michael K.',
      bgColor: 'from-orange-500/20 to-orange-600/10',
      textColor: 'text-orange-400',
      statusColor: 'bg-yellow-500/20 text-yellow-400'
    },
    {
      id: 5,
      name: 'Judy Smith',
      avatar: 'JS',
      emergencyType: 'Offline',
      location: '280 m',
      timeElapsed: '18 min',
      distance: '2.1 km',
      status: 'offline',
      assignedTo: null,
      bgColor: 'from-gray-500/20 to-gray-600/10',
      textColor: 'text-gray-400',
      statusColor: 'bg-gray-500/20 text-gray-300'
    },
    {
      id: 6,
      name: 'Judy Smith',
      avatar: 'JS',
      emergencyType: 'Offline',
      location: '280 m',
      timeElapsed: '18 min',
      distance: '2.1 km',
      status: 'offline',
      assignedTo: null,
      bgColor: 'from-gray-500/20 to-gray-600/10',
      textColor: 'text-gray-400',
      statusColor: 'bg-gray-500/20 text-gray-300'
    },
    {
      id: 7,
      name: 'Judy Smith',
      avatar: 'JS',
      emergencyType: 'Offline',
      location: '280 m',
      timeElapsed: '18 min',
      distance: '2.1 km',
      status: 'offline',
      assignedTo: null,
      bgColor: 'from-gray-500/20 to-gray-600/10',
      textColor: 'text-gray-400',
      statusColor: 'bg-gray-500/20 text-gray-300'
    }
  ];

  const filteredRequests = allSosRequests.filter(sos => {
    if (activeFilter === 'all') return true;
    return sos.status === activeFilter;
  });

  const getEmergencyIcon = (type) => {
    switch (type) {
      case 'Medical':
        return '🏥';
      case 'Fire':
        return '🔥';
      case 'Flood':
        return '🌊';
      case 'Trapped':
        return '🏔️';
      case 'Offline':
        return '📵';
      default:
        return '⚠️';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'new':
        return { bg: 'bg-red-500/20', text: 'text-red-400', label: 'New' };
      case 'assigned':
        return { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Assigned' };
      case 'in-progress':
        return { bg: 'bg-blue-500/20', text: 'text-blue-400', label: 'In Progress' };
      case 'resolved':
        return { bg: 'bg-green-500/20', text: 'text-green-400', label: 'Resolved' };
      case 'offline':
        return { bg: 'bg-gray-500/20', text: 'text-gray-300', label: 'Offline' };
      default:
        return { bg: 'bg-gray-500/20', text: 'text-gray-300', label: 'Unknown' };
    }
  };

  const filters = [
    { id: 'all', label: 'All', count: allSosRequests.length },
    { id: 'new', label: 'New', count: allSosRequests.filter(s => s.status === 'new').length },
    { id: 'assigned', label: 'Assigned', count: allSosRequests.filter(s => s.status === 'assigned').length },
    { id: 'in-progress', label: 'In Progress', count: allSosRequests.filter(s => s.status === 'in-progress').length },
    { id: 'resolved', label: 'Resolved', count: allSosRequests.filter(s => s.status === 'resolved').length }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Tab Filters - Fixed at Top */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 flex-shrink-0 border-b border-gray-700/30 mb-4">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 border ${
              activeFilter === filter.id
                ? 'bg-blue-600/40 border-blue-500/60 text-blue-200'
                : 'bg-slate-800/30 border-gray-700/30 text-gray-400 hover:bg-slate-800/50 hover:border-gray-600/50'
            }`}
          >
            {filter.label} <span className={`ml-1 text-xs ${activeFilter === filter.id ? 'text-blue-200/70' : 'text-gray-500'}`}>({filter.count})</span>
          </button>
        ))}
      </div>

      {/* SOS List - Scrollable */}
      <div className="space-y-3 overflow-y-auto pr-2 flex-1">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((sos) => {
            const statusBadge = getStatusBadge(sos.status);
            return (
              <div
                key={sos.id}
                className={`bg-gradient-to-br ${sos.bgColor} border border-gray-700/30 rounded-xl p-4 hover:border-gray-600/50 transition-all duration-200 backdrop-blur-sm hover:shadow-lg hover:shadow-slate-900/50`}
              >
                <div className="flex items-start justify-between gap-3">
                  {/* Left: Avatar and Info */}
                  <div className="flex gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center flex-shrink-0 border border-gray-600/50 text-xs font-bold text-white">
                      {sos.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-white text-sm">{sos.name}</span>
                        <span className="text-lg">{getEmergencyIcon(sos.emergencyType)}</span>
                      </div>
                      <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{sos.location}</span>
                      </div>
                      {sos.assignedTo && (
                        <div className="text-xs text-gray-500 mt-1">Assigned to: {sos.assignedTo}</div>
                      )}
                    </div>
                  </div>

                  {/* Middle: Time and Distance */}
                  <div className="text-right flex-shrink-0 text-xs">
                    <div className="text-gray-400 flex items-center justify-end gap-1 mb-1">
                      <Clock className="w-3 h-3" />
                      {sos.timeElapsed}
                    </div>
                    <div className="text-gray-400 flex items-center justify-end gap-1">
                      <MapPin className="w-3 h-3" />
                      {sos.distance}
                    </div>
                  </div>

                  {/* Right: Status Badge and Actions */}
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusBadge.bg} ${statusBadge.text} border ${
                        statusBadge.label === 'New' ? 'border-red-500/30' :
                        statusBadge.label === 'Assigned' ? 'border-yellow-500/30' :
                        statusBadge.label === 'In Progress' ? 'border-blue-500/30' :
                        'border-gray-500/30'
                      }`}
                    >
                      {statusBadge.label}
                    </span>
                    <div className="flex gap-1.5">
                      {sos.status !== 'resolved' && (
                        <>
                          <button className="px-2 py-1 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 text-xs rounded-md transition-colors duration-200 flex items-center gap-1 border border-blue-500/30 hover:border-blue-500/60 whitespace-nowrap">
                            <Phone className="w-3 h-3" />
                            Assign
                          </button>
                          <button className="px-2 py-1 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 text-xs rounded-md transition-colors duration-200 flex items-center gap-1 border border-emerald-500/30 hover:border-emerald-500/60 whitespace-nowrap">
                            <HelpCircle className="w-3 h-3" />
                            Assist
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-gray-400">
            <p className="text-sm">No SOS requests in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveSOSActivityList;
