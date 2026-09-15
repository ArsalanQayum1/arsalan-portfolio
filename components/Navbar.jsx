'use client';

import { useState, useEffect } from 'react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-top-line" aria-hidden="true"></div>
      <div className="container navbar-container">
        
        {/* Brand Logo & Live Pulse */}
        <a href="#home" className="brand-logo" id="nav-brand-link" onClick={closeMobile}>
          <span className="brand-badge">AQ</span>
          <div className="brand-info">
            <span className="brand-text">ARSALAN<span>.DEVOPS</span></span>
            <span className="brand-subtext">DevOps &amp; Cloud</span>
          </div>
          <span className="nav-status-indicator" title="Infrastructure Status: 100% Operational">
            <span className="status-pulse-dot"></span>
            <span className="status-pulse-text">Operational</span>
          </span>
        </a>

        {/* Animated Hamburger Toggle */}
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

        {/* Centered Floating Pill Navigation Dock */}
        <nav className={`nav-menu ${mobileOpen ? 'open' : ''}`} id="nav-menu" role="navigation">
          <a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => { setActiveLink('home'); closeMobile(); }}>Home</a>
          <a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={() => { setActiveLink('about'); closeMobile(); }}>About</a>
          <a href="#experience" className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`} onClick={() => { setActiveLink('experience'); closeMobile(); }}>Experience</a>
          <a href="#skills" className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={() => { setActiveLink('skills'); closeMobile(); }}>Skills</a>
          <a href="#architecture" className={`nav-link ${activeLink === 'architecture' ? 'active' : ''}`} onClick={() => { setActiveLink('architecture'); closeMobile(); }}>Architecture</a>
          <a href="#projects" className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} onClick={() => { setActiveLink('projects'); closeMobile(); }}>Projects</a>
          <a href="#cloud" className={`nav-link ${activeLink === 'cloud' ? 'active' : ''}`} onClick={() => { setActiveLink('cloud'); closeMobile(); }}>Cloud &amp; CI/CD</a>
          <a href="#terminal" className={`nav-link ${activeLink === 'terminal' ? 'active' : ''}`} onClick={() => { setActiveLink('terminal'); closeMobile(); }}>Terminal</a>
          <a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`} onClick={() => { setActiveLink('contact'); closeMobile(); }}>Contact</a>

          {/* Mobile Drawer Actions */}
          <div className="mobile-nav-actions">
            <button className="btn btn-secondary btn-sm w-100" onClick={() => { onOpenResume && onOpenResume(); closeMobile(); }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              View Full CV / Resume
            </button>
            <a href="#contact" className="btn btn-primary btn-sm w-100" onClick={closeMobile}>
              Get In Touch
            </a>
            <div className="mobile-nav-socials">
              <a href="https://linkedin.com/in/arsalan-qayum-19a429225" target="_blank" rel="noopener" className="mobile-social-link">LinkedIn</a>
              <span className="sep">•</span>
              <a href="https://github.com" target="_blank" rel="noopener" className="mobile-social-link">GitHub</a>
              <span className="sep">•</span>
              <a href="mailto:arsalanqayum09@gmail.com" className="mobile-social-link">Email</a>
            </div>
          </div>
        </nav>

        {/* Desktop Right Action Cluster */}
        <div className="nav-cta">
          <a href="https://github.com" target="_blank" rel="noopener" className="nav-icon-link" aria-label="GitHub Profile" title="GitHub Profile">
            <svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          </a>
          <a href="https://linkedin.com/in/arsalan-qayum-19a429225" target="_blank" rel="noopener" className="nav-icon-link" aria-label="LinkedIn Profile" title="LinkedIn Profile">
            <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .89.72 1.61 1.61 1.61.89 0 1.61-.72 1.61-1.61 0-.89-.72-1.61-1.61-1.61z"/></svg>
          </a>
          
          <div className="nav-cta-divider" aria-hidden="true"></div>

          <button className="btn btn-secondary btn-sm" onClick={onOpenResume} title="View Printable ATS Resume">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            <span>Resume</span>
          </button>
          
          <a href="#contact" className="btn btn-primary btn-sm nav-btn-contact" id="nav-contact-btn">
            <span>Get In Touch</span>
          </a>
        </div>

      </div>
    </header>
  );
}
