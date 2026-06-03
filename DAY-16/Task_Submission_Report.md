# 📑 Day 16 Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field             | Details                       |
| :---------------- | :---------------------------- |
| **Student Name**  | sahil belim                   |
| **Internship ID** | ND                            |
| **Date**          | 2026-06-30                    |
| **Course Day**    | Day 16                        |
| **GitHub Repo**   | https://github.com/sahil2877/MERN_Internship |

---

# 🎯 Daily Objective

> Learn backend deployment workflow by building an Express API, testing endpoints locally, integrating with GitHub, and deploying the backend on Render for public access.

---

# 🛠️ Implementation & Changes (Self-Documentation)

## 1. New Features / Logic Implemented

### What

Built and deployed a Movie API backend using Express.js and Render.

### How

* Created an Express server.
* Added movie data and API routes.
* Implemented route parameter handling.
* Tested APIs locally using browser and Postman.
* Connected GitHub repository with Render.
* Configured deployment settings.
* Successfully deployed the API and generated a live public URL.
* Verified API functionality after deployment.

### Why

To understand the complete backend deployment workflow and how APIs are hosted in production environments.

---

## 2. Deployment Features Implemented

* Express Backend Deployment
* Movie API Endpoints
* Dynamic Route Parameters
* JSON API Responses
* GitHub Integration
* Render Deployment Workflow
* Live API Access

---

## 3. Backend Updates

Implemented routes:

* `GET /`
* `GET /api/movies`
* `GET /api/movies/:id`

Configured:

* Production Start Command
* Deployment Settings
* Browser Testing
* API Validation

---

# 💻 Code Snippet: My Primary Contribution

```js
app.use(
  "/api",
  require("./routes/movieRoutes")
);
```

This configuration was used to register movie routes and expose APIs through the deployed backend application.

---

# 📸 Screenshots / Proof of Work

## Render Deployment Successful

![Render Deploy](./screenshots/renderDeploy.png)

---

## Browser API Testing

![Browser Testing](./screenshots/browserTesting.png)

---

## Postman API Testing

![Postman Testing](./screenshots/postmanAPI.png)

---

# 🛑 Challenges Faced & Solutions

## Problem

Deployment configuration was initially unfamiliar and required understanding Render setup.

## Solution

Configured build command, start command, and root directory correctly before deployment.

---

## Problem

Needed to verify API accessibility after deployment.

## Solution

Tested all endpoints using browser and Postman after deployment.

---

# 💡 Key Learnings

* Learned Express.js deployment workflow.
* Learned Render hosting platform.
* Learned GitHub integration with deployment services.
* Learned route management and API testing.
* Learned production deployment concepts.
* Learned public API hosting.
* Learned deployment troubleshooting.

---

# 🔗 Live Preview

https://day16-movie-api.onrender.com

Movies API:

https://day16-movie-api.onrender.com/api/movies

---

**Signature:**
sahil belim
