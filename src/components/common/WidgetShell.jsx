import React from 'react';

/**
 * WidgetShell Component
 * Wrapper component that provides consistent styling for dashboard widgets
 * Features:
 * - Glassmorphism effect
 * - Gradient border with transparency
 * - Dark theme with subtle glow
 * 
 * @component
 * @example
 * <WidgetShell title="My Widget">
 *   <div>Widget content here</div>
 * </WidgetShell>
 */
const WidgetShell = ({ title, children, action }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 border border-gray-700/30 rounded-xl p-6 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300">
      {title && (
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700/20">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {action && <div>{action}</div>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default WidgetShell;
