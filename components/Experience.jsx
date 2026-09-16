'use client';

export default function Experience() {
  const points = [
    'AWS & Azure deployments and cloud infrastructure management',
    'Automated CI/CD pipelines with Jenkins and Git',
    'Docker & Docker Compose containerization and environment management',
    'Linux server administration, troubleshooting, and maintenance (Ubuntu)',
    'Web servers & reverse proxies configuration with Nginx and Apache',
    'Centralized monitoring, metrics, and logs with Prometheus, Grafana, and Loki',
    'Database migration, dump/restoration, and administration (MySQL, PostgreSQL, MongoDB)',
    'Proxmox VE private infrastructure virtualization and snapshot backups',
    'Networking, firewall rules, SSL/TLS configuration, and server security',
    'Production deployment, release verification, and incident troubleshooting',
    'DevOps team coordination, developer workflow enablement, and intern mentoring'
  ];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Career</div>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="experience-clean-card">
          <div className="exp-card-header">
            <div>
              <h3 className="exp-role">DevOps &amp; Cloud Engineer</h3>
              <div className="exp-company-sub">
                <span className="exp-company">K2XTech</span>
                <span className="exp-dot">•</span>
                <span className="exp-location">Pakistan</span>
              </div>
            </div>
            <div className="exp-period-badge">
              January 2024 — Present
            </div>
          </div>

          <ul className="exp-bullets-list">
            {points.map((pt, idx) => (
              <li key={idx} className="exp-bullet-item">
                <span className="exp-bullet-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
