'use client';

export default function About() {
  const highlights = [
    {
      title: 'Cloud Infrastructure',
      desc: 'Provisioning and maintaining reliable environments across AWS, Azure, and private cloud.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      )
    },
    {
      title: 'CI/CD Automation',
      desc: 'Automating multi-stage test, build, packaging, and zero-downtime deployment pipelines.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
      )
    },
    {
      title: 'Docker & Containers',
      desc: 'Containerizing applications, orchestrating compose environments, and hardening images.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6m14 0l-7-7-7 7m14 0H5"/>
        </svg>
      )
    },
    {
      title: 'Monitoring & Observability',
      desc: 'Configuring telemetry, logs, and dashboards with Prometheus, Grafana, and Loki.',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Profile</div>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-clean-card">
          <p className="about-lead">
            I am a DevOps &amp; Cloud Engineer focused on cloud infrastructure, CI/CD automation, containerization, Linux systems, monitoring, and production deployments.
          </p>

          <div className="about-role-strip">
            <span className="role-company-tag">Current Role:</span>
            <span className="role-company-name">DevOps &amp; Cloud Engineer at <strong>K2XTech</strong> (January 2024 — Present)</span>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="about-highlight-box">
                <div className="highlight-icon-wrap">
                  {item.icon}
                </div>
                <div className="highlight-body">
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
