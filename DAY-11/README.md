# 📘 Student Result Management API

A simple backend API project built using **Node.js**, **Express.js**, and **MVC Architecture** to calculate student results dynamically using query parameters.

---

# 🚀 Features

* MVC Architecture
* Express Routing
* Query Parameters
* Dynamic Result Calculation
* Grade Generation
* JSON API Response
* Modular Backend Structure

---

# 📁 Project Structure

```text
student-result-api/
│
├── controllers/
│   └── resultController.js
│
├── routes/
│   └── resultRoutes.js
│
├── server.js
│
├── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/student-result-api.git
```

## Move into Project

```bash
cd student-result-api
```

## Install Dependencies

```bash
npm install
```

---

# ▶️ Run Server

```bash
node server.js
```

Server will run on:

```text
http://localhost:5000
```

---

# 📌 API Endpoint

## GET Result API

```text
/result?math=80&science=70&english=90
```

---

# ✅ Sample Output

```json
{
  "marks": {
    "math": 80,
    "science": 70,
    "english": 90
  },
  "total": 240,
  "percentage": 80,
  "grade": "A"
}
```

---

# 🛠️ Technologies Used

* Node.js
* Express.js
* JavaScript
* MVC Architecture

---

# 📚 Concepts Learned

* MVC Architecture
* Query Parameters
* Express Routing
* Controllers
* JSON Responses
* Backend Modularization

---

# 👨‍💻 Author

sahil belim
