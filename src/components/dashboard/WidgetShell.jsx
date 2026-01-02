const WidgetShell = ({ title, right, children }) => {
  return (
    <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6">
      {title && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{title}</h2>
          {right}
        </div>
      )}
      {children}
    </div>
  )
}

export default WidgetShell
