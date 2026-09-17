'use client';

import { useState } from 'react';

export default function Architecture() {
  const [activeStage, setActiveStage] = useState(1); // Default to Jenkins (Stage 2)
  const [hoveredStage, setHoveredStage] = useState(null);

  // 9 Continuous Stages with short, meaningful descriptions
  const stages = [
    {
      id: 'git',
      num: '01',
      name: 'Git Repository',
      sub: 'Developer pushes code to repository.',
      desc: 'Developer pushes commit to repository.',
      status: 'Triggered',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M2.6 10.59L8.38 4.8a2.53 2.53 0 0 1 3.59 0l1.24 1.25-2.22 2.22a2.04 2.04 0 0 0-1.63 1.94 2.05 2.05 0 0 0 .52 1.37l-2.45 2.45a2.05 2.05 0 1 0 1.45 1.44l2.4-2.4a2.05 2.05 0 0 0 1.22.4 2.05 2.05 0 0 0 1.46-.6l.73-.73 2.18 2.18a2.53 2.53 0 0 1 0 3.59L15.33 21.4a2.53 2.53 0 0 1-3.59 0L2.6 12.27a2.53 2.53 0 0 1 0-3.59z"/>
        </svg>
      )
    },
    {
      id: 'jenkins',
      num: '02',
      name: 'Jenkins',
      badge: 'Jenkins CI/CD',
      isPrimary: true,
      sub: 'Jenkins detects the change and starts the CI/CD workflow.',
      desc: 'Automates build and deployment workflows.',
      status: 'Active Pipeline',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
        </svg>
      )
    },
    {
      id: 'checkout',
      num: '03',
      name: 'Checkout',
      sub: 'Source code is pulled from the repository.',
      desc: 'Pulls verified code to build workspace.',
      status: 'Code Cloned',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9"/>
        </svg>
      )
    },
    {
      id: 'build',
      num: '04',
      name: 'Build',
      sub: 'Application dependencies are installed and the application is built.',
      desc: 'Installs dependencies and builds application.',
      status: 'Compiled',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6-4.3 4.3a2 2 0 0 1-.8.5l-3.2.8a1 1 0 0 1-1.2-1.2l.8-3.2a2 2 0 0 1 .5-.8l4.3-4.3 1.6 1.6a1 1 0 0 0 1.4 0l1.4-1.4a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0l-1.4 1.4a1 1 0 0 0 0 1.4l.6.6-4.9 4.9a4 4 0 0 0-1 1.6l-1.4 5.6a1.5 1.5 0 0 0 1.8 1.8l5.6-1.4a4 4 0 0 0 1.6-1l4.9-4.9.6.6a1 1 0 0 0 1.4 0l1.4-1.4a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0z"/>
        </svg>
      )
    },
    {
      id: 'test',
      num: '05',
      name: 'Test',
      sub: 'Run available checks/tests before deployment.',
      desc: 'Runs automated checks before deployment.',
      status: 'Checks Passed',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    },
    {
      id: 'docker',
      num: '06',
      name: 'Docker Build',
      sub: 'Build the application container/image where Docker is used.',
      desc: 'Packages applications into reproducible containers.',
      status: 'Image Ready',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M22.5 11.2c-.3-.2-.8-.3-1.3-.2-.2-.6-.6-1.1-1.1-1.4-.4-.3-.9-.4-1.5-.4-.1 0-.3 0-.4.1-.4-1.1-1.4-1.8-2.6-1.8-.4 0-.8.1-1.1.3V7h-2v2h-2V7H8v2H6V7H4v4.2c-1.3.4-2 1.5-2 2.8 0 2.2 2 4 4.5 4 4.6 0 7.8-2.6 11.3-2.6 1.7 0 3.2.7 4.2 1.8.3-.3.6-.8.8-1.4.3-.8.2-1.8-.3-2.6zM6 10h2V8H6v2zm3 0h2V8H9v2zm3 0h2V8h-2v2zm3 0h2V8h-2v2z"/>
        </svg>
      )
    },
    {
      id: 'deploy',
      num: '07',
      name: 'Deploy',
      sub: 'Deploy the application to the target Linux server. Use SSH/remote deployment where applicable.',
      desc: 'Automates deployment to Linux servers.',
      status: 'Server Deployed',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2a4 4 0 0 0-4 4c0 .8.2 1.5.5 2.1C6.2 8.8 4 11.2 4 14c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6 0-2.8-2.2-5.2-4.5-5.9.3-.6.5-1.3.5-2.1a4 4 0 0 0-4-4zm-2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      )
    },
    {
      id: 'app',
      num: '08',
      name: 'Application',
      sub: 'Start or restart the deployed application. PM2 for Node.js or Docker Compose for containers.',
      desc: 'Runs live service via PM2 or Docker Compose.',
      status: 'Live Service',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm5.5 13.7L12 8.3v7.4H9.5V8.3l5.5 7.4h2.5z"/>
        </svg>
      )
    },
    {
      id: 'monitoring',
      num: '09',
      name: 'Monitoring',
      sub: 'Monitor infrastructure and applications using: Prometheus, Grafana, Loki.',
      desc: 'Tracks infrastructure metrics and application health.',
      status: 'Telemetry Live',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2C9.5 5 7 8 7 11.5c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5C17 8 14.5 5 12 2zm0 17c-4.4 0-8 1.8-8 4h16c0-2.2-3.6-4-8-4z"/>
        </svg>
      )
    }
  ];

  // Secondary Real-World Deployment Flow Steps
  const deploymentFlow = [
    'Developer',
    'Git Repository',
    'Jenkins',
    'SSH Deploy',
    'Linux Server',
    'Docker / Compose',
    'Nginx / App',
    'Monitoring'
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
        
        {/* Section Header - Clean Left Alignment */}
        <div className="section-header">
          <div className="section-tag">DevOps Architecture</div>
          <h2 className="section-title">CI/CD Automation</h2>
          <p className="section-description">Automating code delivery from Git to production.</p>
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
              <span className="jenkins-focus-title">Primary Automation Tool</span>
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

          {/* DESKTOP PIPELINE: 3x3 Spacious Connected Grid (Short, Meaningful Text) */}
          <div className="cicd-desktop-grid desktop-only" role="region" aria-label="CI/CD Pipeline Stages">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              const isHovered = hoveredStage === idx;
              const isSelected = isHovered || (hoveredStage === null && isActive);

              return (
                <div
                  key={stage.id}
                  className={`spacious-stage-card ${isSelected ? 'card-active' : ''} ${stage.isPrimary ? 'card-jenkins' : ''}`}
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
                  <div className="card-header-line">
                    <span className="seq-number">{stage.num}</span>
                    {stage.badge ? (
                      <span className="jenkins-corner-badge">{stage.badge}</span>
                    ) : (
                      <span className="stage-status-tag">
                        <span className="status-mini-dot"></span>
                        {stage.status}
                      </span>
                    )}
                  </div>

                  <div className="card-main-content">
                    <div className="card-icon-wrap">
                      {stage.icon}
                    </div>
                    <div className="card-title-group">
                      <h3 className="card-stage-title">{stage.name}</h3>
                      <p className="card-stage-sub">{stage.sub}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MOBILE PIPELINE: Vertical Connected Timeline (Hidden on Desktop) */}
          <div className="cicd-mobile-timeline mobile-only" role="region" aria-label="Mobile CI/CD Pipeline">
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
                      </div>
                    </div>
                    <p className="mobile-stage-sub">{stage.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Compact Stage Inspector Console */}
          <div className="cicd-inspector-bar">
            <div className="inspector-top-row">
              <div className="inspector-stage-flag">
                <span className="flag-num">{currentDisplayStage.num}</span>
                <span className="flag-title">{currentDisplayStage.name}</span>
                {currentDisplayStage.badge && (
                  <span className="flag-badge">{currentDisplayStage.badge}</span>
                )}
              </div>
              <div className="inspector-status-pill">
                <span className="status-live-dot"></span>
                <span>{currentDisplayStage.status}</span>
              </div>
            </div>
            <p className="inspector-focus-text">"{currentDisplayStage.desc}"</p>
          </div>

          {/* Secondary Architecture: Real-World Deployment Flow */}
          <div className="realworld-architecture-box">
            <div className="realworld-header">
              <span className="realworld-tag">Real-World Deployment Flow</span>
            </div>

            <div className="realworld-flow-chain">
              {deploymentFlow.map((nodeName, i) => {
                const isJenkins = nodeName === 'Jenkins';
                return (
                  <div key={i} className="realworld-node-item">
                    <div className={`realworld-card ${isJenkins ? 'jenkins-node' : ''}`}>
                      <span className="node-label">{nodeName}</span>
                    </div>
                    {i < deploymentFlow.length - 1 && (
                      <div className="realworld-arrow" aria-hidden="true">→</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compact Technology Badges */}
          <div className="cicd-technologies-footer">
            <span className="tech-footer-label">Technologies:</span>
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
