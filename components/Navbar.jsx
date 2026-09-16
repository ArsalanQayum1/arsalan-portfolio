'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveLink(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-container">
        
        {/* Brand Logo - arsalan.devops */}
        <a href="#home" className="brand-logo" id="nav-brand-link" onClick={closeMobile}>
          <span className="brand-badge">AQ</span>
          <span className="brand-text">arsalan<span>.devops</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu desktop-nav" role="navigation">
          <a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}>Home</a>
          <a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}>About</a>
          <a href="#experience" className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`}>Experience</a>
          <a href="#skills" className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#projects" className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}>Contact</a>
        </nav>

        {/* Desktop Right Action Area */}
        <div className="nav-cta desktop-cta">
          <a
            href="https://github.com/ArsalanQayum1"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          </a>
          <a
            href="https://linkedin.com/in/arsalan-qayum-19a429225"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            aria-label="LinkedIn Profile"
            title="LinkedIn Profile"
          >
            <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .89.72 1.61 1.61 1.61.89 0 1.61-.72 1.61-1.61 0-.89-.72-1.61-1.61-1.61z"/></svg>
          </a>
          
          <button className="btn btn-primary btn-sm btn-open-resume" id="nav-resume-btn" title="View Printable ATS Resume">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Header Controls (Resume Button + Hamburger) */}
        <div className="mobile-header-controls">
          <button className="btn btn-primary btn-sm btn-open-resume" id="mobile-nav-top-resume-btn" title="View Resume">
            Resume
          </button>
          <button 
            className={`nav-toggle ${mobileOpen ? 'open' : ''}`} 
            id="nav-toggle" 
            aria-label="Toggle Navigation Menu" 
            aria-expanded={mobileOpen}
            onClick={toggleMobile}
          >
            <span className="hamburger-box">
              <span className="hamburger-bar bar-1"></span>
              <span className="hamburger-bar bar-2"></span>
              <span className="hamburger-bar bar-3"></span>
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer */}
      <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#home" className={`mobile-nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={closeMobile}>Home</a>
          <a href="#about" className={`mobile-nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={closeMobile}>About</a>
          <a href="#experience" className={`mobile-nav-link ${activeLink === 'experience' ? 'active' : ''}`} onClick={closeMobile}>Experience</a>
          <a href="#skills" className={`mobile-nav-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={closeMobile}>Skills</a>
          <a href="#projects" className={`mobile-nav-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={closeMobile}>Projects</a>
          <a href="#contact" className={`mobile-nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={closeMobile}>Contact</a>
        </div>

        <div className="mobile-drawer-footer">
          <a href="#contact" className="btn btn-primary btn-sm w-100" onClick={closeMobile}>
            Get In Touch
          </a>
          <div className="mobile-drawer-socials">
            <a href="https://linkedin.com/in/arsalan-qayum-19a429225" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>•</span>
            <a href="https://github.com/ArsalanQayum1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>•</span>
            <a href="mailto:arsalanqayum09@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </header>
  );
}
