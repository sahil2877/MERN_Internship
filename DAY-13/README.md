# 📚 Book Library API

A simple backend project built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose** following the **MVC Architecture** pattern.

---

## 🚀 Features

* MongoDB Atlas Integration
* MVC Architecture
* Express.js Backend
* Mongoose ODM
* Create Book API
* Get All Books API
* Environment Variables Support
* REST API Testing with Postman

---

## 📂 Project Structure

```text
BookLibrary/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── bookController.js
│
├── models/
│   └── Book.js
│
├── routes/
│   └── bookRoutes.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Dotenv
* Postman

---

## ⚙️ Installation

### Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### Move into Project Directory

```bash
cd BookLibrary
```

### Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
PORT=5000
```

---

## ▶️ Run Project

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

## 📡 API Endpoints

### 1. Create Book

**POST**

```http
http://localhost:5000/books
```

Request Body

```json
{
  "title": "Java Programming",
  "author": "James Gosling",
  "price": 499
}
```

Response

```json
{
  "_id": "685xxxx",
  "title": "Java Programming",
  "author": "James Gosling",
  "price": 499
}
```

---

### 2. Get All Books

**GET**

```http
http://localhost:5000/books
```

Response

```json
[
  {
    "_id": "685xxxx",
    "title": "Java Programming",
    "author": "James Gosling",
    "price": 499
  }
]
```

---

## 🗄️ Database Schema

### Book Model

```js
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
```

---

# 📸 Screenshots / Proof of Work

## MongoDB Atlas Connected Successfully

![MongoDB Connection](./screenshots/mongodbConnection.png)

---

## Create Book API Response

![Create Book API](./screenshots/createBook.png)

---

## Get Books API Response

![Get Books API](./screenshots/getBooks.png)

---

## MongoDB Atlas Collection Data

![MongoDB Atlas Collection](./screenshots/database.png)

---

## 🎯 Learning Outcomes

* MongoDB Atlas Integration
* Mongoose Models & Schemas
* MVC Architecture
* Express Routing
* REST API Development
* Environment Variables
* Cloud Database Operations
* Postman API Testing

---

## 👨‍💻 Author

**Sahil Belim**

MERN Stack Internship
Prelytix Private Limited
