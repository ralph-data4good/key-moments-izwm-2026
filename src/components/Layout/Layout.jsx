import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Icons from '../Icons/Icons';
import styles from './Layout.module.css';

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleRegisterClick = () => {
    // Deep link to Festival registration with IZWM key moment
    window.location.href = '/festival/register?keyMoment=izwm-2026';
  };

  return (
    <div className={styles.appLayout}>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <div className={styles.navInner}>
            <button 
              onClick={() => scrollToSection('home')} 
              className={styles.navBrand}
              aria-label="Go to home section"
            >
              <Logo size="small" />
            </button>

            <button
              className={styles.mobileMenuToggle}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
            </button>

            <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
              <button 
                onClick={() => scrollToSection('about')}
                className={styles.navLink}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className={styles.navLink}
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('toolkit')}
                className={styles.navLink}
              >
                Toolkit
              </button>
              <button 
                onClick={() => scrollToSection('get-involved')}
                className={styles.navLink}
              >
                Get Involved
              </button>
              <button 
                onClick={handleRegisterClick}
                className={`btn btn-primary ${styles.registerBtn}`}
              >
                <Icons.Plus size={18} />
                Register Event
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.mainContent}>
        {children}
      </main>

      <footer className={styles.siteFooter}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <div className={styles.footerLogo}>
                <Logo size="small" />
              </div>
              <p className={styles.footerDescription}>
                International Zero Waste Month is a global celebration connecting communities 
                worldwide in the journey toward a waste-free future. Led by GAIA and partners.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://zerowaste.asia" target="_blank" rel="noopener noreferrer" aria-label="Zero Waste Asia Website">
                  <Icons.Globe size={20} />
                </a>
                <a href="https://twitter.com/zerowaste" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Icons.ExternalLink size={20} />
                </a>
                <a href="https://facebook.com/zerowaste" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Icons.ExternalLink size={20} />
                </a>
                <a href="https://instagram.com/zerowaste" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Icons.ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h4>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
                <li><button onClick={() => scrollToSection('events')}>Events</button></li>
                <li><button onClick={() => scrollToSection('toolkit')}>Toolkit</button></li>
                <li><button onClick={() => scrollToSection('get-involved')}>Get Involved</button></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>Resources</h4>
              <ul className={styles.footerLinks}>
                <li><a href="https://zerowaste.asia/about" target="_blank" rel="noopener noreferrer">About Zero Waste Asia</a></li>
                <li><a href="https://zerowaste.asia/guidelines" target="_blank" rel="noopener noreferrer">Event Guidelines</a></li>
                <li><a href="https://zerowaste.asia/toolkit" target="_blank" rel="noopener noreferrer">Organizer Toolkit</a></li>
                <li><a href="https://zerowaste.asia/partners" target="_blank" rel="noopener noreferrer">Partners</a></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>Legal</h4>
              <ul className={styles.footerLinks}>
                <li><a href="https://zerowaste.asia/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="https://zerowaste.asia/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                <li><a href="https://zerowaste.asia/contact" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>
              © 2026 <a href="https://zerowaste.asia" target="_blank" rel="noopener noreferrer">Zero Waste Asia</a>. 
              All rights reserved. Built with <Icons.Heart size={14} style={{display: 'inline', verticalAlign: 'middle'}} /> for the planet.
            </p>
            <p className={styles.footerCredits}>
              Part of International Zero Waste Month • November 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;

