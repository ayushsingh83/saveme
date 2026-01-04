import React, { useState } from 'react';
import { Send, AlertTriangle, MessageSquare } from 'lucide-react';

const CreateAlertForm = ({ onSendAlert }) => {
  const [formData, setFormData] = useState({
    message: '',
    area: 'all',
    deliveryMode: 'all',
    priority: 'high',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = () => {
    if (!formData.message.trim()) {
      alert('Please enter an alert message');
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      if (onSendAlert) {
        onSendAlert({
          ...formData,
          timestamp: new Date(),
          status: 'sent',
        });
      }

      // Reset form
      setFormData({
        message: '',
        area: 'all',
        deliveryMode: 'all',
        priority: 'high',
      });

      setIsSending(false);
    }, 800);
  };

  const deliveryModes = [
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Push Notification' },
    { value: 'gps', label: 'GPS Alert' },
    { value: 'all', label: 'All Channels' },
  ];

  const areas = [
    { value: 'all', label: 'All Areas' },
    { value: 'zone_a', label: 'Zone A (North Coast)' },
    { value: 'zone_b', label: 'Zone B (Central)' },
    { value: 'zone_c', label: 'Zone C (South)' },
    { value: 'zone_d', label: 'Zone D (East Islands)' },
  ];

  const priorities = [
    { value: 'low', label: 'Low', color: 'text-yellow-400' },
    { value: 'medium', label: 'Medium', color: 'text-orange-400' },
    { value: 'high', label: 'High', color: 'text-red-400' },
    { value: 'critical', label: 'Critical', color: 'text-red-500' },
  ];

  return (
    <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700/20">
        <div className="bg-red-500/10 p-2.5 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-red-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Create Alert</h3>
          <p className="text-xs text-gray-400">Broadcast critical alert to selected areas</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Alert Message */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Alert Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter urgent alert message... (Be clear and concise)"
            className="w-full bg-slate-800/50 border border-gray-700/40 rounded-lg p-3 text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none resize-none h-24 transition-colors duration-200"
          />
          <div className="text-xs text-gray-500 mt-1">
            {formData.message.length} / 500 characters
          </div>
        </div>

        {/* Priority Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Priority Level
          </label>
          <div className="grid grid-cols-4 gap-2">
            {priorities.map((p) => (
              <button
                key={p.value}
                onClick={() => setFormData({ ...formData, priority: p.value })}
                className={`py-2 px-2 rounded-lg text-xs font-medium transition-all duration-200 border ${
                  formData.priority === p.value
                    ? 'bg-red-500/20 border-red-500/50 text-red-300'
                    : 'bg-slate-800/30 border-gray-700/40 text-gray-400 hover:border-gray-600/50'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Area Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Target Area / Group
          </label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full bg-slate-800/50 border border-gray-700/40 rounded-lg p-3 text-white focus:border-blue-500/50 focus:outline-none transition-colors duration-200"
          >
            {areas.map((area) => (
              <option key={area.value} value={area.value}>
                {area.label}
              </option>
            ))}
          </select>
        </div>

        {/* Delivery Mode */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Delivery Mode
          </label>
          <div className="grid grid-cols-2 gap-2">
            {deliveryModes.map((mode) => (
              <button
                key={mode.value}
                onClick={() => setFormData({ ...formData, deliveryMode: mode.value })}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 border flex items-center justify-center gap-2 ${
                  formData.deliveryMode === mode.value
                    ? 'bg-blue-500/20 border-blue-500/50 text-blue-300'
                    : 'bg-slate-800/30 border-gray-700/40 text-gray-400 hover:border-gray-600/50'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                {mode.label}
              </button>
            ))}
          </div>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={isSending || !formData.message.trim()}
          className={`w-full mt-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 border ${
            isSending || !formData.message.trim()
              ? 'bg-gray-700/30 border-gray-700/30 text-gray-500 cursor-not-allowed'
              : 'bg-red-500/20 border-red-500/50 text-red-300 hover:bg-red-500/30 hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/20'
          }`}
        >
          <Send className="w-5 h-5" />
          {isSending ? 'Sending...' : 'Send Alert Now'}
        </button>

        <div className="text-xs text-gray-500 text-center mt-3">
          Alert will be delivered to all recipients in selected area via {formData.deliveryMode === 'all' ? 'all channels' : formData.deliveryMode}
        </div>
      </div>
    </div>
  );
};

export default CreateAlertForm;
