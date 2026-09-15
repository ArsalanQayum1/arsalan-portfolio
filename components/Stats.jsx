'use client';

export default function Stats() {
  return (
    <div className="stats-grid" id="stats">
      <div className="stat-card">
        <div className="stat-icon">
          <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
        </div>
        <div className="stat-info">
          <div className="stat-number">2+</div>
          <div className="stat-label">Years of Experience</div>
          <div className="stat-sub">DevOps &amp; Cloud Engineering</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" style={{ color: '#38bdf8' }}>
          <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
        </div>
        <div className="stat-info">
          <div className="stat-number" style={{ fontSize: '1.8rem', paddingTop: '5px' }}>AWS + Azure</div>
          <div className="stat-label">Multi-Cloud Platforms</div>
          <div className="stat-sub">IaaS, PaaS &amp; Hybrid Systems</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" style={{ color: '#22d3ee' }}>
          <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
        </div>
        <div className="stat-info">
          <div className="stat-number" style={{ fontSize: '1.8rem', paddingTop: '5px' }}>Automated</div>
          <div className="stat-label">CI/CD Deployments</div>
          <div className="stat-sub">Jenkins &amp; Git Integration</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon" style={{ color: '#34d399' }}>
          <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
        </div>
        <div className="stat-info">
          <div className="stat-number" style={{ fontSize: '1.8rem', paddingTop: '5px' }}>Production</div>
          <div className="stat-label">Infrastructure Exp.</div>
          <div className="stat-sub">Reliable &amp; Observable Systems</div>
        </div>
      </div>
    </div>
  );
}
