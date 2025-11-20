// src/layouts/AdminLayout.jsx
import Sidebar from "../components/Sidebar.jsx";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "240px", padding: "2rem", width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
