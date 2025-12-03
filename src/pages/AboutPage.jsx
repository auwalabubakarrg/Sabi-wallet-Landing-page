import { motion } from 'framer-motion'
import './AboutPage.css'

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const stats = [
    { number: '100%', label: 'Non-Custodial' },
    { number: '0', label: 'KYC Required' },
    { number: '⚡', label: 'Lightning Fast' },
    { number: '🇳🇬', label: 'Built in Nigeria' },
  ]

  return (
    <div className="about-page">
      <motion.section
        className="about-hero"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>About Sabi Wallet</motion.h1>
        <motion.p variants={itemVariants} className="about-intro">
          We&apos;re building Nigeria&apos;s first truly non-custodial Bitcoin and Lightning wallet
          that feels exactly like the payment apps you already know and love.
        </motion.p>
      </motion.section>

      <motion.section
        className="mission-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="mission-content" variants={itemVariants}>
          <h2>Our Mission</h2>
          <p>
            To make Bitcoin as easy to use as sending airtime or receiving bank alerts.
            We believe financial sovereignty shouldn&apos;t come with a steep learning curve.
          </p>
        </motion.div>

        <motion.div className="vision-content" variants={itemVariants}>
          <h2>Our Vision</h2>
          <p>
            A future where every Nigerian has full control over their money, without
            needing to trust banks, exchanges, or any third party. Your keys, your
            Bitcoin, forever.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className="stats-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2>Why Choose Sabi?</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="philosophy-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Built for the Street, by the Street</h2>
        <p>
          We understand the Nigerian payment landscape because we live it every day.
          We&apos;ve designed Sabi Wallet to feel familiar while offering something
          revolutionary: true financial freedom through Bitcoin.
        </p>
        <motion.div
          className="feature-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="feature-item">
            <span className="check-icon">✓</span>
            <span>Feels like Moniepoint & OPay</span>
          </motion.div>
          <motion.div variants={itemVariants} className="feature-item">
            <span className="check-icon">✓</span>
            <span>P2P trading like NoOnes</span>
          </motion.div>
          <motion.div variants={itemVariants} className="feature-item">
            <span className="check-icon">✓</span>
            <span>Lightning Network integration</span>
          </motion.div>
          <motion.div variants={itemVariants} className="feature-item">
            <span className="check-icon">✓</span>
            <span>No seed phrases to memorize</span>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default AboutPage
