# 🎬 Cinematic AI Portfolio — Darpally Saketh Goud

A high-performance, cinematic developer portfolio designed for **Darpally Saketh Goud** — Master of Engineering in Artificial Intelligence candidate at the University of Cincinnati. 

Built with **React 19, TypeScript, Vite, Tailwind CSS, and Framer Motion**, this portfolio delivers 60 FPS GPU-accelerated micro-animations, full-bleed video hero presentations, interactive AI assistant widgets, and responsive layouts across all screen form factors.

---

## ✨ Features

- **🎥 Full-Bleed Video Hero**: Edge-to-edge cinematic video presentation with smart browser audio policy handling, volume controls, and auto-stop after 3 loops with manual replay.
- **🤖 Holographic AI Assistant**: Interactive animated SVG robot assistant with soft breathing dynamics, floating speech bubbles, and theme awareness.
- **🌌 Dynamic Energy Particle Canvas**: Real-time ambient background particles responding smoothly to theme switching.
- **⚡ Glassmorphic Spotlight Cards**: Interactive project and skill showcase cards with dynamic radial spotlight hover effects.
- **🔍 Deep Project Modal Inspector**: Case study modals displaying architecture breakdowns, key metrics, live demo links, and GitHub repositories.
- **📱 100dvh Multi-Screen Responsiveness**: Fully optimized layout for mobile devices, tablets, laptops, and ultra-wide displays.
- **🌗 Theme Toggle**: Seamless high-contrast Light and Dark mode switching.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tooling**: Vite with ESBuild

---

## 🚀 Quick Start

### Prerequisites
Make sure you have **Node.js (v18+)** and **npm** installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/Saketh-2407/sakethdarpally-portfolio.git
cd sakethdarpally-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## ⚙️ How to Customize for Your Own Use

You can easily adapt this portfolio with your own personal details, projects, experience, and assets:

### 1. Update Personal & Experience Data
All content (Bio, Skills, Experience, Projects, Education, Social Links) is centralized in a single file:
👉 Edit **`src/data/portfolio.ts`**

Example:
```typescript
export const personalDetails = {
    name: "Your Full Name",
    title: "Your Professional Title",
    tagline: "Your custom tagline...",
    socials: {
        github: "https://github.com/your-username",
        linkedin: "https://linkedin.com/in/your-profile",
        email: "your.email@example.com",
        location: "City, Country",
    },
};
```

### 2. Replace Media Assets
All static media assets are stored in the **`public/`** folder:
- **Hero Video**: Replace `public/portfolio-video.mp4` with your own 16:9 video clip.
- **Profile Image**: Replace `public/profile.png` with your headshot photo.
- **Favicon & Logo**: Replace `public/s icon.png` with your personal icon.

---

## 🌐 Deploying to Vercel

Deploying this portfolio on [Vercel](https://vercel.com/) takes less than 2 minutes:

1. Push your repository to **GitHub**.
2. Go to **[Vercel Dashboard](https://vercel.com/new)** and click **"Add New Project"**.
3. Import the `sakethdarpally-portfolio` GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.

### Custom Domain (e.g. `sakethdarpally.portfolio`)
1. In Vercel Project Settings, navigate to **Domains**.
2. Add your custom domain (e.g. `sakethdarpally.com` or your preferred domain).
3. Follow Vercel's DNS instructions to point your domain CNAME / A records.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Designed & Developed by **[Darpally Saketh Goud](https://github.com/Saketh-2407)**.
