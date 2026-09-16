'use client';

export default function Projects() {
  const projects = [
    {
      name: 'Assessment Autofiller',
      description: 'Automated evaluation and response tool designed to streamline candidate and compliance assessment workflows with structured data extraction.',
      technologies: ['Node.js', 'FastAPI', 'Docker', 'Linux', 'Git'],
      github: 'https://github.com/ArsalanQayum1'
    },
    {
      name: 'Knowledge Hub MSP',
      description: 'Centralized multi-tenant knowledge portal for managed service operations, featuring indexed search and role-based document access.',
      technologies: ['Next.js', 'React', 'Docker', 'Nginx', 'PostgreSQL', 'Elasticsearch'],
      github: 'https://github.com/ArsalanQayum1'
    },
    {
      name: 'MSP Investment Platform',
      description: 'Cloud-hosted investment portal architecture with secure user authentication, high availability routing, and database redundancy.',
      technologies: ['AWS', 'Azure', 'Node.js', 'MySQL', 'PM2', 'Nginx', 'SSL/TLS'],
      github: 'https://github.com/ArsalanQayum1'
    },
    {
      name: 'Monitoring & Observability',
      description: 'Production telemetry stack collecting real-time server metrics, streaming container logs, and alerting on service anomalies.',
      technologies: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Docker Compose', 'Linux'],
      github: 'https://github.com/ArsalanQayum1'
    },
    {
      name: 'Private Infrastructure',
      description: 'On-premise hypervisor infrastructure running isolated virtual machines, container networks, automated snapshot backups, and internal DNS.',
      technologies: ['Proxmox VE', 'Linux (Ubuntu)', 'Docker', 'SSH', 'BASH Automation', 'Nginx'],
      github: 'https://github.com/ArsalanQayum1'
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            Selected infrastructure, deployment automation, and application hosting projects.
          </p>
        </div>

        <div className="projects-clean-grid">
          {projects.map((p, idx) => (
            <div key={idx} className="project-clean-card">
              <div className="project-header">
                <h3 className="project-name">{p.name}</h3>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                    title="View GitHub Repository"
                    aria-label={`View ${p.name} source code on GitHub`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                    </svg>
                  </a>
                )}
              </div>

              <p className="project-description">{p.description}</p>

              <div className="project-tech-list">
                {p.technologies.map((tech, i) => (
                  <span key={i} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
