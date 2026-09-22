'use client';

export default function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="container">
        <div className="hero-content-clean">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span>Available for DevOps &amp; Cloud Opportunities</span>
          </div>

          <h1 className="hero-name">ARSALAN QAYUM</h1>
          <h2 className="hero-title">DevOps &amp; Cloud Engineer</h2>

          <p className="hero-description">
            Building reliable infrastructure, automating deployments, and managing cloud &amp; production environments.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" id="hero-contact-btn">
              Contact Me
            </a>
            <button className="btn btn-secondary btn-open-resume" id="hero-download-resume-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Resume
            </button>
          </div>

          <div className="hero-socials-clean">
            <a href="https://linkedin.com/in/arsalan-qayum-19a429225" target="_blank" rel="noopener noreferrer" className="hero-social-link" title="LinkedIn Profile">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .89.72 1.61 1.61 1.61.89 0 1.61-.72 1.61-1.61 0-.89-.72-1.61-1.61-1.61z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="mailto:arsalanqayum09@gmail.com" className="hero-social-link" title="Direct Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>arsalanqayum09@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
