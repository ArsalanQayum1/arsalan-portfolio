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
      summary: 'Developers push commits to main branch, instantly triggering automated webhook payloads to Jenkins.',
      command: 'git push origin main → webhook:post',
      status: 'Triggered',
      badge: 'SCM',
      highlights: [
        'Automated branch protection and code review enforcement',
        'Signed commits with automated webhook dispatch',
        'Multi-repository workflow support (GitHub & AWS CodeCommit)'
      ],
      configSnippet: `# Webhook payload dispatch
POST https://ci.k2xtech.internal/generic-webhook/invoke
Headers: X-GitHub-Event: push, X-Hub-Signature-256: ...
Payload: { ref: "refs/heads/main", commit: "8f921a4" }`
    },
    {
      id: 'ci',
      step: '02',
      phase: 'Automated CI Engine',
      tool: 'Jenkins Automation',
      action: 'Build, Lint & Security Scan',
      summary: 'Multi-stage Jenkins pipeline executes automated unit tests, linting, and Trivy security scanning.',
      command: 'stage("Test & Audit") { sh "npm test" }',
      status: 'Tests Passed',
      badge: 'CI Automation',
      highlights: [
        'Parallelized test and lint execution for fast feedback',
        'SonarQube code quality and static security analysis',
        'Automated pipeline notification on build failure'
      ],
      configSnippet: `pipeline {
  agent any
  stages {
    stage('Test & Scan') {
      steps {
        sh 'npm test -- --coverage'
        sh 'trivy fs --exit-code 1 --severity HIGH,CRITICAL .'
      }
    }
  }
}`
    },
    {
      id: 'docker',
      step: '03',
      phase: 'Container Packaging',
      tool: 'Docker & Compose',
      action: 'Multi-Stage Image Build',
      summary: 'Builds lightweight, secure container images using Alpine/Debian bases with layer caching optimization.',
      command: 'docker build --target=production -t app:v2.4 .',
      status: 'Image Built',
      badge: 'Containers',
      highlights: [
        'Multi-stage builds reducing image size by over 75%',
        'Non-root user execution inside container runtime',
        'Automated local and remote image registry tagging'
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
      summary: 'Deploys updated containers or PM2 process clusters on Linux servers with zero user-facing downtime.',
      command: 'pm2 reload app --update-env',
      status: 'Zero Downtime',
      badge: 'Delivery',
      highlights: [
        'Rolling reload with zero dropped HTTP connections',
        'Automatic health check polling prior to route switch',
        'Instant rollback trigger if health check fails'
      ],
      configSnippet: `#!/usr/bin/env bash
echo "[deploy] Pulling verified release v2.4..."
docker compose pull app
docker compose up -d --no-deps --build app
curl -f http://127.0.0.1:3000/health || (docker compose rollback && exit 1)
echo "[deploy] Zero-downtime release completed."`
    },
    {
      id: 'ingress',
      step: '05',
      phase: 'Edge Gateway & SSL',
      tool: 'Nginx & Certbot',
      action: 'Reverse Proxy & Security',
      summary: 'Terminates Let\'s Encrypt SSL/TLS certificates, manages HTTP/2 ingress, and routes requests to backends.',
      command: 'proxy_pass http://upstream_app;',
      status: '200 OK / HTTPS',
      badge: 'Web Gateway',
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
      summary: 'Continuously scrapes metrics via Prometheus, tails logs with Loki, and alerts on anomalous spikes in Grafana.',
      command: 'scrape_interval: 15s | rate(5m)',
      status: 'Telemetry Live',
      badge: 'Monitoring',
      highlights: [
        '15s scrape interval across servers, containers, and services',
        'Centralized structured log streaming via Promtail and Loki',
        'Configured threshold alerts for 5xx errors, latency & RAM spikes'
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
              <span className="pipeline-meta-chip">Observability: <strong>Prometheus + Grafana</strong></span>
            </div>
          </div>

          {/* Interactive Connected Pipeline Stages */}
          <div className="pipeline-stages-grid" role="tablist" aria-label="DevOps Pipeline Stages">
            {stages.map((st, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={st.id}
                  className={`pipeline-stage-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`stage-panel-${st.id}`}
                  id={`stage-tab-${st.id}`}
                >
                  <div className="stage-card-top">
                    <span className="stage-number">{st.step}</span>
                    <span className="stage-status-pill">{st.status}</span>
                  </div>

                  <h3 className="stage-tool-name">{st.tool}</h3>
                  <div className="stage-phase-label">{st.phase}</div>

                  <p className="stage-short-summary">{st.action}</p>

                  <div className="stage-command-preview">
                    <code>{st.command}</code>
                  </div>

                  {idx < stages.length - 1 && (
                    <div className="stage-connector-arrow" aria-hidden="true">
                      <span>→</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Technical Inspector */}
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
              <span className="inspector-status-badge">
                <span className="status-mini-dot"></span>
                {current.status}
              </span>
            </div>

            <div className="inspector-body-grid">
              <div className="inspector-left-col">
                <h4 className="inspector-action-heading">{current.action}</h4>
                <p className="inspector-summary-text">{current.summary}</p>

                <div className="inspector-highlights-box">
                  <span className="highlights-title">Engineering Highlights:</span>
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
                  <span className="snippet-filename">configuration // runtime execution</span>
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
