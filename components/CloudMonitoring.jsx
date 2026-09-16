'use client';

export default function CloudMonitoring() {
  const monitoringTools = [
    { name: 'Prometheus', role: 'Metrics', desc: 'Time-series telemetry, scrape targets, and alert rules' },
    { name: 'Grafana', role: 'Visualization', desc: 'Real-time infrastructure dashboards and metric graphs' },
    { name: 'Loki', role: 'Logs', desc: 'Centralized log aggregation and Promtail container streams' }
  ];

  const awsPoints = ['Cloud infrastructure', 'Deployment', 'Networking', 'Security'];
  const azurePoints = ['IaaS', 'PaaS', 'Networking', 'Security'];

  return (
    <section className="section" id="cloud-monitoring">
      <div className="container">
        
        {/* Cloud Platforms Subsection */}
        <div className="section-header">
          <div className="section-tag">Infrastructure</div>
          <h2 className="section-title">Cloud Platforms &amp; Observability</h2>
        </div>

        <div className="cloud-observability-grid">
          {/* AWS Card */}
          <div className="cloud-clean-card">
            <div className="cloud-card-header">
              <span className="cloud-provider-badge">AWS</span>
              <h3 className="cloud-card-title">Amazon Web Services</h3>
            </div>
            <ul className="cloud-points-list">
              {awsPoints.map((pt, i) => (
                <li key={i} className="cloud-point-item">
                  <span className="point-bullet">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Azure Card */}
          <div className="cloud-clean-card">
            <div className="cloud-card-header">
              <span className="cloud-provider-badge azure-badge">Azure</span>
              <h3 className="cloud-card-title">Microsoft Azure</h3>
            </div>
            <ul className="cloud-points-list">
              {azurePoints.map((pt, i) => (
                <li key={i} className="cloud-point-item">
                  <span className="point-bullet">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Monitoring Infrastructure Flow */}
        <div className="monitoring-flow-box">
          <div className="monitoring-box-header">
            <h3 className="monitoring-box-title">Observability &amp; Telemetry Stack</h3>
            <span className="monitoring-sub-tag">Infrastructure Flow</span>
          </div>

          <div className="monitoring-cards-row">
            {monitoringTools.map((m, idx) => (
              <div key={idx} className="monitoring-mini-card">
                <div className="monitoring-mini-top">
                  <h4 className="monitoring-tool-name">{m.name}</h4>
                  <span className="monitoring-role-tag">{m.role}</span>
                </div>
                <p className="monitoring-tool-desc">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="monitoring-pipeline-summary">
            <span className="summary-label">Flow:</span>
            <span className="summary-nodes">Servers &amp; Containers → Promtail &amp; Exporters → Prometheus &amp; Loki → Grafana Dashboards</span>
          </div>
        </div>

      </div>
    </section>
  );
}
