import React from 'react';
import './VolunteerCard.css';
import { MapPin, Wifi, WifiOff } from "lucide-react";


const VolunteerCard = (
  {
    id,
    name,
    role,
    distanceKm,
    status,
    availability,
    lastActive,
    assignedSOS,
    rating,
    aiScore,
    onAssign,
    image
  }) => {
  const assign_status = assignedSOS ? "ASSIGNED" : "ASSIGN";
  return (
    <div className='container-volunteer-items' >
      <div className="volunteer-items">
        <div className="volunteer-info">
          <div className='volunteer-image'><img src={image}></img></div>
          <div className="volunteer-details">
            <h3 className='v-name'>{name}</h3>
            <p className='v-role'>{role}</p>
            <div className='volunteer-details-bottom'>
              <div className="v-distance">
                <MapPin className="icon location-icon" />
                <span className='distance-text'>{distanceKm} km</span>
              </div>
              <div className={`status ${status}`}>
                {status === "online" ? (
                  <Wifi className="icon status-icon online" />
                ) : (
                  <WifiOff className="icon status-icon offline" />
                )}
                <span className='status-text'>{status}</span>
              </div>

            </div>
          </div>
        </div>

        <button className={`assign-button ${assignedSOS ? "assigned" : ''}`} onClick={onAssign}>{assign_status}</button>
      </div>
    </div >
  );
};

export default VolunteerCard;
