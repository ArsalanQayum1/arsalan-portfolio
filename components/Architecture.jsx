'use client';

import { useState } from 'react';

export default function Architecture() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'source',
      step: '01',
      phase: 'Source & Trigger',
      tool: 'Git & CodeCommit',
      action: 'Version Control & Webhooks',
      summary: 'Developers push signed commits to the repository. Automated branch protections ensure reviews pass, and automated webhook payloads dispatch directly to Jenkins.',
      command: 'git push origin main → webhook:post',
      status: 'Triggered',
      badge: 'SCM',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      ),
      highlights: [
        'Automated branch protection and required PR approvals',
        'Cryptographically signed commits with automated webhook dispatch',
        'Hybrid workflow across GitHub and AWS CodeCommit'
      ],
      configSnippet: `# Webhook payload dispatch to Jenkins CI
POST https://ci.k2xtech.internal/generic-webhook/invoke
Headers:
  X-GitHub-Event: push
  X-Hub-Signature-256: sha256=9f82c1...
Payload:
  { "ref": "refs/heads/main", "commit": "8f921a4" }`
    },
    {
      id: 'ci',
      step: '02',
      phase: 'Continuous Integration',
      tool: 'Jenkins Automation',
      action: 'Build, Lint & Security Scan',
      summary: 'Multi-stage Jenkins pipeline triggers instantly. Executes unit tests, code linting, SonarQube quality analysis, and Trivy filesystem vulnerability scans.',
      command: 'stage("Test & Scan") { sh "npm test" }',
      status: 'Tests Passed',
      badge: 'CI Automation',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
      ),
      highlights: [
        'Parallelized test and lint execution reducing CI time by 60%',
        'Trivy automated CVE vulnerability gate before image build',
        'Automated Slack/email notification on pipeline failures'
      ],
      configSnippet: `pipeline {
  agent any
  stages {
    stage('Test & Quality') {
      steps {
        sh 'npm test -- --coverage'
        sh 'trivy fs --severity HIGH,CRITICAL .'
      }
    }
  }
}`
    },
    {
      id: 'docker',
      step: '03',
      phase: 'Containerization',
      tool: 'Docker & Compose',
      action: 'Multi-Stage Image Build',
      summary: 'Packages dependencies into minimal Alpine base images using Docker multi-stage builds, enforcing non-root execution and optimal layer caching.',
      command: 'docker build --target=production -t app:v2.4 .',
      status: 'Image Built',
      badge: 'Containers',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6m14 0l-7-7-7 7m14 0H5"/>
        </svg>
      ),
      highlights: [
        'Multi-stage Docker builds reducing image size from 1GB to <90MB',
        'Non-root user execution in production container runtime',
        'Automated tagging with Git commit SHA and semantic versioning'
      ],
      configSnippet: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --prefer-offline
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
USER node
CMD ["node", "server.js"]`
    },
    {
      id: 'deploy',
      step: '04',
      phase: 'Automated Deployment',
      tool: 'Bash, SSH & PM2',
      action: 'Zero-Downtime Rollout',
      summary: 'Automated deployment scripts perform rolling container updates or PM2 cluster reloads on production Linux servers with zero dropped HTTP connections.',
      command: 'pm2 reload app --update-env',
      status: 'Zero Downtime',
      badge: 'Delivery',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6h16v12H4z"/>
        </svg>
      ),
      highlights: [
        'Rolling container update with zero dropped user requests',
        'Automatic health check polling prior to traffic cutover',
        'Automated rollback to previous stable commit on failure'
      ],
      configSnippet: `#!/usr/bin/env bash
