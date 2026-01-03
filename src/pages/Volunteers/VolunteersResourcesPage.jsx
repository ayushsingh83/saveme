import React from 'react';
import VolunteerList from '../../components/volunteers/VolunteerList';
import ResourceInventory from '../../components/volunteers/ResourceInventory';
import MapHolder from '../../components/volunteers/MapHolder';
import ShelterList from '../../components/volunteers/ShelterList';
import './VolunteersResourcesPage.css';

const VolunteersResourcesPage = () => {
  return (
    <div className='volunteers-page'>
      <div className='resource1'><ResourceInventory layout="topResourceInventory"/></div>
        <div className="middle">
          <VolunteerList />
          <MapHolder />
        </div>
      <div className="bottom-box">
        <div className="resource-box">
          <div className="resource-heading2">Resources</div>
          <div className="resource2"><ResourceInventory layout="bottomResourceInventory" /></div>
        </div>
        <div className='shelter-box'>
          <ShelterList />
        </div>
      </div>
    </div>

  );
};

export default VolunteersResourcesPage;
