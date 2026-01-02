import { NavLink } from "react-router-dom";
import "./SidebarItem.css";

const SidebarItem = ({ label, path, icon }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "sidebar-item active" : "sidebar-item"
      }
    >
      {icon && <span className="sidebar-icon">{icon}</span>}
      <span className="options">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;