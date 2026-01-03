import React from "react";
import "./OnlineUsersCard.css";
import { MapPin, Smartphone, Laptop } from "lucide-react";

const OnlineUsersCard = ({
  name,
  role,
  device,
  distanceKm,
  signal,
  battery,
  status
}) => {
  const DeviceIcon = device.toLowerCase().includes("iphone") ||
    device.toLowerCase().includes("samsung")
    ? Smartphone
    : Laptop;

  return (
    <div className="user-item">
      <div className="user-left">
        <div className="avatar-wrapper">
          <div className="avatar">{name[0]}</div>
          <span className="online-dot" />
        </div>

        <div className="user-left-info">
          <h4>{name}</h4>

          <div className="user-left-bottomInfo">
            <MapPin className="location-pin" />
            <span>{distanceKm} km</span>
            <span className="pipe">|</span>
            <span className="role">{role}</span>
          </div>
        </div>
      </div>

      <div className="user-right">
        <div className="device-info">
          <DeviceIcon size={14} />
          <span>{device}</span>
        </div>

        <div className="signal-bars">
          <span className={`bar ${signal >= 1 ? "active" : ""}`} />
          <span className={`bar ${signal >= 2 ? "active" : ""}`} />
          <span className={`bar ${signal >= 3 ? "active" : ""}`} />
          <span className={`bar ${signal >= 4 ? "active" : ""}`} />
        </div>

        <span className="battery">{battery}%</span>
        {status && <span className="status">{status}</span>}
      </div>
    </div>
  );
};

export default OnlineUsersCard;
