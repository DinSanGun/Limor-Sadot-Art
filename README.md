# Limor Sadot Art – Portfolio Website

A fully custom, responsive portfolio website for collage artist **Limor Sadot**, built with **React**, **JavaScript**, and **SCSS**, and deployed on **AWS**.

The site presents a large multi-category artwork gallery, a curated video section, and a production contact form integrated with cloud-based email delivery.

* **Live website:** https://www.limorsadot.com/
* **Frontend repo:** https://github.com/DinSanGun/Limor-Sadot-Art

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Architecture](#architecture)
* [Recent Improvements](#recent-improvements)
* [Tech Stack](#tech-stack)
* [Key Skills Demonstrated](#key-skills-demonstrated)
* [Potential Improvements](#potential-improvements)
* [Credits](#credits)

---

## Project Overview

This project was built as a production portfolio website for a professional visual artist. It does **not** rely on templates or site builders; the layout, components, styling, animations, gallery behavior, and responsive design were implemented manually using core web technologies.

The website was designed with an emphasis on:

* Clean visual presentation for artwork and video content.
* Responsive behavior across mobile, tablet, desktop, and large-screen displays.
* Maintainable frontend architecture using reusable React components and structured SCSS.
* A scalable gallery structure that makes future gallery and image additions easier.
* A lightweight cloud-based contact-form flow.
* Cost-conscious deployment and ongoing production maintenance.

---

## Features

### User-Facing Features

* 🎨 **Multi-category Artwork Gallery**  
  Displays extensive artwork collections organized by artistic themes and gallery categories.

* 🖼 **Reusable Gallery Pages**  
  Gallery pages are generated through a shared structure instead of maintaining many separate gallery-specific implementations.

* 🔍 **Image Lightbox Experience**  
  Users can open artworks in a larger fullscreen-style view and navigate between images.

* 🎥 **Video Showcase Section**  
  Displays curated videos using a reusable video component with consistent layout and aspect-ratio handling.

* ✉️ **Contact Form**  
  Allows visitors to contact the artist directly through a production cloud-based form flow.

* 📱 **Responsive Design**  
  The layout adapts across screen sizes using custom SCSS structure, responsive units, and media-query mixins.

* ✨ **Custom Animations**  
  Subtle UI animations are implemented manually with SCSS, without relying on heavy animation libraries.

---

## Architecture

The website is implemented as a **React single-page application (SPA)** and deployed on AWS.

### Frontend Architecture

The frontend is organized around reusable components, shared layout logic, gallery metadata, and structured SCSS.

Main ideas:

* Reusable page and UI components.
* Shared gallery rendering logic.
* Centralized gallery configuration.
* Separate SCSS files for base styles, typography, animations, mixins, pages, and components.
* Consistent naming conventions for images and gallery folders.

### Gallery Refactor

A major refactor was done to simplify the gallery system.

Previously, many galleries relied on separate JavaScript files and repeated logic. The gallery system was refactored into a more generic structure where galleries can be rendered from shared configuration and consistent image-folder conventions.

This change removed roughly **3,500–3,600 lines of code**, reducing about **one-third** of the relevant frontend codebase while making the project easier to maintain and extend.

This also creates a stronger foundation for a future admin interface or CMS, where the artist could eventually add or update galleries more independently.

### Contact Form Architecture

The contact form was migrated from a previous server-based backend to a lighter cloud-based architecture.

This reduced infrastructure complexity, removed the need for a constantly running backend server, and lowered monthly AWS costs while keeping the contact form suitable for a small production portfolio website.

---

## Recent Improvements

Recent work on the project included:

* Improved gallery image loading behavior.
* Reduced flickering when moving between fullscreen images.
* Improved the video page UX by adjusting spacing, video sizing, animations, and visual separation between video items.
* Added responsive refinements for large screens and high-resolution displays.
* Refactored the gallery system into a cleaner reusable structure.
* Standardized image and folder naming conventions.
* Migrated the contact form to a lighter cloud-based backend flow.
* Improved contact-form robustness and user feedback.
* Removed unused frontend libraries such as EmailJS and dotenv.
* Cleaned unused AWS resources and deprecated infrastructure.
* Removed an old unused domain and related resources.
* Added cloud cost monitoring and account-level safeguards.
* Reduced monthly AWS costs from roughly **$25–30/month** to around **$8/month**.

---

## Tech Stack

### Frontend

* **React.js** – Component-based SPA structure.
* **JavaScript (ES6+)**
* **SCSS** – Modular styling with variables, mixins, page styles, component styles, and reusable animation definitions.
* **React Router** – Client-side routing.

### Contact Form / Cloud Integration

* Cloud-based form handling.
* Email delivery integration.
* Server-side form processing.

### Deployment / Cloud

* **AWS** – Hosting, deployment, domain, and supporting cloud services.
* **GitHub** – Version control and source integration.

---

## Reliability & Maintenance

The project includes several production-oriented considerations:

* Server-side handling for contact-form submissions.
* Validation and error handling for form-related flows.
* User feedback during form submission.
* Ongoing cleanup of unused services, libraries, and configuration.
* Cost monitoring and cloud account safeguards.
* A simpler architecture that reduces operational overhead.

The current implementation is intentionally lightweight and appropriate for a small production portfolio website.

---

## Key Skills Demonstrated

This project demonstrates:

* **Frontend architecture** – Building a custom React SPA without external UI templates.
* **Component design** – Separating reusable components from page-level logic.
* **SCSS architecture** – Using mixins, variables, modular files, and responsive styling.
* **Reusable UI design** – Refactoring repeated gallery code into a shared rendering system.
* **Performance awareness** – Improving image loading behavior and reducing visual flicker.
* **Cloud-based integration** – Connecting a production frontend with a cloud-handled contact form.
* **Production maintenance** – Updating an existing live website while keeping it stable and usable.
* **Cost optimization** – Reducing monthly cloud costs by simplifying infrastructure and removing unused resources.
* **Long-term maintainability** – Preparing the codebase for easier gallery additions and future admin/CMS capabilities.

---

## Potential Improvements

Future improvements could include:

* 🗂 **Admin Interface / CMS**  
  Allow the artist to add, edit, and manage galleries without code changes.

* ⚡ **Further Image Optimization**  
  Add automatic image resizing, modern image formats, or CDN-level optimizations.

* ♿ **Accessibility Improvements**  
  Improve keyboard navigation, semantic structure, and screen-reader support.

* 📊 **Monitoring & Maintenance Improvements**  
  Add more structured operational visibility for production behavior and errors.

---

## Credits

* **Artist:** [Limor Sadot](https://www.limorsadot.com/)
* **Design & Development:** **Din Yair Sadot**