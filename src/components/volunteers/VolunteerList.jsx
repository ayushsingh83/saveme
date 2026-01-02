import React, { useState } from 'react';
import VolunteerCard from './VolunteerCard';
import './VolunteerList.css';


const VolunteerList = () => {
  const [volunteers, setvolunteers] = useState([
    {
      id: "vol_001",
      name: "John V.",
      role: "Medical",
      distanceKm: 1.1,
      status: "online",
      availability: true,
      lastActive: "2 min ago",
      assignedSOS: false,
      rating: 4.7,
      aiScore: 92,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
    },
    {
      id: "vol_002",
      name: "Sara K.",
      role: "Rescue",
      distanceKm: 2.5,
      status: "online",
      availability: true,
      lastActive: "5 min ago",
      assignedSOS: false,
      rating: 4.9,
      aiScore: 95,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
    },
    {
      id: "vol_003",
      name: "Amit R.",
      role: "Logistics",
      distanceKm: 4.3,
      status: "offline",
      availability: false,
      lastActive: "25 min ago",
      assignedSOS: true,
      rating: 4.5,
      aiScore: 81,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
    },
    {
      id: "vol_004",
      name: "Neha S.",
      role: "Medical",
      distanceKm: 0.9,
      status: "online",
      availability: true,
      lastActive: "1 min ago",
      assignedSOS: false,
      rating: 4.8,
      aiScore: 97,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
    },
    {
      id: "vol_005",
      name: "Rahul P.",
      role: "Rescue",
      distanceKm: 6.1,
      status: "online",
      availability: false,
      lastActive: "12 min ago",
      assignedSOS: true,
      rating: 4.6,
      aiScore: 76,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
    },
    {
      id: "vol_006",
      name: "Priya M.",
      role: "Logistics",
      distanceKm: 3.7,
      status: "online",
      availability: true,
      lastActive: "3 min ago",
      assignedSOS: false,
      rating: 4.9,
      aiScore: 90,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
    },
    {
      id: "vol_007",
      name: "Arjun T.",
      role: "Medical",
      distanceKm: 8.4,
      status: "offline",
      availability: false,
      lastActive: "1 hr ago",
      assignedSOS: false,
      rating: 4.4,
      aiScore: 70,
      image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
    }]);

  const handleAssign = (id) => {
    setvolunteers(prevVolunteers =>
    prevVolunteers.map(vol =>
      vol.id === id
        ? { ...vol, assignedSOS: !vol.assignedSOS }
        : vol
    )
  );
  };


  return (
    <div className='container-volunteer-main'>
      {volunteers.map((vol) => (
        <VolunteerCard
          key={vol.id}
          {...vol}
          onAssign={() => handleAssign(vol.id)}
        />
      ))}
    </div>
  );
};

export default VolunteerList;
