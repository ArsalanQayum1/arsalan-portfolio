'use client';

export default function Projects() {
  const projects = [
    {
      title: 'High-Availability Multi-Region AWS & Azure Architecture',
      category: 'Cloud Infrastructure',
      desc: 'Architected and deployed multi-region cloud infrastructure using AWS EC2, Azure VMs, VPC/VNet peering, and security groups to guarantee 99.99% uptime for production web applications.',
      tags: ['AWS', 'Azure', 'Linux', 'VPC / VNet', 'Security Groups', 'Nginx'],
      impact: '99.99% Uptime SLA'
    },
    {
      title: 'Zero-Downtime Jenkins & Docker CI/CD Pipeline',
      category: 'CI/CD Automation',
      desc: 'Engineered automated multi-stage CI/CD pipelines using Jenkins, AWS CodeCommit, Docker, and SonarQube. Reduced deployment duration from 45 minutes to under 3 minutes with automated rollback capability.',
      tags: ['Jenkins', 'Git', 'AWS CodeCommit', 'Docker', 'SonarQube', 'Bash'],
      impact: '15x Deployment Speedup'
    },
    {
      title: 'Enterprise Centralized Observability Stack (Loki & Promtail)',
      category: 'Monitoring & Observability',
      desc: 'Built centralized telemetry infrastructure using Prometheus for metric collection, Grafana for dashboard visualizations, and Loki + Promtail for log stream aggregation across 30+ production containers.',
      tags: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Alertmanager'],
      impact: '100% Real-Time Visibility'
    },
    {
      title: 'Nginx High-Availability Load Balancer & Automated SSL',
      category: 'Web Servers & Security',
      desc: 'Configured Nginx reverse proxy load balancers with SSL/TLS auto-renewal via Certbot, HTTP/2 optimization, Gzip compression, and rate limiting to protect production servers from traffic spikes.',
      tags: ['Nginx', 'Certbot SSL', 'Apache', 'Reverse Proxy', 'PM2'],
      impact: 'Zero Downtime SSL Renewal'
    },
    {
      title: 'Proxmox VE Private Cloud Migration & Automated Backup Strategy',
      category: 'Virtualization & Backup',
      desc: 'Managed physical hypervisor infrastructure running Proxmox VE. Configured virtual machine bridges, storage pools, automated snapshot backups, and database replication for MongoDB & PostgreSQL.',
      tags: ['Proxmox VE', 'KVM', 'PostgreSQL', 'MongoDB', 'Bash Backup'],
      impact: 'Automated Snapshot Backups'
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
                <button className="btn btn-secondary btn-sm btn-open-resume">
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
