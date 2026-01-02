const StatCard = ({ icon: Icon, label, value, badge, color, iconColor, bgIcon }) => {
  return (
    <div className={`bg-linear-to-br ${color} border border-gray-700/30 rounded-2xl p-6`}>
      <div className="flex justify-between mb-4">
        <div className={`${bgIcon} p-3 rounded-xl`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        {badge && (
          <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="text-4xl font-bold">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

export default StatCard
