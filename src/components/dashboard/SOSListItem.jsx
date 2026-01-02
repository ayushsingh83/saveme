const SOSListItem = ({ avatar, name, location, time, distance }) => {
  return (
    <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            {avatar}
          </div>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-gray-400">{distance}</div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm font-semibold">{location}</div>
          <div className="text-xs text-gray-400">{time}</div>
        </div>
      </div>
    </div>
  )
}

export default SOSListItem
