import "./ShelterList.css"
import ShelterCard from "./ShelterCard";


const ShelterList = () => {
    const shelters = [
        {
            id: "shelter_001",
            name: "Willow Grove School",
            distanceKm: 1.7,
            totalCapacity: 300,
            occupied: 250,
            status: "near-full",
            resources: ["Food", "Water", "Medical"],
            lastUpdated: "5 min ago",
            coordinator: "John V.",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
        },
        {
            id: "shelter_002",
            name: "Evanston Community Hall",
            distanceKm: 2.0,
            totalCapacity: 360,
            occupied: 190,
            status: "available",
            resources: ["Food", "Water"],
            lastUpdated: "8 min ago",
            coordinator: "Ryan M.",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
        },
        {
            id: "shelter_003",
            name: "Riverfront Sports Complex",
            distanceKm: 3.4,
            totalCapacity: 500,
            occupied: 410,
            status: "critical",
            resources: ["Medical", "Power Backup"],
            lastUpdated: "2 min ago",
            coordinator: "Neha S.",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
        },
        {
            id: "shelter_004",
            name: "Hillview High School",
            distanceKm: 4.2,
            totalCapacity: 420,
            occupied: 180,
            status: "available",
            resources: ["Food", "Water", "Charging"],
            lastUpdated: "12 min ago",
            coordinator: "Olivia S.",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
        },
        {
            id: "shelter_005",
            name: "Downtown Convention Center",
            distanceKm: 6.8,
            totalCapacity: 800,
            occupied: 760,
            status: "critical",
            resources: ["Medical", "Food", "Power Backup", "Security"],
            lastUpdated: "1 min ago",
            coordinator: "Clint R.",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
        },
        {
            id: "shelter_006",
            name: "Lakeside Community Center",
            distanceKm: 5.1,
            totalCapacity: 250,
            occupied: 120,
            status: "available",
            resources: ["Food", "Water"],
            lastUpdated: "20 min ago",
            coordinator: "Priya M.",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
        },
        {
            id: "shelter_007",
            name: "Greenfield Stadium",
            distanceKm: 7.5,
            totalCapacity: 600,
            occupied: 520,
            status: "near-full",
            resources: ["Medical", "Water", "Power Backup"],
            lastUpdated: "6 min ago",
            coordinator: "Arjun T.",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
        },
        {
            id: "shelter_008",
            name: "Northside Indoor Arena",
            distanceKm: 9.3,
            totalCapacity: 480,
            occupied: 90,
            status: "available",
            resources: ["Food", "Water", "Charging"],
            lastUpdated: "25 min ago",
            coordinator: "Sara K.",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?"
        }
    ];

    return (
        <div className="shelter-list">
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