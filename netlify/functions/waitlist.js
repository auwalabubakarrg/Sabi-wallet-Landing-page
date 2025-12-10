// waitlist.js – POST /api/waitlist
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  try {
    const payload = JSON.parse(event.body)

    if (!payload.name || !payload.phone) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Name and phone number are required" }),
      }
    }

    console.log("Waitlist signup:", payload)

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "You’re on the list! Kaduna beta first.",
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
