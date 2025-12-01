// src/App.jsx

import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Berita from './pages/Berita.jsx';
import Prestasi from './pages/Prestasi.jsx';
import VisiMisi from './pages/VisiMisi.jsx';

import Profil from './pages/Profil.jsx'; 

import MainNavbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="visi-misi" element={<VisiMisi />} />
        <Route path="profil" element={<Profil />} />
        <Route path="tentang" element={<About />} />
        <Route path="kontak" element={<Contact />} />
        <Route path="berita" element={<Berita />} />
        <Route path="prestasi" element={<Prestasi />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <MainNavbar />
      <main style={{ minHeight: '75vh' }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;