'use client';

export default function Certifications() {
  const certs = [
    {
      title: 'Introduction to Cloud Computing',
      issuer: 'IBM (via Coursera)',
      topics: 'IaaS • PaaS • SaaS • Cloud Architecture • Cloud Security'
    },
    {
      title: 'Networking Foundation',
      issuer: 'CCNA (Cisco Certified Network Associate Coursework)',
      topics: 'IPv4/IPv6 Subnetting • Routing & Switching • TCP/IP • Network Security & VLANs'
    }
  ];

  const learningTags = [
    'Azure',
    'DevSecOps',
    'Kubernetes',
    'Advanced CI/CD',
    'Cloud Architecture',
    'Cloud FinOps'
  ];

  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Education</div>
          <h2 className="section-title">Certifications &amp; Continuous Learning</h2>
        </div>

        <div className="certs-learning-grid">
          {/* Certifications Card */}
          <div className="certs-card">
            <h3 className="certs-heading">Certifications &amp; Foundation</h3>
            <div className="certs-list">
              {certs.map((c, i) => (
                <div key={i} className="cert-item">
                  <div className="cert-item-header">
                    <h4 className="cert-title">{c.title}</h4>
                    <span className="cert-issuer">{c.issuer}</span>
                  </div>
                  <div className="cert-topics">
                    <span className="cert-topics-label">Topics:</span> {c.topics}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning Card */}
          <div className="certs-card">
            <h3 className="certs-heading">Currently Learning</h3>
            <p className="learning-intro">
              Active engineering focus areas and technical domains under continuous study:
            </p>
            <div className="learning-tags-cluster">
              {learningTags.map((tag, idx) => (
                <span key={idx} className="learning-tag-item">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
