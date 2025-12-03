# Sabi Wallet Landing Page

🇳🇬 Nigeria's first non-custodial Bitcoin + Lightning wallet that feels exactly like Moniepoint & OPay. Send sats as easily as you dash airtime. Receive like bank alert. Buy & sell BTC/USDT P2P like NoOnes. No seed phrase, no KYC, no custody — just your money, your keys, forever. Built for the street, by the street.

## Features

- ⚛️ Built with React 18 and Vite for fast development
- 🎨 Modern, animated UI using Framer Motion
- 🧭 Client-side routing with React Router
- 📱 Responsive design that works on all devices
- ⚡ Lightning-fast performance
- 🎭 Smooth page transitions and animations

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/auwalrg8/Sabi-wallet-Landing-page.git
cd Sabi-wallet-Landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
Sabi-wallet-Landing-page/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable React components
│   │   └── Navigation.jsx
│   ├── pages/          # Page components
│   │   ├── LandingPage.jsx
│   │   └── AboutPage.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── App.css         # Global app styles
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

## Pages

### Landing Page (/)
- Hero section with animated entrance
- Feature showcase with hover effects
- Call-to-action buttons
- Scroll-triggered animations

### About Page (/about)
- Mission and vision statements
- Statistics showcase
- Feature highlights
- Animated content sections

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **ESLint** - Code linting

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Screenshots

### Landing Page
![Landing Page](https://github.com/user-attachments/assets/00bc3bdb-9585-4f3a-939d-36d482863b18)

### About Page
![About Page](https://github.com/user-attachments/assets/b558aed7-d410-4989-8b78-1748d26655ce)
