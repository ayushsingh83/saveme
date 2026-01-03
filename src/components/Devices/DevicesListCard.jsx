import "./DevicesListCard.css";
import {
    Smartphone,
    Wifi,
    Battery,
    User,
    AlertTriangle,
    CheckCircle,
    Globe
} from "lucide-react";

const DevicesListCard = ({ name, user, signal, batteryMin, status }) => {
    const getSignalIcon = () => {
        if (signal === "Internet") return <Globe className="icon" />;
        return <Wifi className="icon" />;
    };

    const getStatusIcon = () => {
        return status === "Problem" ? (
            <AlertTriangle className="icon status-icon problem" />
        ) : (
            <CheckCircle className="icon status-icon active" />
        );
    };

    return (
        <div className="device-row">
            <div className="cell device-name">
                <Smartphone className="icon" />
                <span>{name}</span>
            </div>

            <div className="cell">
                <User className="icon muted" />
                <span>{user}</span>
            </div>

            <div className={`cell signal ${signal.toLowerCase()}`}>
                <div className="signal-bars">
                    <span />
                    <span />
                    <span />
                </div>
                <span>{signal}</span>
            </div>


            <div className="cell battery">
                <Battery className="icon" />
                <div className="battery-bar">
                    <div
                        className={`battery-fill ${batteryMin < 20 ? "low" : ""}`}
                        style={{ width: `${batteryMin}%` }}
                    />
                </div>
                <span className="battery-text">{batteryMin} min</span>
            </div>


            <div className={`cell status ${status.toLowerCase()}`}>
                {getStatusIcon()}
                <span>{status}</span>
            </div>
        </div>
    );
};

export default DevicesListCard;

