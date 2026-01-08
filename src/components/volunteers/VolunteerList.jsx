import React, { useState, useEffect } from 'react';
import VolunteerCard from './VolunteerCard';
import { volunteersAPI } from '../../api/apiLoaders';
import './VolunteerList.css';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const loadVolunteers = async () => {
      try {
        const data = await volunteersAPI.getAll();
        setVolunteers(data);
      } catch (error) {
        console.error('Failed to load volunteers:', error);
      }
    };
    loadVolunteers();
  }, []);

  const handleAssign = (id) => {
    setVolunteers(prevVolunteers =>
      prevVolunteers.map(vol =>
        vol.id === id
          ? { ...vol, assigned_sos: !vol.assigned_sos }
          : vol
      )
    );
  };

  return (
    <div className='container-volunteer-main'>
      <span className='volunteer-header'>Recommended Volunteers</span>
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
