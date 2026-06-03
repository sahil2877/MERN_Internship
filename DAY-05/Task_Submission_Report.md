# 📑 Day 5 Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field             | Details                     |
| :---------------- | :-------------------------- |
| **Student Name**  | Sahil Belim                 |
| **Internship ID** | ND                          |
| **Date**          | 2026-05-16                  |
| **Course Day**    | Day 5                       |
| **GitHub Repo**   | https://github.com/sahil2877/MERN_Internship |

---

# 🎯 Daily Objective

> Build a responsive Tailwind CSS + DaisyUI Component Showcase website using React and demonstrate multiple UI components with reusable React architecture.

---

# 🛠️ Implementation & Changes (Self-Documentation)

## 1. New Features / Logic Implemented

* **What:** Built a Tailwind CSS and DaisyUI Component Showcase project.

* **How:**

  * Configured Tailwind CSS v4.
  * Integrated DaisyUI plugin.
  * Created a component-based React structure.
  * Implemented countdown screen before project initialization.
  * Created reusable React components for different UI sections.
  * Added responsive layouts using Tailwind utility classes.
  * Implemented DaisyUI components:

    * Navbar
    * Hero
    * Buttons
    * Cards
    * Alerts
    * Avatar
    * Forms
    * Progress Bars
    * Tables
    * Footer

* **Why:**

  * To learn Tailwind CSS utility-first styling.
  * To understand DaisyUI component integration.
  * To build reusable and scalable React components.
  * To practice responsive UI development.

---

## 2. UI/UX Enhancements

* Added responsive navigation bar.
* Added countdown loading screen.
* Added hero section with call-to-action button.
* Added responsive cards layout.
* Added alert components for notifications.
* Added avatar showcase section.
* Added form components with inputs and textarea.
* Added progress indicators.
* Added responsive table component.
* Added modern footer section.
* Used DaisyUI theme styling for modern appearance.

---

## 3. Database / Backend Updates

* No backend or database integration was required for this task.

---

# 💻 Code Snippet: My Primary Contribution

```jsx
function ButtonsDemo() {

  return (

    <div className="flex flex-wrap justify-center gap-5">

      <button className="btn btn-primary">
        Primary
      </button>

      <button className="btn btn-secondary">
        Secondary
      </button>

      <button className="btn btn-accent">
        Accent
      </button>

    </div>

  )

}
```

This section demonstrates the use of DaisyUI button components with Tailwind CSS utility classes.

---

# 📸 Screenshots / Proof of Work

## Countdown Screen

![Countdown](./screenshots/countdown.png)

---

## Navbar Section

![Navbar](./screenshots/navbar.png)

---

## Buttons Showcase

![Buttons](./screenshots/buttons.png)

---

## Cards Showcase

![Cards](./screenshots/cards.png)

---

## Forms Section

![Forms](./screenshots/forms.png)

---

## Table Component

![Table](./screenshots/table.png)

---

# 🛑 Challenges Faced & Solutions

## Problem

* DaisyUI styles were not loading properly.

## Solution

* Added DaisyUI plugin using:

```css
@import "tailwindcss";
@plugin "daisyui";
```

and restarted the Vite development server.

---

## Problem

* Countdown screen was not appearing before application load.

## Solution

* Implemented React state management using `useState()` and `useEffect()` to control the countdown timer.

---

# 💡 Key Learnings

* Learned Tailwind CSS v4 setup and configuration.
* Learned DaisyUI component integration.
* Learned React component-based architecture.
* Learned reusable UI design principles.
* Learned responsive design using Tailwind utility classes.
* Learned countdown implementation using React Hooks.
* Learned modern frontend project organization.

---

# 🔗 Live Preview

* Deployment not done yet.

---

**Signature:**
Sahil Belim
