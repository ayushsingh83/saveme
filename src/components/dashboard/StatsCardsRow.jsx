import React, { useState, useEffect } from "react"
import StatCard from "./StatCard"
import { AlertCircle, Smartphone, Radio, Wifi } from "lucide-react"
import { dashboardMetricsAPI } from "../../api/apiLoaders"

const StatsCardsRow = () => {
  const [stats, setStats] = useState([])

  useEffect(() => {
    const loadStats = async () => {
      try {
        const metricsData = await dashboardMetricsAPI.getStatsCards()
        setStats(metricsData)
      } catch (error) {
        console.error('Failed to load stats:', error)
      }
    }
    loadStats()
  }, [])

  const iconMap = {
    active_sos: AlertCircle,
    connected_devices: Smartphone,
    active_gateways: Radio,
    internet_devices: Wifi
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <StatCard key={i} {...s} icon={iconMap[s.id]} />
      ))}
    </div>
  )
}

export default StatsCardsRow
