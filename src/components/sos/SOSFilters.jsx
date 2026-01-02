import React from 'react';

const SOSFilters = ({ filters, onFilterChange }) => {
  const handleStatusChange = (status) => {
    onFilterChange({ ...filters, status });
  };

  const handleTypeChange = (emergencyType) => {
    onFilterChange({ ...filters, emergencyType });
  };

  const handleSearchChange = (e) => {
    onFilterChange({ ...filters, search: e.target.value });
  };

  const statusOptions = ['All', 'New', 'Assigned', 'Resolved'];
  const typeOptions = ['All', 'Medical', 'Fire', 'Flood', 'Trapped'];

  return (
    <div className="mb-6 space-y-4">
      {/* Status Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((status) => (
            <button
              key={status}
              onClick={() => handleStatusChange(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filters.status === status
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Emergency Type Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Emergency Type</label>
        <div className="flex flex-wrap gap-2">
          {typeOptions.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filters.emergencyType === type
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Search SOS ID / User ID</label>
        <input
          type="text"
          value={filters.search}
          onChange={handleSearchChange}
          placeholder="Enter SOS ID or User ID..."
          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default SOSFilters;
