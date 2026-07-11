# Salman Akhtar — Personal Portfolio

A customized and personalized version of an open-source portfolio template.  
This is **not** an original project — full credit goes to the original author.

---

## Table of Contents

- [About This Version](#about-this-version)
- [Original Project & Credits](#original-project--credits)
- [My Customizations](#my-customizations)
- [Features](#features)
- [Deployment Status](#deployment-status)

---

## About This Version

This repository is a **modified version** of an existing open-source portfolio template. I have customized it with my own content, information, and a few technical improvements to suit my needs as a Python Backend Developer.

---

## Original Project & Credits

**Original Template:** [Portfolio Reusable Open-Source Template](https://mehak-naqvi.vercel.app/)  
**Original Author:** Mehak Naqvi  
**GitHub:** [@miss-kniz](https://github.com/miss-kniz)
**Email:** mehak313naqvi@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/miss-kniz  

> All design, architecture, and template code belongs to the original author.  
> If this template is useful to you, please star the original repository and support Mehak's work.

---

## My Customizations

The following changes were made to the original template:

- **Content & Data** — Replaced all placeholder content with my own: bio, experience, education, projects, skills, and contact info
- **Resume Download** — Replaced the Google Drive resume link with a locally hosted PDF for direct download (no third-party dependency)
- **TypeScript Fixes** — Made optional fields (`secondaryCtaText`, `highlightsFromTopText`) properly typed to prevent build errors when those fields are unused
- **Hero Section** — Redesigned as a "Hi, I'm Salman" greeting with a typewriter effect cycling through my roles (Backend/Django/FastAPI/Python Developer), a circular profile photo, and a full-viewport layout so the About section only appears on scroll
- **About Section** — Simplified to a single centered column (photo removed) for better readability
- **Skills Section** — Replaced the original frontend-leaning stack with my actual stack: Django, DRF, FastAPI, Flask, Node.js, Python, JavaScript, plus new Database (PostgreSQL, MongoDB, MySQL, SQLite) and AI (Agentic AI, Chatbots, LangChain) categories
- **Projects** — Replaced all sample/template projects with my own: [Notes App](https://github.com/salmanakhtar57/Notes-App) and [OneSpace](https://github.com/salmanakhtar57/OneSpace), shown as icon-based cards linking directly to GitHub (no case-study pages yet); removed the category filter since it no longer applies
- **Contact Section** — Removed the "Book a Call" Calendly button (was linked to the original author's calendar)
- **Navbar** — Shows my full name, nav links grouped next to the Contact button, and a light/dark theme toggle
- **Theme** — Site now always defaults to light mode for new visitors (previously followed OS/browser preference); dark mode is available via the navbar toggle and remembered across visits
- **SEO Metadata** — Title, description, keywords, and Open Graph tags updated to reflect me and my stack instead of the original author (see note in [Deployment Status](#deployment-status) about the URLs still in there)
- **Social Links** — Updated all social links to my profiles (LinkedIn, GitHub, Medium, Twitter, Instagram)

---

## Features

These features are part of the original template:

- **Hero Section** — Animated heading and quick work showcase
- **Navbar** — Configurable links for job seekers or freelancers
- **About Section** — Role highlights and a "View My Story" journey modal
- **Projects Section** — Expandable project list and case study pages
- **Skills Section** — Interactive universe-style animation with skill logos
- **Service Section** — Toggleable between Skills and Services view
- **Contact Section** — Email, location, social icons, and a contact form
- **Footer** — Social links and navigation

---

## Deployment Status

| Item         | Status            |
|--------------|-------------------|
| Live Demo    | Not deployed yet  |
| Hosting      | Not configured yet |
| Domain       | Not set up yet    |
| CI/CD        | Not configured yet |

> Deployment will be set up on Vercel. This section will be updated once live.
>
> **Note:** Until this is deployed, `config/seo.ts` and the structured-data block in `app/layout.tsx` still point to the original template's URL (`mehak-naqvi.vercel.app`) for the canonical link, Open Graph URL, and preview image — these are placeholders to be swapped for my own domain and photo once deployed.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
