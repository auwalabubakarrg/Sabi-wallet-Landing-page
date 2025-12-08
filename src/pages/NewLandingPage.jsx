import "./NewLandingPage.css";

const NewLandingPage = () => {
  return (
    <div className="new-landing-page">
      <header className="header">
        <div className="header-container">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/19eff8f9a80001db59cea2031b07f19b60b8f9e4?width=220"
            alt="Sabi Logo"
            className="logo"
          />
          <nav className="nav">
            <a href="#community" className="nav-link">
              Community
            </a>
            <a href="#opensource" className="nav-link">
              Open Source
            </a>
            <button className="nav-button">Join Waitlist</button>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">MVP Dropping April 2026</div>
              <h1 className="hero-title">
                Your
                <br />
                money{" "}
                <span className="gradient-text">
                  na
                  <br />
                  your
                  <br />
                  money
                </span>
              </h1>
              <p className="hero-description">
                The first Bitcoin wallet that feels exactly like Moniepoint -
                but 100% non-custodial. Built for Nigeria, by Nigerians.
              </p>
              <div className="hero-buttons">
                <button className="primary-button">
                  Join the Waitlist
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4195 9.79448C15.859 9.35503 15.859 8.64136 15.4195 8.2019L9.79453 2.5769C9.35508 2.13745 8.64141 2.13745 8.20195 2.5769C7.7625 3.01636 7.7625 3.73003 8.20195 4.16948L11.9109 7.87495H1.125C0.502734 7.87495 0 8.37769 0 8.99995C0 9.62222 0.502734 10.125 1.125 10.125H11.9074L8.20547 13.8304C7.76602 14.2699 7.76602 14.9835 8.20547 15.423C8.64492 15.8625 9.35859 15.8625 9.79805 15.423L15.423 9.798L15.4195 9.79448Z"
                      fill="#0C0C1A"
                    />
                  </svg>
                </button>
                <button className="secondary-button">See How it Works</button>
              </div>
            </div>
            <div className="hero-mockups">
              <div className="mockup-container">
                <img
                  src="/assets/images/Wallet mockup 1.png"
                  alt="Sabi Wallet Dashboard"
                  className="wallet-mockup mockup-left"
                />
                <img
                  src="/assets/images/Wallet mockup 1-1.png"
                  alt="Sabi Wallet Buy Bitcoin"
                  className="wallet-mockup mockup-right"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-container">
            <div className="features-header">
              <h2 className="features-title">
                Why Sabi <span className="gradient-text">different</span>
              </h2>
              <p className="features-subtitle">
                This is the Bitcoin wallet that make sense for Naija
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon social-recovery">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                    <path
                      d="M6.75 0C7.74456 0 8.69839 0.395088 9.40165 1.09835C10.1049 1.80161 10.5 2.75544 10.5 3.75C10.5 4.74456 10.1049 5.69839 9.40165 6.40165C8.69839 7.10491 7.74456 7.5 6.75 7.5C5.75544 7.5 4.80161 7.10491 4.09835 6.40165C3.39509 5.69839 3 4.74456 3 3.75C3 2.75544 3.39509 1.80161 4.09835 1.09835C4.80161 0.395088 5.75544 0 6.75 0ZM24 0C24.9946 0 25.9484 0.395088 26.6516 1.09835C27.3549 1.80161 27.75 2.75544 27.75 3.75C27.75 4.74456 27.3549 5.69839 26.6516 6.40165C25.9484 7.10491 24.9946 7.5 24 7.5C23.0054 7.5 22.0516 7.10491 21.3484 6.40165C20.6451 5.69839 20.25 4.74456 20.25 3.75C20.25 2.75544 20.6451 1.80161 21.3484 1.09835C22.0516 0.395088 23.0054 0 24 0ZM0 14.0016C0 11.2406 2.24062 9 5.00156 9H7.00312C7.74844 9 8.45625 9.16406 9.09375 9.45469C9.03281 9.79219 9.00469 10.1438 9.00469 10.5C9.00469 12.2906 9.79219 13.8984 11.0344 15C11.025 15 11.0156 15 11.0016 15H0.998437C0.45 15 0 14.55 0 14.0016ZM18.9984 15C18.9891 15 18.9797 15 18.9656 15C20.2125 13.8984 20.9953 12.2906 20.9953 10.5C20.9953 10.1438 20.9625 9.79688 20.9062 9.45469C21.5438 9.15938 22.2516 9 22.9969 9H24.9984C27.7594 9 30 11.2406 30 14.0016C30 14.5547 29.55 15 29.0016 15H18.9984ZM10.5 10.5C10.5 9.30653 10.9741 8.16193 11.818 7.31802C12.6619 6.47411 13.8065 6 15 6C16.1935 6 17.3381 6.47411 18.182 7.31802C19.0259 8.16193 19.5 9.30653 19.5 10.5C19.5 11.6935 19.0259 12.8381 18.182 13.682C17.3381 14.5259 16.1935 15 15 15C13.8065 15 12.6619 14.5259 11.818 13.682C10.9741 12.8381 10.5 11.6935 10.5 10.5ZM6 22.7484C6 19.2984 8.79844 16.5 12.2484 16.5H17.7516C21.2016 16.5 24 19.2984 24 22.7484C24 23.4375 23.4422 24 22.7484 24H7.25156C6.5625 24 6 23.4422 6 22.7484Z"
                      fill="#F7931A"
                    />
                  </svg>
                </div>
                <h3 className="feature-title">Social Recovery</h3>
                <p className="feature-description">
                  Pick 3 of your guys. No seed phrase wahala again. Them go help
                  you recover your wallet if anything happen.
                </p>
                <div className="feature-badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="#00FFB2"
                    />
                  </svg>
                  <span>No seed phrase stress</span>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon buy-sell">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                    <path
                      d="M25.0781 1.92193C24.6375 1.4813 24.6375 0.768801 25.0781 0.332864C25.5187 -0.103074 26.2313 -0.107761 26.6672 0.332864L29.6672 3.33286C29.8781 3.5438 29.9953 3.82974 29.9953 4.12974C29.9953 4.42974 29.8781 4.71568 29.6672 4.92661L26.6672 7.92661C26.2266 8.36724 25.5141 8.36724 25.0781 7.92661C24.6422 7.48599 24.6375 6.77349 25.0781 6.33755L26.1562 5.25943L18 5.25005C17.3766 5.25005 16.875 4.74849 16.875 4.12505C16.875 3.50161 17.3766 3.00005 18 3.00005H26.1609L25.0781 1.92193ZM4.92188 17.6719L3.84375 18.75H12C12.6234 18.75 13.125 19.2516 13.125 19.875C13.125 20.4985 12.6234 21 12 21H3.83906L4.91719 22.0782C5.35781 22.5188 5.35781 23.2313 4.91719 23.6672C4.47656 24.1032 3.76406 24.1079 3.32812 23.6672L0.328125 20.6719C0.117188 20.461 0 20.1751 0 19.875C0 19.5751 0.117188 19.2891 0.328125 19.0782L3.32812 16.0782C3.76875 15.6376 4.48125 15.6376 4.91719 16.0782C5.35313 16.5188 5.35781 17.2313 4.91719 17.6672L4.92188 17.6719ZM4.5 3.00005H15.8391C15.6656 3.33755 15.5625 3.71724 15.5625 4.12505C15.5625 5.47036 16.6547 6.56255 18 6.56255H23.5031C23.3156 7.35943 23.5312 8.22661 24.15 8.85005C25.1016 9.80161 26.6438 9.80161 27.5953 8.85005L28.5 7.94536V18C28.5 19.6547 27.1547 21 25.5 21H14.1609C14.3344 20.6625 14.4375 20.2829 14.4375 19.875C14.4375 18.5297 13.3453 17.4375 12 17.4375H6.49688C6.68438 16.6407 6.46875 15.7735 5.85 15.1501C4.89844 14.1985 3.35625 14.1985 2.40469 15.1501L1.5 16.0547V6.00005C1.5 4.34536 2.84531 3.00005 4.5 3.00005ZM7.5 6.00005H4.5V9.00005C6.15469 9.00005 7.5 7.65474 7.5 6.00005ZM25.5 15.0001C23.8453 15.0001 22.5 16.3454 22.5 18H25.5V15.0001ZM15 16.5C16.1935 16.5 17.3381 16.0259 18.182 15.182C19.0259 14.3381 19.5 13.1935 19.5 12.0001C19.5 10.8066 19.0259 9.66198 18.182 8.81807C17.3381 7.97416 16.1935 7.50005 15 7.50005C13.8065 7.50005 12.6619 7.97416 11.818 8.81807C10.9741 9.66198 10.5 10.8066 10.5 12.0001C10.5 13.1935 10.9741 14.3381 11.818 15.182C12.6619 16.0259 13.8065 16.5 15 16.5Z"
                      fill="#F7931A"
                    />
                  </svg>
                </div>
                <h3 className="feature-title">Buy & Sell Easy</h3>
                <p className="feature-description">
                  Buy Bitcoin with Naira. Sell am back to Naira. All inside the
                  same app. E no hard at all.
                </p>
                <div className="feature-badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="#00FFB2"
                    />
                  </svg>
                  <span>Instant conversion</span>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon ussd-mode">
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                    <path
                      d="M0.75 3C0.75 1.34531 2.09531 0 3.75 0H14.25C15.9047 0 17.25 1.34531 17.25 3V21C17.25 22.6547 15.9047 24 14.25 24H3.75C2.09531 24 0.75 22.6547 0.75 21V3ZM6.75 21C6.75 21.4125 7.0875 21.75 7.5 21.75H10.5C10.9125 21.75 11.25 21.4125 11.25 21C11.25 20.5875 10.9125 20.25 10.5 20.25H7.5C7.0875 20.25 6.75 20.5875 6.75 21ZM14.25 3H3.75V18H14.25V3Z"
                      fill="#F7931A"
                    />
                  </svg>
                </div>
                <h3 className="feature-title">USSD Mode</h3>
                <p className="feature-description">
                  E dey work on Nokia 3310. Dial *347*224# and check your
                  balance. Send Bitcoin sef without internet.
                </p>
                <div className="feature-badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="#00FFB2"
                    />
                  </svg>
                  <span>Works offline</span>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon zaps">
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none">
                    <path
                      d="M16.3781 2.09105C16.6547 1.44886 16.4484 0.698862 15.8812 0.286362C15.3141 -0.126138 14.5406 -0.0886384 14.0109 0.370737L2.01093 10.8707C1.54218 11.2832 1.37343 11.9442 1.59374 12.5254C1.81405 13.1067 2.37655 13.5004 2.99999 13.5004H8.22655L4.62186 21.9098C4.3453 22.552 4.55155 23.302 5.11874 23.7145C5.68593 24.127 6.45937 24.0895 6.98905 23.6301L18.9891 13.1301C19.4578 12.7176 19.6266 12.0567 19.4062 11.4754C19.1859 10.8942 18.6281 10.5051 18 10.5051H12.7734L16.3781 2.09105Z"
                      fill="#F7931A"
                    />
                  </svg>
                </div>
                <h3 className="feature-title">Zaps on Nostr</h3>
                <p className="feature-description">
                  Dash sats like WhatsApp message. Support your favorite
                  creator. Send tips in seconds.
                </p>
                <div className="feature-badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                      fill="#00FFB2"
                    />
                  </svg>
                  <span>Lightning fast</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="balance-section">
          <div className="balance-container">
            <div className="balance-blur"></div>
            <div className="balance-header">
              <h2 className="balance-title">
                Naira first.{" "}
                <span className="gradient-text">Long-press → sats</span>
              </h2>
              <p className="balance-subtitle">
                Click the balance to flip between Naira and Bitcoin
              </p>
            </div>
            <div className="balance-card">
              <div className="balance-content">
                <p className="balance-label">Your Total Balance</p>
                <div className="balance-display">
                  <h3 className="balance-main">₦124,530.00</h3>
                </div>
                <p className="balance-change">
                  +12.4% this month • ₦13,780 gain
                </p>
              </div>
              <div className="balance-stats">
                <div className="stat-item">
                  <p className="stat-label">Bitcoin Holdings</p>
                  <p className="stat-value">0.0042 BTC</p>
                  <p className="stat-subvalue">₦89,240</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Naira Cash</p>
                  <p className="stat-value">₦35,290</p>
                  <p className="stat-subvalue available">Available</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">This Week</p>
                  <p className="stat-value positive">+8.2%</p>
                  <p className="stat-subvalue">₦9,450</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cities-section">
          <div className="cities-container">
            <div className="cities-header">
              <h2 className="cities-title">
                Built for the North, the South,
                <br />
                <span className="gradient-text">everywhere</span>
              </h2>
              <p className="cities-subtitle">
                Hausa, Yoruba, Igbo, Pidgin from day 1. Kaduna beta first.
              </p>
            </div>
            <div className="cities-card">
              <svg
                className="cities-pattern"
                width="1230"
                height="340"
                viewBox="0 0 1230 340"
                fill="none"
              >
                <g opacity="0.1">
                  <path
                    opacity="0.3"
                    d="M615 28.3333L664.083 56.6667L634.633 85L595.367 102L556.1 90.6667L536.467 68L615 28.3333Z"
                    fill="#F7931A"
                  />
                  <path
                    opacity="0.3"
                    d="M418.667 113.333L467.75 141.667L438.3 170L399.033 158.667L418.667 113.333Z"
                    fill="#F7931A"
                  />
                  <path
                    opacity="0.3"
                    d="M811.333 170L860.417 198.333L830.967 226.667L811.333 170Z"
                    fill="#F7931A"
                  />
                </g>
              </svg>
              <div className="cities-grid">
                <div className="city-item">
                  <div className="city-dot"></div>
                  <h3 className="city-name">Kaduna</h3>
                  <p className="city-description">Northern headquarters</p>
                </div>
                <div className="city-item">
                  <div className="city-dot"></div>
                  <h3 className="city-name">Lagos</h3>
                  <p className="city-description">Economic capital</p>
                </div>
                <div className="city-item">
                  <div className="city-dot"></div>
                  <h3 className="city-name">Abuja</h3>
                  <p className="city-description">Federal capital</p>
                </div>
                <div className="city-item">
                  <div className="city-dot"></div>
                  <h3 className="city-name">Kano</h3>
                  <p className="city-description">Ancient city</p>
                </div>
                <div className="city-item">
                  <div className="city-dot"></div>
                  <h3 className="city-name">Port Harcourt</h3>
                  <p className="city-description">Garden city</p>
                </div>
                <div className="city-item">
                  <div className="city-dot"></div>
                  <h3 className="city-name">Enugu</h3>
                  <p className="city-description">Coal city</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="opensource-section" id="opensource">
          <div className="opensource-container">
            <div className="opensource-content">
              <div className="opensource-badge">100% Open Source</div>
              <h2 className="opensource-title">
                Built in the open.
                <br />
                Contribute on
                <br />
                GitHub
              </h2>
              <p className="opensource-description">
                We no dey hide anything. Full source code dey GitHub. You fit
                contribute, review, and make am better.
              </p>
              <div className="opensource-features">
                <div className="os-feature">
                  <div className="os-feature-icon">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path
                        d="M12.275 0.0391914C11.7437 -0.113934 11.1906 0.195441 11.0375 0.726691L7.03745 14.7267C6.88433 15.2579 7.1937 15.8111 7.72495 15.9642C8.2562 16.1173 8.80933 15.8079 8.96245 15.2767L12.9625 1.27669C13.1156 0.745441 12.8062 0.192316 12.275 0.0391914ZM14.7937 3.79232C14.4031 4.18294 14.4031 4.81732 14.7937 5.20794L17.5843 8.00169L14.7906 10.7954C14.4 11.1861 14.4 11.8204 14.7906 12.2111C15.1812 12.6017 15.8156 12.6017 16.2062 12.2111L19.7062 8.71107C20.0968 8.32044 20.0968 7.68607 19.7062 7.29544L16.2062 3.79544C15.8156 3.40482 15.1812 3.40482 14.7906 3.79544L14.7937 3.79232ZM5.20933 3.79232C4.8187 3.40169 4.18433 3.40169 3.7937 3.79232L0.293701 7.29232C-0.0969238 7.68294 -0.0969238 8.31732 0.293701 8.70794L3.7937 12.2079C4.18433 12.5986 4.8187 12.5986 5.20933 12.2079C5.59995 11.8173 5.59995 11.1829 5.20933 10.7923L2.41558 8.00169L5.20933 5.20794C5.59995 4.81732 5.59995 4.18294 5.20933 3.79232Z"
                        fill="#00FFB2"
                      />
                    </svg>
                  </div>
                  <div className="os-feature-content">
                    <h4 className="os-feature-title">
                      Flutter + Breez SDK Nodeless
                    </h4>
                    <p className="os-feature-description">
                      Modern tech stack wey make sense
                    </p>
                  </div>
                </div>
                <div className="os-feature">
                  <div className="os-feature-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0ZM8.00001 2.0875V13.9C12.3125 11.8125 13.4719 7.19062 13.5 4.41875L8.00001 2.0875Z"
                        fill="#00FFB2"
                      />
                    </svg>
                  </div>
                  <div className="os-feature-content">
                    <h4 className="os-feature-title">
                      Lightning Development Kit
                    </h4>
                    <p className="os-feature-description">
                      Battle-tested Bitcoin infrastructure
                    </p>
                  </div>
                </div>
                <div className="os-feature">
                  <div className="os-feature-icon">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path
                        d="M4.5 0C5.16304 0 5.79893 0.263392 6.26777 0.732233C6.73661 1.20107 7 1.83696 7 2.5C7 3.16304 6.73661 3.79893 6.26777 4.26777C5.79893 4.73661 5.16304 5 4.5 5C3.83696 5 3.20107 4.73661 2.73223 4.26777C2.26339 3.79893 2 3.16304 2 2.5C2 1.83696 2.26339 1.20107 2.73223 0.732233C3.20107 0.263392 3.83696 0 4.5 0ZM16 0C16.663 0 17.2989 0.263392 17.7678 0.732233C18.2366 1.20107 18.5 1.83696 18.5 2.5C18.5 3.16304 18.2366 3.79893 17.7678 4.26777C17.2989 4.73661 16.663 5 16 5C15.337 5 14.7011 4.73661 14.2322 4.26777C13.7634 3.79893 13.5 3.16304 13.5 2.5C13.5 1.83696 13.7634 1.20107 14.2322 0.732233C14.7011 0.263392 15.337 0 16 0ZM0 9.33438C0 7.49375 1.49375 6 3.33437 6H4.66875C5.16562 6 5.6375 6.10938 6.0625 6.30312C6.02187 6.52812 6.00313 6.7625 6.00313 7C6.00313 8.19375 6.52812 9.26562 7.35625 10C7.35 10 7.34375 10 7.33437 10H0.665625C0.3 10 0 9.7 0 9.33438ZM12.6656 10C12.6594 10 12.6531 10 12.6438 10C13.475 9.26562 13.9969 8.19375 13.9969 7C13.9969 6.7625 13.975 6.53125 13.9375 6.30312C14.3625 6.10625 14.8344 6 15.3313 6H16.6656C18.5063 6 20 7.49375 20 9.33438C20 9.70312 19.7 10 19.3344 10H12.6656ZM7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7C13 7.79565 12.6839 8.55871 12.1213 9.12132C11.5587 9.68393 10.7956 10 10 10C9.20435 10 8.44129 9.68393 7.87868 9.12132C7.31607 8.55871 7 7.79565 7 7ZM4 15.1656C4 12.8656 5.86562 11 8.16562 11H11.8344C14.1344 11 16 12.8656 16 15.1656C16 15.625 15.6281 16 15.1656 16H4.83437C4.375 16 4 15.6281 4 15.1656Z"
                        fill="#00FFB2"
                      />
                    </svg>
                  </div>
                  <div className="os-feature-content">
                    <h4 className="os-feature-title">Community Driven</h4>
                    <p className="os-feature-description">
                      Your feedback dey shape the product
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://github.com"
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.77656 18.6281C7.77656 18.7219 7.66875 18.7969 7.53281 18.7969C7.37812 18.8109 7.27031 18.7359 7.27031 18.6281C7.27031 18.5344 7.37813 18.4594 7.51406 18.4594C7.65469 18.4453 7.77656 18.5203 7.77656 18.6281ZM6.31875 18.4172C6.28594 18.5109 6.37969 18.6187 6.52031 18.6469C6.64219 18.6937 6.78281 18.6469 6.81094 18.5531C6.83906 18.4594 6.75 18.3516 6.60938 18.3094C6.4875 18.2766 6.35156 18.3234 6.31875 18.4172ZM8.39062 18.3375C8.25469 18.3703 8.16094 18.4594 8.175 18.5672C8.18906 18.6609 8.31094 18.7219 8.45156 18.6891C8.5875 18.6562 8.68125 18.5672 8.66719 18.4734C8.65312 18.3844 8.52656 18.3234 8.39062 18.3375ZM11.475 0.375C4.97344 0.375 0 5.31094 0 11.8125C0 17.0109 3.27188 21.4594 7.94531 23.025C8.54531 23.1328 8.75625 22.7625 8.75625 22.4578C8.75625 22.1672 8.74219 20.5641 8.74219 19.5797C8.74219 19.5797 5.46094 20.2828 4.77188 18.1828C4.77188 18.1828 4.2375 16.8187 3.46875 16.4672C3.46875 16.4672 2.39531 15.7312 3.54375 15.7453C3.54375 15.7453 4.71094 15.8391 5.35312 16.9547C6.37969 18.7641 8.1 18.2437 8.77031 17.9344C8.87813 17.1844 9.18281 16.6641 9.52031 16.3547C6.9 16.0641 4.25625 15.6844 4.25625 11.175C4.25625 9.88594 4.6125 9.23906 5.3625 8.41406C5.24062 8.10938 4.84219 6.85312 5.48438 5.23125C6.46406 4.92656 8.71875 6.49688 8.71875 6.49688C9.65625 6.23438 10.6641 6.09844 11.6625 6.09844C12.6609 6.09844 13.6688 6.23438 14.6063 6.49688C14.6063 6.49688 16.8609 4.92188 17.8406 5.23125C18.4828 6.85781 18.0844 8.10938 17.9625 8.41406C18.7125 9.24375 19.1719 9.89062 19.1719 11.175C19.1719 15.6984 16.4109 16.0594 13.7906 16.3547C14.2219 16.725 14.5875 17.4281 14.5875 18.5297C14.5875 20.1094 14.5734 22.0641 14.5734 22.4484C14.5734 22.7531 14.7891 23.1234 15.3844 23.0156C20.0719 21.4594 23.25 17.0109 23.25 11.8125C23.25 5.31094 17.9766 0.375 11.475 0.375ZM4.55625 16.5422C4.49531 16.5891 4.50938 16.6969 4.58906 16.7859C4.66406 16.8609 4.77187 16.8938 4.83281 16.8328C4.89375 16.7859 4.87969 16.6781 4.8 16.5891C4.725 16.5141 4.61719 16.4812 4.55625 16.5422ZM4.05 16.1625C4.01719 16.2234 4.06406 16.2984 4.15781 16.3453C4.23281 16.3922 4.32656 16.3781 4.35938 16.3125C4.39219 16.2516 4.34531 16.1766 4.25156 16.1297C4.15781 16.1016 4.08281 16.1156 4.05 16.1625ZM5.56875 17.8312C5.49375 17.8922 5.52187 18.0328 5.62969 18.1219C5.7375 18.2297 5.87344 18.2437 5.93437 18.1688C5.99531 18.1078 5.96719 17.9672 5.87344 17.8781C5.77031 17.7703 5.62969 17.7563 5.56875 17.8312ZM5.03438 17.1422C4.95937 17.1891 4.95937 17.3109 5.03438 17.4188C5.10938 17.5266 5.23594 17.5734 5.29688 17.5266C5.37187 17.4656 5.37187 17.3438 5.29688 17.2359C5.23125 17.1281 5.10938 17.0813 5.03438 17.1422Z"
                    fill="white"
                  />
                </svg>
                <div className="github-text">
                  <span className="github-label">Star us on</span>
                  <span className="github-title">GitHub</span>
                </div>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path
                    d="M13.7063 8.70627C14.0969 8.31565 14.0969 7.68127 13.7063 7.29065L8.70625 2.29065C8.31563 1.90002 7.68125 1.90002 7.29063 2.29065C6.9 2.68127 6.9 3.31565 7.29063 3.70627L10.5875 7.00002H1C0.446875 7.00002 0 7.4469 0 8.00002C0 8.55315 0.446875 9.00002 1 9.00002H10.5844L7.29375 12.2938C6.90312 12.6844 6.90312 13.3188 7.29375 13.7094C7.68437 14.1 8.31875 14.1 8.70938 13.7094L13.7094 8.7094L13.7063 8.70627Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="github-card">
              <div className="github-header">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M9.71987 23.2832C9.71987 23.4004 9.58511 23.4941 9.41521 23.4941C9.22186 23.5117 9.08711 23.4179 9.08711 23.2832C9.08711 23.166 9.22186 23.0723 9.39177 23.0723C9.56754 23.0547 9.71987 23.1484 9.71987 23.2832ZM7.89776 23.0195C7.85675 23.1367 7.97392 23.2715 8.14969 23.3066C8.30202 23.3652 8.47779 23.3066 8.51294 23.1895C8.54809 23.0723 8.43677 22.9375 8.26101 22.8848C8.10868 22.8438 7.93877 22.9024 7.89776 23.0195ZM10.4874 22.9199C10.3175 22.961 10.2003 23.0723 10.2179 23.207C10.2354 23.3242 10.3878 23.4004 10.5635 23.3594C10.7335 23.3183 10.8506 23.207 10.8331 23.0899C10.8155 22.9785 10.6573 22.9024 10.4874 22.9199ZM14.3425 0.46875C6.21626 0.46875 0 6.63814 0 14.7644C0 21.2619 4.08949 26.822 9.93079 28.7788C10.6807 28.9136 10.9444 28.4507 10.9444 28.0699C10.9444 27.7066 10.9268 25.7029 10.9268 24.4725C10.9268 24.4725 6.82558 25.3514 5.96433 22.7266C5.96433 22.7266 5.29642 21.0217 4.33556 20.5823C4.33556 20.5823 2.99388 19.6624 4.42931 19.68C4.42931 19.68 5.88816 19.7972 6.69083 21.1916C7.97392 23.4531 10.1241 22.8028 10.9619 22.4161C11.0967 21.4787 11.4775 20.8283 11.8994 20.4416C8.62426 20.0784 5.31986 19.6038 5.31986 13.9676C5.31986 12.3564 5.76513 11.5479 6.70255 10.5167C6.55022 10.1359 6.05221 8.56571 6.85488 6.53854C8.07938 6.15771 10.8975 8.12044 10.8975 8.12044C12.0693 7.79234 13.3289 7.62243 14.5769 7.62243C15.8248 7.62243 17.0845 7.79234 18.2562 8.12044C18.2562 8.12044 21.0744 6.15185 22.2989 6.53854C23.1015 8.57157 22.6035 10.1359 22.4512 10.5167C23.3886 11.5537 23.9628 12.3623 23.9628 13.9676C23.9628 19.6214 20.5119 20.0725 17.2368 20.4416C17.7758 20.9045 18.2328 21.7833 18.2328 23.1602C18.2328 25.1346 18.2152 27.5777 18.2152 28.0582C18.2152 28.439 18.4847 28.9019 19.2288 28.7671C25.0877 26.822 29.06 21.2619 29.06 14.7644C29.06 6.63814 22.4688 0.46875 14.3425 0.46875ZM5.69482 20.676C5.61866 20.7346 5.63623 20.8693 5.73583 20.9807C5.82958 21.0744 5.96433 21.1154 6.0405 21.0392C6.11666 20.9807 6.09908 20.8459 5.99948 20.7346C5.90574 20.6408 5.77099 20.5998 5.69482 20.676ZM5.06206 20.2014C5.02105 20.2776 5.07964 20.3713 5.19682 20.4299C5.29056 20.4885 5.40774 20.4709 5.44875 20.3889C5.48976 20.3127 5.43117 20.219 5.314 20.1604C5.19682 20.1253 5.10308 20.1428 5.06206 20.2014ZM6.96034 22.2872C6.8666 22.3633 6.90175 22.5391 7.0365 22.6504C7.17126 22.7852 7.34117 22.8028 7.41733 22.709C7.4935 22.6329 7.45834 22.4571 7.34117 22.3458C7.21227 22.211 7.0365 22.1934 6.96034 22.2872ZM6.29243 21.4259C6.19869 21.4845 6.19869 21.6369 6.29243 21.7716C6.38617 21.9064 6.54436 21.9649 6.62052 21.9064C6.71427 21.8302 6.71427 21.6779 6.62052 21.5431C6.5385 21.4084 6.38617 21.3498 6.29243 21.4259Z"
                    fill="white"
                  />
                </svg>
                <div className="github-repo-info">
                  <h4 className="github-repo-name">sabi-wallet/mobile</h4>
                  <p className="github-repo-status">Public repository</p>
                </div>
                <button className="github-star-button">
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
                    <path
                      d="M9.90303 0.5625C9.73741 0.21875 9.38741 0 9.00303 0C8.61866 0 8.27178 0.21875 8.10303 0.5625L6.09366 4.69688L1.60616 5.35938C1.23116 5.41563 0.918658 5.67812 0.803033 6.0375C0.687408 6.39687 0.781158 6.79375 1.04991 7.05937L4.30616 10.2812L3.53741 14.8344C3.47491 15.2094 3.63116 15.5906 3.94053 15.8125C4.24991 16.0344 4.65928 16.0625 4.99678 15.8844L9.00616 13.7437L13.0155 15.8844C13.353 16.0625 13.7624 16.0375 14.0718 15.8125C14.3812 15.5875 14.5374 15.2094 14.4749 14.8344L13.703 10.2812L16.9593 7.05937C17.228 6.79375 17.3249 6.39687 17.2062 6.0375C17.0874 5.67812 16.778 5.41563 16.403 5.35938L11.9124 4.69688L9.90303 0.5625Z"
                      fill="#F7931A"
                    />
                  </svg>
                  Star
                </button>
              </div>
              <div className="github-prs">
                <div className="github-pr">
                  <div className="pr-header">
                    <span className="pr-status merged">✓ Merged</span>
                    <span className="pr-time">2 hours ago</span>
                  </div>
                  <h5 className="pr-title">Add Hausa language support</h5>
                  <p className="pr-author">by @abdullahi_kaduna</p>
                </div>
                <div className="github-pr">
                  <div className="pr-header">
                    <span className="pr-status open">⚡ Open</span>
                    <span className="pr-time">5 hours ago</span>
                  </div>
                  <h5 className="pr-title">Add USSD response time</h5>
                  <p className="pr-author">by @almohad</p>
                </div>
                <div className="github-pr">
                  <div className="pr-header">
                    <span className="pr-status merged">✓ Merged</span>
                    <span className="pr-time">1 day ago</span>
                  </div>
                  <h5 className="pr-title">Fix social recovery flow</h5>
                  <p className="pr-author">by @umarrg</p>
                </div>
              </div>
              <div className="github-stats">
                <div className="github-stat">
                  <span className="stat-number orange">10</span>
                  <span className="stat-label">Stars</span>
                </div>
                <div className="github-stat">
                  <span className="stat-number green">10</span>
                  <span className="stat-label">Forks</span>
                </div>
                <div className="github-stat">
                  <span className="stat-number white">13</span>
                  <span className="stat-label">Contributors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="waitlist-section">
          <div className="waitlist-gradient"></div>
          <div className="waitlist-container">
            <div className="waitlist-header">
              <h2 className="waitlist-title">
                MVP drops <span className="gradient-text">April 2026</span>
              </h2>
              <p className="waitlist-subtitle">
                Be the first to test. Join the waitlist now.
              </p>
              <p className="waitlist-note">
                No spam. Just updates when we drop.
              </p>
            </div>
            <div className="waitlist-card">
              <form className="waitlist-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Abdullahi Ibrahim"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="0803 123 4567"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">City (Optional)</label>
                  <select className="form-select">
                    <option>Select your city</option>
                    <option>Kaduna</option>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Kano</option>
                    <option>Port Harcourt</option>
                    <option>Enugu</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Email (Optional)</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                  />
                </div>
                <button type="submit" className="waitlist-submit">
                  Join the Waitlist
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path
                      d="M15.4195 9.79448C15.859 9.35503 15.859 8.64136 15.4195 8.2019L9.79453 2.5769C9.35508 2.13745 8.64141 2.13745 8.20195 2.5769C7.7625 3.01636 7.7625 3.73003 8.20195 4.16948L11.9109 7.87495H1.125C0.502734 7.87495 0 8.37769 0 8.99995C0 9.62222 0.502734 10.125 1.125 10.125H11.9074L8.20547 13.8304C7.76602 14.2699 7.76602 14.9835 8.20547 15.423C8.64492 15.8625 9.35859 15.8625 9.79805 15.423L15.423 9.798L15.4195 9.79448Z"
                      fill="#0C0C1A"
                    />
                  </svg>
                </button>
              </form>
              <div className="waitlist-stats">
                <div className="waitlist-stat">
                  <span className="waitlist-stat-number orange">100</span>
                  <span className="waitlist-stat-label">People waiting</span>
                </div>
                <div className="waitlist-divider"></div>
                <div className="waitlist-stat">
                  <span className="waitlist-stat-number green">127</span>
                  <span className="waitlist-stat-label">Days to launch</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/19eff8f9a80001db59cea2031b07f19b60b8f9e4?width=220"
                alt="Sabi Logo"
                className="footer-logo"
              />
              <p className="footer-description">
                The Moniepoint of Bitcoin. Built for Nigeria, by Nigerians.
              </p>
              <div className="footer-socials">
                <a href="#" className="social-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M14.3553 4.741C14.3655 4.88313 14.3655 5.02529 14.3655 5.16741C14.3655 9.50241 11.066 14.4973 5.03553 14.4973C3.17766 14.4973 1.45178 13.9593 0 13.0253C0.263969 13.0557 0.51775 13.0659 0.791875 13.0659C2.32484 13.0659 3.73603 12.5481 4.86294 11.6649C3.42131 11.6344 2.21319 10.6903 1.79694 9.39075C2 9.42119 2.20303 9.4415 2.41625 9.4415C2.71066 9.4415 3.00509 9.40088 3.27919 9.32985C1.77666 9.02525 0.649719 7.70547 0.649719 6.11157V6.07097C1.08625 6.31463 1.59391 6.46691 2.13194 6.48719C1.24869 5.89835 0.670031 4.89329 0.670031 3.75622C0.670031 3.1471 0.832438 2.58872 1.11672 2.10141C2.73094 4.09125 5.15734 5.39072 7.87813 5.53288C7.82738 5.28922 7.79691 5.03544 7.79691 4.78163C7.79691 2.9745 9.25884 1.50244 11.0761 1.50244C12.0203 1.50244 12.873 1.89838 13.472 2.53797C14.2131 2.39585 14.9238 2.12172 15.5533 1.7461C15.3096 2.50754 14.7918 3.14713 14.1116 3.55319C14.7715 3.48216 15.4111 3.29938 15.9999 3.0456C15.5533 3.69532 14.9949 4.27397 14.3553 4.741Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M5.18437 12.4187C5.18437 12.4812 5.1125 12.5312 5.02187 12.5312C4.91875 12.5406 4.84688 12.4906 4.84688 12.4187C4.84688 12.3562 4.91875 12.3062 5.00938 12.3062C5.10313 12.2969 5.18437 12.3469 5.18437 12.4187ZM4.2125 12.2781C4.19063 12.3406 4.25313 12.4125 4.34688 12.4312C4.42813 12.4625 4.52187 12.4312 4.54063 12.3687C4.55938 12.3062 4.5 12.2344 4.40625 12.2063C4.325 12.1844 4.23438 12.2156 4.2125 12.2781ZM5.59375 12.225C5.50313 12.2469 5.44062 12.3063 5.45 12.3781C5.45937 12.4406 5.54063 12.4813 5.63438 12.4594C5.725 12.4375 5.7875 12.3781 5.77812 12.3156C5.76875 12.2563 5.68437 12.2156 5.59375 12.225ZM7.65 0.25C3.31563 0.25 0 3.54063 0 7.875C0 11.3406 2.18125 14.3063 5.29688 15.35C5.69688 15.4219 5.8375 15.175 5.8375 14.9719C5.8375 14.7781 5.82812 13.7094 5.82812 13.0531C5.82812 13.0531 3.64062 13.5219 3.18125 12.1219C3.18125 12.1219 2.825 11.2125 2.3125 10.9781C2.3125 10.9781 1.59687 10.4875 2.3625 10.4969C2.3625 10.4969 3.14062 10.5594 3.56875 11.3031C4.25312 12.5094 5.4 12.1625 5.84688 11.9563C5.91875 11.4563 6.12188 11.1094 6.34688 10.9031C4.6 10.7094 2.8375 10.4562 2.8375 7.45C2.8375 6.59062 3.075 6.15938 3.575 5.60938C3.49375 5.40625 3.22813 4.56875 3.65625 3.4875C4.30937 3.28437 5.8125 4.33125 5.8125 4.33125C6.4375 4.15625 7.10938 4.06563 7.775 4.06563C8.44063 4.06563 9.1125 4.15625 9.7375 4.33125C9.7375 4.33125 11.2406 3.28125 11.8938 3.4875C12.3219 4.57188 12.0563 5.40625 11.975 5.60938C12.475 6.1625 12.7812 6.59375 12.7812 7.45C12.7812 10.4656 10.9406 10.7063 9.19375 10.9031C9.48125 11.15 9.725 11.6187 9.725 12.3531C9.725 13.4062 9.71562 14.7094 9.71562 14.9656C9.71562 15.1687 9.85938 15.4156 10.2563 15.3438C13.3813 14.3062 15.5 11.3406 15.5 7.875C15.5 3.54063 11.9844 0.25 7.65 0.25ZM3.0375 11.0281C2.99687 11.0594 3.00625 11.1313 3.05938 11.1906C3.10938 11.2406 3.18125 11.2625 3.22187 11.2219C3.2625 11.1906 3.25312 11.1187 3.2 11.0594C3.15 11.0094 3.07812 10.9875 3.0375 11.0281ZM2.7 10.775C2.67813 10.8156 2.70937 10.8656 2.77187 10.8969C2.82187 10.9281 2.88438 10.9187 2.90625 10.875C2.92812 10.8344 2.89687 10.7844 2.83437 10.7531C2.77187 10.7344 2.72187 10.7437 2.7 10.775ZM3.7125 11.8875C3.6625 11.9281 3.68125 12.0219 3.75312 12.0813C3.825 12.1531 3.91562 12.1625 3.95625 12.1125C3.99688 12.0719 3.97813 11.9781 3.91563 11.9187C3.84688 11.8469 3.75313 11.8375 3.7125 11.8875ZM3.35625 11.4281C3.30625 11.4594 3.30625 11.5406 3.35625 11.6125C3.40625 11.6844 3.49062 11.7156 3.53125 11.6844C3.58125 11.6438 3.58125 11.5625 3.53125 11.4906C3.4875 11.4188 3.40625 11.3875 3.35625 11.4281Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4 className="footer-section-title">Community</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-section-title">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Sabi Wallet. All rights reserved.
            </p>
            <p className="footer-made">Made in Kaduna with ❤️ for Nigeria</p>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">
                Privacy
              </a>
              <a href="#" className="footer-legal-link">
                Terms
              </a>
              <a href="#" className="footer-legal-link">
                License
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewLandingPage;
