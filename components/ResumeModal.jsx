'use client';

import { useState, useEffect } from 'react';

export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      e.preventDefault();
      setOpen(true);
    };

    const buttons = document.querySelectorAll('.btn-open-resume, #nav-resume-btn, #mobile-nav-resume-btn, #hero-download-resume-btn');
    buttons.forEach(btn => btn.addEventListener('click', handleOpen));

    return () => {
      buttons.forEach(btn => btn.removeEventListener('click', handleOpen));
    };
  }, []);

  if (!open) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay open" role="dialog" aria-modal="true" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(16px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div className="glass-card" style={{ maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', background: '#0b1120', border: '1px solid var(--border-glass)', padding: '30px' }}>
        
        {/* Header Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Curriculum Vitae — Arsalan Qayum</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-primary btn-sm" onClick={handlePrint}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
              Print / Save PDF
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => setOpen(false)}>
              ✕ Close
            </button>
          </div>
        </div>

        {/* ATS Resume Content */}
        <div style={{ color: '#e2e8f0', fontFamily: 'var(--font-body)', lineHeight: '1.6' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>ARSALAN QAYUM</h1>
            <div style={{ fontSize: '1.1rem', color: 'var(--accent-cyan-light)', fontWeight: 600 }}>DevOps / Cloud Architect &amp; Engineer</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Pakistan • Phone: 03015642176 • Email: arsalanqayum09@gmail.com • LinkedIn: linkedin.com/in/arsalan-qayum-19a429225
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#38bdf8', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px' }}>PROFESSIONAL SUMMARY</h4>
            <p style={{ fontSize: '0.95rem' }}>
              DevOps and Cloud Engineer with hands-on experience in cloud infrastructure management, CI/CD pipeline automation, containerization, Linux server administration, monitoring, and database operations. Proven track record of configuring Nginx, Docker environments, Jenkins pipelines, Prometheus/Grafana/Loki/Promtail telemetry, and resolving complex production issues (502 Bad Gateway, 405 Method Not Allowed, SSL mixed-content, port conflicts).
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#38bdf8', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px' }}>WORK EXPERIENCE</h4>
            <div style={{ fontWeight: 700, color: '#ffffff' }}>DevOps / Cloud Architect — K2X TECH (Pakistan)</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan-light)', marginBottom: '8px' }}>January 2024 — Present</div>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li>Designed and maintained cloud infrastructure across AWS, Azure, and Proxmox VE hypervisors.</li>
              <li>Engineered automated CI/CD deployment pipelines using Jenkins, Git, and AWS CodeCommit.</li>
              <li>Containerized Node.js, React, Vite, Next.js, and FastAPI applications using Docker and Docker Compose.</li>
              <li>Configured Nginx reverse proxy load balancers with SSL/TLS auto-renewal via Certbot.</li>
              <li>Built monitoring stacks with Prometheus, Grafana, Loki, and Promtail for real-time observability.</li>
              <li>Administered MongoDB, MySQL, and PostgreSQL databases including dumps, restores, and permissions.</li>
              <li>Managed production applications with PM2 and Uvicorn process managers.</li>
              <li>Integrated Trivy container vulnerability scanning and SonarQube code quality checks into pipelines.</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#38bdf8', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '4px', marginBottom: '8px' }}>TECHNICAL SKILLS</h4>
            <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div><strong>Cloud Platforms:</strong> AWS, Azure, Proxmox VE</div>
              <div><strong>DevOps &amp; CI/CD:</strong> Jenkins, Git, AWS CodeCommit, Bash Scripting</div>
              <div><strong>Containers &amp; Security:</strong> Docker, Docker Compose, Trivy, SonarQube, SSL/TLS, Certbot</div>
              <div><strong>Web Servers &amp; Processes:</strong> Nginx, Apache, PM2, Uvicorn</div>
              <div><strong>Monitoring &amp; Observability:</strong> Prometheus, Grafana, Loki, Promtail</div>
              <div><strong>Databases:</strong> MongoDB, MySQL, PostgreSQL</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
