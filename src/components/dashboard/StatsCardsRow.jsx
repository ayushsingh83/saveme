import StatCard from "./StatCard"
import { AlertCircle, Smartphone, Radio, Wifi } from "lucide-react"

const stats = [
  {
    icon: AlertCircle,
    label: "Active SOS Requests",
    value: 5,
    color: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-500",
    bgIcon: "bg-red-500/10"
  },
  {
    icon: Smartphone,
    label: "Connected Devices",
    value: 26,
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
    bgIcon: "bg-blue-500/10"
  },
  {
    icon: Radio,
    label: "Active Gateways",
    value: 3,
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-500",
    bgIcon: "bg-emerald-500/10"
  },
  {
    icon: Wifi,
    label: "Devices Using Internet",
    value: 18,
    badge: "STRONG",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-500",
    bgIcon: "bg-green-500/10"
  }
]

const StatsCardsRow = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <StatCard key={i} {...s} />
      ))}
    </div>
  )
}

export default StatsCardsRow
