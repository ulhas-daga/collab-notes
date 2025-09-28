// Sidebar.jsx
import { NavLink, Navigate } from "react-router-dom";
// import { FaBox, FaTruck, FaUsers, FaClipboardList } from "react-icons/fa";
import "./index.css";

const Sidebar = () => {

  return (
    <div className="sidebar d-flex flex-column p-3">
      <h4 className="text-white fw-bold mb-4 text-center">Menu</h4>
      <NavLink to="/" className="sidebar-link">
        All Notes
      </NavLink>
      <NavLink to="/categories" className="sidebar-link">
        Categories
      </NavLink>
      <NavLink to="/settings" className="sidebar-link">
        Settings
      </NavLink>
    </div>
     
  );
};

export default Sidebar;
