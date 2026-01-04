const StatCard = ({ icon: Icon, label, value, badge, color, iconColor, bgIcon }) => {
  return (
    <div className={`bg-gradient-to-br ${color} border border-gray-700/30 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-${color.split('-')[1]}-500/20 group`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`${bgIcon} p-3 rounded-xl transition-transform duration-300 group-hover:scale-110`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        {badge && (
          <span className="text-xs bg-green-500/30 text-green-300 px-3 py-1 rounded-full font-medium border border-green-500/50 animate-pulse">
            {badge}
          </span>
        )}
      </div>

      <div className="mb-2">
        <div className="text-4xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400 font-medium">{label}</div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
}

export default StatCard
