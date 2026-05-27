# 🎬 Movie Management API

A simple backend API project built using Express JS and Node.js to manage movie records.  
This project demonstrates API creation, JSON handling, file handling, and API testing using Thunder Client / Postman.

---

# 🚀 Features

- Get all movie records
- Add new movie records
- Store data inside JSON file
- Test APIs using Thunder Client / Postman

---

# 🛠️ Technologies Used

- Node.js
- Express JS
- Thunder Client / Postman
- JSON File Storage

---

# 📁 Project Structure

```bash
Movie-API-Project
│
├── server.js
├── movies.json
├── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <your-github-link>
```

## Open Folder

```bash
cd Movie-API-Project
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

Output:

```bash
Server Running On Port 5000
```

---

# 📡 API Endpoints

## 1️⃣ GET Movies

```http
GET /movies
```

### URL

```bash
http://localhost:5000/movies
```

### Response

```json
[
   {
      "id": 1,
      "name": "Avengers",
      "rating": "9/10"
   }
]
```

---

## 2️⃣ Add Movie

```http
POST /add-movie
```

### URL

```bash
http://localhost:5000/add-movie
```

### Request Body

```json
{
   "id": 3,
   "name": "Inception",
   "rating": "9.5/10"
}
```

### Response

```json
{
   "message": "Movie Added Successfully"
}
```

---

# 📸 Screenshots

- GET API Response
- POST API Response
- Updated movies.json File

---

# 💡 Concepts Learned

- REST APIs
- GET & POST Requests
- Express Middleware
- JSON Handling
- File Handling using fs module
- API Testing
- Backend Request-Response Workflow

---

# 👨‍💻 Author

sahil belim