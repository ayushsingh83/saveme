import {
  AlertTriangle,
  WifiOff,
  Info
} from "lucide-react";
import "./RecentIssuesAlerts.css";

const getIcon = (type) => {
  switch (type) {
    case "danger":
      return <AlertTriangle />;
    case "warning":
      return <WifiOff />;
    case "info":
    default:
      return <Info />;
  }
};

const RecentIssueCard = ({ device, issue, type, time }) => {
  return (
    <div className="issue-row">
      <div className={`issue-icon ${type}`}>
        {getIcon(type)}
      </div>

      <div className="issue-text">
        <div className="issue-device">{device}</div>
        <div className={`issue-desc ${type}`}>
          {issue}
        </div>
      </div>

      <div className="issue-time">{time}</div>
    </div>
  );
};

export default RecentIssueCard;
