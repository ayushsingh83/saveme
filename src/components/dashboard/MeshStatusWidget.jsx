import WidgetShell from "./WidgetShell"

const MeshStatusWidget = () => {
  return (
    <WidgetShell title="Mesh Network Status">
      <div className="grid grid-cols-3 text-center">
        <div>
          <div className="text-3xl font-bold">26</div>
          <div className="text-sm text-gray-400">Connected</div>
        </div>
        <div>
          <div className="text-3xl font-bold">3</div>
          <div className="text-sm text-gray-400">Gateways</div>
        </div>
        <div>
          <div className="text-3xl font-bold">18</div>
          <div className="text-sm text-gray-400">Internet</div>
        </div>
      </div>
    </WidgetShell>
  )
}

export default MeshStatusWidget
