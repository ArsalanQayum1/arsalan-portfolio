'use client';

export default function Architecture() {
  const steps = [
    { label: 'Git', sub: 'Version Control', icon: '1' },
    { label: 'Jenkins', sub: 'CI Automation', icon: '2' },
    { label: 'Build', sub: 'Compile & Test', icon: '3' },
    { label: 'Docker', sub: 'Containerization', icon: '4' },
    { label: 'Deploy', sub: 'Environment Release', icon: '5' },
    { label: 'Nginx', sub: 'Reverse Proxy & SSL', icon: '6' },
    { label: 'Application', sub: 'Production Runtime', icon: '7' },
    { label: 'Prometheus', sub: 'Metrics Collection', icon: '8' },
    { label: 'Grafana', sub: 'Telemetry Dashboard', icon: '9' }
  ];

  return (
    <section className="section" id="architecture">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Workflow</div>
          <h2 className="section-title">DevOps Pipeline Architecture</h2>
          <p className="section-description">
            Standard automated delivery pipeline from code commit to containerized deployment and observability.
          </p>
        </div>

        <div className="architecture-clean-wrap">
          <div className="pipeline-flow-container">
            {steps.map((st, idx) => (
              <div key={idx} className="pipeline-step-node">
                <div className="pipeline-node-box">
                  <span className="node-index">{st.icon}</span>
                  <div className="node-info">
                    <h4 className="node-label">{st.label}</h4>
                    <span className="node-sub">{st.sub}</span>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="pipeline-connector" aria-hidden="true">
                    <span className="connector-arrow">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
