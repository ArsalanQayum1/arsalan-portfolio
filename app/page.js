import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Architecture from '../components/Architecture';
import CloudMonitoring from '../components/CloudMonitoring';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import ResumeModal from '../components/ResumeModal';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen">
        <Hero />

        <hr className="section-separator" aria-hidden="true" />
        <About />

        <hr className="section-separator" aria-hidden="true" />
        <Experience />

        <hr className="section-separator" aria-hidden="true" />
        <Skills />

        <hr className="section-separator" aria-hidden="true" />
        <Projects />

        <hr className="section-separator" aria-hidden="true" />
        <Architecture />

        <hr className="section-separator" aria-hidden="true" />
        <CloudMonitoring />

        <hr className="section-separator" aria-hidden="true" />
        <Certifications />

        <hr className="section-separator" aria-hidden="true" />
        <Contact />
      </main>

      <footer className="footer-clean">
        <div className="container footer-container">
          <div>
            <div className="footer-brand">Arsalan Qayum</div>
            <div className="footer-role">DevOps &amp; Cloud Engineer</div>
          </div>
          <div className="footer-copy">
            © 2026 Arsalan Qayum. All rights reserved.
          </div>
        </div>
      </footer>

      <ResumeModal />
    </>
  );
}
