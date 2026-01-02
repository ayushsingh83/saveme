import React from 'react';
import SOSRow from './SOSRow';

const SOSMonitorTable = ({ data, onAssign, onResolve }) => {
  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800/50 sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                SOS ID / User ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Emergency Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Time Since Triggered
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Connectivity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900/20 divide-y divide-gray-700 max-h-96 overflow-y-auto">
            {data.map((item) => (
              <SOSRow
                key={item.sosId}
                data={item}
                onAssign={onAssign}
                onResolve={onResolve}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SOSMonitorTable;
