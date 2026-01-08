import React, { useState, useEffect } from 'react';
import ResourceCard from './ResourceCard';
import { resourcesAPI } from '../../api/apiLoaders';
import './ResourceInventory.css';

const ResourceInventory = ({layout}) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const loadResources = async () => {
      try {
        const data = await resourcesAPI.getAll();
        setResources(data);
      } catch (error) {
        console.error('Failed to load resources:', error);
      }
    };
    loadResources();
  }, []);

  const colorThemes = [
    "theme-green",
    "theme-blue",
    "theme-orange",
    "theme-purple",
    "theme-red"
  ];

  return (
    <div className={`container-resources ${layout}`}>
      {resources.map((res, index) => (
        <ResourceCard
          key={res.id}
          {...res}
          colorClass={colorThemes[index % colorThemes.length]}
        />
      ))}
    </div>
  );
};

export default ResourceInventory;
