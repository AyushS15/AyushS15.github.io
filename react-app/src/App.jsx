import React, { useState } from 'react';
import {
  personalInfo,
  publicationsData,
  projectsData,
  experienceData,
  educationData,
  skillsData,
  courseworkData,
  awardsData
} from './data.js';

// Clean SVG Icons for exact vishnu-style line aesthetic
const Icons = {
  Github: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  ),
  Scholar: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  Linkedin: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  External: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <path d="M7 7h10v10"/>
      <path d="M7 17 17 7"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg className="ic ic-shift" viewBox="0 0 24 24">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  Play: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <polygon points="6 3 20 12 6 21 6 3"/>
    </svg>
  ),
  Book: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Download: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  Copy: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
    </svg>
  ),
  Check: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Robot: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <rect width="18" height="10" x="3" y="11" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  ),
  Terminal: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  ),
  Menu: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <line x1="4" y1="12" x2="20" y2="12"/>
      <line x1="4" y1="6" x2="20" y2="6"/>
      <line x1="4" y1="18" x2="20" y2="18"/>
    </svg>
  ),
  Close: () => (
    <svg className="ic" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
};

function App() {
  const [activeRobotDemoIdx, setActiveRobotDemoIdx] = useState(0);
  const [activeFigureIdx, setActiveFigureIdx] = useState(0);
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyBibtex = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2500);
  };

  const navLinks = [
    { href: '#about', label: 'about' },
    { href: '#publications', label: 'publications' },
    { href: '#projects', label: 'projects' },
    { href: '#experience', label: 'experience' },
    { href: '#education', label: 'education' },
    { href: '#stack', label: 'stack' }
  ];

  const robotProject = projectsData.find(p => p.id === 'humanoid-challenge') || projectsData[0];
  const currentRobotMedia = robotProject.media[activeRobotDemoIdx] || robotProject.media[0];

  const cvprPaper = publicationsData[0];
  const currentPaperFigure = cvprPaper.figures[activeFigureIdx] || cvprPaper.figures[0];

  return (
    <div className="portfolio-wrap">
      {/* ================= FIXED NAVBAR ================= */}
      <header id="nav">
        <div className="nav-wrap">
          <a href="#" className="nav-brand">
            <span>ayush.shrivastava</span>
            <span className="logo-caret" aria-hidden="true" />
          </a>

          <nav className="nav-links-desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="u-link text-sm muted">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-right-actions">
            <a
              href={personalInfo.links.resume}
              download="Ayush_Shrivastava_Resume.pdf"
              className="btn btn-primary text-xs !py-2 !px-3.5"
            >
              <Icons.Download />
              <span>Resume</span>
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost text-xs !p-2 hidden sm:inline-flex"
              title="GitHub Profile"
            >
              <Icons.Github />
            </a>
            <a
              href={personalInfo.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost text-xs !p-2 hidden sm:inline-flex"
              title="Google Scholar"
            >
              <Icons.Scholar />
            </a>
            <button
              className="btn btn-ghost text-xs !p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{ background: 'rgba(0,0,0,0.96)', borderBottom: '1px solid var(--charcoal)', padding: '1.2rem 1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="u-link text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ paddingTop: '0.8rem', borderTop: '1px solid var(--charcoal)', display: 'flex', gap: '0.8rem' }}>
                <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-xs flex-1">
                  <Icons.Github /> GitHub
                </a>
                <a href={personalInfo.links.scholar} target="_blank" rel="noopener noreferrer" className="btn btn-ghost text-xs flex-1">
                  <Icons.Scholar /> Scholar
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="section" style={{ paddingTop: 'clamp(6rem, 9vw, 9rem)' }}>
        <div className="wrap hero-grid">
          <div>
            <div className="badge badge-cyan !py-[6px] !px-3 mb-6" style={{ display: 'inline-flex' }}>
              <span className="status-dot" aria-hidden="true" />
              Incoming M.S. CS @ UCLA · CVPR 2025 Highlight Author
            </div>

            <p className="eyebrow mb-4">
              $ cat now.txt → World Models · Neuro-symbolic AI · Robot Learning
            </p>

            <h1 className="h-hero mb-6">
              Understanding how AI <span className="hl">perceives</span>, <span className="hl">reasons</span>, and <span className="hl">acts</span>.
              <span style={{ display: 'block', marginTop: '0.6rem', fontSize: '0.55em', color: 'var(--light-grey)', fontWeight: 500 }}>
                Building spatio-temporal representations and robotic policies that are robust, unbiased, and safe.
              </span>
            </h1>

            <p className="muted prose-w mb-8 text-[0.95rem]">
              I'm Ayush, an incoming M.S. Computer Science student at <span style={{ color: 'var(--white)', fontWeight: 600 }}>UCLA</span> and an Electrical Engineering (Minor CS) graduate of <span style={{ color: 'var(--white)', fontWeight: 600 }}>IIT Delhi</span>. I take ideas from research papers, build them from scratch, and dig into why they work under rare, low-probability physical events and severe distribution shifts.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              <a href="#projects" className="btn btn-primary">
                View projects
                <Icons.ArrowRight />
              </a>
              <a href="#publications" className="btn btn-ghost">
                <Icons.Book />
                CVPR 2025 Paper
              </a>
              <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Icons.Github />
                GitHub
              </a>
            </div>
          </div>

          {/* Terminal / Research Console */}
          <div className="terminal" aria-hidden="true">
            <div className="term-bar">
              <i /><i /><i />
              <span style={{ marginLeft: '8px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>~/research/real_to_sim — zsh</span>
            </div>
            <div className="term-body">
              <p><span className="t-p">$</span> <span className="t-c">python evaluate_real_to_sim.py --clip Vid_0.mp4</span></p>
              <p className="t-o">[1/4] Retargeting 60° pitch egocentric video → Franka Panda base frame...</p>
              <p className="t-o">[2/4] Tracking dense point surface grid on cylindrical tumbler (CoTracker3)...</p>
              <p className="t-ok">✓ Co-motion velocity latch satisfied: ρ = 0.68 &gt; 0.55 threshold</p>
              <p className="t-o">[3/4] Calibrating compliant MuJoCo physics (hollow density = 450 kg/m³, μ = 2.0)...</p>
              <p className="t-ok">✓ Gripper squared (0° horizontal approach angle)</p>
              <p className="t-o">[4/4] Executing SmolVLA (SigLIP-400M flow-matching action head, K=5)...</p>
              <p style={{ marginTop: '6px' }}><span className="t-ok">★ PICK &amp; PLACE:</span> <span className="t-v">7.2cm LIFT SUCCESS</span> [RoboSuite]</p>
              <p style={{ marginTop: '6px' }}><span className="t-p">$</span> <span className="t-c">python cvpr_benchmark.py --method ImparTail</span></p>
              <p className="t-ok">★ CVPR 2025 Highlight: tail mR@50 +52.1% relative gain</p>
              <p style={{ marginTop: '8px' }}><span className="t-p">ayush@ucla:~$</span> <span className="logo-caret" style={{ width: '8px', height: '14px' }} /></p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section band">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div>
            <p className="eyebrow mb-3">// 01 — about</p>
            <h2 className="h2 mb-6">From paper to working code, and the reason it works.</h2>
            <div className="muted prose-w text-[0.95rem]" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p>
                I'm an incoming M.S. Computer Science student at <span style={{ color: 'var(--white)', fontWeight: 600 }}>UCLA</span> (starting Fall 2026) and a 2025 graduate of <span style={{ color: 'var(--white)', fontWeight: 600 }}>IIT Delhi</span> with a major in Electrical Engineering and a minor in Computer Science.
              </p>
              <p>
                My work centers on three pillars: understanding the failure dynamics of modern deep learning in safety-critical tail regimes, building neuro-symbolic systems constrained by formal temporal logic, and retargeting human video demonstrations into robust robotic manipulation policies.
              </p>
              <p>
                Before graduate studies, I worked as a Software Engineer at <span style={{ color: 'var(--white)', fontWeight: 600 }}>LG Ad Solutions</span> optimizing distributed asynchronous simulation workloads, and spent two years at IIT Delhi's <span style={{ color: 'var(--white)', fontWeight: 600 }}>DAIR Lab</span> working on video scene graph generation, temporal logic extraction with DeepSeek-R1, and evaluating video world models (Wan 2.2, Cosmos 3) on rare physical mishaps.
              </p>
            </div>
          </div>

          {/* profile.yaml card */}
          <aside className="card p-6 md:p-7" style={{ background: 'var(--black)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>profile.yaml</span>
              <span className="badge badge-cyan">incoming mscs</span>
            </div>

            <dl style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.9rem' }}>
                <span className="hl" style={{ marginTop: '2px' }}><Icons.Scholar /></span>
                <div>
                  <dt style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: '2px' }}>now</dt>
                  <dd style={{ color: 'var(--white)' }}>M.S. Computer Science, UCLA · 2026 – 2028 (Incoming)</dd>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.9rem' }}>
                <span className="hl" style={{ marginTop: '2px' }}><Icons.Scholar /></span>
                <div>
                  <dt style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: '2px' }}>before</dt>
                  <dd style={{ color: 'var(--white)' }}>B.Tech EE (Minor CS), IIT Delhi · 2021 – 2025</dd>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.9rem' }}>
                <span className="hl" style={{ marginTop: '2px' }}><Icons.Terminal /></span>
                <div>
                  <dt style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: '4px' }}>currently</dt>
                  <dd>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', listStyle: 'none', color: 'var(--light-grey)' }}>
                      <li><span className="hl">›</span> Evaluating Video World Models on long-tail failure events</li>
                      <li><span className="hl">›</span> Real-to-sim robot manipulation via Vision-Language-Action policies</li>
                      <li><span className="hl">›</span> Mining temporal logic priors with DeepSeek-R1 for video scene graphs</li>
                    </ul>
                  </dd>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.9rem' }}>
                <span className="hl" style={{ marginTop: '2px' }}><Icons.Book /></span>
                <div>
                  <dt style={{ color: 'var(--text-muted)', fontSize: '0.72rem', marginBottom: '2px' }}>based in</dt>
                  <dd style={{ color: 'var(--white)' }}>Los Angeles, CA / Bangalore, India</dd>
                </div>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* ================= PUBLICATIONS ================= */}
      <section id="publications" className="section">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ maxWidth: '42rem' }}>
              <p className="eyebrow mb-2">// 02 — publications</p>
              <h2 className="h2 mb-3">Peer-reviewed research and theoretical guarantees.</h2>
              <p className="muted text-sm prose-w">
                Addressing distribution shifts, long-tailed relational bias, and adversarial corruptions in dynamic video perception.
              </p>
            </div>
            <a href={personalInfo.links.scholar} target="_blank" rel="noopener noreferrer" className="u-link text-sm muted">
              Google Scholar <Icons.External />
            </a>
          </div>

          {/* Featured CVPR Publication Card (Vishnu split-card style) */}
          <article className="card card-hover featured-split-card" style={{ borderColor: 'var(--cyan-line)' }}>
            {/* Left: Diagram & Telemetry Viewer */}
            <div className="media-viewer-container">
              <div className="media-viewer-top">
                <span className="muted">figure · {currentPaperFigure.tab.toLowerCase()}</span>
                <span className="badge badge-cyan">CVPR '25 Highlight</span>
              </div>

              <div
                className="media-frame"
                onClick={() => setLightboxImg({ src: currentPaperFigure.src, caption: currentPaperFigure.caption, title: currentPaperFigure.title })}
                title="Click to zoom figure"
              >
                <img src={currentPaperFigure.src} alt={currentPaperFigure.title} />
              </div>

              {/* Tab switcher buttons */}
              <div className="media-switch-buttons">
                {cvprPaper.figures.map((fig, idx) => (
                  <button
                    key={fig.id}
                    className={`media-switch-btn ${activeFigureIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveFigureIdx(idx)}
                  >
                    {fig.tab}
                  </button>
                ))}
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.7rem', lineHeight: '1.4' }}>
                {currentPaperFigure.caption}
              </p>

              {/* Evaluation Metrics Bars */}
              <div className="metric-bar-group" style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid var(--charcoal)' }}>
                {cvprPaper.evaluationBars.map((bar, bIdx) => (
                  <div key={bIdx} style={{ marginBottom: '0.5rem' }}>
                    <div className="metric-bar-row">
                      <span className="muted">{bar.label}</span>
                      <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>{bar.value}</span>
                    </div>
                    <div className="metric-bar-track">
                      <div className="metric-bar-fill" style={{ width: `${bar.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Textual & Technical Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span className="badge badge-cyan">Top 3% Highlight</span>
                <span className="badge">IEEE/CVF CVPR 2025</span>
              </div>

              <h3 className="card-title text-xl font-bold tracking-tight mb-3">
                {cvprPaper.title}
              </h3>

              <p style={{ fontSize: '0.82rem', marginBottom: '0.8rem', lineHeight: '1.5' }}>
                {cvprPaper.authors.map((a, i) => (
                  <span key={i} className={a.isSelf ? 'hl font-semibold' : 'muted'}>
                    {a.name}{a.isSelf ? ' (Me)' : ''}{i < cvprPaper.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>

              <p className="muted text-sm prose-w mb-6" style={{ fontSize: '0.875rem' }}>
                {cvprPaper.abstract}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {cvprPaper.tags.map((t, idx) => (
                  <span key={idx} className="badge">{t}</span>
                ))}
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '1.2rem', paddingTop: '1rem', borderTop: '1px solid var(--charcoal)' }}>
                <a href={cvprPaper.links.arxiv} target="_blank" rel="noopener noreferrer" className="u-link text-sm">
                  <Icons.External /> ArXiv Abstract
                </a>
                <a href={cvprPaper.links.pdf} target="_blank" rel="noopener noreferrer" className="u-link text-sm">
                  <Icons.Download /> Paper PDF
                </a>
                <button
                  className="u-link text-sm"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}
                  onClick={() => handleCopyBibtex(cvprPaper.links.bibtex)}
                >
                  {copiedBibtex ? <><Icons.Check /> Copied BibTeX</> : <><Icons.Copy /> Copy BibTeX</>}
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section band">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '2.5rem' }}>
            <div style={{ maxWidth: '42rem' }}>
              <p className="eyebrow mb-2">// 03 — projects</p>
              <h2 className="h2 mb-3">Selected work, with the numbers attached.</h2>
              <p className="muted text-sm prose-w">
                Research implementations, physical simulation digital twins, and autonomous policy learning. Take an idea, build it from scratch, and find out why it works.
              </p>
            </div>
            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="u-link text-sm muted">
              All repositories <Icons.External />
            </a>
          </div>

          {/* Featured Project Card 1: Humanoid Challenge (Vishnu split-card style) */}
          <article className="card card-hover featured-split-card" style={{ borderColor: 'var(--cyan-line)' }}>
            {/* Visual & Telemetry */}
            <div className="media-viewer-container">
              <div className="media-viewer-top">
                <span className="muted">real-to-sim · {currentRobotMedia.tab.toLowerCase()}</span>
                <span className="badge badge-cyan">{currentRobotMedia.badge}</span>
              </div>

              <div
                className="media-frame"
                onClick={() => setLightboxImg({ src: currentRobotMedia.src, caption: currentRobotMedia.caption, title: currentRobotMedia.title })}
                title="Click to zoom demo"
              >
                <img src={currentRobotMedia.src} alt={currentRobotMedia.title} />
              </div>

              {/* Toggle Buttons */}
              <div className="media-switch-buttons">
                {robotProject.media.map((med, idx) => (
                  <button
                    key={med.id}
                    className={`media-switch-btn ${activeRobotDemoIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveRobotDemoIdx(idx)}
                  >
                    {med.tab}
                  </button>
                ))}
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.7rem', lineHeight: '1.4' }}>
                {currentRobotMedia.caption}
              </p>

              {/* Progress Evaluation Bars */}
              <div className="metric-bar-group" style={{ marginTop: '1rem', paddingTop: '0.8rem', borderTop: '1px solid var(--charcoal)' }}>
                {robotProject.evaluationBars.map((bar, bIdx) => (
                  <div key={bIdx} style={{ marginBottom: '0.5rem' }}>
                    <div className="metric-bar-row">
                      <span className="muted">{bar.label}</span>
                      <span style={{ color: 'var(--cyan)', fontWeight: 700 }}>{bar.value}</span>
                    </div>
                    <div className="metric-bar-track">
                      <div className="metric-bar-fill" style={{ width: `${bar.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span className="badge badge-cyan">Robotics · Featured</span>
                <span className="text-xs muted">{robotProject.date}</span>
              </div>

              <h3 className="card-title text-xl font-bold tracking-tight mb-2">
                {robotProject.title}
              </h3>
              <p className="text-xs hl mb-4">{robotProject.subtitle}</p>

              <p className="muted text-sm prose-w mb-5" style={{ fontSize: '0.875rem' }}>
                {robotProject.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {robotProject.tags.map((t, idx) => (
                  <span key={idx} className="badge">{t}</span>
                ))}
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '1.2rem', paddingTop: '1rem', borderTop: '1px solid var(--charcoal)' }}>
                <a href={robotProject.links.github} target="_blank" rel="noopener noreferrer" className="u-link text-sm">
                  <Icons.Github /> View on GitHub
                </a>
                <span className="u-link text-sm" style={{ cursor: 'pointer' }} onClick={() => setActiveRobotDemoIdx(activeRobotDemoIdx === 0 ? 1 : 0)}>
                  <Icons.Play /> Switch Demo View
                </span>
              </div>
            </div>
          </article>

          {/* Asymmetric Gallery Grid */}
          <div className="gallery-grid" style={{ marginTop: '1.5rem' }}>
            {/* Project 2: Object-Centric Learning (col-span-7) */}
            {(() => {
              const proj = projectsData.find(p => p.id === 'object-centric-learning');
              if (!proj) return null;
              return (
                <article key={proj.id} className="card card-hover col-span-7 p-7 flex flex-col">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span className="eyebrow" style={{ display: 'block', marginBottom: '4px' }}>Deep Learning · Diffusion</span>
                      <h3 className="card-title h3">{proj.title}</h3>
                      <p className="text-xs muted mt-1">{proj.subtitle}</p>
                    </div>
                    <span className="badge badge-cyan">{proj.metricBadge}</span>
                  </div>

                  <p className="muted text-sm mb-5 prose-w">
                    {proj.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', marginBottom: '1.2rem' }}>
                    {proj.tags.map((t, idx) => <span key={idx} className="badge">{t}</span>)}
                  </div>

                  <div style={{ borderTop: '1px solid var(--charcoal)', paddingTop: '1rem' }}>
                    <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="u-link text-sm">
                      <Icons.Github /> View on GitHub
                    </a>
                  </div>
                </article>
              );
            })()}

            {/* Project 3: Automated Math Seq2Seq (col-span-5) */}
            {(() => {
              const proj = projectsData.find(p => p.id === 'automated-math-seq2seq');
              if (!proj) return null;
              return (
                <article key={proj.id} className="card card-hover col-span-5 p-7 flex flex-col">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span className="eyebrow" style={{ display: 'block', marginBottom: '4px' }}>NLP · Reasoning</span>
                      <h3 className="card-title h3">{proj.title}</h3>
                    </div>
                    <span className="badge badge-cyan">{proj.metricBadge}</span>
                  </div>

                  <p className="muted text-sm mb-5">
                    {proj.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', marginBottom: '1.2rem' }}>
                    {proj.tags.map((t, idx) => <span key={idx} className="badge">{t}</span>)}
                  </div>

                  <div style={{ borderTop: '1px solid var(--charcoal)', paddingTop: '1rem' }}>
                    <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="u-link text-sm">
                      <Icons.Github /> View on GitHub
                    </a>
                  </div>
                </article>
              );
            })()}

            {/* Project 4: GNNs for Node Classification (col-span-6) */}
            {(() => {
              const proj = projectsData.find(p => p.id === 'gnn-node-classification');
              if (!proj) return null;
              return (
                <article key={proj.id} className="card card-hover col-span-6 p-7 flex flex-col">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span className="eyebrow" style={{ display: 'block', marginBottom: '4px' }}>Graph ML</span>
                      <h3 className="card-title h3">{proj.title}</h3>
                    </div>
                    <span className="badge badge-cyan">{proj.metricBadge}</span>
                  </div>

                  <p className="muted text-sm mb-5">
                    {proj.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', marginBottom: '1.2rem' }}>
                    {proj.tags.map((t, idx) => <span key={idx} className="badge">{t}</span>)}
                  </div>

                  <div style={{ borderTop: '1px solid var(--charcoal)', paddingTop: '1rem' }}>
                    <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="u-link text-sm">
                      <Icons.Github /> View on GitHub
                    </a>
                  </div>
                </article>
              );
            })()}

            {/* Project 5: DETR Foggy Cityscapes (col-span-6) */}
            {(() => {
              const proj = projectsData.find(p => p.id === 'detr-foggy-cityscapes');
              if (!proj) return null;
              return (
                <article key={proj.id} className="card card-hover col-span-6 p-7 flex flex-col">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span className="eyebrow" style={{ display: 'block', marginBottom: '4px' }}>Computer Vision</span>
                      <h3 className="card-title h3">{proj.title}</h3>
                    </div>
                    <span className="badge badge-cyan">{proj.metricBadge}</span>
                  </div>

                  <p className="muted text-sm mb-5">
                    {proj.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', marginBottom: '1.2rem' }}>
                    {proj.tags.map((t, idx) => <span key={idx} className="badge">{t}</span>)}
                  </div>

                  <div style={{ borderTop: '1px solid var(--charcoal)', paddingTop: '1rem' }}>
                    <a href={proj.links.github} target="_blank" rel="noopener noreferrer" className="u-link text-sm">
                      <Icons.Github /> View on GitHub
                    </a>
                  </div>
                </article>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: '7rem' }}>
            <p className="eyebrow mb-2">// 04 — experience</p>
            <h2 className="h2 mb-4">Where I've built and researched.</h2>
            <p className="muted text-sm prose-w">
              Industry infrastructure scaling at LG Ad Solutions, thesis research at IIT Delhi's DAIR Lab, and security AI internships.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href={personalInfo.links.resume} download="Ayush_Shrivastava_Resume.pdf" className="btn btn-primary text-xs">
                <Icons.Download /> Download Full Resume PDF
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {experienceData.map((exp, eIdx) => (
              <article key={eIdx} className="card card-hover p-6 md:p-7">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 className="card-title h3">{exp.role}</h3>
                    <p className="text-sm hl font-semibold mt-0.5">{exp.company}</p>
                    <p className="text-xs muted">{exp.location}{exp.advisor ? ` · Advisor: ${exp.advisor}` : ''}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-cyan">{exp.badge}</span>
                    <p className="text-xs muted mt-1.5">{exp.date}</p>
                  </div>
                </div>

                {exp.bullets && (
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                    {exp.bullets.map((b, bIdx) => <li key={bIdx} style={{ marginBottom: '0.4rem' }}>{b}</li>)}
                  </ul>
                )}

                {/* Sub-projects (DAIR Lab) */}
                {exp.projects && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--charcoal)' }}>
                    {exp.projects.map((sub, sIdx) => (
                      <div key={sIdx} style={{ background: '#111', padding: '0.8rem 1rem', borderRadius: '6px', borderLeft: '3px solid var(--cyan)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--white)' }}>{sub.title}</span>
                          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{sub.date}</span>
                        </div>
                        <ul style={{ paddingLeft: '1.1rem', color: 'var(--text-muted)', fontSize: '0.8125rem', lineHeight: '1.5' }}>
                          {sub.bullets.map((sb, sbIdx) => <li key={sbIdx}>{sb}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION & STACK ================= */}
      <section id="education" className="section band">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: '7rem' }}>
            <p className="eyebrow mb-2">// 05 — education</p>
            <h2 className="h2 mb-4">Where I've studied.</h2>
            <p className="muted text-sm prose-w">
              Undergraduate degree from IIT Delhi in the capital of India, and incoming graduate studies at UCLA in Southern California.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {educationData.map((edu, idx) => (
              <article key={idx} className="card card-hover p-6 md:p-7" style={{ background: 'var(--black)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  <div>
                    <h3 className="card-title h3">{edu.degree}</h3>
                    {edu.minor && <p className="text-xs hl mt-0.5">{edu.minor}</p>}
                    <p className="text-sm mt-1">{edu.institution}</p>
                    <p className="text-xs muted">{edu.location}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="badge badge-cyan">{edu.badge}</span>
                    <p className="text-xs muted mt-1.5">{edu.date}</p>
                  </div>
                </div>
                <p className="muted text-sm pt-3 border-t" style={{ borderColor: 'var(--charcoal)', borderTop: '1px solid var(--charcoal)' }}>
                  {edu.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STACK ================= */}
      <section id="stack" className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: '7rem' }}>
            <p className="eyebrow mb-2">// 06 — stack</p>
            <h2 className="h2 mb-4">Tools I reach for first.</h2>
            <p className="muted text-sm mb-6 prose-w">
              Python and PyTorch for almost everything, MuJoCo and RoboSuite for physical robot environments, and AWS with Terraform for distributed cloud deployments.
            </p>

            {/* Terminal stack.json */}
            <div className="terminal">
              <div className="term-bar">
                <i /><i /><i />
                <span style={{ marginLeft: '8px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>stack.json</span>
              </div>
              <pre style={{ padding: '1rem', fontSize: '0.78rem', lineHeight: '1.6', overflowX: 'auto', margin: 0 }}>
                <code>
                  <span className="muted">&#123;</span>{'\n'}
                  {'  '}<span className="hl">"daily"</span>: [<span style={{ color: 'var(--white)' }}>"python"</span>, <span style={{ color: 'var(--white)' }}>"pytorch"</span>, <span style={{ color: 'var(--white)' }}>"mujoco"</span>, <span style={{ color: 'var(--white)' }}>"git"</span>],{'\n'}
                  {'  '}<span className="hl">"now"</span>: [<span style={{ color: 'var(--white)' }}>"vla models"</span>, <span style={{ color: 'var(--white)' }}>"world models"</span>, <span style={{ color: 'var(--white)' }}>"cotracker3"</span>],{'\n'}
                  {'  '}<span className="hl">"habit"</span>: <span style={{ color: 'var(--white)' }}>"paper -&gt; code -&gt; why?"</span>,{'\n'}
                  {'  '}<span className="hl">"shell"</span>: <span style={{ color: 'var(--white)' }}>"linux / zsh"</span>{'\n'}
                  <span className="muted">&#125;</span>
                </code>
              </pre>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {skillsData.categories.map((cat, cIdx) => (
              <div key={cIdx} className="card p-6">
                <h3 className="text-sm font-semibold mb-3 hl">› {cat.name}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cat.skills.map((s, sIdx) => (
                    <span key={sIdx} className="badge">{s}</span>
                  ))}
                </div>
              </div>
            ))}

            {/* Honors & Distinctions */}
            <div className="card p-6">
              <h3 className="text-sm font-semibold mb-3 hl">› Honors &amp; Awards</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {awardsData.map((a, aIdx) => (
                  <div key={aIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--white)' }}>{a.title}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{a.desc}</p>
                    </div>
                    <span className="badge badge-cyan" style={{ flexShrink: 0 }}>{a.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--white)' }}>{lightboxImg.title}</h4>
            <div style={{ background: '#000', borderRadius: '4px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
              <img src={lightboxImg.src} alt={lightboxImg.title} style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }} />
            </div>
            {lightboxImg.caption && (
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.8rem', lineHeight: '1.5' }}>
                {lightboxImg.caption}
              </p>
            )}
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Ayush Abhay Shrivastava</p>
            <p style={{ color: 'var(--charcoal)', fontSize: '0.75rem' }}>Built with React, Vite &amp; JetBrains Mono</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="u-link muted">GitHub</a>
            <a href={personalInfo.links.scholar} target="_blank" rel="noopener noreferrer" className="u-link muted">Scholar</a>
            <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="u-link muted">LinkedIn</a>
            <a href={personalInfo.links.resume} download="Ayush_Shrivastava_Resume.pdf" className="u-link muted">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
