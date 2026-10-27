# 🌳 Bittree Clone

A Linktree-style "link in bio" app. Claim a handle, add your links, and get a public page you can share anywhere, built with **Next.js**, **Tailwind CSS** and **MongoDB**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-7-47A248?logo=mongodb&logoColor=white)

<!-- Add screenshots here, for example:
![Home page](./docs/home.png)
![Create page](./docs/generate.png)
-->

## ✨ Features

- **Claim a handle**: pick a unique URL such as `/your-handle` from the landing page.
- **Create your Bittree**: a 3-step form for your handle, links, profile picture and description.
- **Unlimited links**: add as many link and text pairs as you want with the **+ Add Link** button.
- **Public profile page**: every Bittree is served at `/<handle>`, and unknown handles return a 404.
- **Duplicate protection**: the API rejects a handle that is already taken.
- **Toast notifications**: instant success and error feedback with `react-toastify`.
- **Responsive-ready UI**: styled with Tailwind CSS v4 and the Geist font.

## 🛠️ Tech Stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| Framework  | Next.js 16 (App Router), React 19            |
| Language   | JavaScript and TypeScript                    |
| Styling    | Tailwind CSS 4                               |
| Database   | MongoDB (official `mongodb` Node.js driver)  |
| UI helpers | react-toastify                               |
| Tooling    | ESLint 9                                     |

## 🧭 How It Works

| Route              | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| `/`                | Landing page with a handle input and a **Claim your Bittree** button |
| `/generate`        | Form to create a Bittree (the handle can be prefilled via `?handle=`) |
| `/[handle]`        | Public page that lists the user's picture, description and links    |
| `POST /api/add`    | Saves a new Bittree to MongoDB                                      |

**Flow:** enter a handle on the home page, then fill in the form on `/generate`, which sends a `POST` to `/api/add`. If the handle is free, it is saved and your page is live at `/<handle>`.

## 📁 Project Structure

```
Bittree-clone/
├── app/
│   ├── [handle]/
│   │   └── page.js        # Public Bittree page (reads from MongoDB)
│   ├── api/
│   │   └── add/
│   │       └── route.js   # POST endpoint to create a Bittree
│   ├── generate/
│   │   └── page.js        # "Create your Bittree" form
│   ├── globals.css
│   ├── layout.tsx         # Root layout, fonts and Navbar
│   └── page.jsx           # Landing page
├── components/
│   └── Navbar.js          # Top navigation bar (shown on / and /generate)
├── lib/
│   └── mongodb.js         # Cached MongoDB client
├── public/                # Images and static assets
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.9 or later
- A MongoDB database, either a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster or a local instance

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/roshan-kunchikorve/Bittree-clone.git
cd Bittree-clone

# 2. Install dependencies
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

> The app throws an error on startup if `MONGODB_URI` is missing. `.env*` files are git-ignored, so your credentials will not be committed.

The app uses a database named `bittree` and a collection named `links`. MongoDB creates both automatically the first time a Bittree is saved.

### Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command         | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Create a production build          |
| `npm run start` | Run the production build           |
| `npm run lint`  | Lint the code with ESLint          |

## 🗄️ Data Model

Each Bittree is stored as one document in the `links` collection:

```json
{
  "handle": "harry",
  "desc": "Let's go!!!",
  "pic": "https://example.com/profile.jpg",
  "links": [
    { "linktext": "Instagram", "link": "https://www.instagram.com/codewithharry/" },
    { "linktext": "Website", "link": "https://www.codewithharry.com" }
  ]
}
```

## 🔌 API Reference

### `POST /api/add`

Creates a new Bittree.

**Request body**

```json
{
  "handle": "harry",
  "desc": "Let's go!!!",
  "pic": "https://example.com/profile.jpg",
  "links": [{ "linktext": "Website", "link": "https://www.codewithharry.com" }]
}
```

**Success response**

```json
{ "success": true, "error": false, "message": "Your Bittree has been generated", "result": { } }
```

**Handle already taken**

```json
{ "success": false, "error": true, "message": "This Bittree already exists!", "result": null }
```

## 🗺️ Roadmap

- [ ] User authentication (the Login and Sign up buttons are UI only for now)
- [ ] Edit and delete an existing Bittree
- [ ] Use a relative API path (`/api/add`) so the form works on deployed sites, not only on localhost
- [ ] Server-side validation for handles and URLs
- [ ] Profile picture upload instead of pasting an image URL
- [ ] Themes and layout customization
- [ ] Click analytics for each link
- [ ] Fill in the Templates, Marketplace, Discover, Pricing and Learn pages in the navbar

## ☁️ Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new):

1. Push this repo to GitHub and import it into Vercel.
2. Add `MONGODB_URI` under **Project Settings → Environment Variables**.
3. If you use MongoDB Atlas, allow Vercel's IPs in **Network Access**.
4. Deploy.

## ⚠️ Disclaimer

This is a learning project inspired by [Linktree](https://linktr.ee). It is not affiliated with or endorsed by Linktree.

