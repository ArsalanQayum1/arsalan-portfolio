'use client';

export default function Projects({ onOpenResume }) {
  const projects = [
    {
      title: 'High-Availability Multi-Region AWS & Azure Architecture',
      category: 'Cloud Infrastructure',
      desc: 'Architected and deployed multi-region cloud infrastructure using AWS EC2, Azure VMs, VPC/VNet peering, and security groups to guarantee 99.99% uptime for production web applications.',
      tags: ['AWS', 'Azure', 'Linux', 'VPC / VNet', 'Security Groups', 'Nginx'],
      impact: '99.99% Uptime SLA',
      icon: <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    },
    {
      title: 'Zero-Downtime Jenkins & Docker CI/CD Pipeline',
      category: 'CI/CD Automation',
      desc: 'Engineered automated multi-stage CI/CD pipelines using Jenkins, AWS CodeCommit, Docker, and SonarQube. Reduced deployment duration from 45 minutes to under 3 minutes with automated rollback capability.',
      tags: ['Jenkins', 'Git', 'AWS CodeCommit', 'Docker', 'SonarQube', 'Bash'],
      impact: '15x Deployment Speedup',
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
    },
    {
      title: 'Enterprise Centralized Observability Stack (Loki & Promtail)',
      category: 'Monitoring & Observability',
      desc: 'Built centralized telemetry infrastructure using Prometheus for metric collection, Grafana for dashboard visualizations, and Loki + Promtail for log stream aggregation across 30+ production containers.',
      tags: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Alertmanager'],
      impact: '100% Real-Time Visibility',
      icon: <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
    },
    {
      title: 'Nginx High-Availability Load Balancer & Automated SSL',
      category: 'Web Servers & Security',
      desc: 'Configured Nginx reverse proxy load balancers with SSL/TLS auto-renewal via Certbot, HTTP/2 optimization, Gzip compression, and rate limiting to protect production servers from traffic spikes.',
      tags: ['Nginx', 'Certbot SSL', 'Apache', 'Reverse Proxy', 'PM2'],
      impact: 'Zero Downtime SSL Renewal',
      icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
    },
    {
      title: 'Proxmox VE Private Cloud Migration & Automated Backup Strategy',
      category: 'Virtualization & Backup',
      desc: 'Managed physical hypervisor infrastructure running Proxmox VE. Configured virtual machine bridges, storage pools, automated snapshot backups, and database replication for MongoDB & PostgreSQL.',
      tags: ['Proxmox VE', 'KVM', 'PostgreSQL', 'MongoDB', 'Bash Backup'],
      impact: 'Automated Snapshot Backups',
      icon: <path d="M4 6h16v12H4z"/>
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Case Studies</div>
          <h2 className="section-title">Featured <span className="gradient-text">Engineering Projects</span></h2>
          <p className="section-description">
            Real-world cloud infrastructure deployments, CI/CD pipeline automations, observability setups, and production troubleshooting achievements.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card project-card">
              <div className="project-card-top">
                <span className="project-category">{proj.category}</span>
                <span className="badge badge-production">{proj.impact}</span>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              
              <div className="project-tags">
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="skill-tool-tag">{tag}</span>
                ))}
              </div>

              <div className="project-card-footer" style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className="btn btn-secondary btn-sm" onClick={onOpenResume}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                  View Case Details
                </button>
                <span className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--accent-cyan-light)' }}>
                  K2XTech Production
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
