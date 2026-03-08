# 🐾 Tiny Tails — Pet Shop & Care

A modern pet shop e-commerce website built with React, TypeScript, and Tailwind CSS.

## Features

- 🛒 Browse and shop pet food, accessories, bedding & hygiene products
- 🔐 User authentication (Sign In / Sign Up)
- 🛍️ Shopping cart with quantity controls
- 💳 Checkout with shipping & payment forms
- 📦 Order history tracking
- 📱 Fully responsive design
- ✨ Smooth page transitions & micro-animations

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type safety
- **Vite 6** — Build tool & dev server
- **Tailwind CSS v4** — Utility-first styling
- **React Router v7** — Client-side routing
- **Motion** — Animations & page transitions
- **Lucide React** — Icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/ShreyGadhave/Tiny_Tails.git
cd Tiny_Tails

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at [http://localhost:5173](http://localhost:5173).

### Demo Credentials

- **Email:** `demo@example.com`
- **Password:** `password123`

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Type-check with TypeScript |

## Project Structure

```
src/
├── main.tsx               # App entry point
├── App.tsx                # Router & context providers
├── index.css              # Global styles & fonts
├── components/
│   ├── Layout.tsx         # Shared header/nav/footer
│   ├── ProtectedRoute.tsx # Auth guard
│   └── PageTransition.tsx # Animated page wrapper
├── context/
│   ├── AuthContext.tsx     # Authentication state
│   └── CartContext.tsx     # Shopping cart state
└── pages/
    ├── Home.tsx           # Landing page
    ├── About.tsx          # About & services
    ├── Products.tsx       # Product catalog
    ├── Cart.tsx           # Shopping cart
    ├── Checkout.tsx       # Checkout form
    ├── OrderDetails.tsx   # Order history
    ├── Contact.tsx        # Contact form
    ├── SignIn.tsx          # Login
    ├── SignUp.tsx          # Registration
    └── NotFound.tsx       # 404 page
```

## Deployment

See the deployment guide below or deploy instantly on Vercel:

```bash
npm run build
```

Upload the `dist/` folder to any static hosting (Vercel, Netlify, GitHub Pages).

## License

MIT

