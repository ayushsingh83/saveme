import "./DeviceInfoList.css";
import DeviceInfoCard from "./DeviceInfoCard";
import {
  Smartphone,
  Users,
  Wifi,
  Globe
} from "lucide-react";

const DeviceInfoList = () => {
  const userDeviceStats = [
    {
      id: "stat_1",
      title: "Connected Devices",
      value: 26,
      subText: "9 Mesh · 17 Internet",
      icon: Smartphone,
      theme: "theme2-blue"
    },
    {
      id: "stat_2",
      title: "Online Volunteers",
      value: 12,
      subText: "11 Responders · 1 Coordinator",
      icon: Users,
      theme: "theme2-green"
    },
    {
      id: "stat_3",
      title: "Active Gateways",
      value: 3,
      subText: "1 Main · 2 Portable",
      icon: Wifi,
      theme: "theme2-orange"
    },
    {
      id: "stat_4",
      title: "Devices Using Internet",
      value: 18,
      subText: "Stable Connection",
      icon: Globe,
      theme: "theme2-red"
    }
  ];

  return (
    <div className="container-device">
      {userDeviceStats.map((stats) => (
        <DeviceInfoCard key={stats.id} {...stats} />
      ))}
    </div>
  );
};

export default DeviceInfoList;
