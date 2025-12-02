# Limor Sadot Art – Portfolio Website

A responsive, single-page portfolio website for collage artist **Limor Sadot**, built from scratch with **React**, **SCSS**, and **JavaScript**, and deployed on **AWS Amplify**.  
The site features a large artwork gallery with sub-categories, a curated video section, and a contact form backed by a custom **Node.js/Express** service running on **AWS EC2**.

> **Live site:** https://www.limorsadot.com/  
> **Frontend repo:** https://github.com/DinSanGun/Limor-Sadot-Art  
> **Backend (contact form API):** https://github.com/DinSanGun/limor-sadot-server

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Potential Improvements](#potential-improvements)
- [Credits](#credits)

---

## Project Overview

This project is a fully custom, production-ready portfolio designed for a professional visual artist.  
Unlike page-builder solutions (Wix, WordPress, etc.), **every component was implemented manually**, including layout, responsiveness, animations, and backend integration.

The main goals were:

- Create a visually rich, fast, and intuitive gallery experience.
- Ensure the website works seamlessly across screen sizes.
- Implement a real full-stack structure using React, Node.js, and AWS.
- Gain hands-on experience with modern web deployment pipelines and cloud tools.

---

## Features

### User-Facing

- 🎨 **Artwork Gallery with Sub-Categories**  
  Multiple gallery sections built from scratch using custom SCSS layouts and asset handling.

- 🎥 **Video Section**  
  Displays the artist’s recent curated video content, updated periodically.

- ✉️ **Contact Form with Backend Integration**  
  Connected to a custom Express.js API hosted on AWS EC2 for message handling.

- 📱 **Responsive Design**  
  Carefully constructed mobile, tablet, and desktop breakpoints with SCSS.

- ✨ **Custom Animations**  
  Subtle transitions and effects implemented manually without heavy animation libraries.

---

## Tech Stack

### Frontend

- **React** (SPA architecture)
- **SCSS** for styling
- **HTML5 / CSS3**
- **Vanilla JavaScript** for animations and UI interactions

### Backend (Contact Form API)

- **Node.js**
- **Express.js**
- Hosted on **AWS EC2**  
  (backend repo: https://github.com/DinSanGun/limor-sadot-server)

### Deployment / DevOps

- **AWS Amplify** – CI/CD and hosting for the React app
- **GitHub** – version control and integration with Amplify build pipeline

---

## Architecture

The website is implemented as a **single-page React application** composed of:

- **Layout components** – header, navigation, footer, and shared layout wrappers.
- **Feature components** – gallery sections, video section, contact form, buttons, and utilities.
- **Page-level components** – home, gallery, themes, series, about, contact, etc.
- **SCSS layers** – base styles, typography, animations, utilities, and per-component/page styling.

Key design decisions:

- **Component-based structure** for maintainability and clarity.  
- **SCSS architecture** (variables, mixins, nested rules) for consistent styling.  
- **Responsive design logic** expressed through SCSS breakpoints.  
- **Backend separation**: the contact form uses a dedicated API hosted on EC2, keeping the frontend purely presentational and the server responsible for handling form submissions.

---

## Potential Improvements

These are common and professional enhancements for future scalability:

- 🗂 Move artwork metadata to a small database or CMS instead of static data.  
- 🧰 Add an admin panel for easier content updates (uploading artworks, managing categories).  
- 📈 Add analytics to understand visitor engagement.  
- ♿ Improve accessibility (semantic roles, ARIA labels) and SEO metadata.

---

## Credits

- **Artist & Artwork:** [Limor Sadot](https://www.limorsadot.com/)  
- **Design & Development:** **Din Yair Sadot**  
  (React, SCSS, JavaScript, Node.js, AWS Amplify & EC2)
