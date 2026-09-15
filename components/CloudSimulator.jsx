'use client';

import { useState } from 'react';

export default function CloudSimulator() {
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);

  const startPipeline = () => {
    if (running) return;
    setRunning(true);
    setLogs([]);
    setProgress(0);
    setSuccess(false);

    const steps = [
      { prg: 15, msg: '[BUILD] Checkout commit 581b01f from AWS CodeCommit...' },
      { prg: 35, msg: '[SCAN] Executing SonarQube & Trivy container vulnerability scan...' },
      { prg: 60, msg: '[DOCKER] Building production multi-stage OCI container image...' },
      { prg: 80, msg: '[DEPLOY] Reloading Nginx reverse proxy & PM2 cluster workers...' },
      { prg: 100, msg: '[SUCCESS] Deployment complete! Health check 200 OK. Zero downtime.' }
    ];

    steps.forEach((st, idx) => {
      setTimeout(() => {
        setProgress(st.prg);
        setLogs(prev => [...prev, st.msg]);
        if (st.prg === 100) {
          setRunning(false);
          setSuccess(true);
        }
      }, (idx + 1) * 800);
    });
  };

  return (
    <section className="section" id="cloud">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Interactive Simulation</div>
          <h2 className="section-title">Cloud Infrastructure &amp; <span className="gradient-text">CI/CD Runner</span></h2>
          <p className="section-description">
            Test and trigger live multi-cloud deployment simulations across AWS, Azure, Docker containers, and Nginx reloads.
          </p>
        </div>

        <div className="glass-card cicd-simulator-card">
          <div className="simulator-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Live CI/CD Pipeline Simulator</h3>
              <span className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan-light)' }}>
                Target: production-k2xtech-cluster-us-east
              </span>
            </div>
            <button
              className="btn btn-primary"
              onClick={startPipeline}
              disabled={running}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              {running ? 'Pipeline Executing...' : 'Trigger Automated Pipeline'}
            </button>
          </div>

          {/* Progress Bar */}
          <div style={{ background: 'rgba(15, 23, 42, 0.8)', height: '10px', borderRadius: '9999px', overflow: 'hidden', marginBottom: '20px', border: '1px solid var(--border-subtle)' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #0284c7, #06b6d4, #10b981)', transition: 'width 0.4s ease' }}></div>
          </div>

          {/* Execution Log Terminal */}
          <div className="inspector-code-box" style={{ minHeight: '160px' }}>
            <div className="code-box-header">
              <span>Pipeline Stream Output</span>
              <span>{running ? 'RUNNING' : success ? 'PASSED' : 'IDLE'}</span>
            </div>
            <pre><code>
              {logs.length === 0 ? '$ Click "Trigger Automated Pipeline" to run production deployment stream...' : logs.join('\n')}
            </code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
