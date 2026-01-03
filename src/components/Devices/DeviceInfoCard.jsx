import "./DeviceInfoCard.css";

const DeviceInfoCard = ({ title, value, subText, icon: Icon, theme }) => {
  return (
    <div className={`device-info-card ${theme}`}>
      <div className="device-info-icon">
        <Icon className="device-icon" />
      </div>

      <div className="device-info-info">
        <p className="device-info-title">{title}</p>
        <h2 className="device-info-value">{value}</h2>
        <span className="device-info-sub">{subText}</span>
      </div>
    </div>
  );
};

export default DeviceInfoCard;
