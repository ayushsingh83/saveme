import React from 'react';
import './VolunteerCard.css';
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
              <p className='v-distance'>{distanceKm} km</p>
              <div className="volunteer-status" style={{opacity:0.75, fontWeight:500}}>{status}</div>
            </div>
          </div>
        </div>

        <button className={`assign-button ${assignedSOS ? "assigned" : ''}`} onClick={onAssign}>{assign_status}</button>
      </div>
    </div >
  );
};

export default VolunteerCard;
