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

// Clean SVG Icons for ultra-crisp modern rendering
const Icons = {
  Github: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  ),
  Scholar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4 3.111v6.222L12 24l8-5.167v-6.222l4-3.111L12 0z"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  Mail: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Download: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  External: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  Copy: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  Check: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Trophy: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
    </svg>
  ),
  Robot: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <path d="M12 7v4"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  ),
  BookOpen: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Code: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Graduation: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  Briefcase: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  Eye: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
};

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [activeFigureIdx, setActiveFigureIdx] = useState(0);
  const [activeRobotDemoIdx, setActiveRobotDemoIdx] = useState(0);
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  const handleCopyBibtex = (bibtex) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2500);
  };

  const navItems = [
    { key: 'about', label: 'Overview', icon: Icons.Eye },
    { key: 'publications', label: 'Publications', icon: Icons.BookOpen, badge: 'CVPR Highlight' },
    { key: 'projects', label: 'Projects & Demos', icon: Icons.Robot, badge: 'VLA Demo' },
    { key: 'experience', label: 'Experience', icon: Icons.Briefcase },
    { key: 'education', label: 'Education & Skills', icon: Icons.Graduation }
  ];

  return (
    <div className="portfolio-app">
      {/* Background ambient lighting glows */}
      <div className="ambient-glow glow-cyan" />
      <div className="ambient-glow glow-violet" />
      <div className="ambient-glow glow-blue" />

      {/* Top Sticky Header */}
      <header className="site-header">
        <div className="header-inner">
          <div className="header-brand" onClick={() => setActiveTab('about')}>
            <div className="brand-avatar-mini">
              <img src={personalInfo.avatar} alt="Ayush" onError={(e) => { e.target.src = "https://github.com/AyushS15.png"; }} />
              <span className="online-indicator" />
            </div>
            <div className="brand-text">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-title">UCLA CS • DAIR IITD</span>
            </div>
          </div>

          <nav className="header-nav">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.key;
              return (
                <button
                  key={item.key}
                  className={`nav-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.key)}
                >
                  <IconComp />
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-item-badge">{item.badge}</span>}
                </button>
              );
            })}
          </nav>

          <div className="header-actions">
            <a
              href={personalInfo.links.resume}
              download="Ayush_Shrivastava_Resume.pdf"
              className="btn-action primary"
              title="Download Latest Resume PDF"
            >
              <Icons.Download />
              <span>Resume</span>
            </a>
            <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="btn-icon" title="GitHub Profile">
              <Icons.Github />
            </a>
            <a href={personalInfo.links.scholar} target="_blank" rel="noreferrer" className="btn-icon" title="Google Scholar">
              <Icons.Scholar />
            </a>
            <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="btn-icon" title="LinkedIn Profile">
              <Icons.Linkedin />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        {/* OVERVIEW / ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="tab-pane fade-in">
            {/* Hero Section */}
            <section className="hero-section glass-card">
              <div className="hero-content">
                <div className="hero-status-tag">
                  <span className="pulse-dot" />
                  <span>Incoming M.S. CS @ <strong>UCLA</strong> • CVPR 2025 Highlight Author</span>
                </div>
                <h1 className="hero-name">
                  Ayush Abhay <span className="gradient-text">Shrivastava</span>
                </h1>
                <p className="hero-tagline">{personalInfo.tagline}</p>
                <p className="hero-lead">
                  I specialize in <strong>spatio-temporal scene understanding</strong>, <strong>video world models</strong>, and <strong>real-to-sim robot policy learning</strong>. My goal is to engineer neuro-symbolic and deep learning systems that remain reliable under severe distribution shifts and critical long-tail physical scenarios.
                </p>

                <div className="hero-actions">
                  <button className="btn-modern primary" onClick={() => setActiveTab('publications')}>
                    <Icons.BookOpen /> View CVPR 2025 Paper
                  </button>
                  <button className="btn-modern secondary" onClick={() => setActiveTab('projects')}>
                    <Icons.Robot /> Watch Robot Manipulation Demos
                  </button>
                  <a href={personalInfo.links.resume} download="Ayush_Shrivastava_Resume.pdf" className="btn-modern outline">
                    <Icons.Download /> Download PDF Resume
                  </a>
                </div>
              </div>

              <div className="hero-card-sidebar">
                <div className="profile-card">
                  <div className="avatar-frame">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      onError={(e) => { e.target.src = "https://github.com/AyushS15.png"; }}
                    />
                    <div className="avatar-border-glow" />
                  </div>
                  <h3 className="profile-name">{personalInfo.name}</h3>
                  <p className="profile-role">Incoming M.S. CS @ UCLA</p>
                  <p className="profile-inst">Ex-SWE-1 @ LG Ad Solutions • IIT Delhi '25</p>

                  <div className="profile-links-row">
                    <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="social-pill">
                      <Icons.Github /> GitHub
                    </a>
                    <a href={personalInfo.links.scholar} target="_blank" rel="noreferrer" className="social-pill">
                      <Icons.Scholar /> Scholar
                    </a>
                    <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="social-pill">
                      <Icons.Linkedin /> LinkedIn
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="social-pill">
                      <Icons.Mail /> Email
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Impact Metric Cards */}
            <div className="metrics-grid">
              <div className="metric-card glass-card">
                <span className="metric-icon">🏆</span>
                <span className="metric-number gradient-text">CVPR 2025</span>
                <span className="metric-label">Highlight Paper (Top 3% of 13k+ submissions)</span>
              </div>
              <div className="metric-card glass-card">
                <span className="metric-icon">📈</span>
                <span className="metric-number gradient-text">+52% Recall</span>
                <span className="metric-label">Relative gain on tail-class predicates in ImparTail</span>
              </div>
              <div className="metric-card glass-card">
                <span className="metric-icon">🦾</span>
                <span className="metric-number gradient-text">Real-to-Sim</span>
                <span className="metric-label">Franka Panda & SmolVLA closed-loop physical lifting</span>
              </div>
              <div className="metric-card glass-card">
                <span className="metric-icon">🎯</span>
                <span className="metric-number gradient-text">AIR 472</span>
                <span className="metric-label">JEE Advanced 2021 (Top 0.2% out of 200k+ candidates)</span>
              </div>
            </div>

            {/* Research Interests Cloud */}
            <section className="glass-card section-card">
              <h3 className="section-title">
                <Icons.Eye /> Research Interests & Focus Areas
              </h3>
              <p className="section-subtitle">
                Targeting foundational challenges in video modeling, neuro-symbolic logic priors, and physical robot dexterity.
              </p>
              <div className="interests-grid">
                {personalInfo.researchInterests.map((interest, i) => (
                  <div key={i} className="interest-chip">
                    <span className="interest-dot" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Bio & Narrative */}
            <div className="two-col-grid">
              <section className="glass-card section-card">
                <h3 className="section-title">
                  <Icons.Briefcase /> Background & Journey
                </h3>
                {personalInfo.bioParagraphs.map((para, i) => (
                  <p key={i} className="bio-text">{para}</p>
                ))}
              </section>

              <section className="glass-card section-card">
                <h3 className="section-title">
                  <Icons.Code /> Recent Work & Philosophy
                </h3>
                <p className="bio-text">
                  Deep learning models often achieve impressive average-case accuracy, but break down severely when encountering low-probability "tail" events or real-world physical shifts.
                </p>
                <div className="highlight-callout">
                  <strong>Our Core Research Principle:</strong> Build systems that are <em>safe-by-design</em>—integrating temporal logic constraints, curriculum loss masking, and physical digital twins to ensure robust behavior from perception to autonomous robotic actuation.
                </div>
                <div className="mini-stats-list">
                  <div className="mini-stat-item">
                    <span className="bullet-accent">✓</span>
                    <div>
                      <strong>Video World Models:</strong> Evaluating Wan 2.2, Cosmos 3, and PixVerse on Point-of-No-Return failure forecasting.
                    </div>
                  </div>
                  <div className="mini-stat-item">
                    <span className="bullet-accent">✓</span>
                    <div>
                      <strong>Neuro-symbolic PSG:</strong> Mining 100k+ temporal logic rules with DeepSeek-R1 to constrain scene graphs.
                    </div>
                  </div>
                  <div className="mini-stat-item">
                    <span className="bullet-accent">✓</span>
                    <div>
                      <strong>ImparTail:</strong> Eliminating head-class bias in spatio-temporal video relationships (CVPR 2025 Highlight).
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* PUBLICATIONS TAB */}
        {activeTab === 'publications' && (
          <div className="tab-pane fade-in">
            <div className="section-header-row">
              <div>
                <h2 className="section-main-heading">Research & Publications</h2>
                <p className="section-main-sub">Peer-reviewed papers, conference proceedings, and technical architectures.</p>
              </div>
              <a href={personalInfo.links.scholar} target="_blank" rel="noreferrer" className="btn-modern secondary">
                <Icons.Scholar /> View on Google Scholar
              </a>
            </div>

            {publicationsData.map((pub) => {
              const currentFig = pub.figures[activeFigureIdx] || pub.figures[0];
              return (
                <div key={pub.id} className="publication-showcase glass-card">
                  <div className="pub-badge-row">
                    <span className="pub-highlight-badge">🏆 {pub.badge}</span>
                    <span className="pub-venue-badge">{pub.venue}</span>
                  </div>

                  <h3 className="pub-title">{pub.title}</h3>

                  <div className="pub-authors">
                    {pub.authors.map((author, aIdx) => (
                      <span key={aIdx} className={`author-tag ${author.isSelf ? 'self-author' : ''}`}>
                        {author.name}{author.isSelf ? ' (Me)' : ''}{aIdx < pub.authors.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>

                  <p className="pub-abstract">{pub.abstract}</p>

                  {/* Metrics Bar */}
                  <div className="pub-metrics-bar">
                    {pub.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="pub-metric-item">
                        <span className="pub-metric-value gradient-text">{m.value}</span>
                        <span className="pub-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive Figure Viewer */}
                  <div className="paper-figure-viewer glass-card">
                    <div className="figure-viewer-header">
                      <div className="figure-viewer-title">
                        <Icons.BookOpen />
                        <span>Interactive Paper Figure Viewer:</span>
                      </div>
                      <div className="figure-tab-buttons">
                        {pub.figures.map((fig, fIdx) => (
                          <button
                            key={fig.id}
                            className={`fig-tab-btn ${activeFigureIdx === fIdx ? 'active' : ''}`}
                            onClick={() => setActiveFigureIdx(fIdx)}
                          >
                            {fig.title.split(' ')[0]} {fig.title.split(' ')[1] || ''}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="figure-display-area" onClick={() => setLightboxImg({ src: currentFig.src, caption: currentFig.caption, title: currentFig.title })}>
                      <img src={currentFig.src} alt={currentFig.title} className="figure-image" />
                      <div className="figure-overlay-hint">
                        <Icons.Eye /> Click to expand full resolution
                      </div>
                    </div>

                    <div className="figure-caption-box">
                      <strong>Figure {activeFigureIdx + 1}: {currentFig.title}</strong>
                      <p>{currentFig.caption}</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="pub-highlights-box">
                    <h4 className="highlights-title">Key Contributions & Results</h4>
                    <ul className="highlights-list">
                      {pub.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx}>{hl}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons & BibTeX */}
                  <div className="pub-action-toolbar">
                    <a href={pub.links.arxiv} target="_blank" rel="noreferrer" className="btn-modern primary">
                      <Icons.External /> ArXiv Abstract
                    </a>
                    <a href={pub.links.pdf} target="_blank" rel="noreferrer" className="btn-modern secondary">
                      <Icons.Download /> Download Paper PDF
                    </a>
                    <button className="btn-modern outline" onClick={() => handleCopyBibtex(pub.links.bibtex)}>
                      {copiedBibtex ? <><Icons.Check /> BibTeX Copied!</> : <><Icons.Copy /> Copy BibTeX</>}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* PROJECTS & DEMOS TAB */}
        {activeTab === 'projects' && (
          <div className="tab-pane fade-in">
            <div className="section-header-row">
              <div>
                <h2 className="section-main-heading">Projects & Interactive Demos</h2>
                <p className="section-main-sub">Real-to-sim robot policy learning, generative diffusion models, and robust deep learning architectures.</p>
              </div>
              <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="btn-modern secondary">
                <Icons.Github /> Explore GitHub Repositories
              </a>
            </div>

            {/* Featured Robotics Spotlight Card */}
            {projectsData.filter(p => p.featured).map((proj) => {
              const currentMedia = proj.media[activeRobotDemoIdx] || proj.media[0];
              return (
                <div key={proj.id} className="featured-project-card glass-card">
                  <div className="featured-project-header">
                    <div className="featured-badge-row">
                      <span className="spotlight-tag">🤖 Featured Robotics Spotlight</span>
                      <span className="category-tag">{proj.category}</span>
                      <span className="period-tag">{proj.date}</span>
                    </div>
                    <a href={proj.links.github} target="_blank" rel="noreferrer" className="btn-modern github-btn">
                      <Icons.Github /> View Humanoid-Challenge Repo
                    </a>
                  </div>

                  <h3 className="project-title-large">{proj.title}</h3>
                  <p className="project-subtitle-large">{proj.subtitle}</p>

                  <div className="tech-tags-cloud">
                    {proj.tags.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag-pill">{t}</span>
                    ))}
                  </div>

                  {/* Interactive Demo Player */}
                  <div className="robot-demo-viewer glass-card">
                    <div className="demo-viewer-header">
                      <div className="demo-tabs-group">
                        {proj.media.map((med, mIdx) => (
                          <button
                            key={mIdx}
                            className={`demo-tab-btn ${activeRobotDemoIdx === mIdx ? 'active' : ''}`}
                            onClick={() => setActiveRobotDemoIdx(mIdx)}
                          >
                            <Icons.Robot /> {med.title}
                          </button>
                        ))}
                      </div>
                      <span className="demo-status-pill">
                        <span className="pulse-dot green" /> {currentMedia.badge}
                      </span>
                    </div>

                    <div className="demo-visual-frame" onClick={() => setLightboxImg({ src: currentMedia.src, caption: currentMedia.caption, title: currentMedia.title })}>
                      <img src={currentMedia.src} alt={currentMedia.title} className="demo-gif" />
                      <div className="demo-overlay-hint">
                        <Icons.Eye /> Click to expand demo
                      </div>
                    </div>

                    <div className="demo-caption-bar">
                      <p>{currentMedia.caption}</p>
                    </div>
                  </div>

                  {/* Key Robotics Results Grid */}
                  <div className="robot-results-grid">
                    {proj.keyResults.map((kr, kIdx) => (
                      <div key={kIdx} className="robot-result-card">
                        <span className="robot-result-val gradient-text">{kr.value}</span>
                        <span className="robot-result-lbl">{kr.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deep Technical Breakdown */}
                  <div className="project-deep-dive">
                    <h4 className="deep-dive-title">Technical Innovation & Pipeline Overview</h4>
                    <div className="deep-dive-grid">
                      <div className="dive-card">
                        <h5 className="dive-card-heading">1. The Occlusion Challenge</h5>
                        <p>
                          Egocentric phone videos of a hand wrapping around a steel glass cause catastrophic index fingertip ($L_8$) occlusion behind the tumbler, causing MediaPipe landmark trackers to violently hallucinate or freeze.
                        </p>
                      </div>
                      <div className="dive-card">
                        <h5 className="dive-card-heading">2. CoTracker3 & Co-Motion</h5>
                        <p>
                          Replaced sparse joints with persistent dense surface grids tracked across hand and tumbler. Formulated point velocity co-motion correlation (&rho;<sub>t</sub> &gt; 0.55) to mathematically guarantee contact latching without joint heuristics.
                        </p>
                      </div>
                      <div className="dive-card">
                        <h5 className="dive-card-heading">3. Physical Digital Twin</h5>
                        <p>
                          Calibrated 60° camera pitch derotation, tuned hollow steel density (450 kg/m³, ~120g vs solid 2.1kg overload), applied contact friction ($\mu = 2.0$), and squared Franka wrist from 45° to 0° for first physical lift.
                        </p>
                      </div>
                      <div className="dive-card">
                        <h5 className="dive-card-heading">4. SmolVLA Policy Learning</h5>
                        <p>
                          Integrated a 450M parameter Vision-Language-Action policy (frozen SigLIP-400M backbone + flow-matching action expert head) with optimized action chunk horizons ($K = 5$) for autonomous closed-loop execution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Other Projects Grid */}
            <h3 className="section-subheading-text">Additional Research & Course Projects</h3>
            <div className="other-projects-grid">
              {projectsData.filter(p => !p.featured).map((proj) => (
                <div key={proj.id} className="project-card glass-card">
                  <div className="project-card-header">
                    <div>
                      <span className="category-pill">{proj.category}</span>
                      <h4 className="project-card-title">{proj.title}</h4>
                      {proj.subtitle && <p className="project-card-sub">{proj.subtitle}</p>}
                    </div>
                    {proj.links.github && (
                      <a href={proj.links.github} target="_blank" rel="noreferrer" className="btn-icon" title="View Code">
                        <Icons.Github />
                      </a>
                    )}
                  </div>

                  <p className="project-card-summary">{proj.summary}</p>

                  <ul className="project-bullets">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>

                  <div className="card-tags-row">
                    {proj.tags.map((t, tIdx) => (
                      <span key={tIdx} className="mini-tag">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EXPERIENCE TAB */}
        {activeTab === 'experience' && (
          <div className="tab-pane fade-in">
            <div className="section-header-row">
              <div>
                <h2 className="section-main-heading">Professional & Research Experience</h2>
                <p className="section-main-sub">Industry engineering and academic research lab trajectories.</p>
              </div>
              <a href={personalInfo.links.resume} download="Ayush_Shrivastava_Resume.pdf" className="btn-modern primary">
                <Icons.Download /> Download Latest Resume PDF
              </a>
            </div>

            <div className="timeline-container">
              {experienceData.map((exp, eIdx) => (
                <div key={eIdx} className="timeline-card glass-card">
                  <div className="timeline-card-header">
                    <div>
                      <div className="role-badge-row">
                        <span className={`type-badge ${exp.color || 'cyan'}`}>{exp.type}</span>
                        <span className="timeline-date">{exp.date}</span>
                      </div>
                      <h3 className="timeline-role">{exp.role}</h3>
                      <p className="timeline-company">
                        <strong>{exp.company}</strong> • {exp.location}
                        {exp.advisor && <span className="advisor-note"> (Advisor: {exp.advisor})</span>}
                      </p>
                    </div>
                  </div>

                  {/* Standard Bullets */}
                  {exp.bullets && (
                    <ul className="timeline-bullets">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {/* Sub-projects (e.g. DAIR Group research phases) */}
                  {exp.projects && (
                    <div className="timeline-subprojects">
                      {exp.projects.map((sub, sIdx) => (
                        <div key={sIdx} className="subproject-box">
                          <div className="subproject-header">
                            <span className="subproject-title">🔬 {sub.title}</span>
                            <span className="subproject-date">{sub.date}</span>
                          </div>
                          <ul className="subproject-bullets">
                            {sub.bullets.map((sb, sbIdx) => (
                              <li key={sbIdx}>{sb}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EDUCATION & SKILLS TAB */}
        {activeTab === 'education' && (
          <div className="tab-pane fade-in">
            <div className="section-header-row">
              <div>
                <h2 className="section-main-heading">Education, Skills & Honors</h2>
                <p className="section-main-sub">Academic degrees, technical toolkit, honors, and graduate coursework.</p>
              </div>
            </div>

            {/* Education Cards */}
            <div className="education-grid">
              {educationData.map((edu, idx) => (
                <div key={idx} className="edu-card glass-card">
                  <div className="edu-header">
                    <span className="edu-badge">{edu.badge}</span>
                    <span className="edu-date">{edu.date}</span>
                  </div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  {edu.minor && <p className="edu-minor">{edu.minor}</p>}
                  <p className="edu-institution">{edu.institution} • {edu.location}</p>
                  <ul className="edu-highlights">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills Categorized */}
            <section className="skills-section glass-card section-card">
              <h3 className="section-title">
                <Icons.Code /> Technical Skills & Frameworks
              </h3>
              <div className="skills-categories-grid">
                {skillsData.categories.map((cat, cIdx) => (
                  <div key={cIdx} className="skill-category-card">
                    <h4 className="skill-cat-title">{cat.name}</h4>
                    <div className="skills-pill-group">
                      {cat.skills.map((s, sIdx) => (
                        <span key={sIdx} className="skill-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Honors & Awards */}
            <section className="glass-card section-card">
              <h3 className="section-title">
                <Icons.Trophy /> Honors & Academic Distinctions
              </h3>
              <div className="awards-grid">
                {awardsData.map((award, aIdx) => (
                  <div key={aIdx} className="award-card">
                    <div className="award-header">
                      <span className="award-trophy">🎖️</span>
                      <div>
                        <h4 className="award-name">{award.title}</h4>
                        <span className="award-org">{award.org} • {award.date}</span>
                      </div>
                    </div>
                    <p className="award-desc">{award.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Relevant Coursework */}
            <section className="glass-card section-card">
              <h3 className="section-title">
                <Icons.BookOpen /> Relevant Coursework
              </h3>
              <div className="two-col-grid">
                <div className="coursework-box">
                  <h4 className="coursework-heading">Mathematics & Probability</h4>
                  <ul className="coursework-list">
                    {courseworkData.math.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className="coursework-box">
                  <h4 className="coursework-heading">Computer Science & Machine Learning</h4>
                  <ul className="coursework-list">
                    {courseworkData.cs.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Lightbox Modal for Full-Res Figure & GIF inspection */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setLightboxImg(null)}>✕</button>
            <h4 className="lightbox-title">{lightboxImg.title}</h4>
            <div className="lightbox-img-wrap">
              <img src={lightboxImg.src} alt={lightboxImg.title} />
            </div>
            {lightboxImg.caption && <p className="lightbox-caption">{lightboxImg.caption}</p>}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} Ayush Abhay Shrivastava • Built with React & Vite</p>
          <div className="footer-links">
            <a href={personalInfo.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={personalInfo.links.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
            <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={personalInfo.links.resume} download="Ayush_Shrivastava_Resume.pdf">Download Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
