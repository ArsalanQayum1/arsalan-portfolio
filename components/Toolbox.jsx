'use client';

export default function Toolbox() {
  const tools = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Proxmox', category: 'Hypervisor' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'Docker', category: 'Containers' },
    { name: 'Linux', category: 'OS' },
    { name: 'Nginx', category: 'Web Proxy' },
    { name: 'Apache', category: 'Web Proxy' },
    { name: 'Prometheus', category: 'Metrics' },
    { name: 'Grafana', category: 'Visualization' },
    { name: 'Loki', category: 'Logging' },
    { name: 'Promtail', category: 'Log Collector' },
    { name: 'PM2', category: 'Process Mgmt' },
    { name: 'Uvicorn', category: 'ASGI Server' },
    { name: 'Trivy', category: 'Security' },
    { name: 'SonarQube', category: 'Code Quality' },
    { name: 'MongoDB', category: 'NoSQL' },
    { name: 'PostgreSQL', category: 'SQL' },
    { name: 'MySQL', category: 'SQL' },
    { name: 'Bash', category: 'Automation' }
  ];

  return (
    <section className="section" id="toolbox">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">DevOps Stack</div>
          <h2 className="section-title">Production <span className="gradient-text">Toolbox &amp; Ecosystem</span></h2>
          <p className="section-description">
            Battle-tested DevOps tools, cloud platforms, web servers, databases, and monitoring engines used daily in production environments.
          </p>
        </div>

        <div className="toolbox-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
          {tools.map((t, idx) => (
            <div key={idx} className="glass-card tool-item-card" style={{ padding: '20px 16px', textAlign: 'center', transition: 'all 0.2s ease' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: '#ffffff', marginBottom: '4px' }}>
                {t.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--accent-cyan-light)' }}>
                {t.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
