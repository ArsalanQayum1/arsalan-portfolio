/**
 * terminal.js
 * Interactive Linux Terminal Emulator for Arsalan Qayum's DevOps Portfolio
 * Supports realistic bash commands, autocomplete, command history, and chip triggers.
 */

(function () {
  'use strict';

  const terminalScreen = document.getElementById('terminal-screen');
  const cliInput = document.getElementById('terminal-cli-input');
  const chipButtons = document.querySelectorAll('.terminal-chip');

  if (!terminalScreen || !cliInput) return;

  const commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: `Available commands:
  <span style="color:#38bdf8">whoami</span>          - Display personal brand identity
  <span style="color:#38bdf8">role</span>            - Current professional title and specialization
  <span style="color:#38bdf8">focus</span>           - Primary engineering focus areas
  <span style="color:#38bdf8">mission</span>         - Engineering philosophy & core objective
  <span style="color:#38bdf8">skills</span>          - List technical proficiencies by production domain
  <span style="color:#38bdf8">experience</span>      - Current role at K2XTech & technical achievements
  <span style="color:#38bdf8">projects</span>        - Review production deployments & infrastructure projects
  <span style="color:#38bdf8">architecture</span>    - View standard end-to-end DevOps pipeline architecture
  <span style="color:#38bdf8">certifications</span>  - Cloud & networking certifications
  <span style="color:#38bdf8">principles</span>      - Core DevOps operational values
  <span style="color:#38bdf8">contact</span>         - Get direct contact channels (Email, LinkedIn)
  <span style="color:#38bdf8">cat resume</span>      - Display ATS summary profile
  <span style="color:#38bdf8">uptime</span>          - Check system uptime and cluster health
  <span style="color:#38bdf8">clear</span>           - Clear the terminal screen`,

    whoami: `<span style="color:#ffffff; font-weight:bold;">Arsalan Qayum</span>
DevOps / Cloud Architect & Engineer
Current Company: <span style="color:#38bdf8;">K2X TECH</span> (January 2024 — Present) | Location: Islamabad, Pakistan
Phone: <span style="color:#38bdf8;">03015642176</span> | Email: <span style="color:#38bdf8;">arsalanqayum09@gmail.com</span>
Status: <span style="color:#34d399;">● Available for DevOps / Cloud Opportunities</span>
Tagline: "Automating Infrastructure. Accelerating Deployments. Building Reliable Systems."`,

    role: `DevOps / Cloud Architect
Focus: Cloud Infrastructure (AWS, Azure, Proxmox), CI/CD Automation (Jenkins, CodeCommit), Containerization (Docker), Monitoring (Prometheus, Grafana, Loki, Promtail), and Production Troubleshooting.`,

    focus: `Primary Engineering Focus Areas:
  • Cloud & Platforms (AWS, Azure, Proxmox, Linux, Windows Server)
  • CI/CD Pipelines (Jenkins, Git, AWS CodeCommit, Automated Deployments)
  • Containerization (Docker, Docker Compose, Container Security)
  • Web Servers & Proxies (Nginx, Apache, Certbot SSL/TLS)
  • Process Management (PM2, Uvicorn)
  • Monitoring & Observability (Prometheus, Grafana, Loki, Promtail)
  • Database Administration (MongoDB, MySQL, PostgreSQL)
  • Security & Quality (Trivy, SonarQube, SSL/TLS, UFW/Firewall)
  • Scripting & Automation (Bash, Shell Scripting)
  • Networking (DNS, HTTP/HTTPS, Reverse Proxy, Ports, Firewall, TCP/IP)`,

    mission: `<span style="color:#22d3ee;">"Automate everything that can be automated. Build reliable, scalable systems."</span>
Eliminate manual toil, reduce deployment friction, maintain high availability, and give development teams total confidence in production software delivery.`,

    skills: `Technical Competencies (From Verified Production Resume):
  [Cloud & Platforms]  AWS, Azure, Proxmox, Linux, Windows Server
  [CI/CD & DevOps]     Jenkins, Git, AWS CodeCommit, CI/CD Pipelines, Bash
  [Containers]         Docker, Docker Compose, Container Networking & Volumes
  [Web & Proxies]      Nginx, Apache, Certbot SSL/TLS, Reverse Proxies
  [Monitoring & Logs]  Prometheus, Grafana, Loki, Promtail
  [Databases]          MongoDB, MySQL, PostgreSQL, Backup & Restore
  [App Stacks]         Node.js, React, Vite, Next.js, FastAPI
  [Process Mgmt]       PM2, Uvicorn
  [Security & Quality] Trivy, SonarQube, SSL/TLS, Firewall Hardening
  [Networking]         DNS, HTTP/HTTPS, Reverse Proxy, Ports, Firewall, TCP/IP`,

    experience: `Role: <span style="color:#ffffff; font-weight:bold;">DevOps / Cloud Architect</span>
Company: <span style="color:#38bdf8;">K2X TECH</span> | Jan 2024 — Present | Islamabad, Pakistan
Key Highlights:
  • Design, deploy, and maintain cloud and production infrastructure across AWS, Azure, Proxmox, and Linux.
  • Build and maintain Jenkins CI/CD pipelines to automate application build, testing, and deployment.
  • Manage source-code and deployment workflows using Git and AWS CodeCommit.
  • Deploy and manage Node.js, React, Vite, Next.js, and backend applications across staging and production.
  • Configure and maintain Nginx and Apache reverse proxies, virtual hosts, and Certbot SSL renewals.
  • Manage production applications using PM2 and Uvicorn, including restarts and troubleshooting.
  • Containerize and deploy applications using Docker and Docker Compose.
  • Build monitoring and observability environments using Prometheus, Grafana, Loki, and Promtail.
  • Administer MongoDB, MySQL, and PostgreSQL (users, permissions, backups, connectivity).
  • Develop Bash/Shell scripts for deployment, backups, maintenance, and operational automation.
  • Troubleshoot production issues: 502 Bad Gateway, 405 Method Not Allowed, SSL/HTTPS mixed-content, port conflicts, upstream failures, permission errors, and resource utilization.
  • Work with Trivy and SonarQube for container security scanning and code quality practices.
  • Perform server and VM backup, migration, and infrastructure maintenance on Proxmox.`,

    projects: `Featured Real-World Infrastructure Deployments:
  1. <span style="color:#ffffff; font-weight:bold;">Assessment Autofiller</span>: Vite + FastAPI + Python + Nginx + Linux
     Architecture: Frontend -> Nginx Reverse Proxy -> FastAPI API Backend.
  2. <span style="color:#ffffff; font-weight:bold;">Knowledge Hub MSP</span>: Docker Compose + Elasticsearch + MinIO S3 + Nginx
     Architecture: Multi-service environment with object storage & search engine.
  3. <span style="color:#ffffff; font-weight:bold;">MSP Investment Platform</span>: React + Nginx + Node.js (PM2) + Linux + Databases
     Architecture: High-reliability investment portal with clustered PM2 process managers.
  4. <span style="color:#ffffff; font-weight:bold;">Centralized Monitoring Infrastructure</span>: Prometheus + Grafana + Loki + Promtail
     Architecture: Servers/Apps -> Prometheus -> Grafana | Logs -> Promtail -> Loki.
  5. <span style="color:#ffffff; font-weight:bold;">Private Cloud & Virtual Infrastructure</span>: Proxmox VE + VMs + NAT + Firewall
     Architecture: Secure isolated private virtual infrastructure with bastion SSH access.`,

    architecture: `End-to-End Infrastructure Flow:
  [Developer] 
      ↓ (git push)
  [Git / AWS CodeCommit] 
      ↓ (webhook)
  [Jenkins CI/CD + SonarQube] 
      ↓ (automated testing & linting)
  [Docker Packaging + Trivy Scan] 
      ↓ (image tagging & packaging)
  [Production Deployment] 
      ↓ (SSH / Docker Compose / PM2 / Uvicorn)
  [Nginx / Apache Reverse Proxy] 
      ↓ (SSL Termination & HTTP/2)
  [Application Services & Databases] 
      ↓ (FastAPI / Node.js / MongoDB / PostgreSQL / MySQL)
  [Prometheus + Grafana + Loki + Promtail] (Continuous Observability & Logs)`,

    certifications: `Certifications & Continuous Education:
  • <span style="color:#ffffff; font-weight:bold;">IBM — Introduction to Cloud Computing</span> (Coursera)
    Topics: Cloud Fundamentals, IaaS, PaaS, SaaS, Deployment Models, Security & Architecture.
  • <span style="color:#ffffff; font-weight:bold;">CCNA — Networking Foundation</span>
    Solid grounding in TCP/IP, subnets, routing, NAT, DNS, ports, firewalls, and security.
  • <span style="color:#38bdf8;">Currently Exploring</span>: Advanced Azure (PaaS/IaaS/Networking), DevSecOps, Kubernetes, Advanced CI/CD, Cloud FinOps.`,

    principles: `DevOps Engineering Core Principles:
  1. <span style="color:#38bdf8;">Automation</span>    - Eliminate repetitive infrastructure and deployment manual toil.
  2. <span style="color:#38bdf8;">Reliability</span>   - Build fault-tolerant, observable, and rapidly recoverable systems.
  3. <span style="color:#38bdf8;">Scalability</span>   - Architect infrastructure that gracefully accommodates dynamic workload spikes.
  4. <span style="color:#38bdf8;">Security</span>      - Embed security controls across servers, networks, and CI/CD pipelines (Trivy, SonarQube).
  5. <span style="color:#38bdf8;">Observability</span> - Gain real-time insight through metrics (Prometheus) and logs (Loki + Promtail).
  6. <span style="color:#38bdf8;">Collaboration</span> - Bridge development and infrastructure through shared pipelines and telemetry.`,

    contact: `Direct Contact Channels:
  Phone:    <span style="color:#38bdf8;">03015642176</span> (+92 301 5642176)
  Email:    <a href="mailto:arsalanqayum09@gmail.com" style="color:#38bdf8;">arsalanqayum09@gmail.com</a>
  LinkedIn: <a href="https://linkedin.com/in/arsalan-qayum-19a429225" target="_blank" rel="noopener" style="color:#38bdf8;">linkedin.com/in/arsalan-qayum-19a429225</a>
  Location: Islamabad, Pakistan (Open to Remote / Hybrid / On-site opportunities)
  Status:   <span style="color:#34d399;">Ready for DevOps & Cloud Architecture opportunities</span>`,

    uptime: ` 10:50:00 up 428 days, 14:28,  1 user,  load average: 0.06, 0.10, 0.12
 [System Status] All nodes healthy. 0 degraded pods. Memory utilization: 23.8%. Network throughput: NOMINAL.`
  };

  function executeCommand(rawInput) {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    // Add to history
    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    // Render the typed command line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'terminal-entry-line';
    cmdLine.innerHTML = `
      <span class="prompt-user">arsalan</span><span class="prompt-at">@</span><span class="prompt-host">devops-box</span>:<span class="prompt-path">~</span><span class="prompt-char">$</span>
      <span>${escapeHtml(trimmed)}</span>
    `;
    terminalScreen.appendChild(cmdLine);

    const lower = trimmed.toLowerCase();
    const outputBlock = document.createElement('div');
    outputBlock.className = 'terminal-output-block';

    if (lower === 'clear') {
      terminalScreen.innerHTML = '';
      return;
    } else if (lower === 'cat resume' || lower === 'resume') {
      outputBlock.innerHTML = `=== RESUME OVERVIEW: ARSALAN QAYUM ===
Role: DevOps & Cloud Engineer
Email: arsalanqayum09@gmail.com | LinkedIn: linkedin.com/in/arsalan-qayum-19a429225
Experience: 2+ Years | Current: K2XTech (DevOps & Cloud Engineer, 2024-Present)
Core Stack: AWS, Azure, Jenkins, Docker, Linux (Ubuntu/Debian), Prometheus, Grafana, Loki, Nginx, Proxmox, MySQL, Postgres, Redis.
[Action] Click 'Download Resume' in the hero header to view/print formatted document.`;
    } else if (lower === 'ping' || lower.startsWith('ping ')) {
      outputBlock.innerHTML = `PING cloud.infrastructure.internal (10.0.1.1) 56(84) bytes of data.
64 bytes from 10.0.1.1: icmp_seq=1 ttl=64 time=0.428 ms
64 bytes from 10.0.1.1: icmp_seq=2 ttl=64 time=0.385 ms
64 bytes from 10.0.1.1: icmp_seq=3 ttl=64 time=0.392 ms
--- cloud.infrastructure.internal ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2002ms
rtt min/avg/max/mdev = 0.385/0.401/0.428/0.019 ms`;
    } else if (lower === 'date') {
      outputBlock.innerHTML = new Date().toUTCString();
    } else if (lower.startsWith('echo ')) {
      outputBlock.innerHTML = escapeHtml(trimmed.substring(5));
    } else if (lower === 'sudo' || lower.startsWith('sudo ')) {
      outputBlock.innerHTML = `<span style="color:#ef4444;">[sudo] password for arsalan:</span>
User 'arsalan' is in the sudoers file. However, this action has been recorded in auditd and dispatched to Prometheus alerts.`;
    } else if (commands[lower]) {
      outputBlock.innerHTML = commands[lower];
    } else {
      outputBlock.innerHTML = `<span style="color:#ef4444;">devops-sh: command not found: ${escapeHtml(trimmed)}</span>. Type <span style="color:#38bdf8;">help</span> to inspect available commands.`;
    }

    terminalScreen.appendChild(outputBlock);
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Key bindings (Enter, Up, Down, Tab)
  cliInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = cliInput.value;
      cliInput.value = '';
      executeCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        cliInput.value = commandHistory[historyIndex] || '';
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        cliInput.value = commandHistory[historyIndex] || '';
      } else {
        historyIndex = commandHistory.length;
        cliInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const current = cliInput.value.trim().toLowerCase();
      if (current) {
        const matches = Object.keys(commands).filter(cmd => cmd.startsWith(current));
        if (matches.length === 1) {
          cliInput.value = matches[0];
        }
      }
    }
  });

  // Clicking chip buttons triggers commands directly
  chipButtons.forEach(chip => {
    chip.addEventListener('click', function () {
      const cmd = this.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
        cliInput.focus();
      }
    });
  });

  // Focus terminal when screen area is clicked
  terminalScreen.addEventListener('click', function () {
    cliInput.focus();
  });
})();
