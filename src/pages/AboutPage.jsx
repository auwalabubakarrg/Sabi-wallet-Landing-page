import "./AboutPage.css"

const coreValues = [
  {
    icon: "🔐",
    title: "Self-Sovereignty",
    description: "Your keys, your Bitcoin. No custodian can freeze, seize, or control your funds. True financial freedom for every Nigerian."
  },
  {
    icon: "🇳🇬",
    title: "Made for Nigeria",
    description: "Built in Kaduna, designed for Lagos, Kano, Port Harcourt, and beyond. Hausa, Yoruba, Igbo, Pidgin from day one."
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Powered by Breez SDK on Spark. Send sats instantly like WhatsApp messages. No channels, no liquidity hassle."
  },
  {
    icon: "👥",
    title: "Social Recovery",
    description: "No seed phrase anxiety. Pick 3 trusted contacts to help recover your wallet. Built for real life."
  }
]

const stats = [
  { number: "₦0", label: "Minimum Deposit" },
  { number: "24/7", label: "Available" },
  { number: "100%", label: "Open Source" },
  { number: "0%", label: "Custody" }
]

const teamValues = [
  "We believe the North should lead Bitcoin adoption in Africa",
  "We build for the 200 million Africans who deserve financial freedom",
  "We ship fast, iterate faster, and listen to our community",
  "We are Bitcoiners building for Bitcoiners (and future ones)"
]

const roadmapItems = [
  { phase: "Phase 1", title: "Foundation", status: "completed", items: ["Lightning wallet core", "Naira ↔ Sats display", "Basic send/receive", "Beta release on Android"] },
  { phase: "Phase 2", title: "Growth", status: "current", items: ["Social recovery system", "P2P BTC/USDT trading", "USSD mode for feature phones", "Multi-language support"] },
  { phase: "Phase 3", title: "Scale", status: "upcoming", items: ["iOS release", "Nostr integration & zaps", "Merchant tools", "Pan-African expansion"] }
]

const AboutPage = () => (
  <div className="about-page">
    {/* Hero Section */}
    <section className="about-hero-section">
      <div className="about-hero-container">
        <span className="about-badge">About Sabi Wallet</span>
        <h1 className="about-hero-title">
          Bitcoin for <span className="gradient-text">Every Nigerian</span>
        </h1>
        <p className="about-hero-subtitle">
          We&apos;re building Nigeria&apos;s first non-custodial Bitcoin + Lightning wallet designed
          for everyday Nigerians — simple, familiar, and giving you true self-sovereignty over your money.
        </p>
      </div>
    </section>

    {/* Mission Section */}
    <section className="about-mission-section">
      <div className="about-section-container">
        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To give every Nigerian — from the streets of Kaduna to the markets of Lagos —
              access to sound money and true financial sovereignty through Bitcoin, without
              the complexity that scares people away.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">🌍</div>
            <h3>Our Vision</h3>
            <p>
              A Nigeria where 50 million people hold their own keys, send money instantly
              across borders, and are protected from inflation — all from a wallet that
              feels like the apps they already love.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values Section */}
    <section className="about-values-section">
      <div className="about-section-container">
        <div className="section-header">
          <h2 className="section-title">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
          <p className="section-subtitle">
            We&apos;re not just another crypto wallet. We&apos;re building the financial infrastructure Nigeria deserves.
          </p>
        </div>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="about-stats-section">
      <div className="about-section-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Story Section */}
    <section className="about-story-section">
      <div className="about-section-container">
        <div className="story-content">
          <div className="section-header">
            <h2 className="section-title">
              Made in <span className="gradient-text">Kaduna</span>
            </h2>
          </div>
          <div className="story-text">
            <p>
              Sabi Wallet was born in Kaduna, Northern Nigeria — not in Lagos, not in Silicon Valley.
              We believe the North should lead Bitcoin adoption in Africa, and we&apos;re proving it.
            </p>
            <p>
              Our name &quot;Sabi&quot; comes from Nigerian Pidgin, meaning &quot;to know&quot; or &quot;to understand.&quot;
              We want every Nigerian to <strong>sabi</strong> Bitcoin — to truly understand and own their money.
            </p>
            <p>
              We&apos;re building for the mama selling tomatoes in Kano market who needs to receive
              payment from her son in London. For the young developer in Enugu who wants to earn
              in sats. For every Nigerian tired of naira devaluation and bank wahala.
            </p>
          </div>
          <div className="team-values">
            <h4>Our Beliefs</h4>
            <ul className="beliefs-list">
              {teamValues.map((value, index) => (
                <li key={index}>
                  <span className="check-mark">✓</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Roadmap Section */}
    <section className="about-roadmap-section">
      <div className="about-section-container">
        <div className="section-header">
          <h2 className="section-title">
            Our <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="section-subtitle">
            Building step by step towards Bitcoin adoption across Nigeria and Africa.
          </p>
        </div>
        <div className="roadmap-grid">
          {roadmapItems.map((item, index) => (
            <div className={`roadmap-card ${item.status}`} key={index}>
              <div className="roadmap-header">
                <span className="roadmap-phase">{item.phase}</span>
                <span className={`roadmap-status ${item.status}`}>
                  {item.status === 'completed' ? '✓ Complete' : item.status === 'current' ? '● In Progress' : '○ Upcoming'}
                </span>
              </div>
              <h3 className="roadmap-title">{item.title}</h3>
              <ul className="roadmap-items">
                {item.items.map((listItem, idx) => (
                  <li key={idx}>{listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Source Section */}
    <section className="about-opensource-section">
      <div className="about-section-container">
        <div className="opensource-card">
          <div className="opensource-content">
            <h2>100% Open Source</h2>
            <p>
              Sabi Wallet is fully open source under the MIT license. We believe in transparency,
              community contribution, and building in public. Verify don&apos;t trust.
            </p>
            <div className="opensource-buttons">
              <a
                href="https://github.com/AuwalRG8/Sabi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
                </svg>
                View on GitHub
              </a>
              <a
                href="https://github.com/AuwalRG8/Sabi/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Beta
              </a>
            </div>
          </div>
          <div className="opensource-glow"></div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="about-cta-section">
      <div className="about-section-container">
        <div className="cta-content">
          <h2>Ready to <span className="gradient-text">sabi</span> Bitcoin?</h2>
          <p>Join thousands of Nigerians taking control of their financial future.</p>
          <a
            href="https://github.com/AuwalRG8/Sabi/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Download Beta Now
          </a>
        </div>
      </div>
    </section>
  </div>
)

export default AboutPage
