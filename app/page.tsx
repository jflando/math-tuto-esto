const methodSteps = [
  {
    letter: "E",
    title: "Emphatise",
    text: "We first understand where you’re struggling and what makes the topic difficult for you.",
    className: "method-card method-card--green",
  },
  {
    letter: "S",
    title: "Supplement",
    text: "We add to what you already know and fill in the missing pieces—one clear step at a time.",
    className: "method-card method-card--yellow",
  },
  {
    letter: "T",
    title: "Team Up",
    text: "You won’t solve problems alone. Esto works with you to understand and tackle each challenge together.",
    className: "method-card method-card--blue",
  },
  {
    letter: "O",
    title: "Objective Focus",
    text: "Every lesson works toward a clear academic goal—passing a test, improving your grades, or finally mastering a difficult topic.",
    className: "method-card method-card--pink",
  },
];

const benefits = [
  { symbol: "♡", title: "Zero judgment", text: "Friendly guidance in a space where every question is welcome." },
  { symbol: "1→2", title: "Clear steps", text: "Big, confusing ideas broken into small, doable moves." },
  { symbol: "◎", title: "Made for you", text: "Lessons shaped around your pace, needs, and learning style." },
  { symbol: "✦", title: "Actually engaging", text: "Energy, fun, and memorable ways to make ideas stick." },
  { symbol: "↗", title: "Goal-powered", text: "Focused support for the grade, test, or topic you want to conquer." },
  { symbol: "💡", title: "Understand it", text: "Build real confidence by learning why—not just what to memorize." },
];

const tutorials = [
  { number: "01", topic: "Algebra", title: "Solve it one step at a time", formula: "2x + 5 = 17", className: "video-card--green" },
  { number: "02", topic: "Geometry", title: "See the shape of the solution", formula: "a² + b² = c²", className: "video-card--yellow" },
  { number: "03", topic: "Quick Tips", title: "Shortcuts that still make sense", formula: "π ≈ 3.14159", className: "video-card--pink" },
];

