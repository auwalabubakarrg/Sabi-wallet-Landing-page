import { useState } from "react"
import "./ContactPage.css"

const CONTACT_API_URL = "/api/contact"

const ContactPage = () => {
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)
    setIsSubmitting(true)
    const formData = new FormData(event.target)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setStatus({
        type: "success",
        message: "Message sent—expect a reply within one business day.",
      })
      event.target.reset()
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Could not deliver your message. Please try again later or email sabibwallet@gmail.com directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-page">
      <div className="contact-container">
        <header className="contact-header">
          <p className="contact-kicker">Contact</p>
          <h1>Talk to the Sabi Wallet team</h1>
          <p className="contact-intro">
            Need help, partnership info or press assets? Drop us a line and we will reply from
            <a href="mailto:sabibwallet@gmail.com"> sabibwallet@gmail.com</a> within one business day.
          </p>
        </header>
        <div className="contact-grid">
          <div className="contact-card">
            <h2>Office details</h2>
            <p>
              Sabi Wallet is proudly built in Kaduna for Nigeria and Africa. We love hearing ideas
              on how to make Bitcoin simple for every Nigerian.
            </p>
            <ul>
              <li>
                <span>Email:</span>
                <a href="mailto:sabibwallet@gmail.com">sabibwallet@gmail.com</a>
              </li>
              <li>
                <span>Location:</span>
                Kaduna, Nigeria
              </li>
              <li>
                <span>Open source:</span>
                <a href="https://github.com/auwalrg8/Sabi" target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Full Name:</label>
              <input id="contact-name" name="name" type="text" placeholder="Amina Bello" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email:</label>
              <input id="contact-email" name="email" type="email" placeholder="you@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject:</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Tell us what you need."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message:</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="How can Sabi Wallet help you today?"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
            <p className="form-note">All submissions go straight to sabibwallet@gmail.com. We aim to reply within one business day.</p>
            {status && (
              <p className={`form-note status ${status.type}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
