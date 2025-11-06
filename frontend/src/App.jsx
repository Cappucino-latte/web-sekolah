import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Berita from "./pages/Berita.jsx";
import Prestasi from "./pages/Prestasi.jsx";

import MainNavbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard.jsx";
import AdminUsers from "./pages/AdminUser.jsx";

import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import PrivateRoute from "./components/PrivateRoute";
import AdminLayout from "./layouts/AdminLayout.jsx";

function App() {
  return (
    <Routes>

      {/* ROUTE PUBLIC PAKAI LAYOUT (ADA NAVBAR & FOOTER) */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tentang" element={<About />} />
        <Route path="kontak" element={<Contact />} />
        <Route path="berita" element={<Berita />} />
        <Route path="prestasi" element={<Prestasi />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* ROUTE DASHBOARD TIDAK MENGGUNAKAN LAYOUT ✅ */}
      <Route
  path="/admin/dashboard"
  element={
    <PrivateRoute>
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </PrivateRoute>
  }
/>

<Route
  path="/admin/users"
  element={
    <PrivateRoute>
      <AdminLayout>
        <AdminUsers />
      </AdminLayout>
    </PrivateRoute>
  }
/>

    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <MainNavbar />
      <main style={{ minHeight: "75vh" }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
