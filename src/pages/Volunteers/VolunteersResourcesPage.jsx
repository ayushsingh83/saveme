import React from 'react';
import VolunteerList from '../../components/volunteers/VolunteerList';
import ResourceInventory from '../../components/volunteers/ResourceInventory';
import MapHolder from '../../components/volunteers/MapHolder';
import ShelterList from '../../components/volunteers/ShelterList';
import './VolunteersResourcesPage.css';

const VolunteersResourcesPage = () => {
  return (
    <div>
      <div className='resource1'><ResourceInventory /></div>
      <div className="middle-box">
        <div className="resource-heading">Recommended Volunteers</div>
        <div className="middle">
          <VolunteerList />
          <MapHolder />
        </div>
      </div>
      <div className="bottom-box">
        <div className="resource-box">
          <div className="resource-heading2">Resources</div>
          <div className="resource2"><ResourceInventory /></div>
        </div>
        <div className='shelter-box'>
          <div className="shelter-heading">Shelter</div>
          <ShelterList />
        </div>
      </div>
    </div>

  );
};

export default VolunteersResourcesPage;
