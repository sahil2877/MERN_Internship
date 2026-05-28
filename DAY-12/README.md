# 🔐 Secure Message Encoder

A modern React-based mini project that demonstrates the concepts of Encoding, Decoding, Encryption, and Decryption.

---

# 🚀 Features

✅ Base64 Encoding
✅ Base64 Decoding
✅ Caesar Cipher Encryption
✅ Caesar Cipher Decryption
✅ Copy Result Button
✅ Character Counter
✅ Responsive UI
✅ Dark Theme Design

---

# 🛠️ Tech Stack

* React JS
* Vite
* JavaScript
* CSS

---

# 📂 Project Structure

```bash
src/
 ├── components/
 │     ├── Encoder.jsx
 │     ├── Encryptor.jsx
 │
 ├── App.jsx
 ├── App.css
 ├── main.jsx
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

---

## 2️⃣ Navigate to Project

```bash
cd secure-message-encoder
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

---

# 📌 Encoding vs Encryption

## 🔹 Encoding

Encoding converts data into another format for safe transmission.

Example:

```text
Hello → SGVsbG8=
```

---

## 🔹 Encryption

Encryption secures data using an algorithm and key.

Example:

```text
HELLO → KHOOR
```

---

# 🔒 Caesar Cipher Logic

Each character is shifted by +3 ASCII values during encryption.

Example:

```text
A → D
B → E
```

Decryption shifts characters back by -3.

---

# 💻 Main Functionalities

## Encoding

Uses:

```javascript
btoa(text)
```

---

## Decoding

Uses:

```javascript
atob(text)
```

---

## Encryption

Uses:

```javascript
String.fromCharCode(text.charCodeAt(i) + 3)
```

---

## Decryption

Uses:

```javascript
String.fromCharCode(text.charCodeAt(i) - 3)
```

---

# 📸 Screenshots / Proof of Work

## 🖥️ UI Screenshot

```md
![UI Screenshot](./screenshots/ui.png)
```

---

## 🔐 Encoding & Encryption Result

```md
![Encoding Result](./screenshots/encoding-encryption.png)
```

---

## 🔓 Decoding & Decryption Result

```md
![Decoding Result](./screenshots/decoding-decryption.png)
```

---

# 🎯 Learning Outcomes

* React State Management
* Event Handling
* String Manipulation
* Clipboard API
* Encoding Concepts
* Encryption Concepts
* Responsive UI Design

---

# 📌 Future Improvements

* AES Encryption
* Password Protected Encryption
* Download Encrypted File
* History Section
* Dark/Light Mode Toggle

---

# 👨‍💻 Author

Sahil Belim

---
