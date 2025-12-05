import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Home, User, Settings, Newspaper, Award, ClipboardList } from "lucide-react";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sidebar">

      {/* HEADER */}
      <div>
        <div className="sidebar-header">
          Admin Panel
        </div>

        {/* MENU LIST */}
        <ul className="sidebar-menu">
          <li onClick={() => navigate("/admin/dashboard")} className="sidebar-item">
            <Home size={18} />
            <span>Dashboard</span>
          </li>

  <li onClick={() => navigate("/admin/users")} className="sidebar-item">
    <User size={18} />
    <span>Kelola User</span>
  </li>

  {/* <li onClick={() => navigate("/admin/program")} className="sidebar-item">
    <ClipboardList size={18} />
    <span>Program</span>
  </li> */}

  <li onClick={() => navigate("/admin/berita")} className="sidebar-item">
    <Newspaper size={18} />
    <span>Berita</span>
  </li>

  <li onClick={() => navigate("/admin/prestasi")} className="sidebar-item">
    <Award size={18} />
    <span>Prestasi</span>
  </li>
</ul>

      </div>

      {/* LOGOUT */}
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={18} />
          Logout
        </button>
      </div>

    </div>
  );
}

export default Sidebar;
