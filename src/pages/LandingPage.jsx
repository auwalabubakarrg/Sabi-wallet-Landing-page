import { motion } from 'framer-motion'
import './LandingPage.css'

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const features = [
    {
      title: 'Non-Custodial',
      description: 'Your keys, your Bitcoin. No custody, no compromises.',
      icon: '🔐',
    },
    {
      title: 'Lightning Fast',
      description: 'Send sats as easily as you dash airtime.',
      icon: '⚡',
    },
    {
      title: 'No KYC',
      description: 'No seed phrase, no KYC. Just your money, forever.',
      icon: '🚫',
    },
    {
      title: 'P2P Trading',
      description: 'Buy & sell BTC/USDT P2P like NoOnes.',
      icon: '🤝',
    },
  ]

  return (
    <div className="landing-page">
      <motion.section
        className="hero-section"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Sabi Wallet
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          🇳🇬 Nigeria&apos;s first non-custodial Bitcoin + Lightning wallet
        </motion.p>
        <motion.p variants={itemVariants} className="hero-description">
          Send sats as easily as you dash airtime. Receive like bank alert.
          Buy & sell BTC/USDT P2P. No seed phrase, no KYC, no custody.
        </motion.p>
        <motion.div variants={itemVariants} className="cta-buttons">
          <motion.button
            className="primary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.section>

      <motion.section
        className="features-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Why Sabi Wallet?</motion.h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="tagline-section"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Built for the street, by the street.</h2>
      </motion.section>
    </div>
  )
}

export default LandingPage
