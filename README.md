# Daris Nur Rahmat - Personal Portfolio Website

This is a premium, highly interactive personal portfolio website for **Daris Nur Rahmat**, built using **React, Vite, Tailwind CSS, and Framer Motion**. 

Designed with a modern, futuristic dark theme, this portfolio is fully responsive, production-ready, and optimized for seamless deployment to **GitHub Pages, Vercel, or Netlify**.

---

## Tech Stack

- **Core & Logic:** React 19, JavaScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v3, PostCSS, Autoprefixer
- **Animations:** Framer Motion v11, React Type Animation, CSS Keyframes
- **Typography:** Space Grotesk (headings), Inter (body), JetBrains Mono (tech/code badges)
- **Icons:** Devicon CDN integration (SVG-based web dev icons)

---

## Core Features & Visual Aesthetics

- **Dark Mode Only:** Pure immersive dark theme using `#0A0A0F` base and `#0F0F1A` surface backgrounds.
- **Glassmorphism:** Consistent frosted-glass panels (`backdrop-filter: blur`, subtle semi-transparent borders, and deep drop-shadow overlays).
- **Ambient Aurora Canvas:** A native HTML5 `<canvas>` floating particle overlay in the hero section coupled with keyframe-based color shifting gradients.
- **Dynamic Typing Headline:** Smooth interactive title typewriter effect powered by `react-type-animation`.
- **Spring-Based Cursor Glow:** Custom radial light glow tracking the visitor's cursor using Framer Motion spring physics (automatically hidden on mobile/touch interfaces for responsiveness).
- **Staggered Animations:** Section elements, cards, and skill badges fade-in and slide-up smoothly as the user scrolls into view.
- **Intelligent Navigation:** Fixed navbar with backdrop blur and dynamic active-section indicators tracking scroll bounds.
- **Active Contact Actions:** Centralized social dashboard including a one-click "Copy Email" feature.
- **Initial Splash Screen:** Animated shimmer progress bar on initial page entry to capture visual interest.

---

## Project Structure

```text
portfolio-daris/
├── public/
│   ├── favicon.svg             
│   └── image-profile.jpg       ← Placeholder avatar (Replace with your own image)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ← Navigation with ScrollSpy
│   │   ├── Hero.jsx            ← Hero landing with canvas particles & typing effect
│   │   ├── About.jsx           ← Bio details and Academic metrics
│   │   ├── Skills.jsx          ← Devicon-integrated grid with color glows
│   │   ├── Projects.jsx        ← Grid displaying eSchool.id & Coociezex
│   │   ├── Contact.jsx         ← Direct mail, Github, Linkedin, and Copy action
│   │   └── Footer.jsx          ← Signature and Back-to-Top trigger
│   ├── App.jsx                 ← Main wrapper (handles custom cursor & splash)
│   ├── main.jsx                ← React DOM Mounting
│   └── index.css               ← Tailored utility classes and keyframes
├── index.html                  ← Import scripts, fonts, and icon CDNs
├── tailwind.config.js          ← Custom colors, fonts, and animation extenders
├── postcss.config.js           ← PostCSS builder rules
├── vite.config.js              ← Vite compiler setup
├── package.json                ← Dependencies & scripts
└── README.md                   ← Project instructions
```

---

## Local Setup & Development

Follow these steps to run the application locally on your machine:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Produce a Production Build:**
   ```bash
   npm run build
   ```
   This creates a static production build folder named `dist` at the root of the project.

---

