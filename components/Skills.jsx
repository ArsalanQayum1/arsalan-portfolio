'use client';

export default function Skills() {
  const skillGroups = [
    {
      category: 'Cloud',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      ),
      skills: ['AWS', 'Azure']
    },
    {
      category: 'DevOps',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
      ),
      skills: ['Jenkins', 'Git', 'CI/CD']
    },
    {
      category: 'Containers',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 13v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6m14 0l-7-7-7 7m14 0H5"/>
        </svg>
      ),
      skills: ['Docker', 'Docker Compose']
    },
    {
      category: 'Infrastructure',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6h16v12H4z"/>
        </svg>
      ),
      skills: ['Linux', 'Nginx', 'Apache', 'Proxmox', 'SSH']
    },
    {
      category: 'Monitoring',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      ),
      skills: ['Prometheus', 'Grafana', 'Loki']
    },
    {
      category: 'Databases',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'OpenSearch', 'Qdrant']
    },
    {
      category: 'Application',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      skills: ['Node.js', 'Next.js', 'React', 'FastAPI', 'Laravel', 'PM2']
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Skills</div>
          <h2 className="section-title">Technical Stack</h2>
        </div>

        <div className="skills-compact-grid">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group-card">
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <h3 className="skill-group-title">{group.category}</h3>
              </div>
              <div className="skill-tags-wrap">
                {group.skills.map((s, i) => (
                  <span key={i} className="skill-badge-item">
                    {s}
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
