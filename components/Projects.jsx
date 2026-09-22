'use client';

export default function Projects() {
  const projects = [
    {
      name: 'Assessment Autofiller',
      description: 'Automated evaluation and response tool designed to streamline candidate and compliance assessment workflows with structured data extraction.',
      technologies: ['Node.js', 'FastAPI', 'Docker', 'Linux', 'Git']
    },
    {
      name: 'Knowledge Hub MSP',
      description: 'Centralized multi-tenant knowledge portal for managed service operations, featuring indexed search and role-based document access.',
      technologies: ['Next.js', 'React', 'Docker', 'Nginx', 'PostgreSQL', 'Elasticsearch']
    },
    {
      name: 'MSP Investment Platform',
      description: 'Cloud-hosted investment portal architecture with secure user authentication, high availability routing, and database redundancy.',
      technologies: ['AWS', 'Azure', 'Node.js', 'MySQL', 'PM2', 'Nginx', 'SSL/TLS']
    },
    {
      name: 'Monitoring & Observability',
      description: 'Production telemetry stack collecting real-time server metrics, streaming container logs, and alerting on service anomalies.',
      technologies: ['Prometheus', 'Grafana', 'Loki', 'Promtail', 'Docker Compose', 'Linux']
    },
    {
      name: 'Private Infrastructure',
      description: 'On-premise hypervisor infrastructure running isolated virtual machines, container networks, automated snapshot backups, and internal DNS.',
      technologies: ['Proxmox VE', 'Linux (Ubuntu)', 'Docker', 'SSH', 'BASH Automation', 'Nginx']
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
