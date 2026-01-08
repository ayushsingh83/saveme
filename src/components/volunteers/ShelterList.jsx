import React, { useState, useEffect } from 'react';
import ShelterCard from './ShelterCard';
import { sheltersAPI } from '../../api/apiLoaders';
import "./ShelterList.css"

const ShelterList = () => {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    const loadShelters = async () => {
      try {
        const data = await sheltersAPI.getAll();
        setShelters(data);
      } catch (error) {
        console.error('Failed to load shelters:', error);
      }
    };
    loadShelters();
  }, []);

  return (
    <div className="shelter-list">
      <span>Shelter</span>
      {shelters.map((shelter) => (
        <ShelterCard
          key={shelter.id}
          {...shelter}
        />
      ))}
    </div>
  )
}

export default ShelterList
