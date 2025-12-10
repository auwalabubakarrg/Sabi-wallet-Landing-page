# Backend Integration Guide

This project ships with fully wired front-end forms for both the contact page and the waitlist. They now talk to `/api/contact` and `/api/waitlist` via `fetch`, so the landing page no longer depends on the visitor’s mail client.

## What was implemented

- `ContactPage.jsx` and `NewLandingPage.jsx` use stateful handlers (`handleSubmit`, `handleWaitlistSubmit`) that POST JSON payloads to `/api/contact` and `/api/waitlist` respectively.
- Submission state (`isSubmitting`, `waitlistStatus`, `status`) powers button disabling and user feedback messages (success + error) in the UI.
- Development-time mocks live in `src/mocks/apiMocks.js` and are bootstrapped automatically from `main.jsx` whenever `import.meta.env.DEV` is truthy.

## Contract for each endpoint

### POST `/api/contact`
- **Headers:** `Content-Type: application/json`
- **Body:** `{ name, email, subject, message }` – all fields are required by the UI.
- **Success response:** `200 OK` with a JSON payload such as `{ status: "ok", note: "We will reply within one business day.", received: { ... } }`
- **Error handling:** return a non-2xx response and the front-end will surface a friendly error message asking the user to retry.

### POST `/api/waitlist`
- **Headers:** `Content-Type: application/json`
- **Body:** `{ name, phone, city?, email? }` – only `name` and `phone` are required; `city` and `email` are optional.
- **Success response:** `201 Created` (the mock returns this) with data like `{ status: "queued", slot: 123, received: { ... } }`
- **Failure response:** any status outside 2xx will show the error copy that acknowledges the manual fallback email address.

## Local mock server

- Mocks live in `src/mocks/apiMocks.js`. They delay for ~400 ms, parse the incoming JSON, and return predictable responses so the UI can be tested without a real backend.
- `main.jsx` now imports `startMockServer` and gates it behind `import.meta.env.DEV && import.meta.env.VITE_ENABLE_API_MOCKS === 'true'`. Leave the default `VITE_ENABLE_API_MOCKS` undefined so production and standard dev builds call the real APIs; set this flag to `true` if you want the mock responses locally while you develop.
The patched `window.fetch` only intercepts the two API routes used by the forms and proxies all other requests to the real `fetch` implementation.
To run against a real backend, set `VITE_ENABLE_API_MOCKS` to anything other than `'true'` (e.g., leave it undefined) so the mocks never activate.

### Netlify functions (optional now)

The repo now includes `netlify/functions/contact.js` and `netlify/functions/waitlist.js`, so deploying to Netlify automatically exposes `/api/contact` and `/api/waitlist`. They mirror the front-end contracts, perform basic validation, and log submissions—ideal for quick staging before wiring a real email or CRM integration.

## Implementing the real backend

1. **Create the endpoints** (`/api/contact` and `/api/waitlist`) in your backend framework (Node/Express, Fastify, Next.js API route, etc.).
2. **Validate** incoming payloads. Example middleware should ensure `name` and `email` (and `subject`/`message`) exist for contact, and `name` plus `phone` exist for the waitlist. Any missing required fields should return `400 Bad Request` with a helpful message to log.
3. **Process the submission**: persist the data, queue an email, or forward to your CRM. The front-end only cares about a 2xx response and the option to echo the submitted object in the JSON body.
4. **Respond** with the same schema described above. Bonus points for including human-readable notes so the front-end can show more detailed follow-up messages later on if needed.
5. **Monitor**: add logging/alerts for failed submissions. The front-end already surfaces an error message telling users to email `sabiwallet@gmail.com` when the fetch fails.

## Verifying the integration

- Run `npm run dev` and submit each form to see the mock responses instantly in the UI.
- When the backend is wired up, `npm run build` continues to succeed and the mocks are bypassed in production.
- Keep the mock server in place during development until the real APIs are stable, then remove the import from `main.jsx` or gate it with your own feature flag.

Happy hacking – let me know if you need help translating this contract into your preferred backend stack.
