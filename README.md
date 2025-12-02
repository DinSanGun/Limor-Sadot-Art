# Limor Sadot Art – Portfolio Website

A fully custom, responsive portfolio website for collage artist **Limor Sadot**, built with **React**, **JavaScript**, and **SCSS**, and deployed on **AWS Amplify**.
The site presents a large multi-category artwork gallery, curated video section, and a contact form powered by a separate **Node.js/Express** backend hosted on **AWS EC2**.

* **Live website:** https://www.limorsadot.com/
* **Frontend repo:** https://github.com/DinSanGun/Limor-Sadot-Art
* **Backend (Express API):** https://github.com/DinSanGun/limor-sadot-server

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Architecture](#architecture)
* [Tech Stack](#tech-stack)
* [Key Skills Demonstrated](#key-skills-demonstrated)
* [Potential Improvements](#potential-improvements)

---

## Project Overview

This project was built as a production-ready portfolio for a professional visual artist. It does **not** rely on templates or site builders; every component, animation, layout, and responsive behavior was implemented manually using core web technologies.

The primary goal was to architect a clean, scalable codebase that prioritizes:
* **Separation of concerns:** distinct logic for components, pages, layout, and styles.
* **Reusable SCSS patterns:** using mixins and variables to ensure consistency.
* **Maintainability:** logical naming conventions and a predictable file structure.
* **Full-Stack Implementation:** decoupling the UI (Amplify) from the API logic (EC2).

---

## Features

### User-Facing

* 🎨 **Multi-category Artwork Gallery**
    Built from scratch to display extensive artwork collections organized by themes. Each gallery is implemented as a reusable component for scalability.
* 🎥 **Video Showcase Section**
    Displays curated videos using a dedicated `<YouTubeVideo />` component for consistent embedding and aspect-ratio handling.
* ✉️ **Contact Form with API Integration**
    Form submits data to a custom backend hosted on AWS EC2, ensuring secure message handling.
* 📱 **Responsive, Mobile-First Design**
    The entire layout (navigation, gallery grid, typography) adapts across breakpoints using custom SCSS mixins.
* ✨ **Custom Animations**
    Subtle UI interactions defined in a dedicated styles file and applied via utility classes, avoiding heavy external animation libraries.

---

## Architecture

The website is designed as a **single-page application (SPA)** with an emphasis on clarity and modularity.

### File Structure & SCSS

The project follows industry-standard SCSS architecture to prevent style pollution and ensure reusability:
* `_base.scss` → Global resets and universal rules.
* `_typography.scss` → Centralized font sizes and weights.
* `_animations.scss` → Reusable keyframes and transitions.
* `_mixins.scss` → Breakpoints and responsive logic.

### Component Structure & Principles

The React structure focuses on readability and the "DRY" principle:
* **Modular Styles:** Each page and component has its own dedicated SCSS file to keep CSS localized.
* **Atomic Components:** Reusable UI elements (`BackButton.js`, `GoTop.js`, `YouTubeVideo.js`) are separated from complex page logic.
* **Consistent Naming:** Follows React best practices, using PascalCase for components and clear, predictable file names.

---

## Tech Stack

### Frontend
* **React.js** – Component-based SPA structure
* **JavaScript (ES6+)**
* **SCSS** – Modular styling with preprocessor features

### Backend (Contact API)
* **Node.js & Express.js**
* Hosted on **AWS EC2**
* Handles routing, CORS configuration, and form processing.

### Deployment / DevOps
* **AWS Amplify** – CI/CD pipeline and hosting for the React app.
* **GitHub** – Version control and source integration.

---

## Key Skills Demonstrated

This project highlights the following engineering capabilities:
* **Frontend Architecture:** Designing large, multi-section React applications without reliance on external UI component libraries.
* **Advanced CSS/SCSS:** Writing modular styles using variables, mixins, and clean naming conventions.
* **Full-Stack Integration:** Implementing a decoupled backend API and managing form submissions.
* **Cloud Infrastructure:** Managing a split-host environment (Frontend on Amplify, Backend on EC2) and configuring production endpoints.

---

## Potential Improvements

Future roadmap for scalability and performance:
* 🗂 **CMS Integration:** Migrate static artwork data to a headless CMS or database.
* ⚡ **Performance Optimization:** Implement lazy-loading for gallery images to improve load times.
* ♿ **Accessibility:** Enhance ARIA roles and semantic navigation for screen readers.

---

## Credits

* **Artist:** [Limor Sadot](https://www.limorsadot.com/)
* **Design & Development:** **Din Yair Sadot**

***
