# Limor Sadot Art – Portfolio Website

A fully custom, responsive portfolio website for collage artist **Limor Sadot**, built with **React**, **JavaScript**, and **SCSS**, and deployed on **AWS Amplify**.

The site presents a large multi-category artwork gallery, a curated video section, and a contact form powered by a serverless **AWS Lambda + Amazon SES** backend.

* **Live website:** https://www.limorsadot.com/
* **Frontend repo:** https://github.com/DinSanGun/Limor-Sadot-Art

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Architecture](#architecture)
* [Recent Improvements](#recent-improvements)
* [Tech Stack](#tech-stack)
* [Security & Reliability](#security--reliability)
* [Key Skills Demonstrated](#key-skills-demonstrated)
* [Potential Improvements](#potential-improvements)
* [Credits](#credits)

---

## Project Overview

This project was built as a production-ready portfolio website for a professional visual artist. It does **not** rely on templates or site builders; every component, animation, layout, and responsive behavior was implemented manually using core web technologies.

The website was designed with an emphasis on:

* **Clean visual presentation** for artwork and video content.
* **Responsive behavior** across mobile, tablet, desktop, and large-screen displays.
* **Maintainable frontend architecture** using reusable React components and structured SCSS.
* **Data-driven gallery rendering** to make future gallery and image additions easier.
* **Serverless contact-form handling** using AWS Lambda and Amazon SES.
* **Cost-conscious AWS infrastructure** with reduced ongoing cloud costs.

---

## Features

### User-Facing Features

* 🎨 **Multi-category Artwork Gallery**  
  Displays extensive artwork collections organized by artistic themes and gallery categories.

* 🖼 **Data-Driven Gallery Pages**  
  Gallery pages are generated from shared gallery metadata instead of maintaining many separate gallery-specific files.

* 🔍 **Image Lightbox Experience**  
  Users can open artworks in a larger fullscreen-style view and navigate between images.

* 🎥 **Video Showcase Section**  
  Displays curated videos using a reusable `<YouTubeVideo />` component with consistent layout and aspect-ratio handling.

* ✉️ **Contact Form**  
  Allows visitors to contact the artist directly through a secure serverless backend using AWS Lambda and Amazon SES.

* 📱 **Responsive Design**  
  The layout adapts across screen sizes using custom SCSS structure, responsive units, and media-query mixins.

* ✨ **Custom Animations**  
  Subtle UI animations are implemented manually with SCSS, without relying on heavy animation libraries.

---

## Architecture

The website is implemented as a **React single-page application (SPA)** hosted on **AWS Amplify**.

### Frontend Architecture

The frontend is organized around reusable components, shared layout logic, and structured SCSS.

Main ideas:

* Reusable page and UI components.
* Centralized gallery metadata.
* Shared gallery rendering logic.
* Separate SCSS files for base styles, typography, animations, mixins, pages, and components.
* Consistent naming conventions for images and gallery folders.

### Gallery Refactor

A major refactor was done to simplify the gallery system.

Previously, many galleries relied on separate JavaScript files and repeated logic. The gallery system was refactored into a more generic, data-driven structure where galleries can be rendered from shared metadata and consistent image-folder conventions.

This change removed roughly **3,500–3,600 lines of code**, reducing about **one-third** of the relevant frontend codebase while making the project easier to maintain and extend.

This also creates a stronger foundation for a future admin interface or CMS, where the artist could eventually add or update galleries more independently.

### Contact Form Architecture

The contact form was migrated from a previous **Node.js/Express backend on AWS EC2** to a serverless architecture using:

* **AWS Lambda** – Handles form validation and email sending logic.
* **Amazon SES** – Sends contact-form emails from a verified domain identity.
* **AWS Amplify** – Hosts the React frontend.
* **Route 53** – Manages the production domain.

This reduced infrastructure complexity, removed the need for a constantly running backend server, and lowered monthly AWS costs.

---

## Recent Improvements

Recent work on the project included:

* Improved gallery image loading behavior.
* Reduced flickering when moving between fullscreen images.
* Improved the video page UX by adjusting spacing, video sizing, animations, and visual separation between video items.
* Added responsive refinements for large screens and high-resolution displays.
* Refactored the gallery system into a cleaner data-driven structure.
* Standardized image and folder naming conventions.
* Migrated the contact form from EC2/Express to AWS Lambda + SES.
* Added stronger contact-form validation and anti-spam protections.
* Removed unused frontend dependencies such as EmailJS and dotenv.
* Cleaned unused AWS resources and deprecated infrastructure.
* Removed the old `limorsadot.link` domain and related resources.
* Added AWS budget alerts and root-account MFA.
* Reduced monthly AWS costs from roughly **$25–30/month** to around **$8/month**.

---

## Tech Stack

### Frontend

* **React.js** – Component-based SPA structure.
* **JavaScript (ES6+)**
* **SCSS** – Modular styling with variables, mixins, page styles, component styles, and reusable animation definitions.
* **React Router** – Client-side routing.

### Backend / Contact Form

* **AWS Lambda** – Serverless contact-form handler.
* **Amazon SES** – Email delivery service.
* **AWS SDK for JavaScript** – Used by the Lambda function to send emails.

### Deployment / Cloud

* **AWS Amplify** – Hosting and CI/CD for the React frontend.
* **AWS Route 53** – Domain management.
* **AWS Lambda Reserved Concurrency** – Basic protection against unexpected spikes and cost risk.
* **AWS Budgets** – Cost monitoring and budget alerts.
* **GitHub** – Version control and source integration.

---

## Security & Reliability

The contact form includes several layers of protection:

* **Allowed-origin validation**  
  The Lambda function accepts requests only from the production website domains.

* **HTTP method validation**  
  The backend accepts only the expected request method.

* **Content-Type validation**  
  Requests are expected to use JSON.

* **Body-size validation**  
  Large or unexpected payloads are rejected before processing.

* **Required-field validation**  
  The backend checks that all required fields are present.

* **Input length limits**  
  Name, email, subject, and message fields are limited to prevent oversized input.

* **Email format validation**  
  A basic server-side email validation is performed before sending.

* **Honeypot field**  
  A hidden field is used to reduce basic bot spam.

* **Disabled submit/loading state**  
  Prevents accidental duplicate submissions from regular users.

* **Reserved Lambda concurrency**  
  Limits the number of concurrent Lambda executions to reduce abuse and unexpected cost risk.

* **Safe error handling**  
  The user receives general error messages, while internal errors are logged for debugging.

> Note: Reserved Lambda concurrency is not a full IP-based rate limiter. A production-grade rate-limiting layer could be added in the future using AWS WAF, API Gateway throttling, or a token-bucket mechanism with a persistent store.

---

## Key Skills Demonstrated

This project demonstrates:

* **Frontend architecture** – Building a custom React SPA without external UI templates.
* **Component design** – Separating reusable components from page-level logic.
* **SCSS architecture** – Using mixins, variables, modular files, and responsive styling.
* **Data-driven UI design** – Refactoring repeated gallery code into a shared rendering system.
* **Performance awareness** – Improving image loading and reducing visual flicker.
* **Serverless backend development** – Replacing an EC2 backend with AWS Lambda and SES.
* **Security-conscious development** – Adding validation, origin checks, honeypot protection, and safer error handling.
* **Cloud infrastructure management** – Working with Amplify, Lambda, SES, Route 53, IAM, budgets, and AWS account security.
* **Cost optimization** – Reducing AWS costs by removing unnecessary infrastructure and replacing EC2 with serverless services.
* **Production maintenance** – Updating an existing live website while keeping it stable and usable.

---

## Potential Improvements

Future improvements could include:

* 🗂 **Admin Interface / CMS**  
  Allow the artist to add, edit, and manage galleries without code changes.

* ⚡ **Further Image Optimization**  
  Add automatic image resizing, modern formats, or CDN-level optimizations.

* 🛡 **Production-Grade Rate Limiting**  
  Add AWS WAF or API Gateway throttling for stronger protection against abuse.

* ♿ **Accessibility Improvements**  
  Improve keyboard navigation, ARIA labels, semantic structure, and screen-reader support.

* 📊 **Monitoring & Logging**  
  Add more structured monitoring for contact-form usage and Lambda errors.

---

## Credits

* **Artist:** [Limor Sadot](https://www.limorsadot.com/)
* **Design & Development:** **Din Yair Sadot**