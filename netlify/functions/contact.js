/* eslint-env node */
// contact.js – POST /api/contact
// Sends contact form submissions to sabibwallet@gmail.com using Resend

const RECIPIENT_EMAIL = "sabibwallet@gmail.com"
const SENDER_EMAIL = "Sabi Wallet <noreply@sabiwallet.online>"

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
}

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" }
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) }
  }

  try {
    const payload = JSON.parse(event.body)

    if (!payload.name || !payload.email || !payload.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Name, email, and message are required" }),
      }
    }

    // Send email using Resend API
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not set")
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Email service not configured" }),
      }
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SENDER_EMAIL,
        to: RECIPIENT_EMAIL,
        reply_to: payload.email,
        subject: `[Sabi Contact] ${payload.subject || 'New message from ' + payload.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${payload.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
          <p><strong>Subject:</strong> ${payload.subject || 'No subject'}</p>
          <hr>
          <h3>Message:</h3>
          <p>${payload.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Sent from Sabi Wallet contact form</p>
        `,
        text: `New Contact Form Submission\n\nFrom: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject || 'No subject'}\n\nMessage:\n${payload.message}`,
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json()
      console.error("Resend API error:", errorData)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Failed to send email", details: errorData }),
      }
    }

    const result = await emailResponse.json()
    console.log("Email sent successfully:", result.id)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: "Thank you! We'll get back to you soon.",
      }),
    }
  } catch (err) {
    console.error("Contact form error:", err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Something went wrong" }),
    }
  }
}