echo "[deploy] Pulling verified release v2.4..."
docker compose pull app
docker compose up -d --no-deps app
curl -f http://127.0.0.1:3000/health || (docker compose rollback && exit 1)
echo "[deploy] Zero-downtime release completed."`
    },
    {
      id: 'ingress',
      step: '05',
      phase: 'Edge Gateway & SSL',
      tool: 'Nginx & Certbot',
      action: 'Reverse Proxy & Security',
      summary: 'Terminates Let\'s Encrypt SSL/TLS certificates, enforces HTTPS security headers, manages HTTP/2 ingress, and load-balances requests across backends.',
      command: 'proxy_pass http://upstream_app;',
      status: '200 OK / HTTPS',
      badge: 'Web Gateway',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      highlights: [
        'A+ rated SSL/TLS termination with automated Certbot renewal',
        'Gzip compression, static asset caching & HTTP/2 protocol',
        'Rate limiting, DDOS mitigation, and fail2ban filters'
      ],
      configSnippet: `server {
    listen 443 ssl http2;
    server_name api.production.net;
    ssl_certificate /etc/letsencrypt/live/api/fullchain.pem;
    ssl_protocols TLSv1.2 TLSv1.3;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`
    },
    {
      id: 'observability',
      step: '06',
      phase: 'Observability & Telemetry',
      tool: 'Prometheus, Loki & Grafana',
      action: 'Metrics, Logs & Alerting',
      summary: 'Continuously collects system and container metrics with Prometheus, streams logs with Promtail and Loki, and surfaces real-time dashboards and alerts in Grafana.',
      command: 'scrape_interval: 15s | rate(5m)',
      status: 'Telemetry Live',
      badge: 'Monitoring',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      ),
      highlights: [
        '15s scrape interval across servers, containers, and services',
        'Centralized structured log streaming via Promtail and Loki',
        'Threshold alerts for 5xx errors, memory spikes & latency'
      ],
      configSnippet: `scrape_configs:
  - job_name: 'production-nodes'
    scrape_interval: 15s
    static_configs:
      - targets: ['10.0.1.20:9100', '10.0.1.21:9100']
  - job_name: 'api-service'
    metrics_path: '/metrics'
    static_configs:
      - targets: ['127.0.0.1:3000']`
    }
  ];

  const current = stages[activeStage];

  const nextStage = () => {
    setActiveStage((prev) => (prev + 1) % stages.length);
  };

  const prevStage = () => {
    setActiveStage((prev) => (prev - 1 + stages.length) % stages.length);
  };

  return (
    <section className="section" id="architecture">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">DevOps Architecture</div>
          <h2 className="section-title">Automated CI/CD Delivery Pipeline</h2>
          <p className="section-description">
            Production-grade delivery lifecycle: from code commit to containerized build, zero-downtime deployment, and unified observability.
          </p>
        </div>

        {/* Market-Standard Pipeline Wrapper */}
        <div className="pipeline-market-wrapper">
          
          {/* Top Status & Metrics Bar */}
          <div className="pipeline-top-status-bar">
            <div className="pipeline-status-indicator">
              <span className="pipeline-pulse-dot"></span>
              <span className="pipeline-status-text">Production Pipeline: <strong>Automated &amp; Active</strong></span>
            </div>
            <div className="pipeline-meta-chips">
              <span className="pipeline-meta-chip">Strategy: <strong>Zero-Downtime Rolling</strong></span>
              <span className="pipeline-meta-chip">Target: <strong>Linux / Docker / Nginx</strong></span>
              <span className="pipeline-meta-chip">Telemetry: <strong>Prometheus + Grafana</strong></span>
            </div>
          </div>

          {/* Interactive Stepper Track (Quick Navigation Rail) */}
          <div className="pipeline-stepper-rail" role="tablist" aria-label="Pipeline Stages Track">
            {stages.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={`step-${st.id}`}
                  className={`stepper-node-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`stage-panel-${st.id}`}
                  title={`Stage ${st.step}: ${st.tool}`}
                >
                  <span className="stepper-circle">{st.step}</span>
                  <span className="stepper-label">{st.tool.split(' ')[0]}</span>
                  {idx < stages.length - 1 && <span className="stepper-track-connector"></span>}
                </button>
              );
            })}
          </div>

          {/* Interactive 3x2 Grid of Stage Cards (Fits 100% inside container) */}
          <div className="pipeline-stages-grid" role="tablist" aria-label="DevOps Pipeline Cards">
            {stages.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <div
                  key={st.id}
                  className={`pipeline-stage-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                  role="tab"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStage(idx);
                    }
                  }}
                  aria-selected={isActive}
                  aria-controls={`stage-panel-${st.id}`}
                  id={`stage-tab-${st.id}`}
                >
                  <div className="stage-card-top">
                    <div className="stage-num-badge">
                      <span className="stage-number">{st.step}</span>
                      <span className="stage-badge-name">{st.badge}</span>
                    </div>
                    <span className="stage-status-pill">
                      <span className="stage-status-dot"></span>
                      {st.status}
                    </span>
                  </div>

                  <div className="stage-card-middle">
                    <div className="stage-icon-wrap">
                      {st.icon}
                    </div>
                    <div>
                      <h3 className="stage-tool-name">{st.tool}</h3>
                      <div className="stage-phase-label">{st.phase}</div>
                    </div>
                  </div>

                  <p className="stage-short-summary">{st.action}</p>

                  <div className="stage-command-preview" title={st.command}>
                    <code>{st.command}</code>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Stage Technical Inspector Console */}
          <div
            className="pipeline-inspector-card"
            id={`stage-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${current.id}`}
          >
            <div className="inspector-header">
              <div className="inspector-badge-row">
                <span className="inspector-stage-badge">STAGE {current.step}</span>
                <span className="inspector-category-badge">{current.badge}</span>
                <span className="inspector-tool-title">{current.tool}</span>
              </div>
              <div className="inspector-header-right">
                <span className="inspector-status-badge">
                  <span className="status-mini-dot"></span>
                  {current.status}
                </span>
                <div className="inspector-nav-btns">
                  <button className="inspector-nav-btn" onClick={prevStage} title="Previous Stage" aria-label="Previous Stage">
                    ← Prev
                  </button>
                  <button className="inspector-nav-btn" onClick={nextStage} title="Next Stage" aria-label="Next Stage">
                    Next →
                  </button>
                </div>
              </div>
            </div>

            <div className="inspector-body-grid">
              <div className="inspector-left-col">
                <h4 className="inspector-action-heading">{current.action}</h4>
                <p className="inspector-summary-text">{current.summary}</p>

                <div className="inspector-highlights-box">
                  <span className="highlights-title">Production Engineering Highlights:</span>
                  <ul className="highlights-list">
                    {current.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="highlight-item">
                        <svg className="highlight-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="inspector-right-col">
                <div className="code-snippet-header">
                  <div className="snippet-dot-cluster">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="snippet-filename">stage-{current.step}-{current.id}.yml</span>
                </div>
                <pre className="inspector-code-block">
                  <code>{current.configSnippet}</code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
