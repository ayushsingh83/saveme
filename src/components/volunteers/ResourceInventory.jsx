import React from 'react';
import ResourceCard from './ResourceCard';
import './ResourceInventory.css';

const ResourceInventory = ({layout}) => {
  const resources = [
  {
    id: "res_001",
    name: "First Aid Kit",
    category: "Medical",
    quantity: 120,
    unit: "kits",
    location: "Relief Camp A",
    status: "available",
    lastUpdated: "10 min ago",
    aiPriority: "high",
    image:"ri-first-aid-kit-fill"
  },
  {
    id: "res_002",
    name: "Oxygen Cylinder",
    category: "Medical",
    quantity: 35,
    unit: "units",
    location: "District Hospital",
    status: "low",
    lastUpdated: "5 min ago",
    aiPriority: "critical",
    image: "ri-medicine-bottle-fill"
  },
  {
    id: "res_003",
    name: "Rescue Boats",
    category: "Rescue",
    quantity: 12,
    unit: "boats",
    location: "Flood Zone B",
    status: "available",
    lastUpdated: "20 min ago",
    aiPriority: "medium",
    image: "ri-ship-2-fill"
  },
  {
    id: "res_004",
    name: "Food Packets",
    category: "Supplies",
    quantity: 450,
    unit: "packs",
    location: "Warehouse 3",
    status: "available",
    lastUpdated: "15 min ago",
    aiPriority: "medium",
    image: "ri-restaurant-fill"
  },
  {
    id: "res_005",
    name: "Drinking Water",
    category: "Supplies",
    quantity: 80,
    unit: "litres",
    location: "Relief Camp B",
    status: "low",
    lastUpdated: "8 min ago",
    aiPriority: "high",
    image: "ri-drop-fill"
  },
  {
    id: "res_006",
    name: "Blankets",
    category: "Shelter",
    quantity: 200,
    unit: "units",
    location: "Community Hall",
    status: "available",
    lastUpdated: "30 min ago",
    aiPriority: "low",
    image: "bi bi-layers-fill"
  },
  {
    id: "res_007",
    name: "Satellite Phones",
    category: "Communication",
    quantity: 6,
    unit: "devices",
    location: "Command Center",
    status: "critical",
    lastUpdated: "2 min ago",
    aiPriority: "critical",
    image:"bi bi-phone-fill"
  }
];

const colorThemes = [
  "theme-green",
  "theme-blue",
  "theme-orange",
  "theme-purple",
  "theme-red"
];

  return (
    <div className={`container-resources ${layout}`}>
      {resources.map((res,index) => (
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
