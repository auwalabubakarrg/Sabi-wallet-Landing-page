// contact.js – POST /api/contact
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  try {
    const payload = JSON.parse(event.body)

    if (!payload.name || !payload.email || !payload.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name, email, and message are required" }),
      }
    }

    console.log("Contact form:", payload)

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Thank you! We’ll get back to you soon.",
      }),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong" }),
    }
  }
}
