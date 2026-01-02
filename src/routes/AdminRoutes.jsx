import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import SOSRequestsPage from "../pages/SOS/SOSRequestsPage";
import DisasterMapPage from "../pages/Map/DisasterMapPage";
import MeshInternetPage from "../pages/Mesh/MeshInternetPage";
import UsersandDevices from "../pages/Devices/UsersandDevices";
import AlertsBroadcastPage from "../pages/Alerts/AlertsBroadcastPage";
import VolunteersResourcesPage from "../pages/Volunteers/VolunteersResourcesPage";
import ReportsAnalyticsPage from "../pages/Reports/ReportsAnalyticsPage";
import SettingsSecurityPage from "../pages/Settings/SettingsSecurityPage";

const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/sos" element={<SOSRequestsPage />} />
          <Route path="/map" element={<DisasterMapPage />} />
          <Route path="/mesh" element={<MeshInternetPage />} />
          <Route path="/devices" element={<UsersandDevices />} />
          <Route path="/alerts" element={<AlertsBroadcastPage />} />
          <Route path="/volunteers" element={<VolunteersResourcesPage />} />
          <Route path="/reports" element={<ReportsAnalyticsPage />} />
          <Route path="/settings" element={<SettingsSecurityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRoutes;

