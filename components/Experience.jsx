'use client';

import { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('cloud');

  const tabs = [
    { id: 'cloud', label: 'Cloud Infra' },
    { id: 'cicd', label: 'CI/CD & Automation' },
    { id: 'linux', label: 'Linux & Servers' },
    { id: 'containers', label: 'Containers & Security' },
    { id: 'pm2', label: 'Process Mgmt' },
    { id: 'monitoring', label: 'Monitoring & Logs' },
    { id: 'databases', label: 'Databases' },
    { id: 'virtualization', label: 'Virtualization' },
    { id: 'team', label: 'Team & Mentorship' },
  ];

  const experienceData = {
    cloud: {
      title: 'Cloud Infrastructure (AWS, Azure & Proxmox)',
      tasks: [
        'Design, deploy, and maintain cloud and production infrastructure across AWS, Azure, Proxmox, and Linux environments.',
        'Deploy and manage Node.js, React, Vite, Next.js, and backend applications across staging and production environments.',
        'Configure infrastructure networking, security groups, subnets, and isolated application environments.',
        'Perform server and VM backup, migration, and infrastructure maintenance activities.'
      ]
    },
    cicd: {
      title: 'CI/CD Pipelines & Automation',
      tasks: [
        'Build and maintain automated CI/CD pipelines using Jenkins, AWS CodeCommit, and Git.',
        'Automate application build, test, packaging, and deployment stages.',
        'Develop Bash/Shell scripts for deployment, backups, maintenance, and operational automation.',
        'Optimize deployment environments to improve application reliability, scalability, availability, and deployment efficiency.'
      ]
    },
    linux: {
      title: 'Linux Server Administration & Web Infrastructure',
      tasks: [
        'Manage Linux servers (Ubuntu), services, packages, processes, filesystem permissions, logs, and system resources.',
        'Configure and manage web servers including Nginx and Apache for application hosting and API routing.',
        'Set up reverse proxies, SSL/TLS certificates via Certbot, HTTPS redirection, headers, and domain routing.',
        'Troubleshoot production issues including 502 Bad Gateway, 405 Method Not Allowed, SSL/HTTPS, mixed-content, port conflicts, upstream failures, permission errors, build failures, and resource utilization issues.'
      ]
    },
    containers: {
      title: 'Containerization & DevSecOps',
      tasks: [
        'Containerize and deploy applications using Docker and Docker Compose.',
        'Manage container lifecycles, volume persistence, networks, and environment variables.',
        'Work with Trivy and SonarQube for container security scanning and code-quality practices.'
      ]
    },
    pm2: {
      title: 'Application Process Management',
      tasks: [
        'Manage production applications using PM2, including process monitoring, restarts, logs, and troubleshooting.',
        'Configure process management for Node.js, Python FastAPI, Uvicorn, and background services.'
      ]
    },
    monitoring: {
      title: 'Monitoring, Observability & Telemetry',
      tasks: [
        'Build monitoring and observability environments using Prometheus, Grafana, Loki, and Promtail.',
        'Monitor application health, server resources, logs, and service availability to identify and resolve production issues.'
      ]
    },
    databases: {
      title: 'Database Administration & Operations',
      tasks: [
        'Administer MongoDB, MySQL, and PostgreSQL, including database users, permissions, backups, connectivity, and troubleshooting.',
        'Perform database migrations, dumps, restores, and data verification across staging and production.'
      ]
    },
    virtualization: {
      title: 'Virtualization & Private Cloud',
      tasks: [
        'Manage virtual machines, storage pools, networking, and snapshot backups on Proxmox VE hypervisors.',
        'Perform server and VM backup, migration, and infrastructure maintenance activities.'
      ]
    },
    team: {
      title: 'Cross-functional Team Support',
      tasks: [
        'Support application teams with infrastructure, deployment, networking, database, and production configuration issues.',
        'Collaborate with developers to troubleshoot environment discrepancies and streamline deployment steps.'
      ]
    }
  };

  const currentData = experienceData[activeTab];

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Production Track Record</div>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-description">
            Hands-on engineering across cloud deployments, automated pipelines, Linux servers, containers, databases, and monitoring infrastructure.
          </p>
        </div>

        <div className="experience-wrapper">
          <div className="exp-company-banner">
            <div className="exp-banner-header">
              <div className="exp-title-group">
                <h3>DevOps / Cloud Architect</h3>
                <div className="exp-company-name">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                  K2X TECH — Pakistan
                </div>
              </div>
              <div className="exp-date-badge">January 2024 — Present</div>
            </div>
            <div className="exp-intro-text">
              Design, deploy, and maintain cloud and production infrastructure across AWS, Azure, Proxmox, and Linux environments. Managing CI/CD automation with Jenkins &amp; AWS CodeCommit, Docker containers, multi-database administration, and monitoring with Prometheus, Grafana, Loki, and Promtail.
            </div>
          </div>

          {/* Sub Nav Tabs */}
          <div className="exp-tabs-nav" role="tablist">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`exp-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div className="exp-tab-panel active" role="tabpanel">
            <div className="exp-panel-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--accent-cyan-light)"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>
              {currentData.title}
            </div>
            <div className="exp-responsibilities-list">
              {currentData.tasks.map((task, idx) => (
                <div key={idx} className="exp-task-item">
                  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
