'use client';

import { useState } from 'react';

export default function Architecture() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      step: '01',
      name: 'Code Commit & Trigger',
      desc: 'Developer pushes code to Git repository or AWS CodeCommit feature branch. Webhook triggers automated Jenkins build pipeline.',
      tools: ['Git', 'AWS CodeCommit', 'GitHub Webhooks'],
      command: 'git push origin main && curl -X POST https://jenkins.internal/job/build-trigger',
      log: 'INFO: Webhook received for commit [581b01f]. Initializing Jenkins Pipeline runner...'
    },
    {
      step: '02',
      name: 'Code Quality & Security Scan',
      desc: 'SonarQube executes static code analysis for code smells and vulnerabilities. Trivy scans container base images for CVE vulnerabilities.',
      tools: ['SonarQube', 'Trivy Scanner', 'SAST'],
      command: 'trivy image --severity HIGH,CRITICAL node-app:latest && sonar-scanner',
      log: 'PASS: SonarQube Quality Gate passed. Trivy scan: 0 critical vulnerabilities found.'
    },
    {
      step: '03',
      name: 'Automated CI Build & Tests',
      desc: 'Jenkins executes automated unit tests, integration tests, and compiles frontend Vite/React/Next.js and backend Node/FastAPI binaries.',
      tools: ['Jenkins CI', 'Node.js', 'FastAPI', 'PyTest'],
      command: 'npm run test && pytest tests/unit/ --junitxml=reports/junit.xml',
      log: 'SUCCESS: 142/142 Unit tests executed cleanly in 4.2 seconds.'
    },
    {
      step: '04',
      name: 'Docker Container Packaging',
      desc: 'Multi-stage Dockerfile compiles application artifacts into lightweight, hardened OCI container images and tags release versions.',
      tools: ['Docker', 'Docker Compose', 'Multi-Stage Build'],
      command: 'docker build --target production -t registry.internal/app:v2.4.0 .',
      log: 'SUCCESS: Container image registry.internal/app:v2.4.0 built (size: 78.4 MB).'
    },
    {
      step: '05',
      name: 'Staging Deployment & Verification',
      desc: 'Deploy container image to isolated Proxmox/AWS staging environment for automated health check verification and API testing.',
      tools: ['Proxmox VE', 'Docker Compose', 'Curl Health'],
      command: 'docker-compose -f compose.staging.yml up -d && curl -f http://staging.internal/health',
      log: 'HTTP 200 OK: Staging endpoint operational. Health check verified.'
    },
    {
      step: '06',
      name: 'Zero-Downtime Production Release',
      desc: 'Nginx reverse proxy seamlessly re-routes live production traffic with zero downtime using blue-green/rolling reload strategies.',
      tools: ['Nginx Reverse Proxy', 'PM2', 'Certbot SSL'],
      command: 'nginx -t && nginx -s reload && pm2 reload app-production',
      log: 'SUCCESS: Nginx reloaded cleanly. Zero dropped connections during deployment.'
    },
    {
      step: '07',
      name: 'Telemetry, Logging & Observability',
      desc: 'Prometheus collects system metrics, Promtail streams container logs to Loki, and Grafana renders live operational dashboards.',
      tools: ['Prometheus', 'Grafana', 'Loki', 'Promtail'],
      command: 'promtail -config.file=/etc/promtail/config.yml & prometheus --config.file=/etc/prometheus.yml',
      log: 'METRIC: Prometheus scraping 24 targets. Loki log stream ingested 1,420 lines/sec.'
    },
    {
      step: '08',
      name: 'Incident Response & Healing',
      desc: 'System monitor auto-detects anomalous spikes or HTTP 502/405 errors and triggers automated PM2 restarts or alert notifications.',
      tools: ['PM2 Reload', 'Uvicorn', 'Alertmanager'],
      command: 'pm2 restart app --max-memory-restart 500M',
      log: 'ALERT RECOVERED: Auto-restart executed in 180ms. Cluster health 100% operational.'
    }
  ];

  const current = stages[activeStep];

  return (
    <section className="section" id="architecture">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">End-to-End Delivery</div>
          <h2 className="section-title">DevOps Architecture &amp; <span className="gradient-text">Pipeline Stepper</span></h2>
          <p className="section-description">
            Interactive breakdown of the end-to-end production deployment lifecycle, from code commit to zero-downtime release and telemetry.
          </p>
        </div>

        {/* Lifecycle Stepper Grid */}
        <div className="pipeline-stepper-nav">
          {stages.map((st, i) => (
            <button
              key={i}
              className={`pipeline-step-item ${activeStep === i ? 'active' : ''}`}
              onClick={() => setActiveStep(i)}
            >
              <div className="step-number">{st.step}</div>
              <div className="step-name">{st.name}</div>
            </button>
          ))}
        </div>

        {/* Stage Inspector Box */}
        <div className="glass-card pipeline-stage-inspector" style={{ marginTop: '24px' }}>
          <div className="inspector-header">
            <div className="inspector-title">
              <span className="step-badge">Stage {current.step}</span>
              <h3>{current.name}</h3>
            </div>
            <div className="inspector-status">
              <span className="status-dot"></span> Pipeline Stage Active
            </div>
          </div>

          <p className="inspector-desc">{current.desc}</p>

          <div className="inspector-tools-row">
            <span className="tools-label">Integrated Tools:</span>
            {current.tools.map((t, i) => (
              <span key={i} className="skill-tool-tag">{t}</span>
            ))}
          </div>

          {/* Terminal Command Output */}
          <div className="inspector-code-box">
            <div className="code-box-header">
              <span>CLI Execution Command</span>
              <span>bash</span>
            </div>
            <pre><code>{`$ ${current.command}`}</code></pre>
            <div className="code-box-header" style={{ marginTop: '10px' }}>
              <span>Execution Output Log</span>
            </div>
            <pre><code style={{ color: '#34d399' }}>{current.log}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
