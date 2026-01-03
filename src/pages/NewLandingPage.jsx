import { useState } from "react";
import { Link } from "react-router-dom";
import "./NewLandingPage.css";
import mockupLeft from "../../assets/images/Wallet mockup 1.png";
import mockupRight from "../../assets/images/Wallet mockup 1-1.png";

const NewLandingPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [showSats, setShowSats] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How I open account?",
      answer: "Just download the app, create your PIN, and you're ready. No KYC, no documents, no wahala. You go get your wallet in less than 2 minutes."
    },
    {
      question: "What is non-custodial?",
      answer: "Non-custodial means YOU control your money. Sabi no fit touch your Bitcoin. Your keys, your coins. We just build the tool, you hold the power."
    },
    {
      question: "Sabi safe?",
      answer: "100% safe. Your private keys stay on YOUR phone. We use social recovery - pick 3 trusted people who fit help you recover if anything happen. Better than seed phrase wey fit lost."
    },
    {
      question: "How I buy Bitcoin?",
      answer: "Inside the app, go to Buy/Sell. Enter how much Naira you wan spend. Pay with your bank. Bitcoin go land your wallet sharp sharp - usually less than 5 minutes."
    },
    {
      question: "What is Nostr?",
      answer: "Nostr na decentralized social network. Think Twitter but nobody fit ban you. With Sabi, you fit send Bitcoin tips (zaps) to people wey post content wey you like. Support your favorite creators directly!"
    }
  ];

  const features = [
    { icon: "⚡", text: "Lightning payments" },
    { icon: "🌐", text: "Nostr feed + zaps" },
    { icon: "🤝", text: "Social recovery over Nostr DMs" },
    { icon: "🔄", text: "P2P trading" },
    { icon: "💵", text: "Cash buy/sell" },
    { icon: "📱", text: "VTU (airtime, data, electricity)" },
    { icon: "🗣️", text: "Multi-language (English, Hausa, Yoruba, Pidgin)" },
    { icon: "🔐", text: "PIN + biometric" },
    { icon: "📖", text: "Open source MIT" }
  ];

  const cities = [
    { name: "Kaduna", description: "Northern headquarters" },
    { name: "Lagos", description: "Economic capital" },
    { name: "Abuja", description: "Federal capital" },
    { name: "Port Harcourt", description: "Garden city" },
    { name: "Enugu", description: "Coal city" },
    { name: "Kano", description: "Ancient city" }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <a href="/" className="logo">
            <span className="logo-text">Sabi</span>
            <span className="logo-btc">₿</span>
          </a>
          <nav className="nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#community" className="nav-link">Community</a>
            <a href="https://github.com/AuwalRG8/Sabi" className="nav-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <Link to="/about" className="nav-link">About</Link>
            <a href="#download" className="nav-button">Download Beta</a>
          </nav>
          <button className="mobile-menu-btn" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main className="main">
        {/* Section 1: Hero */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Beta Available Now
              </div>
              <h1 className="hero-title">
                Your money<br />
                <span className="gradient-text">na your money</span>
              </h1>
              <p className="hero-description">
                Non-custodial Bitcoin + Lightning wallet built in Kaduna, Nigeria.
                Instant zaps. Social recovery. P2P trading. No KYC.
                Beta ready – download now.
              </p>
              <div className="hero-buttons">
                <a href="https://github.com/AuwalRG8/Sabi/releases" className="primary-button" target="_blank" rel="noopener noreferrer">
                  Download Beta Now
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2.5V12.5M10 12.5L14.167 8.333M10 12.5L5.833 8.333M3.333 15.833H16.667" stroke="#0C0C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <button className="secondary-button" disabled>
                  TestFlight Coming Soon
                </button>
              </div>
            </div>
            <div className="hero-mockups">
              <div className="mockup-container">
                <img
                  src={mockupLeft}
                  alt="Sabi Wallet Home - Naira Balance"
                  className="wallet-mockup mockup-left"
                />
                <img
                  src={mockupRight}
                  alt="Sabi Wallet Receive - QR Code"
                  className="wallet-mockup mockup-right"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Sabi Different */}
        <section className="features-section" id="features">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                Why Sabi <span className="gradient-text">different</span>
              </h2>
              <p className="section-subtitle">
                This is the Bitcoin wallet wey make sense for Naija
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4Z" fill="#F7931A"/>
                    <path d="M6 10C6 7.79086 4.20914 6 2 6V8C3.10457 8 4 8.89543 4 10V11C4 12.6569 5.34315 14 7 14H9C8.44772 12.8044 8.09091 11.4607 8.01162 10H6Z" fill="#F7931A"/>
                    <path d="M24.0116 10C23.9323 11.4607 23.5755 12.8044 23.0232 14H25C26.6569 14 28 12.6569 28 11V10C28 8.89543 28.8954 8 30 8V6C27.7909 6 26 7.79086 26 10H24.0116Z" fill="#F7931A"/>
                    <path d="M16 18C11.5817 18 8 21.5817 8 26C8 27.1046 8.89543 28 10 28H22C23.1046 28 24 27.1046 24 26C24 21.5817 20.4183 18 16 18Z" fill="#F7931A"/>
                  </svg>
                </div>
                <h3 className="feature-title">Social Recovery</h3>
                <p className="feature-description">
                  Pick 3 trusted guys. No seed phrase stress.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M28 8H24V6C24 4.89543 23.1046 4 22 4H10C8.89543 4 8 4.89543 8 6V8H4C2.89543 8 2 8.89543 2 10V26C2 27.1046 2.89543 28 4 28H28C29.1046 28 30 27.1046 30 26V10C30 8.89543 29.1046 8 28 8ZM10 6H22V8H10V6ZM16 24C13.2386 24 11 21.7614 11 19C11 16.2386 13.2386 14 16 14C18.7614 14 21 16.2386 21 19C21 21.7614 18.7614 24 16 24Z" fill="#F7931A"/>
                    <circle cx="16" cy="19" r="3" fill="#F7931A"/>
                  </svg>
                </div>
                <h3 className="feature-title">Buy & Sell Easy</h3>
                <p className="feature-description">
                  Bitcoin with Naira. Instant conversion.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="6" y="2" width="20" height="28" rx="3" fill="#F7931A"/>
                    <rect x="8" y="5" width="16" height="18" rx="1" fill="#0C0C1A"/>
                    <rect x="13" y="25" width="6" height="2" rx="1" fill="#0C0C1A"/>
                  </svg>
                </div>
                <h3 className="feature-title">USSD Mode</h3>
                <p className="feature-description">
                  *333*777# on Nokia 3310
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M22 2L10 14H16L10 30L22 18H16L22 2Z" fill="#F7931A"/>
                  </svg>
                </div>
                <h3 className="feature-title">Zaps on Nostr</h3>
                <p className="feature-description">
                  Dash who dey post well
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="6" width="28" height="20" rx="3" fill="#F7931A"/>
                    <rect x="2" y="10" width="28" height="4" fill="#0C0C1A"/>
                    <rect x="6" y="18" width="8" height="4" rx="1" fill="#0C0C1A"/>
                  </svg>
                </div>
                <h3 className="feature-title">VTU & Bills</h3>
                <p className="feature-description">
                  Airtime, data, electricity
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" fill="#F7931A"/>
                    <text x="16" y="21" textAnchor="middle" fill="#0C0C1A" fontSize="12" fontWeight="bold" fontFamily="Arial">₦↔</text>
                  </svg>
                </div>
                <h3 className="feature-title">Naira ↔ Sats</h3>
                <p className="feature-description">
                  Press balance → sats
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Naira Demo */}
        <section className="demo-section">
          <div className="demo-container">
            <div className="demo-content">
              <h2 className="demo-title">
                Naira ↔ Sats. <span className="gradient-text">Press → flip</span>
              </h2>
              <p className="demo-subtitle">
                Long-press your balance to switch between Naira and sats instantly
              </p>
            </div>
            <div className="demo-card-wrapper">
              <div className="demo-card" onClick={() => setShowSats(!showSats)}>
                <div className="demo-card-header">
                  <span className="demo-label">Your Balance</span>
                  <span className="demo-tap-hint">Tap to flip</span>
                </div>
                <div className={`demo-balance ${showSats ? 'flipped' : ''}`}>
                  <div className="balance-front">
                    <span className="balance-currency">₦</span>
                    <span className="balance-amount">124,530.00</span>
                  </div>
                  <div className="balance-back">
                    <span className="balance-amount">42,000</span>
                    <span className="balance-currency">sats</span>
                  </div>
                </div>
                <div className="demo-card-footer">
                  <span className="demo-rate">1 BTC ≈ ₦95,000,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Built for Everywhere */}
        <section className="cities-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                Built for the North, the South,<br />
                <span className="gradient-text">everywhere</span>
              </h2>
              <p className="section-subtitle">
                Hausa, Yoruba, Igbo, Pidgin from day 1
              </p>
            </div>
            <div className="cities-card-container">
              <div className="cities-decorative cities-decorative-1"></div>
              <div className="cities-decorative cities-decorative-2"></div>
              <div className="cities-grid">
                {cities.map((city, index) => (
                  <div className="city-card" key={index}>
                    <div className="city-dot"></div>
                    <h3 className="city-name">{city.name}</h3>
                    <p className="city-description">{city.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: All Features */}
        <section className="all-features-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                Everything you need,<br />
                <span className="gradient-text">nothing you don&apos;t</span>
              </h2>
            </div>
            <div className="features-list">
              {features.map((feature, index) => (
                <div className="feature-list-item" key={index}>
                  <div className="feature-check">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M16.6666 5L7.49998 14.1667L3.33331 10" stroke="#00FFB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="feature-list-text">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Beta Download */}
        <section className="download-section" id="download">
          <div className="download-container">
            <div className="download-content">
              <h2 className="download-title">
                Beta ready.<br />
                <span className="gradient-text">Download now.</span>
              </h2>
              <p className="download-subtitle">
                Be among the first to test the future of Bitcoin in Nigeria
              </p>
              <div className="download-buttons">
                <a href="https://github.com/AuwalRG8/Sabi/releases" className="download-button-primary" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L12 15M12 15L17 10M12 15L7 10" stroke="#0C0C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 17V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V17" stroke="#0C0C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Download APK
                </a>
                <div className="download-button-secondary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#555566"/>
                    <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z" fill="#555566"/>
                  </svg>
                  TestFlight coming soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="faq-section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                Questions? <span className="gradient-text">We get answers</span>
              </h2>
            </div>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div
                  className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                  key={index}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question">
                    <span>{faq.question}</span>
                    <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Community */}
        <section className="community-section" id="community">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">
                Join the <span className="gradient-text">community</span>
              </h2>
              <p className="section-subtitle">
                Built in the open. 100% open source.
              </p>
            </div>
            <div className="community-links">
              <a href="https://github.com/AuwalRG8/Sabi" className="community-card" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z" fill="white"/>
                </svg>
                <div className="community-card-content">
                  <h3>GitHub</h3>
                  <p>Star us, fork us, contribute</p>
                </div>
              </a>
              <a href="https://x.com/SabiWallet" className="community-card" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                </svg>
                <div className="community-card-content">
                  <h3>Twitter/X</h3>
                  <p>Follow for updates</p>
                </div>
              </a>
              <a href="https://discord.gg/3gAArGWt" className="community-card" target="_blank" rel="noopener noreferrer">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="white"/>
                </svg>
                <div className="community-card-content">
                  <h3>Discord</h3>
                  <p>Chat with the team</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="footer-logo">
                <span className="logo-text">Sabi</span>
                <span className="logo-btc">₿</span>
              </a>
              <p className="footer-description">
                Non-custodial Bitcoin + Lightning wallet built for Nigeria.
              </p>
              <div className="footer-socials">
                <a href="https://x.com/SabiWallet" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://github.com/AuwalRG8/Sabi" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://discord.gg/3gAArGWt" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-links-group">
              <div className="footer-section">
                <h4 className="footer-section-title">Community</h4>
                <ul className="footer-links">
                  <li><a href="https://github.com/AuwalRG8/Sabi" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  <li><a href="https://x.com/SabiWallet" className="footer-link" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  <li><a href="https://discord.gg/3gAArGWt" className="footer-link" target="_blank" rel="noopener noreferrer">Discord</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="footer-section-title">Company</h4>
                <ul className="footer-links">
                  <li><Link to="/about" className="footer-link">About</Link></li>
                  <li><Link to="/contact" className="footer-link">Contact</Link></li>
                  <li><a href="#" className="footer-link">Blog</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4 className="footer-section-title">Legal</h4>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Privacy</a></li>
                  <li><a href="#" className="footer-link">Terms</a></li>
                  <li><a href="https://github.com/AuwalRG8/Sabi/blob/main/LICENSE" className="footer-link" target="_blank" rel="noopener noreferrer">License (MIT)</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Sabi Wallet. Made in Kaduna ❤️ for Nigeria 🇳🇬
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewLandingPage;
