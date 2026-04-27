# Saree Studio

Full-stack Indian ladies boutique web application.

## Structure

- `frontend` - Next.js App Router, React, TypeScript, Tailwind CSS, Shadcn-style UI components
- `backend` - Express.js, TypeScript, MongoDB via Mongoose, Nodemailer Gmail SMTP

## Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Default URL: `http://localhost:3000`

## Backend

```bash
cd backend
npm install
npm run dev
```

Default API URL: `http://localhost:5000`

## Required Backend Environment

Create `backend/.env` with these values:

```env
MONGODB_URI=
GMAIL_USER=
GMAIL_APP_PASSWORD=
OWNER_EMAIL=
PORT=5000
FRONTEND_URL=http://localhost:3000
BOUTIQUE_NAME=Saree Studio
```

## Contact Flow

The contact form posts to `POST /api/contact`. The API validates the payload, saves it to MongoDB in the
`ContactSubmission` collection, and sends the owner a branded HTML email through Gmail SMTP.
