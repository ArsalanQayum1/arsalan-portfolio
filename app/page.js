'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Architecture from '../components/Architecture';
import Projects from '../components/Projects';
import CloudSimulator from '../components/CloudSimulator';
import Toolbox from '../components/Toolbox';
import Terminal from '../components/Terminal';
import Contact from '../components/Contact';
import ResumeModal from '../components/ResumeModal';

export default function HomePage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenResume = () => setResumeOpen(true);
  const handleCloseResume = () => setResumeOpen(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenResume={handleOpenResume} />
      <Hero onOpenResume={handleOpenResume} />

      <div className="container">
        <Stats />
      </div>

      <hr className="section-separator" aria-hidden="true" />
      <About />

      <hr className="section-separator" aria-hidden="true" />
      <Experience />

      <hr className="section-separator" aria-hidden="true" />
      <Skills />

      <hr className="section-separator" aria-hidden="true" />
      <Architecture />

      <hr className="section-separator" aria-hidden="true" />
      <Projects onOpenResume={handleOpenResume} />

      <hr className="section-separator" aria-hidden="true" />
      <CloudSimulator />

      <hr className="section-separator" aria-hidden="true" />
      <Toolbox />

      <hr className="section-separator" aria-hidden="true" />
      <Terminal />

      <hr className="section-separator" aria-hidden="true" />
      <Contact />

      <footer className="footer" style={{ borderTop: '1px solid var(--border-subtle)', padding: '40px 0', background: 'rgba(7, 11, 20, 0.9)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="brand-text" style={{ fontSize: '1.2rem', fontWeight: 800 }}>ARSALAN<span>.DEVOPS</span></div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>DevOps &amp; Cloud Architect — Arsalan Qayum</div>
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            © 2026 Arsalan Qayum. Native Next.js 14 App Router Architecture.
          </div>
        </div>
      </footer>

      <ResumeModal isOpen={resumeOpen} onClose={handleCloseResume} />
    </main>
  );
}
