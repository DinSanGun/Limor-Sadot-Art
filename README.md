# Limor Sadot Art – Portfolio Website

A responsive, single-page portfolio website for collage artist **Limor Sadot**, built from scratch with **React**, **SCSS**, and **JavaScript**, and deployed on **AWS Amplify**.  
The site showcases a large artwork gallery with sub-categories, a curated video section, and a contact form backed by a custom **Node.js/Express** server hosted on **AWS EC2**.

> **Live site:** https://www.limorsadot.com/  
> **Frontend repo:** https://github.com/DinSanGun/Limor-Sadot-Art  
> **Contact API (backend):** https://github.com/DinSanGun/limor-sadot-server

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture & Project Structure](#architecture--project-structure)
- [AWS Infrastructure](#aws-infrastructure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [What This Project Demonstrates](#what-this-project-demonstrates)
- [Potential Improvements](#potential-improvements)
- [Credits](#credits)

---

## Project Overview

This project is a fully custom, production-ready portfolio for a visual artist.  
Instead of using templates or website builders (WordPress, Wix, etc.), the entire UI and deployment flow were implemented manually:

- **Custom design** based on the artist’s visual style and assets.
- **Custom frontend** built with React + SCSS (no page builders).
- **Custom backend** (separate repo) for handling contact form submissions.
- **Deployed and hosted on AWS** using Amplify (frontend) and EC2 (backend).

The main goals:

1. Provide a visually rich, fast, and responsive gallery experience.
2. Make it simple for visitors and potential clients to explore artworks and contact the artist.
3. Use this as an end-to-end example of modern web development skills: React, styling, responsiveness, backend integration, and AWS deployment.

---

## Features

### User-Facing Features

- 🎨 **Artwork gallery with sub-categories**  
  - Multiple gallery sections for different types/series of work.  
  - Layout and styling created from scratch, using the artist’s design language.

- 📂 **Category-based browsing**  
  - Artworks are grouped by themes/collections, making it easier to navigate a large portfolio.

- 🎥 **Recent videos section**  
  - Section for the artist’s latest videos, updated manually every few months.

- ✉️ **Contact form with backend integration**  
  - Contact form sends data to a dedicated Node.js/Express backend running on AWS EC2.  
  - Backend handles form requests (e.g., sending emails / logging messages).

- 📱 **Responsive design**  
  - Optimized for desktop, tablet, and mobile.  
  - Layout adjusts to different viewports and maintains a clean, readable gallery.

- ✨ **Subtle animations**  
  - Custom animations and transitions implemented using JavaScript and SCSS (no heavy animation libraries).

---

## Tech Stack

### Frontend

- **React** (JavaScript, SPA)
- **SCSS** for styling
- **HTML5** + **CSS3**
- Vanilla **JavaScript** for interactive behavior and animations

### Backend (Contact Form)

- **Node.js**
- **Express.js**
- Hosted on **AWS EC2**  
  (see backend repo: https://github.com/DinSanGun/limor-sadot-server)

### Deployment & DevOps

- **AWS Amplify** – build & hosting for the React app
- GitHub as the source repository
- Standard **Node/npm** toolchain for building and running the app

---

## Architecture & Project Structure

At a high level, the frontend is structured as a **single-page React application** with components organized by feature/section.

A typical structure (simplified):

```text
Limor-Sadot-Art/
├─ public/               # Static assets, index.html, favicon, etc.
├─ src/
│  ├─ components/        # Reusable UI building blocks
│  │  ├─ Header/
│  │  ├─ Footer/
│  │  ├─ Gallery/
│  │  ├─ VideoSection/
│  │  ├─ ContactForm/
│  │  └─ ...
│  ├─ pages/             # Page-level compositions (e.g. Home)
│  ├─ styles/            # Global SCSS, variables, mixins, layout
│  ├─ assets/            # Artwork images, video thumbnails, icons, etc.
│  ├─ utils/             # Helper functions if needed (e.g. data mappers)
│  ├─ App.js             # Root SPA composition
│  ├─ index.js           # React entry point
│  └─ ...
├─ package.json
└─ ...


### Key Design Decisions

- **Component-based structure** for maintainability and clarity.  
- **SCSS architecture** (variables, mixins, nested rules) for consistent styling.  
- **Responsive design logic** embedded into SCSS breakpoints.  
- **Backend separation**: contact form uses a dedicated API hosted on EC2 to keep the frontend purely presentational.

---

## Potential Improvements (Optional)

These are optional enhancements that could naturally scale the project further:

- 🗂 Move artwork metadata to a small database or CMS instead of static data.  
- 🧰 Add an admin panel for easier content updates (uploading new artworks, videos).  
- 📈 Add analytics or heatmaps to study visitor engagement.  
- ♿ Improve accessibility (semantic roles, ARIA labels) and SEO metadata.

These points demonstrate awareness of how the project could evolve in a professional full-stack environment.

---

## Credits

- **Artist & Artwork:** [Limor Sadot](https://www.limorsadot.com/)  
- **Design & Development:** **Din Yair Sadot**  
  (React, SCSS, JavaScript, Node.js, AWS Amplify & EC2)