# Socimatic Authentication API

This is a Node.js + Express backend API for user authentication, featuring email/password registration, login, JWT token generation, and protected user info retrieval. The app uses a Supabase PostgreSQL database and is deployed on Render.

---

## 🌐 API Base URL

**Production**: `https://socimatic-api.onrender.com`

---

## 📦 Tech Stack

- **Backend**: Node.js, Express
- **Database**: PostgreSQL (via Supabase)
- **Auth**: JWT (jsonwebtoken)
- **Hashing**: bcryptjs
- **Hosting**: Render

---

## ⚙️ Environment Variables (.env)

```env
PORT=5000
JWT_SECRET=your_super_secret_key

DB_HOST=your_supabase_host
DB_PORT=5432
DB_USER=your_supabase_user
DB_PASSWORD=your_database_password
DB_NAME=postgres
