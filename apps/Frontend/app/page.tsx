import Image from "next/image";
import  Link  from "next/link";


    export default function Home() {
      return (
        <>
          {/* NAVBAR */}
          <nav className="nav">
            <div className="logo">
              <span className="logo-icon">T</span>
              <span className="logo-text">Tanix</span>
            </div>
            <div className="nav-actions">
              <Link href="/signin" className="sign-in">Sign in</Link>
              <a href="#" className="nav-cta">Start drawing →</a>
            </div>
          </nav>
    
          <main>
            {/* HERO */}
            <section className="hero">
              <div className="hero-left">
                <div className="badge">
                  <span className="badge-dot" />
                  A solo-built Tanix draw
                </div>
                <h1 className="headline">
                  My take on the{" "}
                  <em className="headline-em">whiteboard</em>{" "}
                  you actually want.
                </h1>
                <p className="subtext">
                  Sketchly is a hand-drawn virtual whiteboard I&apos;m building in the open.
                  Infinite space, real-time collab, zero setup — and yes, it&apos;s free forever.
                </p>
                <div className="hero-buttons">
                  <a href="#" className="btn-primary">Start drawing — it&apos;s free</a>
                  <a href="#how" className="btn-secondary">See how it works</a>
                </div>
                <div className="social-proof">
                  <div className="avatars">
                    <span className="av av1" />
                    <span className="av av2" />
                    <span className="av av3" />
                    <span className="av av4" />
                  </div>
                  <span><strong>Built solo</strong>, shipped in public</span>
                </div>
              </div>
    
              <div className="hero-right">
                <div className="free-label">← yes, really free</div>
                <div className="canvas-mockup">
                  <div className="canvas-toolbar">
                    <span className="tr tr-red" />
                    <span className="tr tr-yellow" />
                    <span className="tr tr-green" />
                    <div className="canvas-tools">
                      <span>▭</span><span>○</span><span>◇</span><span>—</span><span>✏</span><span>T</span>
                    </div>
                  </div>
                  <div className="canvas-body">
                    <div className="cursor-mira">
                      <span className="cursor-label" style={{ background: "#4a9be8" }}>Just</span>
                    </div>
                    <svg className="diagram-svg" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="60" width="100" height="54" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
                      <text x="70" y="92" textAnchor="middle" fontSize="16" fontFamily="Georgia, serif">Idea</text>
                      <path d="M120 87 Q175 60 210 80" fill="none" stroke="#e8735a" strokeWidth="2" markerEnd="url(#ar)"/>
                      <ellipse cx="245" cy="84" rx="58" ry="32" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
                      <text x="245" y="90" textAnchor="middle" fontSize="16" fontFamily="Georgia, serif">Sketch</text>
                      <path d="M70 114 Q110 158 175 156" fill="none" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#ad)"/>
                      <path d="M215 108 Q200 148 215 153" fill="none" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#ad)"/>
                      <polygon points="235,128 270,153 235,178 200,153" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
                      <text x="235" y="158" textAnchor="middle" fontSize="13" fontFamily="Georgia, serif">Ship it</text>
                      <defs>
                        <marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                          <path d="M0,0 L0,6 L8,3 z" fill="#e8735a"/>
                        </marker>
                        <marker id="ad" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                          <path d="M0,0 L0,6 L8,3 z" fill="#1a1a1a"/>
                        </marker>
                      </defs>
                    </svg>
                    <div className="sticky-note">
                      <span>infinite space</span>
                      <span>✦</span>
                    </div>
                    <div className="cursor-kai">
                      <span className="cursor-label" style={{ background: "#e8735a" }}>Draw</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            {/* FEATURES */}
            <section className="features">
              <p className="eyebrow">— what&apos;s inside</p>
              <h2 className="section-title">
                Everything you need. <em className="title-muted">Nothing you don&apos;t.</em>
              </h2>
              <div className="features-grid">
                {[
                  { icon: "▤", bg: "#d4e8d4", title: "Infinite space", desc: "Pan, zoom, and never run out of room. Your ideas don't fit in a rectangle." },
                  { icon: "↗", bg: "#f5c4be", title: "Hand-drawn feel", desc: "Shapes that look like you sketched them — without the wobbly handwriting." },
                  { icon: "⚇", bg: "#b8d4e8", title: "Real-time collab", desc: "Share a link. Watch cursors fly. Brainstorm with anyone, anywhere." },
                  { icon: "↓", bg: "#f5e6b8", title: "Export anywhere", desc: "PNG, SVG, JSON. Drop into Notion, Slack, your slides, your README." },
                  { icon: "⊙", bg: "#d4c4e8", title: "Local-first", desc: "Your drawings live in your browser. No account required to start." },
                  { icon: "</>", bg: "#ddd8cc", title: "Open source", desc: "MIT licensed. Self-host it. Fork it. Make it yours." },
                ].map((f) => (
                  <div key={f.title} className="feature-card">
                    <div className="feature-icon" style={{ background: f.bg }}>{f.icon}</div>
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-desc">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>
    
            {/* HOW IT WORKS */}
            <section className="how" id="how">
              <div className="how-header">
                <div>
                  <p className="eyebrow">— how it works</p>
                  <h2 className="section-title">
                    From blank page to <span className="title-highlight">brilliant</span> in minutes.
                  </h2>
                </div>
                <p className="how-aside">seriously — the first sketch is<br />the hardest, then it flows.</p>
              </div>
              <div className="steps">
                {[
                  { num: "01", title: "Open it up", desc: "No signup, no install. Just one click and you're sketching." },
                  { num: "02", title: "Draw, type, drag", desc: "Shapes, arrows, sticky notes, freehand. Combine them however you like." },
                  { num: "03", title: "Share & collaborate", desc: "Send a link. Multiple cursors, live updates, instant feedback." },
                  { num: "04", title: "Export & embed", desc: "Save as PNG/SVG or drop the live board into your docs." },
                ].map((s, i) => (
                  <div key={s.num} className="step">
                    <div className="step-num">{s.num}</div>
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>
    
            {/* WHAT PEOPLE DRAW */}
            <section className="use-cases">
              <p className="eyebrow">— what people draw</p>
              <h2 className="section-title">One board, every kind of thinking.</h2>
              <div className="use-cards">
                {[
                  {
                    label: "System diagrams", tag: "ENGINEERING", bg: "#c8dce8",
                    svg: (
                      <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
                        <rect x="20" y="42" width="58" height="36" rx="3" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
                        <rect x="102" y="42" width="58" height="36" rx="3" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
                        <line x1="78" y1="60" x2="102" y2="60" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#ua)"/>
                        <defs>
                          <marker id="ua" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L6,3 z" fill="#1a1a1a"/>
                          </marker>
                        </defs>
                      </svg>
                    ),
                  },
                  {
                    label: "User flows", tag: "PRODUCT", bg: "#f5c4be",
                    svg: (
                      <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="62,60 42,80 62,100 82,80" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
                        <line x1="82" y1="80" x2="130" y2="80" stroke="#1a1a1a" strokeWidth="2" markerEnd="url(#ub)"/>
                        <defs>
                          <marker id="ub" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L6,3 z" fill="#1a1a1a"/>
                          </marker>
                        </defs>
                      </svg>
                    ),
                  },
                  {
                    label: "Mind maps", tag: "THINKING", bg: "#c8e8c8",
                    svg: (
                      <svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="90" cy="60" r="22" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
                        <line x1="112" y1="58" x2="148" y2="40" stroke="#1a1a1a" strokeWidth="2"/>
                        <line x1="113" y1="65" x2="149" y2="82" stroke="#1a1a1a" strokeWidth="2"/>
                        <line x1="68" y1="52" x2="38" y2="36" stroke="#1a1a1a" strokeWidth="2"/>
                      </svg>
                    ),
                  },
                ].map((c) => (
                  <div key={c.label} className="use-card" style={{ background: c.bg }}>
                    <div className="use-card-inner">{c.svg}</div>
                    <div className="use-card-footer">
                      <span className="use-card-label">{c.label}</span>
                      <span className="use-card-tag">{c.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
              <blockquote className="quote">
                <p>&ldquo;It feels like a real whiteboard, but with <span className="quote-u">undo</span>.<br />I can&apos;t go back.&rdquo;</p>
                <cite>— Sana R., staff designer</cite>
              </blockquote>
            </section>
          </main>
    
          {/* FOOTER */}
          <footer className="footer">
            <div className="footer-left">
              <div className="logo">
                <span className="logo-icon">T</span>
                <span className="logo-text">Tanix</span>
              </div>
              <span className="footer-copy">© 2026 — a solo project, built by Tanishq Kushwah</span>
            </div>
            <nav className="footer-links">
              {["GitHub", "Docs", "Changelog", "Privacy", "Terms"].map((l) => (
                <a key={l} href="#" className="footer-link">{l}</a>
              ))}
            </nav>
          </footer>
        </>
      );
    }


