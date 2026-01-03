import { useState } from "react";
import DevicesListCard from "./DevicesListCard";
import { devicesList } from "./DevicesData";
import "./DevicesTable.css";

const DevicesTable = () => {
  const [filter, setFilter] = useState("all");
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  /* ---------- FILTER ---------- */
  const filteredDevices = devicesList.filter((device) => {
    if (filter === "all") return true;
    return device.status.toLowerCase() === filter;
  });

  /* ---------- SORT ---------- */
  const sortedDevices = [...filteredDevices].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (typeof aVal === "string") {
      return sortOrder === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
  });

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="devices-table-container">
      {/* FILTER BUTTONS */}
      <div className="device-filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "stable" ? "active" : ""}
          onClick={() => setFilter("stable")}
        >
          Stable
        </button>
        <button
          className={filter === "problem" ? "active" : ""}
          onClick={() => setFilter("problem")}
        >
          Problem
        </button>
      </div>

      {/* TABLE HEADER */}
      <div className="device-header">
        <span onClick={() => handleSort("name")}>
          Device {sortKey === "name" && (sortOrder === "asc" ? "▲" : "▼")}
        </span>
        <span onClick={() => handleSort("user")}>
          User {sortKey === "user" && (sortOrder === "asc" ? "▲" : "▼")}
        </span>
        <span onClick={() => handleSort("signal")}>
          Signal {sortKey === "signal" && (sortOrder === "asc" ? "▲" : "▼")}
        </span>
        <span onClick={() => handleSort("batteryMin")}>
          Battery {sortKey === "batteryMin" && (sortOrder === "asc" ? "▲" : "▼")}
        </span>
        <span onClick={() => handleSort("status")}>
          Status {sortKey === "status" && (sortOrder === "asc" ? "▲" : "▼")}
        </span>
      </div>

      {/* TABLE BODY */}
      <div className="device-table-body">
        {sortedDevices.map((device) => (
          <DevicesListCard key={device.id} {...device} />
        ))}
      </div>
    </div>
  );
};

export default DevicesTable;
