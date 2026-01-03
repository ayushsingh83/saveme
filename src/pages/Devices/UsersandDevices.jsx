import DeviceInfoList from "../../components/Devices/DeviceInfoList";
import DevicesTable from "../../components/Devices/DevicesTable";
import OnlineUsersList from "../../components/Devices/OnlineUsersList";
import RecentIssuesAlerts from "../../components/Devices/RecentIssuesAlerts";
import "./UsersandDevices.css"
const UsersandDevices = () => {
    return (
        <div className=" userDevice-container">
            <div className="user-top"><DeviceInfoList /></div>
            <div className="user-middle">
                <div className="user-middle-left"><OnlineUsersList /></div>  
                <div className="user-middle-right"><RecentIssuesAlerts/></div>
            </div>
            <div className="user-bottom"><DevicesTable /></div>
        </div>
    )
}

export default UsersandDevices;