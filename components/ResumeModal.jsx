'use client';

import { useState, useEffect } from 'react';

export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      setOpen(true);
    };

    // 1. Listen to custom event dispatched by buttons
    window.addEventListener('open-resume-modal', handleOpen);

    // 2. Global delegated click handler for any resume button
    const handleDocumentClick = (e) => {
      const targetBtn = e.target.closest(
        '.btn-open-resume, #nav-resume-btn, #mobile-nav-top-resume-btn, #mobile-nav-resume-btn, #hero-download-resume-btn, [data-open-resume]'
      );
      if (targetBtn) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('click', handleDocumentClick);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    // Auto open if user triggers print with Ctrl+P
    const handleBeforePrint = () => {
      setOpen(true);
    };
    window.addEventListener('beforeprint', handleBeforePrint);

    return () => {
      window.removeEventListener('open-resume-modal', handleOpen);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('beforeprint', handleBeforePrint);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="resume-modal-card">
        {/* Top Controls Bar - Hidden on Print */}
        <div className="resume-modal-header no-print">
          <div className="resume-header-left">
            <span className="badge-ats">ATS-Standard</span>
            <span className="resume-header-title">Arsalan Qayum — Resume</span>
          </div>
          <div className="resume-header-actions">
            <button className="btn btn-primary btn-sm" onClick={handlePrint} id="print-resume-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              <span>Print / Save PDF</span>
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => setOpen(false)} aria-label="Close resume modal">
              ✕ Close
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Document */}
        <div id="resume-modal-sheet" className="resume-sheet">
          
          {/* Header */}
          <header className="resume-doc-header">
            <h1 className="resume-name">Arsalan Qayum</h1>
            <div className="resume-contact-line">
              <span>Islamabad, Pakistan</span>
              <span className="sep">|</span>
              <a href="tel:03015642176">03015642176</a>
              <span className="sep">|</span>
              <a href="mailto:arsalanqayum09@gmail.com">arsalanqayum09@gmail.com</a>
              <span className="sep">|</span>
              <a href="https://www.linkedin.com/in/arsalan-qayum-19a429225" target="_blank" rel="noopener noreferrer">linkedin.com/in/arsalan-qayum-19a429225</a>
            </div>
          </header>

          {/* Summary */}
          <section className="resume-section">
            <h2 className="resume-section-title">SUMMARY</h2>
            <p className="resume-text">
              DevOps / Cloud Engineer with 2+ years of hands-on experience in designing, deploying, and managing reliable cloud and production infrastructure. Skilled in AWS, Azure, Linux, Jenkins CI/CD, Docker, Proxmox, Nginx, PM2, and infrastructure automation. Experienced in deploying and maintaining Node.js, React, Vite, Next.js, and backend applications, with strong expertise in monitoring and observability using Prometheus, Grafana, Loki, and Promtail. Proficient in MongoDB, MySQL, and PostgreSQL administration, SSL/TLS configuration, reverse proxy, production troubleshooting, and deployment automation. Focused on building scalable, secure, and highly available environments while improving deployment efficiency and system reliability.
            </p>
          </section>

          {/* Experience */}
          <section className="resume-section">
            <h2 className="resume-section-title">EXPERIENCE</h2>
            <div className="resume-entry">
              <div className="entry-header">
                <div>
                  <strong className="entry-role">DevOps / Cloud Architect</strong>
                  <div className="entry-company">K2X TECH</div>
                </div>
                <div className="entry-meta-right">
                  <span className="entry-dates">January 2024 – Present</span>
                  <span className="entry-loc">Islamabad, Pakistan</span>
                </div>
              </div>
              <ul className="entry-bullets">
                <li>Design, deploy, and maintain cloud and production infrastructure across AWS, Azure, Proxmox, and Linux environments.</li>
                <li>Build and maintain Jenkins CI/CD pipelines to automate application build, testing, and deployment workflows.</li>
                <li>Manage source-code and deployment workflows using Git and AWS CodeCommit.</li>
                <li>Deploy and manage Node.js, React, Vite, Next.js, and backend applications across staging and production environments.</li>
                <li>Configure and maintain Nginx and Apache as web servers and reverse proxies.</li>
                <li>Configure SSL/TLS certificates using Certbot and troubleshoot HTTPS and certificate-related issues.</li>
                <li>Manage production applications using PM2, including process monitoring, restarts, logs, and troubleshooting.</li>
                <li>Containerize and deploy applications using Docker and Docker Compose.</li>
                <li>Build monitoring and observability environments using Prometheus, Grafana, Loki, and Promtail.</li>
                <li>Monitor application health, server resources, logs, and service availability to identify and resolve production issues.</li>
                <li>Administer MongoDB, MySQL, and PostgreSQL, including database users, permissions, backups, connectivity, and troubleshooting.</li>
                <li>Develop Bash/Shell scripts for deployment, backups, maintenance, and operational automation.</li>
                <li>Troubleshoot production issues including 502 Bad Gateway, 405 Method Not Allowed, SSL/HTTPS, mixed-content, port conflicts, upstream failures, permission errors, build failures, and resource utilization issues.</li>
                <li>Manage Linux servers, services, packages, processes, filesystem permissions, logs, and system resources.</li>
                <li>Support application teams with infrastructure, deployment, networking, database, and production configuration issues.</li>
                <li>Work with Trivy and SonarQube for container security scanning and code-quality practices.</li>
                <li>Perform server and VM backup, migration, and infrastructure maintenance activities.</li>
                <li>Optimize deployment environments to improve application reliability, scalability, availability, and deployment efficiency.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
            <div className="skills-table">
              <div className="skill-row">
                <span className="skill-cat">Cloud &amp; Platforms:</span>
                <span className="skill-val">AWS, Azure, Proxmox</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">DevOps &amp; CI/CD:</span>
                <span className="skill-val">Jenkins, Git, AWS CodeCommit, CI/CD Pipelines</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Containers:</span>
                <span className="skill-val">Docker, Docker Compose</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Operating Systems:</span>
                <span className="skill-val">Linux, Ubuntu, Windows Server</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Web Servers:</span>
                <span className="skill-val">Nginx, Apache, Certbot</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Monitoring &amp; Logging:</span>
                <span className="skill-val">Prometheus, Grafana, Loki, Promtail</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Databases:</span>
                <span className="skill-val">MongoDB, MySQL, PostgreSQL</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Application Technologies:</span>
                <span className="skill-val">Node.js, React, Vite, Next.js, FastAPI</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Process Management:</span>
                <span className="skill-val">PM2, Uvicorn</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Security &amp; Quality:</span>
                <span className="skill-val">Trivy, SonarQube, SSL/TLS</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Scripting &amp; Automation:</span>
                <span className="skill-val">Bash, Shell Scripting</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Networking:</span>
                <span className="skill-val">DNS, HTTP/HTTPS, Reverse Proxy, Ports, Firewall, TCP/IP</span>
              </div>
            </div>
          </section>

          {/* Key DevOps Expertise */}
          <section className="resume-section">
            <h2 className="resume-section-title">KEY DEVOPS EXPERTISE</h2>
            <div className="expertise-block">
              <p><strong>Cloud Infrastructure:</strong> AWS | Azure | Proxmox | Linux Server Administration</p>
              <p><strong>CI/CD &amp; Automation:</strong> Jenkins | Git | AWS CodeCommit | Bash | Automated Deployments</p>
              <p><strong>Containerization:</strong> Docker | Docker Compose | Container Management</p>
              <p><strong>Web &amp; Application Infrastructure:</strong> Nginx | Apache | PM2 | Node.js | React | Vite | Next.js | FastAPI</p>
              <p><strong>Monitoring &amp; Observability:</strong> Prometheus | Grafana | Loki | Promtail | Log Management | Performance Monitoring</p>
              <p><strong>Database Administration:</strong> MongoDB | MySQL | PostgreSQL | Backup &amp; Restore | User &amp; Permission Management</p>
              <p><strong>Security &amp; Networking:</strong> Trivy | SonarQube | SSL/TLS | Certbot | DNS | HTTP/HTTPS | Reverse Proxy | Firewall</p>
            </div>
          </section>

          {/* Core Strengths */}
          <section className="resume-section">
            <h2 className="resume-section-title">CORE STRENGTHS</h2>
            <p className="resume-text">
              Cloud Infrastructure Management • CI/CD Automation • Production Application Deployment • Linux Administration • Docker &amp; Containerization • Infrastructure Monitoring • Centralized Logging • Database Administration • Nginx &amp; Reverse Proxy Configuration • Production Troubleshooting • Infrastructure Automation • DevSecOps Practices • System Reliability &amp; Availability
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
