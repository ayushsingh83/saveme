import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ResourceUtilizationChart = () => {
  const chartData = {
    labels: ['Medical', 'Supplies', 'Rescue', 'Shelter', 'Communication'],
    datasets: [
      {
        data: [28, 22, 25, 15, 10],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',   // Red - Medical
          'rgba(59, 130, 246, 0.8)',  // Blue - Supplies
          'rgba(16, 185, 129, 0.8)',  // Green - Rescue
          'rgba(245, 158, 11, 0.8)',  // Amber - Shelter
          'rgba(168, 85, 247, 0.8)',  // Purple - Communication
        ],
        borderColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(168, 85, 247, 1)',
        ],
        borderWidth: 2,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#d1d5db',
          font: { size: 12, weight: '500' },
          usePointStyle: true,
          padding: 15,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => ({
                text: label,
                fillStyle: data.datasets[0].backgroundColor[i],
                hidden: false,
                index: i,
              }));
            }
            return [];
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#d1d5db',
        borderColor: '#475569',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: function (context) {
            return context.label + ': ' + context.parsed + '%';
          },
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 border border-gray-700/30 rounded-xl p-6 backdrop-blur-sm shadow-lg">
      <h3 className="text-lg font-semibold text-white mb-4">Resource Utilization</h3>

      <div style={{ height: '300px', position: 'relative' }}>
        <Doughnut data={chartData} options={options} />
      </div>

      {/* Legend with percentages */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        {chartData.labels.map((label, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: chartData.datasets[0].backgroundColor[idx] }}
            />
            <span className="text-gray-400">
              {label}: <span className="text-white font-semibold">{chartData.datasets[0].data[idx]}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceUtilizationChart;
