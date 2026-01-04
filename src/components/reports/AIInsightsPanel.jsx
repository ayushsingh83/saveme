import React from 'react';
import { Brain, AlertCircle, Users, TrendingUp, Zap } from 'lucide-react';

const AIInsightsPanel = () => {
  const insights = [
    {
      icon: AlertCircle,
      title: 'Priority SOS Spike Detected',
      description: 'High-priority incidents increased 34% in the past 7 days. Recommend immediate resource allocation review.',
      severity: 'high',
      severityColor: 'text-red-400 bg-red-500/10',
    },
    {
      icon: Zap,
      title: 'Resource Strain Alert',
      description: 'Medical resources at 92% utilization. Critical shortage possible within 48 hours.',
      severity: 'critical',
      severityColor: 'text-orange-400 bg-orange-500/10',
    },
    {
      icon: Users,
      title: 'Volunteer Engagement Drop',
      description: 'Volunteer availability decreased 18% compared to last month. Consider scheduling reviews or incentive programs.',
      severity: 'medium',
      severityColor: 'text-yellow-400 bg-yellow-500/10',
    },
    {
      icon: TrendingUp,
      title: 'Response Time Improvement',
      description: 'Average response time improved 12% this month. Current trend shows continued optimization.',
      severity: 'good',
      severityColor: 'text-green-400 bg-green-500/10',
    },
  ];

  return (
    <div className="bg-gradient-to-br rounded-xl p-5 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl group relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-700/20">
        <div className="bg-purple-500/10 p-2.5 rounded-lg">
          <Brain className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">AI-Powered Insights</h3>
          <p className="text-xs text-gray-400">Auto-generated analysis for last 30 days</p>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((insight, idx) => {
          const Icon = insight.icon;
          return (
            <div
              key={idx}
              className="bg-slate-800/30 rounded-lg p-4 border border-gray-700/20 hover:border-gray-600/30 transition-all"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={`${insight.severityColor} p-2 rounded-lg flex-shrink-0 mt-0.5`}>
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white text-sm">{insight.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${insight.severityColor}`}>
                      {insight.severity.charAt(0).toUpperCase() + insight.severity.slice(1)}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Last Updated */}
      <div className="mt-4 pt-4 border-t border-gray-700/20 text-xs text-gray-500 text-center">
        Last updated: 2 hours ago | Next update: in 2 hours
      </div>
    </div>
  );
};

export default AIInsightsPanel;
