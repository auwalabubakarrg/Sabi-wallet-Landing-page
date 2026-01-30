import { Link } from "react-router-dom";
import "./TermsPage.css";

const TermsPage = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero-section">
        <div className="terms-hero-container">
          <span className="terms-badge">Legal</span>
          <h1 className="terms-hero-title">
            Terms and <span className="gradient-text">Conditions</span>
          </h1>
          <p className="terms-hero-subtitle">
            Last updated: January 1, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="terms-content-section">
        <div className="terms-container">
          <div className="terms-intro">
            <p>
              Sabi Wallet (&ldquo;Sabi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a non-custodial mobile wallet application for storing, sending, and receiving Bitcoin, Lightning Network payments, and Nostr interactions. By downloading or using Sabi Wallet (&ldquo;the App&rdquo;), you agree to these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not agree, do not use the App.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">1. Non-Custodial Nature</h2>
            <p>
              Sabi Wallet is non-custodial. We do not hold, control, or have access to your private keys, funds, or data. You are solely responsible for securing your wallet, mnemonic phrase, and PIN. Lost access means lost funds – no recovery from us.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use the App. By using Sabi, you represent that you are legally allowed to use cryptocurrency in your jurisdiction (Nigeria or elsewhere). Sabi is not available in sanctioned countries.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">3. App Features</h2>
            <ul className="terms-list">
              <li><strong>Bitcoin/Lightning:</strong> Send/receive via QR or Lightning addresses.</li>
              <li><strong>P2P Trading:</strong> Peer-to-peer BTC/USDT trades with escrow – we facilitate but don&apos;t guarantee trades.</li>
              <li><strong>Nostr Integration:</strong> Social feed, zaps (Lightning tips), npub profiles.</li>
              <li><strong>Social Recovery:</strong> Optional Shamir shares via Nostr DMs – you choose contacts.</li>
              <li><strong>VTU/Bills:</strong> Airtime, data, utility payments via integrated providers.</li>
              <li><strong>USSD Mode:</strong> Feature phone support (*333*777#) for basic functions.</li>
              <li><strong>Multi-Language:</strong> English, Hausa, Yoruba, Pidgin.</li>
            </ul>
            <p className="terms-note">
              We do not charge fees for core features. Third-party providers (e.g., Lightning LSPs, VTU services) may charge.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">4. Risks & Disclaimers</h2>
            <ul className="terms-list terms-list-warning">
              <li><strong>Volatility:</strong> Cryptocurrency prices fluctuate – use at your own risk.</li>
              <li><strong>Irreversible Transactions:</strong> Lightning payments are final – no refunds.</li>
              <li><strong>No Insurance:</strong> Unlike banks, no FDIC/NDIC – your funds are your responsibility.</li>
              <li><strong>Security:</strong> Use strong PIN/biometric. We are not liable for hacks or losses.</li>
              <li><strong>Not Advice:</strong> Sabi is not financial advice. Consult professionals.</li>
              <li><strong>Early Release:</strong> As an MVP, some features may have limitations – always test with small amounts first.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">5. Privacy</h2>
            <p>
              See our <Link to="/privacy" className="terms-link">Privacy Policy</Link> for details on how we handle your information.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">6. Intellectual Property</h2>
            <p>
              Sabi Wallet is open-source under MIT License. You grant us permission to use feedback.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Sabi is provided &ldquo;as is&rdquo; without warranties. We are not liable for any losses.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">8. Governing Law</h2>
            <p>
              These Terms are governed by Nigerian law.
            </p>
          </div>

          <div className="terms-section">
            <h2 className="terms-section-title">9. Changes</h2>
            <p>
              We may update Terms – continued use means acceptance.
            </p>
          </div>

          <div className="terms-contact">
            <h3>Contact Us</h3>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:hello@sabiwallet.online" className="terms-link">
                hello@sabiwallet.online
              </a>
            </p>
          </div>

          <div className="terms-navigation">
            <Link to="/" className="terms-back-button">
              ← Back to Home
            </Link>
            <Link to="/privacy" className="terms-next-button">
              Privacy Policy →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="terms-footer">
        <p>© 2025 Sabi Wallet. Made in Kaduna ❤️ for Nigeria 🇳🇬</p>
      </footer>
    </div>
  );
};

export default TermsPage;
