'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Direct Communication</div>
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-description">
            Available for DevOps consulting, cloud architecture design, CI/CD pipeline automation, and production infrastructure roles.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="glass-card contact-info-card">
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '16px' }}>Direct Channels</h3>
            
            <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div className="info-icon-box" style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <div className="mono-text" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Email Address</div>
                  <a href="mailto:arsalanqayum09@gmail.com" style={{ color: '#ffffff', fontWeight: 600 }}>arsalanqayum09@gmail.com</a>
                </div>
              </div>

              <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div className="info-icon-box" style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(34, 211, 238, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22d3ee' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <div className="mono-text" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Phone / WhatsApp</div>
                  <a href="tel:03015642176" style={{ color: '#ffffff', fontWeight: 600 }}>03015642176</a>
                </div>
              </div>

              <div className="info-item" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div className="info-icon-box" style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div>
                  <div className="mono-text" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Location</div>
                  <span style={{ color: '#ffffff', fontWeight: 600 }}>Pakistan (Remote / Hybrid)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="glass-card contact-form-card">
            {submitted && (
              <div style={{ padding: '14px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#34d399', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
                ✓ Message sent successfully! Arsalan will respond shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name or Team"
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(7, 11, 20, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: '#ffffff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@company.com"
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(7, 11, 20, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: '#ffffff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="Cloud Deployment / DevOps Opportunity"
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(7, 11, 20, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: '#ffffff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  placeholder="Describe your infrastructure goals or deployment requirements..."
                  style={{ width: '100%', padding: '10px 14px', background: 'rgba(7, 11, 20, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: '#ffffff', resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
