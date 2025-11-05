// src/App.jsx

// 1. INI ADALAH IMPORT YANG BENAR
import { Routes, Route, Outlet } from 'react-router-dom';

// Import semua halaman Anda
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Berita from './pages/Berita.jsx';
import Prestasi from './pages/Prestasi.jsx';

// Import semua komponen Anda
import MainNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from "./pages/Dashboard.jsx"; 

// ---- PERBAIKAN DI SINI ----
// Nama file & komponennya adalah FloatingWhatsApp (singular), bukan FloatingWhatApps
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import PrivateRoute from "./components/PrivateRoute";

// Function App()
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tentang" element={<About />} />
        <Route path="kontak" element={<Contact />} />
        <Route path="berita" element={<Berita />} />
        <Route path="prestasi" element={<Prestasi />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
  path="/admin/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>

      </Route>
    </Routes>
  );
}

// Function Layout() (Ini kerangka situs Anda)
function Layout() {
  return (
    <div>
      <MainNavbar />
      <main style={{ minHeight: '75vh' }}>
        <Outlet />
      </main>
      <Footer />

      {/* Nama ini sekarang cocok dengan import di atas */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;