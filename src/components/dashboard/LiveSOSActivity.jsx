import WidgetShell from "./WidgetShell"
import SOSListItem from "./SOSListItem"

const sosData = [
  { avatar: "AJ", name: "Abby Johnson", location: "Medical", time: "8 min", distance: "1.2km" },
  { avatar: "CP", name: "Cherry Patel", location: "Flood", time: "10 min", distance: "840m" }
]

const LiveSOSActivity = () => {
  return (
    <WidgetShell title="Live SOS Activity">
      <div className="space-y-3">
        {sosData.map((s, i) => (
          <SOSListItem key={i} {...s} />
        ))}
      </div>
    </WidgetShell>
  )
}

export default LiveSOSActivity
