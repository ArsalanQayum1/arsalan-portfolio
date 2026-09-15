'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function HomePage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenResume = () => setResumeOpen(true);
  const handleCloseResume = () => setResumeOpen(false);

  return (
    <main className="min-h-screen">
      <Navbar onOpenResume={handleOpenResume} />
      <Hero onOpenResume={handleOpenResume} />

      {/* Next.js Portfolio Page Container */}
      <div className="container py-12 text-center text-slate-400">
        <div className="p-8 border border-cyan-500/20 rounded-2xl bg-slate-900/60 backdrop-blur-md max-w-2xl mx-auto my-12">
          <h3 className="text-xl font-bold text-white mb-2">⚡ Native Next.js 14 App Router Architecture</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Your portfolio codebase has been converted to a modular Next.js App Router structure (<code className="text-cyan-400">app/</code>, <code className="text-cyan-400">components/</code>, <code className="text-cyan-400">package.json</code>, <code className="text-cyan-400">next.config.js</code>).
          </p>
          <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-cyan-300 font-mono">
            Deploy to Vercel with zero configuration: <code className="bg-slate-950 px-2 py-1 rounded">npx vercel</code>
          </div>
        </div>
      </div>
    </main>
  );
}
