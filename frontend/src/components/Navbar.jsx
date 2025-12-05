import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Search, 
  BookmarkFill, 
  List, 
  X,
  ChevronDown
} from "react-bootstrap-icons";
import styles from "./Navbar.module.css";

// IMPORT GAMBAR
import logoImg from "../assets/inilogo.png"; 

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerInner}>
        
        {/* === 1. LOGO (KIRI) === */}
        <div className={styles.logoSection} onClick={() => navigate('/')}>
          <img 
            src={logoImg} 
            alt="Logo MTs" 
            className={styles.logoImg} 
          />
          <div className={styles.brandText}>
            <span className={styles.brandTop}>MTs Roudlotush</span>
            <span className={styles.brandBottom}>SHOLIHIN</span>
          </div>
        </div>

        {/* === 2. NAVIGASI DESKTOP (TENGAH) === */}
        <nav className={styles.navContainer}>
            <span className={styles.navLink} onClick={() => navigate('/')}>Beranda</span>

            {/* DROPDOWN PROFIL (Berisi Visi Misi) */}
            <div className={styles.navItemDropdown} style={{position: 'relative'}}>
                <button className={styles.dropdownToggle}>
                    PROFIL <ChevronDown size={12} />
                </button>
                <div className={styles.dropdownMenu}>
                    <span className={styles.dropdownItem} onClick={() => navigate('/profil')}>Sejarah</span>
                    <span className={styles.dropdownItem} onClick={() => navigate('/visi-misi')}>Visi & Misi</span>
                </div>
            </div>

            {/* DROPDOWN PROFIL (Berisi Visi Misi) */}
            <div className={styles.navItemDropdown} style={{position: 'relative'}}>
                <button className={styles.dropdownToggle}>
                    PROGRAM <ChevronDown size={12} />
                </button>
                <div className={styles.dropdownMenu}>
                    <span className={styles.dropdownItem} onClick={() => navigate('/akademik')}>Akademik</span>
                    <span className={styles.dropdownItem} onClick={() => navigate('/kepesantrenan')}>Kepesantrenan</span>
                </div>
            </div>

            <span className={styles.navLink} onClick={() => navigate('/prestasi')}>Prestasi</span>
            
            <span className={styles.navLink} onClick={() => navigate('/berita')}>Berita</span>

            <span className={styles.navLink} onClick={() => navigate('/kontak')}>Kontak</span>
        </nav>

        {/* === 3. ACTIONS & CTA (KANAN) === */}
        <div className={styles.actionSection}>
             {/* Ikon Search Minimalis */}
             <Search size={18} className={styles.iconBtn} title="Cari" />
             
             {/* Tombol PPDB */}
             <span className={styles.ctaButton} onClick={() => navigate('/ppdb')} role="button">
                <BookmarkFill size={16} /> PPDB ONLINE
             </span>
        </div>

        {/* === 4. MOBILE TOGGLE (KANAN - HP ONLY) === */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={40} /> : <List size={40} />}
        </button>

      </div>

      {/* === MOBILE MENU DRAWER === */}
      {isOpen && (
        <div className={styles.mobileMenu}>
            <span className={styles.mobileLink} style={{color: '#ffc72c', borderBottom: '2px solid #ffc72c'}} onClick={() => { navigate('/ppdb'); setIsOpen(false); }}>DAFTAR PPDB</span>

            <span className={styles.mobileLink} onClick={() => { navigate('/'); setIsOpen(false); }}>Beranda</span>
            
            {/* Profil Mobile (Langsung list ke bawah atau link induk) */}
            <span className={styles.mobileLink} onClick={() => { navigate('/profil'); setIsOpen(false); }}>Profil (Sejarah)</span>
            <span className={styles.mobileLink} onClick={() => { navigate('/visi-misi'); setIsOpen(false); }}>- Visi & Misi</span>

            <span className={styles.mobileLink} onClick={() => { navigate('/akademik'); setIsOpen(false); }}>Akademik</span>
            <span className={styles.mobileLink} onClick={() => { navigate('/kepesantrenan'); setIsOpen(false); }}>Kepesantrenan</span>
            <span className={styles.mobileLink} onClick={() => { navigate('/berita'); setIsOpen(false); }}>Berita</span>
            <span className={styles.mobileLink} onClick={() => { navigate('/kontak'); setIsOpen(false); }}>Kontak</span>
        </div>
      )}
    </header>
  );
}

export default NavigationBar;