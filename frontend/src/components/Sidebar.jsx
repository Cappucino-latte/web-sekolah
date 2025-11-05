import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Home, User, Settings } from "lucide-react"; // opsional: ikon
import './Sidebar.css';
function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // hapus token dari localStorage
    localStorage.removeItem("token");

    // arahkan ke halaman login
    navigate("/login");
  };

  return (
    <div className="h-screen w-64 bg-indigo-700 text-white flex flex-col justify-between">
      {/* Bagian Atas */}
      <div>
        <div className="p-6 text-2xl font-bold border-b border-indigo-500">
          Admin Panel
        </div>
        <ul className="mt-4 space-y-2 px-4">
          <li
            className="p-2 rounded hover:bg-indigo-600 cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/admin/dashboard")}
          >
            <Home size={18} /> Dashboard
          </li>
          <li
            className="p-2 rounded hover:bg-indigo-600 cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/admin/users")}
          >
            <User size={18} /> Kelola User
          </li>
          <li
            className="p-2 rounded hover:bg-indigo-600 cursor-pointer flex items-center gap-2"
            onClick={() => navigate("/admin/settings")}
          >
            <Settings size={18} /> Pengaturan
          </li>
        </ul>
      </div>

      {/* Tombol Logout */}
      <div className="p-4 border-t border-indigo-500">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-all"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
