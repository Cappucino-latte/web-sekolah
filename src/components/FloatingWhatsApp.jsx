// src/components/FloatingWhatsApp.jsx
import React, { useState, useEffect } from 'react';
import styles from './FloatingWhatsApp.module.css';
import { Whatsapp } from 'react-bootstrap-icons'; // <-- 1. IMPORT ICON

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // --- KONFIGURASI ---
  const phoneNumber = '6285229976036'; // Awali dengan 62 (kode negara)
  const schoolName = 'MTSS Roudlotush Sholihin';
  const defaultMessage = `Assalamualaikum, saya ingin bertanya tentang ${schoolName}...`;
  // -------------------

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Auto show tooltip on first visit
  useEffect(() => {
    const hasSeenTooltip = sessionStorage.getItem('hasSeenWhatsAppTooltip');
    
    if (!hasSeenTooltip && isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        sessionStorage.setItem('hasSeenWhatsAppTooltip', 'true');
        
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
      }, 2000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const handleClick = () => {
    // Track analytics if needed
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'WhatsApp',
        event_label: 'Floating Button'
      });
    }
  };

  return (
    <>
      <div className={`${styles.floatWrapper} ${isVisible ? styles.visible : ''}`}>
        {/* Tooltip/Popup */}
        <div className={`${styles.tooltip} ${showTooltip || isHovered ? styles.tooltipVisible : ''}`}>
          <div className={styles.tooltipContent}>
            <div className={styles.tooltipHeader}>
              <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </div>
                <div className={styles.statusOnline}></div>
              </div>
              <div className={styles.tooltipInfo}>
                <h5 className={styles.tooltipTitle}>Tim Admisi</h5>
                <p className={styles.tooltipStatus}>
                  <span className={styles.statusDot}></span>
                  Online - Siap Membantu
                </p>
              </div>
            </div>
            <p className={styles.tooltipText}>
              Ada yang bisa kami bantu? Chat dengan kami sekarang!
            </p>
          </div>
          <div className={styles.tooltipArrow}></div>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          className={styles.floatButton}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat dengan kami di WhatsApp"
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Ripple Effect */}
          <span className={styles.ripple}></span>
          <span className={styles.ripple} style={{ animationDelay: '0.5s' }}></span>
          
          {/* WhatsApp Icon */}
          {/* <-- 2. GUNAKAN KOMPONEN ICON DI SINI --> */}
          <Whatsapp color="white" size={28} /> 
          {/* Anda bisa mengatur 'color' dan 'size' di sini */}
    
          {/* Notification Badge (optional) */}
          <span className={styles.badge}>1</span>
        </a>
      </div>

      {/* Close button for tooltip (mobile) */}
      {showTooltip && (
        <button 
          className={styles.closeTooltip}
          onClick={() => setShowTooltip(false)}
          aria-label="Tutup popup"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      )}
    </>
  );
}

export default FloatingWhatsApp;