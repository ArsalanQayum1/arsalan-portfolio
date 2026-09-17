'use client';

import { useState } from 'react';

export default function Architecture() {
  const [activeStage, setActiveStage] = useState(1); // Default to Jenkins (Stage 2)
  const [hoveredStage, setHoveredStage] = useState(null);

  // 9 Continuous Stages as specified in requirements
  const stages = [
    {
      id: 'git',
      num: '01',
      name: 'Git Repository',
      tool: 'Git',
      sub: 'Developer pushes code to repository.',
      desc: 'Developer pushes commit to repository, triggering the automated CI/CD webhook.',
      status: 'Triggered',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M2.6 10.59L8.38 4.8a2.53 2.53 0 0 1 3.59 0l1.24 1.25-2.22 2.22a2.04 2.04 0 0 0-1.63 1.94 2.05 2.05 0 0 0 .52 1.37l-2.45 2.45a2.05 2.05 0 1 0 1.45 1.44l2.4-2.4a2.05 2.05 0 0 0 1.22.4 2.05 2.05 0 0 0 1.46-.6l.73-.73 2.18 2.18a2.53 2.53 0 0 1 0 3.59L15.33 21.4a2.53 2.53 0 0 1-3.59 0L2.6 12.27a2.53 2.53 0 0 1 0-3.59z"/>
        </svg>
      )
    },
    {
      id: 'jenkins',
      num: '02',
      name: 'Jenkins',
      tool: 'Jenkins',
      badge: 'Jenkins CI/CD',
      isPrimary: true,
      sub: 'Jenkins detects the change and starts the CI/CD workflow.',
      desc: 'Automates build and deployment workflows.',
      status: 'Active Pipeline',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      )
    },
    {
      id: 'checkout',
      num: '03',
      name: 'Checkout',
      tool: 'SCM Checkout',
      sub: 'Source code is pulled from the repository.',
      desc: 'Source code and dependencies are pulled into the clean Jenkins build workspace.',
      status: 'Code Cloned',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9"/>
        </svg>
      )
    },
    {
      id: 'build',
      num: '04',
      name: 'Build',
      tool: 'Build Stage',
      sub: 'Application dependencies are installed and the application is built.',
      desc: 'Installs dependencies and compiles application assets in an isolated environment.',
      status: 'Compiled',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-4.3 4.3a2 2 0 0 1-.8.5l-3.2.8a1 1 0 0 1-1.2-1.2l.8-3.2a2 2 0 0 1 .5-.8l4.3-4.3 1.6 1.6a1 1 0 0 0 1.4 0l1.4-1.4a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0l-1.4 1.4a1 1 0 0 0 0 1.4l.6.6-4.9 4.9a4 4 0 0 0-1 1.6l-1.4 5.6a1.5 1.5 0 0 0 1.8 1.8l5.6-1.4a4 4 0 0 0 1.6-1l4.9-4.9.6.6a1 1 0 0 0 1.4 0l1.4-1.4a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0z"/>
        </svg>
      )
    },
    {
      id: 'test',
      num: '05',
      name: 'Test',
      tool: 'Validation',
      sub: 'Run available checks/tests before deployment.',
      desc: 'Executes automated testing checks and quality verification prior to release.',
      status: 'Verified',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      id: 'docker',
      num: '06',
      name: 'Docker Build',
      tool: 'Docker',
      sub: 'Build the application container/image where Docker is used.',
      desc: 'Packages applications into reproducible containers.',
      status: 'Image Ready',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M22.5 11.2c-.3-.2-.8-.3-1.3-.2-.2-.6-.6-1.1-1.1-1.4-.4-.3-.9-.4-1.5-.4-.1 0-.3 0-.4.1-.4-1.1-1.4-1.8-2.6-1.8-.4 0-.8.1-1.1.3V7h-2v2h-2V7H8v2H6V7H4v4.2c-1.3.4-2 1.5-2 2.8 0 2.2 2 4 4.5 4 4.6 0 7.8-2.6 11.3-2.6 1.7 0 3.2.7 4.2 1.8.3-.3.6-.8.8-1.4.3-.8.2-1.8-.3-2.6zM6 10h2V8H6v2zm3 0h2V8H9v2zm3 0h2V8h-2v2zm3 0h2V8h-2v2z"/>
        </svg>
      )
    },
    {
      id: 'deploy',
      num: '07',
      name: 'Deploy',
      tool: 'Linux / SSH',
      sub: 'Deploy the application to the target Linux server. Use SSH/remote deployment where applicable.',
      desc: 'Automates deployment to Linux servers.',
      status: 'Delivered',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2a4 4 0 0 0-4 4c0 .8.2 1.5.5 2.1C6.2 8.8 4 11.2 4 14c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6 0-2.8-2.2-5.2-4.5-5.9.3-.6.5-1.3.5-2.1a4 4 0 0 0-4-4zm-2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      )
    },
    {
      id: 'app',
      num: '08',
      name: 'Application',
      tool: 'PM2 / Compose',
      sub: 'Start or restart the deployed application. PM2 for Node.js or Docker Compose for containers.',
      desc: 'Manages runtime processes with PM2 for Node.js or Docker Compose for containers.',
      status: 'Live Service',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm5.5 13.7L12 8.3v7.4H9.5V8.3l5.5 7.4h2.5z"/>
        </svg>
      )
    },
    {
      id: 'monitoring',
      num: '09',
      name: 'Monitoring',
      tool: 'Prometheus & Grafana',
      sub: 'Monitor infrastructure and applications using: Prometheus, Grafana, Loki.',
      desc: 'Tracks infrastructure metrics and application health.',
      status: 'Telemetry Live',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2C9.5 5 7 8 7 11.5c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5C17 8 14.5 5 12 2zm0 17c-4.4 0-8 1.8-8 4h16c0-2.2-3.6-4-8-4z"/>
        </svg>
      )
    }
  ];

  // Secondary Real-World Deployment Flow Steps
  const deploymentFlow = [
    { label: 'Developer', role: 'Code Author' },
    { label: 'Git Repository', role: 'GitHub / GitLab' },
    { label: 'Jenkins', role: 'CI/CD Automation', isHighlight: true },
    { label: 'SSH / Remote Deployment', role: 'Secure Transfer' },
    { label: 'Linux Server', role: 'Ubuntu / Debian' },
    { label: 'Docker / Compose', role: 'Container Runtime' },
    { label: 'Nginx / Application', role: 'PM2 / Reverse Proxy' },
    { label: 'Monitoring', role: 'Prometheus & Grafana' }
  ];

  // Compact Technology Badges
  const techBadges = [
    { name: 'Jenkins', icon: '⚡' },
    { name: 'Git', icon: '🌿' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Linux', icon: '🐧' },
    { name: 'SSH', icon: '🔑' },
    { name: 'Nginx', icon: '🌐' },
    { name: 'PM2', icon: '⚙️' },
    { name: 'Docker Compose', icon: '📦' },
    { name: 'Prometheus', icon: '🔥' },
    { name: 'Grafana', icon: '📊' },
    { name: 'Loki', icon: '📑' }
  ];

  const currentDisplayStage = hoveredStage !== null ? stages[hoveredStage] : stages[activeStage];

  return (
    <section className="section cicd-section" id="architecture">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-tag">DevOps Workflow</div>
          <h2 className="section-title">CI/CD Automation</h2>
          <p className="section-subtitle">Automating code delivery from Git to production.</p>
          <p className="cicd-portfolio-copy">
            I automate application build and deployment workflows using Jenkins, Git, Docker and Linux infrastructure, with monitoring through Prometheus, Grafana and Loki.
          </p>
        </div>

        {/* CI/CD Console Wrapper */}
        <div className="cicd-console-wrapper">
          
          {/* Top Jenkins Focus Bar & Fast Path */}
          <div className="cicd-jenkins-focus-bar">
            <div className="jenkins-primary-callout">
              <span className="jenkins-pill-badge">
                <span className="jenkins-pill-dot"></span>
                Jenkins CI/CD
              </span>
              <span className="jenkins-focus-title">Primary Automation Engine</span>
            </div>
            <div className="jenkins-fast-path" aria-label="Jenkins Core Pipeline Flow">
              <span className="fast-step">Git</span>
              <span className="fast-arrow">→</span>
              <span className="fast-step fast-highlight">Jenkins</span>
              <span className="fast-arrow">→</span>
              <span className="fast-step">Build</span>
              <span className="fast-arrow">→</span>
              <span className="fast-step">Deploy</span>
            </div>
          </div>

          {/* Main Visual Connected Pipeline (9 Stages) */}
          <div className="cicd-pipeline-container" role="region" aria-label="Interactive CI/CD Pipeline">
            
            {/* Desktop Pipeline Flow Track */}
            <div className="cicd-track-grid desktop-only">
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                const isHovered = hoveredStage === idx;
                const isSelected = isHovered || (hoveredStage === null && isActive);

                return (
                  <div key={stage.id} className="cicd-node-wrapper">
                    {/* Stage Card */}
                    <div
                      className={`cicd-stage-card ${isSelected ? 'stage-active' : ''} ${stage.isPrimary ? 'stage-jenkins' : ''}`}
                      onMouseEnter={() => setHoveredStage(idx)}
                      onMouseLeave={() => setHoveredStage(null)}
                      onClick={() => setActiveStage(idx)}
                      role="button"
                      tabIndex={0}
                      aria-label={`${stage.name}: ${stage.sub}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveStage(idx);
                        }
                      }}
                    >
                      <div className="stage-top-meta">
                        <span className="stage-seq">{stage.num}</span>
                        {stage.badge && <span className="stage-jenkins-badge">{stage.badge}</span>}
                      </div>

                      <div className="stage-icon-circle">
                        {stage.icon}
                      </div>

                      <div className="stage-name-label">{stage.name}</div>
                      <div className="stage-tool-label">{stage.tool}</div>
                    </div>

                    {/* Connecting Pipe & Moving Data Dot */}
                    {idx < stages.length - 1 && (
                      <div className={`cicd-connector-pipe ${isSelected ? 'pipe-active' : ''}`}>
                        <div className="pipe-line-base"></div>
                        <div className="pipe-data-pulse" style={{ animationDelay: `${idx * 0.45}s` }}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Vertical Connected Timeline */}
            <div className="cicd-mobile-timeline mobile-only">
              <div className="timeline-spine-line">
                <div className="timeline-data-packet"></div>
              </div>
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div
                    key={`mob-${stage.id}`}
                    className={`mobile-timeline-item ${isActive ? 'active' : ''} ${stage.isPrimary ? 'jenkins-highlight' : ''}`}
                    onClick={() => setActiveStage(idx)}
                  >
                    <div className="mobile-timeline-marker">
                      <span className="marker-num">{stage.num}</span>
                    </div>
                    <div className="mobile-timeline-card">
                      <div className="mobile-card-top">
                        <div className="mobile-icon-box">{stage.icon}</div>
                        <div>
                          <div className="mobile-stage-title">
                            {stage.name}
                            {stage.badge && <span className="mobile-jenkins-badge">{stage.badge}</span>}
                          </div>
                          <div className="mobile-stage-tool">{stage.tool}</div>
                        </div>
                      </div>
                      <p className="mobile-stage-sub">{stage.sub}</p>
                      <div className="mobile-stage-desc">{stage.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Interactive Stage Inspector Card */}
          <div className="cicd-inspector-bar">
            <div className="inspector-stage-flag">
              <span className="flag-num">STAGE {currentDisplayStage.num}</span>
              <span className="flag-title">{currentDisplayStage.name}</span>
              {currentDisplayStage.badge && (
                <span className="flag-badge">{currentDisplayStage.badge}</span>
              )}
            </div>
            <div className="inspector-details-row">
              <div className="inspector-info-block">
                <span className="info-tag">Workflow Action:</span>
                <span className="info-text">{currentDisplayStage.sub}</span>
              </div>
              <div className="inspector-info-block highlight-block">
                <span className="info-tag">Engineering Focus:</span>
                <span className="info-text font-accent">"{currentDisplayStage.desc}"</span>
              </div>
              <div className="inspector-status-pill">
                <span className="status-live-dot"></span>
                <span>{currentDisplayStage.status}</span>
              </div>
            </div>
          </div>

          {/* Real-World Deployment Flow (Secondary Architecture) */}
          <div className="realworld-architecture-box">
            <div className="realworld-header">
              <span className="realworld-tag">Real-World Deployment Flow</span>
              <span className="realworld-subtitle">Target Architecture: Developer Workstation to Production Linux Server</span>
            </div>

            <div className="realworld-flow-chain">
              {deploymentFlow.map((node, i) => (
                <div key={i} className="realworld-node-item">
                  <div className={`realworld-card ${node.isHighlight ? 'jenkins-node' : ''}`}>
                    <span className="node-label">{node.label}</span>
                    <span className="node-role">{node.role}</span>
                  </div>
                  {i < deploymentFlow.length - 1 && (
                    <div className="realworld-arrow" aria-hidden="true">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Compact Technology Badges */}
          <div className="cicd-technologies-footer">
            <span className="tech-footer-label">Pipeline Technologies:</span>
            <div className="tech-badges-list">
              {techBadges.map((t, idx) => (
                <div key={idx} className={`tech-badge-item ${t.name === 'Jenkins' ? 'tech-badge-jenkins' : ''}`}>
                  <span className="tech-badge-icon">{t.icon}</span>
                  <span className="tech-badge-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
