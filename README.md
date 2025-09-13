📱 AuthApp – Client-side Authentication

A simple client-side authentication flow built with Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui.

🔗 Live Demo: [Click here to view](https://auth-app-xqyl.vercel.app/login)

---

🚀 Features

Login with Iranian mobile number (formats: 09xxxxxxxxx, +989xxxxxxxxx, 00989xxxxxxxxx)

Fetch user data from randomuser.me API

Save user info in localStorage

Dashboard with personalized welcome

Logout → clear storage + redirect to Login

Route protection if no session

Responsive design with Tailwind + shadcn/ui



---

📂 Project Structure

src/
  app/
    layout.tsx
    page.tsx
    login/page.tsx
    dashboard/page.tsx
  components/
    ui/
      Input.tsx
      Button.tsx
  lib/
    api.ts
    phone.ts
    storage.ts
  types/
    user.ts
  styles/
    globals.css


---

⚙️ Getting Started

# 1. Clone repo
git clone https://github.com/mobicodes21/AuthApp.git
cd AuthApp

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# 4. Open in browser
http://localhost:3000/login


---

📦 Deployment

Deployed on Vercel.
👉 Replace the link here with your live app:

🔗 Live Demo: [Click here to view](https://auth-app-xqyl.vercel.app/login)
