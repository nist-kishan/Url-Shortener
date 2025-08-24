# 🔗 URL Shortener

A simple and modern **URL Shortener** built with **React, TailwindCSS, Express, and MongoDB**.  
Easily shorten your long links and share them in a clean, professional way.  

---

## ✨ Features
- ⚡ Shorten long URLs in seconds  
- 📂 MongoDB for storing shortened links  
- 🔄 Redirect support for shortened URLs  
- 🎨 Clean and responsive UI with TailwindCSS  
- 🛠️ Backend built with Express + Node.js  
- 🔍 404 Page for invalid links  

---

## 🛠️ Tech Stack
**Frontend:** React, Vite, TailwindCSS  
**Backend:** Node.js, Express  
**Database:** MongoDB  
**Routing:** React Router v6  

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2️⃣ Setup Backend
```
cd backend
npm install
```

### Create a .env file in /backend:

```
PORT=5000
MONGO_URI=your-mongodb-uri
BASE_URL=http://localhost:5000

```
### Run the backend:
```
npm start
```
### 3️⃣ Setup Frontend
```
cd frontend
npm install
```

### Create a .env file in /frontend:
```
VITE_BACKEND_URL=http://localhost:5000/api/url
```

### Run the frontend:
```
npm run dev
```
## 🌍 Usage

Enter a long URL into the input box

Click Shorten

Copy and share your shortened link 🎉

📸 Screenshots
🔗 

🚫 404 Page

🤝 Contributing

Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to change.

💡 Made with ❤️ by Kishan Raj