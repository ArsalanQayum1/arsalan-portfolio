'use client';

import { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', content: 'Welcome to Arsalan Qayum DevOps Interactive Terminal v2.4' },
    { type: 'sys', content: 'Type "help" or click chips below to execute commands...' }
  ]);
  const screenRef = useRef(null);

  const commandMap = {
    help: `Available commands:
  whoami          - Display personal brand identity
  role            - Current professional title and specialization
  focus           - Primary engineering focus areas
  skills          - List technical proficiencies by production domain
  experience      - Current role at K2XTech & technical achievements
  projects        - Review production deployments & infrastructure projects
  architecture    - View standard end-to-end DevOps pipeline architecture
  uptime          - Check system uptime and cluster health
  clear           - Clear terminal history`,

    whoami: `Arsalan Qayum
DevOps / Cloud Architect & Engineer
Current Company: K2X TECH (January 2024 — Present) | Location: Pakistan
Phone: 03015642176 | Email: arsalanqayum09@gmail.com
Status: ● Available for DevOps / Cloud Opportunities
Tagline: "Automating Infrastructure. Accelerating Deployments. Building Reliable Systems."`,

    role: `DevOps / Cloud Architect
Focus: Cloud Infrastructure (AWS, Azure, Proxmox), CI/CD Automation (Jenkins, CodeCommit), Containerization (Docker), Monitoring (Prometheus, Grafana, Loki, Promtail), and Production Troubleshooting.`,

    focus: `Primary Engineering Focus Areas:
  • Cloud & Platforms (AWS, Azure, Proxmox, Linux)
  • CI/CD Pipelines (Jenkins, Git, AWS CodeCommit, Automated Deployments)
  • Containerization (Docker, Docker Compose, Container Security)
  • Web Servers & Proxies (Nginx, Apache, Certbot SSL/TLS)
  • Process Management (PM2, Uvicorn)
  • Monitoring & Observability (Prometheus, Grafana, Loki, Promtail)
  • Database Administration (MongoDB, MySQL, PostgreSQL)
  • Security & Quality (Trivy, SonarQube, SSL/TLS)`,

    skills: `Cloud & Infra: AWS, Azure, Proxmox, Linux (Ubuntu)
CI/CD: Jenkins, Git, AWS CodeCommit, Bash Scripting
Containers: Docker, Docker Compose, Trivy Scanner
Web Servers: Nginx, Apache, Certbot, PM2, Uvicorn
Monitoring: Prometheus, Grafana, Loki, Promtail
Databases: MongoDB, MySQL, PostgreSQL`,

    experience: `DevOps / Cloud Architect at K2X TECH (Jan 2024 — Present)
Key Accomplishments:
  • Architected multi-cloud environments across AWS, Azure, and Proxmox.
  • Built automated CI/CD pipelines reducing deployment times by 90%.
  • Containerized production apps with Docker & Docker Compose.
  • Deployed centralized logging & metrics stack (Loki + Promtail + Prometheus + Grafana).
  • Resolved 502 Bad Gateway, 405 Method Not Allowed, and SSL/HTTPS mixed content issues.`,

    projects: `Featured Production Projects:
  1. High-Availability Multi-Region AWS & Azure Infrastructure
  2. Zero-Downtime Jenkins & Docker CI/CD Pipeline
  3. Enterprise Centralized Observability Stack (Loki & Promtail)
  4. Nginx High-Availability Load Balancer with Automated SSL
  5. Proxmox VE Private Cloud Migration & Automated Backup Strategy`,

    architecture: `DevOps 9-Stage Pipeline Lifecycle:
  01. Code Commit (AWS CodeCommit / Git)
  02. Security & Code Quality Scan (SonarQube & Trivy)
  03. CI Automation & Build (Jenkins)
  04. Container Packaging (Docker)
  05. Automated Verification Testing
  06. Staging Environment Deployment
  07. Production Zero-Downtime Release (Nginx Reload)
  08. Telemetry & Log Ingestion (Prometheus & Loki)
  09. Automated Healing & Incident Alerts`,

    uptime: `System Uptime: 142 days, 18 hours, 42 minutes
Active Cluster Nodes: 12 Nodes Healthy (100% Operational)
Memory Usage: 42.1% | CPU Load Average: 0.14, 0.18, 0.12`
  };

  const executeCmd = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const output = commandMap[trimmed] || `Command not found: "${trimmed}". Type "help" for a list of commands.`;

    setHistory(prev => [
      ...prev,
      { type: 'cmd', content: `arsalan@devops-box:~$ ${cmdStr}` },
      { type: 'output', content: output }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCmd(inputVal);
      setInputVal('');
    }
  };

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="section" id="terminal">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Interactive CLI</div>
          <h2 className="section-title">DevOps <span className="gradient-text">Terminal Emulator</span></h2>
          <p className="section-description">
            Interact with a realistic Linux shell. Type bash commands or click quick chips to inspect infrastructure configuration.
          </p>
        </div>

        <div className="glass-card terminal-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div className="terminal-header" style={{ padding: '12px 18px', background: 'rgba(7, 11, 20, 0.9)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="window-dots">
              <span className="window-dot dot-red"></span>
              <span className="window-dot dot-yellow"></span>
              <span className="window-dot dot-green"></span>
            </div>
            <div className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              arsalan@devops-box:~ (bash)
            </div>
            <span className="badge badge-production">Interactive</span>
          </div>

          {/* Quick Chip Triggers */}
          <div style={{ padding: '10px 18px', background: 'rgba(15, 23, 42, 0.6)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['whoami', 'role', 'skills', 'experience', 'projects', 'architecture', 'uptime', 'clear'].map((chip, idx) => (
              <button
                key={idx}
                className="skill-tool-tag"
                style={{ cursor: 'pointer', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38bdf8' }}
                onClick={() => executeCmd(chip)}
              >
                ${chip}
              </button>
            ))}
          </div>

          {/* Terminal Output Screen */}
          <div
            ref={screenRef}
            style={{ padding: '18px', height: '320px', overflowY: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', background: '#070b14', color: '#e2e8f0', lineHeight: 1.6 }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '8px', whiteSpace: 'pre-wrap' }}>
                {item.type === 'cmd' ? (
                  <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>{item.content}</span>
                ) : item.type === 'sys' ? (
                  <span style={{ color: '#94a3b8' }}>{item.content}</span>
                ) : (
                  <span style={{ color: '#f8fafc' }}>{item.content}</span>
                )}
              </div>
            ))}

            {/* CLI Input Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
              <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>arsalan@devops-box:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type command (e.g. whoami, skills, projects)..."
                style={{ background: 'none', border: 'none', outline: 'none', color: '#ffffff', fontFamily: 'var(--font-mono)', fontSize: '0.88rem', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