const youtubeUrl = "https://www.youtube.com/@ericksonesto3538";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="MATH-TUTO home">
          <span className="brand-mark">M</span>
          <span>
            <strong>MATH-TUTO</strong>
            <small>with ESTO</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#method">The ESTO Method</a>
          <a href="#tutorials">Tutorials</a>
          <a href="#meet">Meet Esto</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button--small header-cta" href="#contact">Let’s Learn Math!</a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            <a href="#home">Home</a>
            <a href="#method">The ESTO Method</a>
            <a href="#tutorials">Tutorials</a>
            <a href="#meet">Meet Esto</a>
            <a href="#contact">Contact</a>
            <a className="button button--small" href="#contact">Let’s Learn Math!</a>
          </nav>
        </details>
      </header>

      <section className="hero graph-paper" id="home">
        <div className="hero-copy" id="main-content">
          <div className="eyebrow"><span>✦</span> Math support that finally clicks</div>
          <h1>Math doesn’t have to feel <span>impossible.</span></h1>
          <p className="hero-lead">With MATH-TUTO, you’ll learn math through fun, clear, and easy-to-follow tutorials made to help you understand—not just memorize.</p>
          <div className="tagline-note">
            <span aria-hidden="true">↗</span>
            <strong>Be transformed from hating to loving math.</strong>
          </div>
          <div className="button-row">
            <a className="button" href="#tutorials">Start Learning <span aria-hidden="true">→</span></a>
            <a className="button button--outline" href="tel:+639273761364">Contact Esto</a>
          </div>
          <div className="hero-trust" aria-label="MATH-TUTO benefits">
            <span>✓ Clear explanations</span>
            <span>✓ No-pressure learning</span>
            <span>✓ Real goals</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Erickson Esto, founder of MATH-TUTO">
          <div className="portrait-stage">
            <div className="portrait-grid" aria-hidden="true" />
            <div className="math-symbol symbol-plus" aria-hidden="true">+</div>
            <div className="math-symbol symbol-pi" aria-hidden="true">π</div>
            <div className="math-symbol symbol-root" aria-hidden="true">√</div>
            <div className="math-symbol symbol-equals" aria-hidden="true">=</div>
            <div className="speech-bubble">Hi, I’m Esto! <span aria-hidden="true">👋</span></div>
            <img
              className="hero-portrait"
              src="/images/esto-portrait.png"
              alt="Erickson Esto smiling in formal Filipino attire"
              width="768"
              height="1024"
              fetchPriority="high"
            />
            <div className="mini-card mini-card--top" aria-hidden="true"><b>100%</b><span>you’ve got this</span></div>
            <div className="mini-card mini-card--bottom" aria-hidden="true"><b>1 + 1</b><span>we learn together</span></div>
          </div>
        </div>
      </section>

      <div className="energy-strip" aria-label="MATH-TUTO teaching qualities">
        <div>
          <span>FUN</span><i>✦</i><span>EDUTAINING</span><i>✦</i><span>TRANSFORMING</span><i>✦</i><span>SUPPORTIVE</span><i>✦</i><span>GOAL-ORIENTED</span>
        </div>
      </div>

      <section className="section method-section" id="method">
        <div className="section-heading section-heading--center">
          <div className="eyebrow"><span>4 simple ideas</span></div>
          <h2>Meet the <em>ESTO</em> Method</h2>
          <p>No mystery formulas here. Just a thoughtful way to turn “I can’t do this” into “Ohhh, I get it!”</p>
        </div>
        <div className="method-grid">
          {methodSteps.map((step) => (
            <article className={step.className} key={step.letter}>
              <div className="method-letter">{step.letter}</div>
              <div>
                <span className="method-count">0{methodSteps.indexOf(step) + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section why-section" id="why">
        <div className="why-intro">
          <div className="section-heading">
            <div className="eyebrow eyebrow--yellow"><span>Why MATH-TUTO?</span></div>
            <h2>Learning that feels more <em>human.</em></h2>
          </div>
          <div className="reassurance-card">
            <span aria-hidden="true">?</span>
            <p><strong>Stuck on a problem?</strong><br />No worries! We’ll figure it out together.</p>
          </div>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="benefit-icon" aria-hidden="true">{benefit.symbol}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section promo-section" aria-labelledby="promo-title">
        <div className="poster-wrap">
          <div className="poster-tape poster-tape--left" aria-hidden="true" />
          <div className="poster-tape poster-tape--right" aria-hidden="true" />
          <img src="/images/math-tuto-poster.jpg" alt="MATH-TUTO with Esto promotional poster" width="512" height="640" loading="lazy" />
          <div className="poster-contact">
            <small>Current contact number</small>
            <strong>0927 376 1364</strong>
          </div>
        </div>
        <div className="promo-copy">
          <span className="promo-kicker">LESS STRESS • MORE “AHA!”</span>
          <h2>From <span>“Huh?”</span><br />to <em>“Aha!”</em></h2>
          <p>Math gets easier when the explanation meets you where you are. Whether you’re catching up, getting ahead, or preparing for a big test, Esto keeps every lesson clear, focused, and encouraging.</p>
          <div className="formula-note">
            <span>confidence</span><b>+</b><span>clear support</span><b>=</b><strong>progress</strong>
          </div>
          <a className="text-link" href="tel:+639273761364">Call or text 0927 376 1364 <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section tutorials-section graph-paper" id="tutorials">
        <div className="tutorials-header">
          <div className="section-heading">
            <div className="eyebrow"><span>Free video tutorials</span></div>
            <h2>Math help, right when you need it.</h2>
          </div>
          <div className="tutorial-promise">
            <span>Quick</span><span>Comprehensive</span><span>Concise</span><span>Easy to follow</span>
          </div>
        </div>

        <div className="video-grid">
          {tutorials.map((video) => (
            <a className={`video-card ${video.className}`} href={youtubeUrl} target="_blank" rel="noreferrer" key={video.number} aria-label={`${video.title} on the MATH-TUTO YouTube channel`}>
              <div className="video-topline"><span>LESSON {video.number}</span><span>{video.topic}</span></div>
              <div className="video-formula" aria-hidden="true">{video.formula}</div>
              <div className="play-button" aria-hidden="true">▶</div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <span>Watch on YouTube ↗</span>
              </div>
            </a>
          ))}
        </div>
        <div className="centered-action">
          <a className="button button--youtube" href={youtubeUrl} target="_blank" rel="noreferrer">Visit the YouTube Channel <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="section meet-section" id="meet">
        <div className="meet-photo">
          <div className="meet-photo-frame">
            <img src="/images/esto-formal.jpg" alt="Erickson Esto, founder and math tutor at MATH-TUTO" width="768" height="1024" loading="lazy" />
          </div>
          <div className="graduate-badge"><span>BS</span> Mathematics<br />CLSU</div>
          <div className="meet-doodle" aria-hidden="true">x + joy = ∞</div>
        </div>
        <div className="meet-copy">
          <div className="eyebrow"><span>Meet your math ally</span></div>
          <h2>Hey, I’m <em>Esto.</em></h2>
          <blockquote>“I don’t just want students to learn math. I want them to <span>experience</span> it.”</blockquote>
          <p>I’m a Bachelor of Science in Mathematics graduate at Central Luzon State University, who has a passion for not just teaching math, but allowing students to experience math, in a fun and meaningful way.</p>
          <p className="meet-signoff">Let’s make the hard stuff feel possible—together. <span aria-hidden="true">☺</span></p>
          <a className="text-link" href="#contact">Learn with Esto <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="final-cta graph-paper" id="contact">
        <div className="cta-symbol cta-symbol--one" aria-hidden="true">÷</div>
        <div className="cta-symbol cta-symbol--two" aria-hidden="true">π</div>
        <div className="cta-symbol cta-symbol--three" aria-hidden="true">+</div>
        <div className="cta-content">
          <span className="cta-label">YOUR NEXT STEP</span>
          <h2>Ready to make friends with math?</h2>
          <p>Let’s work through the confusing parts, build your confidence, and reach your academic goals together.</p>
          <div className="cta-actions">
            <a className="button button--light" href="https://www.facebook.com/es.to.891386" target="_blank" rel="noreferrer">Message Es To on Facebook <span aria-hidden="true">↗</span></a>
            <a className="button button--yellow" href="tel:+639273761364">Call or Text 0927 376 1364</a>
            <a className="button button--ghost-light" href="https://www.tiktok.com/@ericksonesto20" target="_blank" rel="noreferrer">Quick tips on TikTok <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand brand--footer" href="#home" aria-label="MATH-TUTO home">
            <span className="brand-mark">M</span>
            <span><strong>MATH-TUTO</strong><small>with ESTO</small></span>
          </a>
          <p>Be transformed from hating to loving math.</p>
        </div>
        <div className="footer-links" aria-label="Contact links">
          <a href="https://www.facebook.com/es.to.891386" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="tel:+639273761364">0927 376 1364</a>
          <a href={youtubeUrl} target="_blank" rel="noreferrer">YouTube ↗</a>
          <a href="https://www.tiktok.com/@ericksonesto20" target="_blank" rel="noreferrer">TikTok ↗</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} MATH-TUTO with ESTO. Made for curious minds.</p>
      </footer>
    </main>
  );
}
