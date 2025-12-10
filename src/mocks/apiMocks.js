const MOCK_API_DELAY = 400

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const createJsonResponse = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  })

const handleContactRequest = async (request) => {
  await delay(MOCK_API_DELAY)
  const payload = await request.clone().json()

  return createJsonResponse(
    {
      status: "ok",
      received: payload,
      note: "We will reply within one business day.",
    },
    200,
  )
}

const handleWaitlistRequest = async (request) => {
  await delay(MOCK_API_DELAY)
  const payload = await request.clone().json()

  return createJsonResponse(
    {
      status: "queued",
      received: payload,
      slot: Math.floor(Math.random() * 1000) + 1,
    },
    201,
  )
}

export const startMockServer = () => {
  if (!import.meta.env.DEV || window.__sabiMocksReady) {
    return
  }

  window.__sabiMocksReady = true
  const originalFetch = window.fetch.bind(window)

  window.fetch = async (input, init) => {
    const request = input instanceof Request ? input : new Request(input, init)
    const url = new URL(request.url, window.location.origin)

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContactRequest(request)
    }

    if (url.pathname === "/api/waitlist" && request.method === "POST") {
      return handleWaitlistRequest(request)
    }

    return originalFetch(request)
  }
}
