import "./AboutPage.css"

const features = [
  {
    icon: "₦",
    title: "Naira-First Experience",
    description:
      "See your balance in ₦ first. Long-press to reveal sats. Same familiar UX millions of Nigerians already trust.",
  },
  {
    icon: "⚡",
    title: "Instant Lightning & Nostr Zaps",
    description:
      "Send sats like WhatsApp messages. Dash tips on Nostr. All powered by Breez SDK Nodeless on Spark – no channels, no liquidity hassle.",
  },
  {
    icon: "👥",
    title: "Social Recovery – No Seed Phrase",
    description:
      "Pick 3 trusted guys to help recover your wallet. No more 12-word paper. Built for real Nigerians who lose phones every day.",
  },
]

const highlightLines = [
  "We started in Kaduna because we believe the North should lead Bitcoin adoption in Africa.",
  "Hausa, Pidgin, Yoruba, Igbo – from day one.",
  "USSD mode for mama on Nokia 3310.",
  "100% open source (MIT license).",
  "Built by Bitcoiners, for the next 200 million Africans.",
]

const AboutPage = () => (
  <section className="about">
    <div className="about-container">
      <h2>About Sabi Wallet</h2>
      <p className="about-subtitle">
        Sabi Wallet is the first non-custodial Bitcoin + Lightning + Nostr wallet built in Kaduna,
        Nigeria — designed to feel exactly like Moniepoint but with real self-sovereignty.
      </p>

      <div className="about-grid">
        {features.map((feature) => (
          <article key={feature.title} className="about-card">
            <div className="about-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>

      <div className="about-highlight">
        <h3>Made in Kaduna, for Nigeria &amp; Africa</h3>
        <p className="highlight-description">
          {highlightLines.map((line, index) => (
            <span key={line}>
              {line}
              {index < highlightLines.length - 1 && <br />}
            </span>
          ))}
        </p>
        <a
          href="https://github.com/sabiwallet"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          View on GitHub →
        </a>
      </div>

      <div className="about-cta">
        <p className="cta-title">Beta Available Now</p>
        <p className="cta-subtitle">
          Be among the first Nigerians to test the future of Bitcoin. Download the beta now.
        </p>
        <a href="https://github.com/AuwalRG8/Sabi/releases" className="cta-button" target="_blank" rel="noopener noreferrer">
          Download Beta
        </a>
      </div>
    </div>
  </section>
)

export default AboutPage
