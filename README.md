# Netflix Clone 🎬

A full-featured, responsive Netflix UI clone built with **React** + **Vite**, powered by **Supabase Auth** and **The Movie Database (TMDB)** API.

## 🚀 Demo

🎥 [Click to watch the demo](https://drive.google.com/file/d/1tc1JikOYTfb8TsuPv_rSDrapOSbfgHGc/view?usp=sharing)

---

## 📂 Folder Structure
Netflix/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── TitleCards/
│   │       ├── TitleCards.jsx
│   │       └── TitleCards.css
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Login/
│   │   │   ├── Login.jsx
│   │   │   └── Login.css
│   │   └── Player/
│   │       ├── Player.jsx
│   │       └── Player.css
│   │
│   ├── App.jsx
│   ├── supabase.js  
│   ├── index.css
│   ├── main.jsx
│
├── .gitignore
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── README.md


---

## 🔧 Tech Stack

- **Frontend**: React, Vite, CSS
- **Authentication**: Supabase Auth
- **API**: [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
- **Proxy**: [corsproxy.io](https://corsproxy.io/) (used to bypass CORS)
- **Hosting**: [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) recommended

---

## 🧠 Features

- 🔐 User Authentication with Supabase
- 🎬 Dynamic movie listings from TMDB:
  - Popular
  - Top Rated
  - Upcoming
  - Originals
- 💡 Responsive layout with Navbar, Footer, and Cards
- ▶️ Player page for trailers
- 🌓 Dark theme (Netflix-inspired)
- 🧼 Clean component architecture

---

## 🛠️ Setup Instructions

 **Clone the repository**
   ```bash
   git clone https://github.com/sans-creator/netflix.git
   cd netflix
