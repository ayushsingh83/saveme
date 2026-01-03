import React from 'react'
import "./OnlineUsersList.css"
import OnlineUsersCard from './OnlineUsersCard';

const OnlineUsersList=() => {
    const onlineUsers = [
  {
    id: "user_1",
    name: "John V.",
    role: "Responder",
    device: "iPhone 12 Pro",
    distanceKm: 0.95,
    signal: "Strong",
    battery: 92
  },
  {
    id: "user_2",
    name: "Clint R.",
    role: "Coordinator",
    device: "Samsung Galaxy S20",
    distanceKm: 1.5,
    signal: "Good",
    battery: 78
  },
  {
    id: "user_3",
    name: "Cherry Patel",
    role: "Responder",
    device: "Motorola Edge",
    distanceKm: 2.4,
    signal: "Weak",
    battery: 88
  },
  {
    id: "user_4",
    name: "Olivia S.",
    role: "Coordinator",
    device: "MacBook Air",
    distanceKm: 9.8,
    signal: "Stable",
    battery: 72
  },
  {
    id: "user_5",
    name: "Amit R.",
    role: "Logistics",
    device: "iPad Mini",
    distanceKm: 4.3,
    signal: "Good",
    battery: 65
  },
  {
    id: "user_6",
    name: "Sara K.",
    role: "Search & Rescue",
    device: "Pixel 7",
    distanceKm: 2.1,
    signal: "Strong",
    battery: 84
  },
  {
    id: "user_7",
    name: "Neha S.",
    role: "Medical",
    device: "iPhone 11",
    distanceKm: 3.6,
    signal: "Stable",
    battery: 59
  },
  {
    id: "user_8",
    name: "Ryan M.",
    role: "Responder",
    device: "OnePlus 9",
    distanceKm: 1.2,
    signal: "Strong",
    battery: 91
  },
  {
    id: "user_9",
    name: "Julia Gomez",
    role: "Coordinator",
    device: "Surface Laptop",
    distanceKm: 12.0,
    signal: "Weak",
    battery: 47
  },
  {
    id: "user_10",
    name: "Ajay N.",
    role: "Responder",
    device: "Realme GT",
    distanceKm: 2.6,
    signal: "Good",
    battery: 73
  },
];

  return (
    <div className="container-onlineUser">
            {onlineUsers.map((data, index) => (
                <OnlineUsersCard
                    key={data.id}
                    {...data}
                />
            ))}
        </div>
  )
}

export default OnlineUsersList
