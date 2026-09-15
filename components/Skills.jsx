'use client';

import { useState } from 'react';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const filterBtns = [
    { id: 'all', label: 'All Stack' },
    { id: 'cloud', label: 'Cloud & Infra' },
    { id: 'cicd', label: 'DevOps & CI/CD' },
    { id: 'containers', label: 'Containers' },
    { id: 'web', label: 'Web & Proxy' },
    { id: 'monitoring', label: 'Monitoring & Logs' },
    { id: 'databases', label: 'Databases' },
    { id: 'security', label: 'Security & OS' },
  ];

  const skillCards = [
    {
      category: 'cloud cicd',
      icon: <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>,
      title: 'Cloud Platforms (AWS & Azure)',
      badgeClass: 'badge-production',
      badgeText: 'Production',
      desc: 'Deploying and managing scalable cloud infrastructure, security groups, subnets, EC2, virtual machines, and cloud networking.',
      tools: ['AWS', 'Azure', 'Proxmox', 'Linux VMs', 'VPC / VNet']
    },
    {
      category: 'cicd',
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>,
      title: 'CI/CD & Pipeline Automation',
      badgeClass: 'badge-production',
      badgeText: 'Production',
      desc: 'Automating software delivery with Jenkins, Git, and AWS CodeCommit. Multi-stage build pipelines, automated testing, and release triggers.',
      tools: ['Jenkins', 'Git', 'AWS CodeCommit', 'Bash Automation', 'Webhooks']
    },
    {
      category: 'containers security',
      icon: <path d="M13 13v-2h2v2h-2zm-3 0v-2h2v2h-2zm-3 0v-2h2v2H7zm9-3V8h2v2h-2zm-3 0V8h2v2h-2zm-3 0V8h2v2h-2zm-3 0V8h2v2H7zm-3 0V8h2v2H4zm17.5 1.5c-.3-.2-1.3-.7-2.7-.2-.2-.6-.6-1.1-1.1-1.5-.3-.2-.7-.4-1.2-.4h-1.5v4.5H2c-.5 0-1 .4-1 1 0 3.3 2.7 6.1 6.1 6.1 4.5 0 8.3-2.9 9.6-7 .9.1 1.7-.1 2.3-.5.9-.6 1.4-1.3 1.5-1.5z"/>,
      title: 'Docker & Container Management',
      badgeClass: 'badge-production',
      badgeText: 'Production',
      desc: 'Containerizing Node.js, React, Vite, Next.js, and FastAPI applications using Docker and Docker Compose. Multi-stage builds and security scanning.',
      tools: ['Docker', 'Docker Compose', 'Trivy Scan', 'Container Networks']
    },
    {
      category: 'web',
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>,
      title: 'Web Servers & Reverse Proxies',
      badgeClass: 'badge-production',
      badgeText: 'Production',
      desc: 'Configuring Nginx and Apache for high-availability application hosting, API gateway proxying, SSL/TLS automation via Certbot, and rate limiting.',
      tools: ['Nginx', 'Apache', 'Certbot SSL', 'PM2', 'Uvicorn']
    },
    {
      category: 'monitoring',
      icon: <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>,
      title: 'Observability & Centralized Logging',
      badgeClass: 'badge-production',
      badgeText: 'Production',
      desc: 'Building monitoring and telemetry dashboards with Prometheus, Grafana, Loki, and Promtail. Real-time metric collection, alert rules, and log streams.',
      tools: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Alertmanager']
    },
    {
      category: 'databases',
      icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>,
      title: 'Database Administration',
      badgeClass: 'badge-production',
      badgeText: 'Production',
      desc: 'Administering MongoDB, MySQL, and PostgreSQL databases. Managing user access permissions, automated backup dumps, connectivity, and migrations.',
      tools: ['MongoDB', 'MySQL', 'PostgreSQL', 'Backup Dumps', 'Migrations']
    },
    {
      category: 'cloud virtualization',
      icon: <path d="M4 6h16v12H4z"/>,
      title: 'Proxmox Virtualization',
      badgeClass: 'badge-production',
      badgeText: 'Production',
      desc: 'Administering private cloud virtual machines, storage pools, bridges, networking, and snapshot backups on Proxmox VE hypervisors.',
      tools: ['Proxmox VE', 'KVM VMs', 'LXC Containers', 'Storage Pools']
    },
    {
      category: 'security',
      icon: <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>,
      title: 'DevSecOps & Code Quality',
      badgeClass: 'badge-production',
      badgeText: 'Production',
      desc: 'Integrating Trivy container security scanners and SonarQube static code quality analysis into automated deployment workflows.',
      tools: ['Trivy', 'SonarQube', 'UFW Firewall', 'SSL/TLS', 'Least Privilege']
    }
  ];

  const filteredCards = skillCards.filter(card => filter === 'all' || card.category.includes(filter));

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Technical Competencies</div>
          <h2 className="section-title">Skills &amp; <span className="gradient-text">Production Stack</span></h2>
          <p className="section-description">
            Hands-on technical mastery across cloud platforms, CI/CD pipelines, containerization, web servers, observability, and database administration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-nav">
          {filterBtns.map(btn => (
            <button
              key={btn.id}
              className={`skill-filter-btn ${filter === btn.id ? 'active' : ''}`}
              onClick={() => setFilter(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredCards.map((card, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-box">
                  <svg viewBox="0 0 24 24">{card.icon}</svg>
                </div>
                <span className={`badge ${card.badgeClass}`}>{card.badgeText}</span>
              </div>
              <h3 className="skill-card-title">{card.title}</h3>
              <p className="skill-card-desc">{card.desc}</p>
              <div className="skill-tools-tags">
                {card.tools.map((t, i) => (
                  <span key={i} className="skill-tool-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
