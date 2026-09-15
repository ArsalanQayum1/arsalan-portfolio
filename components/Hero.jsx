'use client';

export default function Hero() {
  return (
    <section className="section hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text-col">
            
            {/* Status Pill */}
            <div className="status-badge" id="hero-status-badge">
              <span className="status-dot"></span>
              <span>Available for DevOps / Cloud Opportunities</span>
              <span className="badge-separator">|</span>
              <span className="status-loc">Pakistan</span>
            </div>

            <h1 className="hero-name">ARSALAN QAYUM</h1>
            
            <div className="hero-role-wrapper">
              <span className="hero-role-title">DevOps / Cloud Architect &amp; Engineer</span>
              <div className="hero-pills-cluster">
                <span className="hero-role-pill">AWS</span>
                <span className="hero-role-pill">Azure</span>
                <span className="hero-role-pill">Proxmox</span>
                <span className="hero-role-pill">Linux</span>
                <span className="hero-role-pill">CI/CD</span>
              </div>
            </div>

            <div className="hero-tagline mono-text">
              "Automating Infrastructure. Accelerating Deployments. Building Reliable Systems."
            </div>

            <p className="hero-pitch">
              Building scalable infrastructure, automating deployments, and delivering reliable cloud-native systems. Hands-on experience across AWS, Azure, Linux servers, Docker environments, and high-availability monitoring.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" id="hero-view-work-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
                View My Work
              </a>
              <button className="btn btn-secondary btn-open-resume" id="hero-download-resume-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                Download Resume
              </button>
              <a href="#contact" className="btn btn-secondary" id="hero-contact-btn">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <span className="hero-social-label mono-text">Direct Connect //</span>
              <a href="https://linkedin.com/in/arsalan-qayum-19a429225" target="_blank" rel="noopener" className="btn-icon" aria-label="LinkedIn Profile" id="hero-social-linkedin" title="LinkedIn Profile">
                <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .89.72 1.61 1.61 1.61.89 0 1.61-.72 1.61-1.61 0-.89-.72-1.61-1.61-1.61z"/></svg>
              </a>
              <a href="tel:03015642176" className="btn-icon" aria-label="Phone / WhatsApp" id="hero-social-phone" title="Call / WhatsApp: 03015642176">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </a>
              <a href="mailto:arsalanqayum09@gmail.com" className="btn-icon" aria-label="Email Address" id="hero-social-email" title="Email: arsalanqayum09@gmail.com">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="hero-visual-col">
            <div className="hero-visual-card">
              <div className="hero-visual-header">
                <div className="window-dots">
                  <span className="window-dot dot-red"></span>
                  <span className="window-dot dot-yellow"></span>
                  <span className="window-dot dot-green"></span>
                </div>
                <div className="visual-title">pipeline-topology-orchestrator.yaml</div>
                <div className="visual-pulse-tag">
                  <span className="status-dot"></span> LIVE
                </div>
              </div>

              <div className="hero-pipeline-flow">
                <div className="flow-node-item">
                  <div className="node-left">
                    <div className="node-icon-box">
                      <svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    </div>
                    <div className="node-title-group">
                      <h4>Developer Workspace</h4>
                      <span>Feature Branch Commit</span>
                    </div>
                  </div>
                  <span className="badge badge-production">Source</span>
                </div>

                <div className="node-connector-line"></div>

                <div className="flow-node-item">
                  <div className="node-left">
                    <div className="node-icon-box" style={{ color: '#38bdf8' }}>
                      <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                    </div>
                    <div className="node-title-group">
                      <h4>Git Repo &amp; Jenkins CI</h4>
                      <span>Webhook &amp; Automated Testing</span>
                    </div>
                  </div>
                  <span className="badge badge-hands-on">Jenkins</span>
                </div>

                <div className="node-connector-line"></div>

                <div className="flow-node-item">
                  <div className="node-left">
                    <div className="node-icon-box" style={{ color: '#22d3ee' }}>
                      <svg viewBox="0 0 24 24"><path d="M13 13v-2h2v2h-2zm-3 0v-2h2v2h-2zm-3 0v-2h2v2H7zm9-3V8h2v2h-2zm-3 0V8h2v2h-2zm-3 0V8h2v2h-2zm-3 0V8h2v2H7zm-3 0V8h2v2H4zm17.5 1.5c-.3-.2-1.3-.7-2.7-.2-.2-.6-.6-1.1-1.1-1.5-.3-.2-.7-.4-1.2-.4h-1.5v4.5H2c-.5 0-1 .4-1 1 0 3.3 2.7 6.1 6.1 6.1 4.5 0 8.3-2.9 9.6-7 .9.1 1.7-.1 2.3-.5.9-.6 1.4-1.3 1.5-1.5z"/></svg>
                    </div>
                    <div className="node-title-group">
                      <h4>Docker Packaging</h4>
                      <span>Multi-stage Container Builds</span>
                    </div>
                  </div>
                  <span className="badge badge-production">Containers</span>
                </div>

                <div className="node-connector-line"></div>

                <div className="flow-node-item">
                  <div className="node-left">
                    <div className="node-icon-box" style={{ color: '#f59e0b' }}>
                      <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
                    </div>
                    <div className="node-title-group">
                      <h4>Cloud Infrastructure</h4>
                      <span>AWS, Azure &amp; Linux Nodes</span>
                    </div>
                  </div>
                  <span className="badge badge-experienced">Multi-Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
