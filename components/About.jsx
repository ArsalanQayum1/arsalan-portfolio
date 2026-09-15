'use client';

export default function About() {
  const principles = [
    {
      title: 'Automation',
      desc: 'Automate repetitive infrastructure and deployment tasks to eliminate human errors and accelerate time-to-market.',
      icon: <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
    },
    {
      title: 'Reliability',
      desc: 'Build systems that are stable, observable and rapidly recoverable through proactive monitoring and automated failovers.',
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    },
    {
      title: 'Scalability',
      desc: 'Design infrastructure capable of handling changing workloads with elastic resource provisioning and containerization.',
      icon: <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
    },
    {
      title: 'Security',
      desc: 'Apply security principles across infrastructure and deployment pipelines with strict firewall rules, SSL/TLS, and least privilege.',
      icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    },
    {
      title: 'Observability',
      desc: 'Use metrics, logs and monitoring to understand system health in real time through Prometheus, Grafana, and Loki.',
      icon: <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
    },
    {
      title: 'Collaboration',
      desc: 'Bridge development and infrastructure teams through automation, transparent telemetry, and reliable shared workflows.',
      icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    }
  ];

  const focusAreas = [
    'DevOps Engineering', 'Cloud Infrastructure', 'CI/CD Automation',
    'Containerization', 'Linux Administration', 'Infrastructure Automation',
    'Monitoring & Observability', 'Release Management', 'Database Migrations', 'Networking & Security'
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Engineering Mindset</div>
          <h2 className="section-title">About <span className="gradient-text">Arsalan Qayum</span></h2>
          <p className="section-description">
            Committed to eliminating deployment bottlenecks, stabilizing system runtimes, and engineering cloud infrastructure that withstands production workloads.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-text-card">
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff' }}>Professional Background</h3>
            <p>
              I am a DevOps and Cloud Engineer focused on building reliable infrastructure, automating software delivery, and improving deployment workflows.
            </p>
            <p>
              My experience includes cloud deployments, CI/CD automation, Linux server administration, Docker-based applications, private infrastructure, networking, monitoring, database migrations, and production deployment management.
            </p>
            <p>
              I work across both cloud and on-premises environments and have hands-on experience managing applications, servers, containers, databases, monitoring systems, and deployment pipelines.
            </p>
            <p>
              I enjoy solving infrastructure problems, automating repetitive processes, improving reliability, and helping development teams deliver applications faster and more safely.
            </p>
          </div>

          <div className="glass-card about-highlights-card">
            <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '12px' }}>Core Operational Focus</h3>
            <div className="about-focus-list">
              {focusAreas.map((item, i) => (
                <div key={i} className="focus-item">
                  <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(11, 17, 32, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '18px', marginTop: '14px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--accent-cyan-light)', marginBottom: '6px' }}>
                Current Employment Status:
              </div>
              <div style={{ fontWeight: 600, color: '#ffffff' }}>
                DevOps &amp; Cloud Engineer at <span style={{ color: '#38bdf8' }}>K2XTech</span> (Jan 2024 — Present)
              </div>
            </div>
          </div>
        </div>

        <div className="principles-grid">
          {principles.map((p, i) => (
            <div key={i} className="principle-card">
              <div className="principle-icon">
                <svg viewBox="0 0 24 24">{p.icon}</svg>
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
