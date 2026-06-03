# 🔐 Day 14 - Authentication System

## 📌 Overview

This project demonstrates a complete Authentication and Authorization system using Node.js, Express.js, MongoDB Atlas, JWT, and Bcrypt.

The application allows users to:

* Register a new account
* Login with email and password
* Generate JWT tokens
* Access protected routes
* Verify users using middleware

---

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (jsonwebtoken)
* BcryptJS
* Dotenv
* CORS
* Postman

---

## 📂 Project Structure

```text
Day-14-Authentication
│
├── controllers
│   └── authController.js
│
├── middleware
│   └── authMiddleware.js
│
├── models
│   └── User.js
│
├── routes
│   └── authRoutes.js
│
├── .env
├── server.js
└── package.json
```

---

## 📡 API Endpoints

### Register User

```http
POST /api/register
```

### Login User

```http
POST /api/login
```

### Protected Profile Route

```http
GET /api/profile
```

---

## 🔒 Security Features

* Password Hashing using Bcrypt
* JWT Token Generation
* JWT Token Verification
* Protected Routes
* Middleware Authentication
* Environment Variables

---

## 📸 Screenshots

### Register API Response

![Register API](./screenshots/RegisterAPI.png)

---

### Login API Response

![Login API](./screenshots/LoginAPI.png)

---

### Protected Route Access

![Protected Route](./screenshots/ProfileAPI.png)

---

## 🎯 Learning Outcomes

* Authentication Concepts
* Authorization Concepts
* Password Hashing
* JWT Authentication
* Middleware Usage
* Route Protection
* MongoDB Atlas Integration
* API Testing with Postman

---

## 👨‍💻 Author

Sahil Belim
