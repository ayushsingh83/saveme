import "./RecentIssuesAlerts.css";
import RecentIssueCard from "./RecentIssueCard";

const issues = [
  {
    id: 1,
    device: "Cherry Patel’s Motorola Edge+",
    issue: "Mesh signal weak",
    type: "warning",
    time: "4h ago",
  },
  {
    id: 2,
    device: "Clivia S.’s MacBook Air",
    issue: "Internet signal low",
    type: "warning",
    time: "4h ago",
  },
  {
    id: 3,
    device: "Clint R.",
    issue: "Sent Alert",
    type: "info",
    time: "4h ago",
  },
  {
    id: 4,
    device: "John’s iPhone 12 Pro",
    issue: "Low battery",
    type: "danger",
    time: "10h ago",
  },
  {
    id: 5,
    device: "Ryan M.’s Samsung Galaxy S10",
    issue: "Mesh disconnected",
    type: "danger",
    time: "10h ago",
  },
  {
    id: 6,
    device: "Sara K.’s Pixel 7",
    issue: "GPS accuracy reduced",
    type: "warning",
    time: "2h ago",
  },
  {
    id: 7,
    device: "Amit R.’s iPad Mini",
    issue: "Battery critically low",
    type: "danger",
    time: "1h ago",
  },
  {
    id: 8,
    device: "Olivia S.’s Command Center PC",
    issue: "Gateway connection restored",
    type: "info",
    time: "30m ago",
  },
  {
    id: 9,
    device: "Neha S.’s iPhone 11",
    issue: "Temporary offline mode",
    type: "warning",
    time: "45m ago",
  },
  {
    id: 10,
    device: "Main Portable Gateway",
    issue: "Switched to backup network",
    type: "info",
    time: "25m ago",
  },
  {
    id: 11,
    device: "Riverfront Shelter Hub",
    issue: "Power fluctuation detected",
    type: "warning",
    time: "15m ago",
  },
  {
    id: 12,
    device: "Willow Grove School Gateway",
    issue: "Emergency mode enabled",
    type: "danger",
    time: "5m ago",
  },
];

const RecentIssuesAlerts = () => {
  return (
    <div className="issues-card">
      <div className="issues-header">
        <span>Recent Issues & Alerts</span>
        <span className="count">{issues.length}</span>
      </div>

      <div className="issues-list">
        {issues.map((item) => (
          <RecentIssueCard
            key={item.id}
            device={item.device}
            issue={item.issue}
            type={item.type}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentIssuesAlerts;
