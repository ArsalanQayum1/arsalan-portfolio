'use client';

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Contact</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Available for DevOps, cloud infrastructure, and production deployment roles.
          </p>
        </div>

        <div className="contact-clean-grid">
          {/* Direct Channels */}
          <div className="contact-details-box">
            <h3 className="contact-box-heading">Direct Contact</h3>
            <p className="contact-box-sub">
              Feel free to reach out directly via email, phone, or LinkedIn for opportunities or technical queries.
            </p>

            <div className="contact-channels-list">
              <a href="mailto:arsalanqayum09@gmail.com" className="channel-row">
                <div className="channel-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <span className="channel-label">Email</span>
                  <span className="channel-value">arsalanqayum09@gmail.com</span>
                </div>
              </a>

              <a href="tel:03015642176" className="channel-row">
                <div className="channel-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <span className="channel-label">Phone / WhatsApp</span>
                  <span className="channel-value">03015642176</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/arsalan-qayum-19a429225" target="_blank" rel="noopener noreferrer" className="channel-row">
                <div className="channel-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .89.72 1.61 1.61 1.61.89 0 1.61-.72 1.61-1.61 0-.89-.72-1.61-1.61-1.61z"/>
                  </svg>
                </div>
                <div>
                  <span className="channel-label">LinkedIn</span>
                  <span className="channel-value">linkedin.com/in/arsalan-qayum-19a429225</span>
                </div>
              </a>

              <div className="channel-row static-row">
                <div className="channel-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="channel-label">Location</span>
                  <span className="channel-value">Pakistan (Open to Remote / Relocation)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Message Form */}
          <div className="contact-form-box">
            {submitted && (
              <div className="contact-alert-success">
                ✓ Message sent. Thank you for reaching out.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form-clean">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-msg">Message</label>
                <textarea
                  id="contact-msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  placeholder="Your message..."
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
