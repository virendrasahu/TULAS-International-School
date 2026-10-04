# Tulas International School — Homepage Redesign

A modern, premium, animated, and fully responsive homepage redesign for **Tulas International School (TIS), Dehradun**.

The project focuses on creating a high-converting digital experience while preserving the school's existing brand identity, core messaging, and visual language.

> **Project Type:** Frontend Development Assessment
> **Application:** Tulas International School Homepage
> **Development:** React + Vite
> **Deployment:** Vercel

---

## 🌐 Project Links

* **Live Demo:** [`https://tulas-international-school-five.vercel.app/`](https://tulas-international-school-five.vercel.app/)
* **GitHub Repository:** `Add your GitHub repository URL`
* **Original Website:** [Tulas International School](https://tis.edu.in/?utm_source=chatgpt.com)

---

## ✨ Project Highlights

This redesign combines modern UI design, responsive layouts, micro-interactions, accessibility, and smooth animations to create a premium international-school experience.

### Key Features

* 🎨 Modern premium school-focused UI
* 📱 Fully responsive design
* 🌗 Animated Light / Dark theme
* 🖱️ Desktop custom cursor
* 📊 Scroll progress indicator
* ✨ Scroll-triggered animations
* 💬 Interactive testimonials carousel
* 🖼️ Contextual educational photography
* 📋 Quick enquiry modal
* ♿ Accessibility-focused interactions
* ⚡ Optimized Vite production build
* 🧩 Modular React component architecture

---

# 🛠️ Tech Stack

| Technology           | Purpose                                                   |
| -------------------- | --------------------------------------------------------- |
| **React 19**         | Frontend UI development                                   |
| **Vite 8**           | Development server and production bundling                |
| **Tailwind CSS v4**  | Responsive styling and design system                      |
| **Framer Motion**    | Animations, transitions, carousel and scroll interactions |
| **Lucide React**     | Lightweight SVG icons                                     |
| **JavaScript / JSX** | Application logic and components                          |

---

# 🎯 Standout Features

## 1. Premium Testimonials Carousel

The existing parent testimonials have been enhanced with a responsive interactive carousel.

### Features

* 3 cards visible on desktop
* 2 cards visible on tablet
* 1 card visible on mobile
* Touch/swipe support
* Previous / next controls
* Pagination indicators
* Keyboard navigation using `←` / `→`
* 5.5-second autoplay
* Pause on hover/focus
* `prefers-reduced-motion` support
* Contextual educational photography

The testimonial content is maintained separately from the presentation layer, making the section easy to update.

---

## 2. Official TIS Brand Identity

The homepage retains the Tulas International School visual identity while introducing a more modern interface.

The design incorporates:

* Official TIS crest/logo
* TIS-inspired red accents
* Navy / dark tones
* White and neutral backgrounds
* Red-to-black dark-mode gradients
* Consistent typography and spacing

The logo is responsively scaled across desktop, tablet, and mobile layouts.

---

## 3. Scroll-Triggered Animations

The project uses reusable Framer Motion animations through a dedicated `Reveal` component.

Animations include:

* Fade-in
* Vertical reveal
* Scale transitions
* Staggered card entrances
* Viewport-triggered animations

Animations are intentionally subtle to maintain usability and performance.

```jsx
whileInView
viewport={{ once: true, margin: "-50px" }}
```

---

## 4. Dark / Light Theme

The homepage includes a persistent theme switcher.

### Light Mode

Uses a clean, spacious visual system with TIS red accents and neutral backgrounds.

### Dark Mode

Uses a premium red-and-black visual language:

```text
Deep Red → Dark Burgundy → Black
```

Theme preference is persisted using `localStorage`.

The theme system is managed through the reusable:

```text
src/hooks/useTheme.js
```

---

## 5. Scroll Progress Indicator

A fixed progress bar at the top of the page visually indicates the user's current scroll position.

Implementation uses:

* Framer Motion `useScroll()`
* Framer Motion `useSpring()`

This provides a smooth progress animation without requiring manual scroll calculations.

---

## 6. Desktop Custom Cursor

A custom cursor interaction is implemented for desktop devices.

Features include:

* Spring-based movement
* Cursor ring and center dot
* Interactive hover scaling
* Button/link interaction feedback
* Desktop-only behavior

The custom cursor is automatically disabled on touch devices to avoid unnecessary interaction overhead.

---

## 7. Centralized School Data

School-related content is centralized in:

```text
src/data/schoolData.js
```

This keeps content separate from UI components and makes future updates easier.

The centralized data includes content such as:

* Campus information
* School statistics
* Sports
* Rankings and awards
* Academic programs
* Campus visitors
* Testimonials
* Contact information
* Admission information

---

## 8. Interactive Quick Enquiry Modal

The homepage includes an accessible enquiry modal.

Features include:

* Form inputs
* Validation
* ESC key support
* Accessible controls
* Background blur
* Responsive layout
* Light and dark theme support

The modal is designed to provide a quick admission enquiry experience without navigating away from the homepage.

---

# 🧩 Component Architecture

The project follows a modular React architecture.

```text
src/
│
├── animation/
│   ├── CustomCursor.jsx
│   ├── Reveal.jsx
│   └── ScrollProgress.jsx
│
├── components/
│   │
│   ├── layout/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MobileNav.jsx
│   │   └── Navbar.jsx
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── AdmissionsCTA.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Facilities.jsx
│   │   ├── Hero.jsx
│   │   ├── Personalities.jsx
│   │   ├── RankingsAwards.jsx
│   │   ├── SportsFacilities.jsx
│   │   ├── Statistics.jsx
│   │   └── Testimonials.jsx
│   │
│   └── ui/
│       ├── Badge.jsx
│       ├── Button.jsx
│       ├── Modal.jsx
│       ├── SectionHeading.jsx
│       └── ThemeToggle.jsx
│
├── data/
│   └── schoolData.js
│
├── hooks/
│   └── useTheme.js
│
├── App.jsx
├── index.css
└── main.jsx
```

### Architecture Philosophy

The application separates:

* **Layout components** → navigation and footer
* **Section components** → homepage content
* **UI components** → reusable interface elements
* **Animation components** → motion behavior
* **Hooks** → reusable state/logic
* **Data** → centralized school content

This keeps the codebase maintainable and easier to extend.

---

# 📄 Homepage Sections

The redesigned homepage includes:

### Hero

High-conversion introduction with the TIS aerial campus visual, primary CTAs, key statistics, and responsive presentation.

### About TIS

Introduction to the school's Modern Gurukul philosophy and educational approach.

### Statistics

Key school metrics presented through animated cards.

### Rankings & Awards

Highlights of school rankings and recognitions.

### Academics

CBSE academic levels, STEM learning, mentoring, and educational programs.

### Sports & Facilities

Interactive presentation of the school's sports and facilities.

### Residential Life

Information about boarding, dining, medical facilities, and campus life.

### Eminent Personalities

Showcase of notable visitors and personalities associated with TIS.

### Parent Testimonials

Interactive responsive carousel featuring parent feedback and contextual educational imagery.

### Admissions

Admission workflow and quick enquiry interaction.

### Contact

Contact information, enquiry form, location/map section, and school details.

### Footer

Navigation, school information, important links, and social/contact information.

---

# 📱 Responsive Design

The homepage follows a mobile-first responsive approach.

### Mobile — 375px / 390px

* Responsive navigation drawer
* Single testimonial card
* Touch/swipe interactions
* Stacked content sections
* Responsive typography
* No horizontal overflow
* Touch-friendly controls

### Tablet — 768px

* Two-column content layouts where appropriate
* Two testimonial cards
* Optimized spacing
* Responsive navigation
* Balanced typography

### Desktop — 1280px+

* Maximum-width content containers
* Three testimonial cards
* Full navigation
* Desktop custom cursor
* Expanded layouts
* Larger visual hierarchy

### Desktop — 1440px

The layout is optimized for larger desktop displays while maintaining controlled content width and visual balance.

---

# ♿ Accessibility

Accessibility has been considered throughout the interface.

Implemented practices include:

* Semantic HTML landmarks
* Keyboard-accessible controls
* Visible focus states
* `aria-label` attributes for icon buttons
* Keyboard carousel navigation
* ESC support for modal dialogs
* Responsive touch targets
* Meaningful image `alt` text
* Dark/light theme contrast considerations
* `prefers-reduced-motion` support

Primary semantic elements include:

```html
<header>
<nav>
<main>
<section>
<footer>
```

---

# ⚡ Performance Considerations

The project is designed with frontend performance in mind.

Key considerations include:

* Vite production bundling
* Component-based architecture
* Reusable animation components
* Lazy loading for appropriate below-the-fold imagery
* Responsive image sizing
* Avoidance of unnecessary dependencies
* Desktop-only custom cursor
* Viewport-based animations
* Efficient Framer Motion animations

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* **Node.js 18+**
* **npm** or **yarn**
* **Git**

---

## 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate into the project:

```bash
cd tis-homepage-redesign
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Start Development Server

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in your terminal.

---

# 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Before deployment, make sure the production build completes successfully.

---

# 🚢 Deploying to Vercel

The project can be deployed using Vercel.

### Steps

1. Push the project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Select **Vite** as the framework if prompted.
5. Use the following configuration:

```text
Build Command: npm run build
Output Directory: dist
```

6. Deploy the project.

After deployment, verify the homepage on both desktop and mobile devices.

---

# 🔍 Quality Checklist

Before submitting the project:

* [ ] `npm install` completes successfully
* [ ] `npm run build` succeeds
* [ ] No broken imports
* [ ] No unused dependencies
* [ ] No unnecessary `console.log()` statements
* [ ] No broken images
* [ ] No horizontal overflow
* [ ] Mobile navigation works
* [ ] Theme switcher works
* [ ] Scroll progress works
* [ ] Scroll animations work
* [ ] Custom cursor works on desktop
* [ ] Custom cursor is disabled on touch devices
* [ ] Testimonials carousel works
* [ ] Carousel swipe works on mobile
* [ ] Carousel keyboard navigation works
* [ ] Enquiry modal works
* [ ] Light mode works
* [ ] Dark mode works
* [ ] Keyboard navigation works
* [ ] Responsive layouts verified at 375px, 390px, 768px, 1280px and 1440px

---

# 📌 Project Status

**Status: Production Ready**

The homepage redesign is structured as a modular React application with responsive layouts, interactive components, accessible controls, animated interactions, and a Vite production build setup.

---

## 👨‍💻 Development Focus

This project demonstrates practical frontend development skills including:

* React component architecture
* Responsive UI development
* Tailwind CSS
* Framer Motion animations
* Interactive UI components
* Theme management
* Accessibility
* Performance-conscious frontend implementation
* Mobile-first design
* Production build and deployment

---

## 📄 License

This project was created as a **frontend development assessment / redesign project** for Tulas International School.

School branding, trademarks, logos, and official content belong to their respective owners.
