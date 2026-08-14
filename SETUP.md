# Email Submission Setup Guide

## What's Been Created

Your Next.js app now has a complete backend API for handling email submissions without needing a separate server.

### Files Created:
1. **`app/api/submit-email/route.ts`** - Backend API endpoint that:
   - Receives email submissions
   - Saves emails to `email.json` (automatically deduplicates)
   - Sends confirmation emails via SMTP
   - Returns appropriate responses

2. **`.env.local.example`** - Template for environment variables

### Files Modified:
1. **`app/page.tsx`** - Updated to call the new API endpoint
2. **`package.json`** - Added `nodemailer` dependency

---

## Setup Instructions

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Email Credentials

Create a `.env.local` file in the root directory (copy from `.env.local.example`):

```
SMTP_SERVICE=gmail
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

#### For Gmail Users:
1. Go to Google Account settings: https://myaccount.google.com/
2. Enable **2-Step Verification**
3. Generate an **App Password** (it will give you a 16-character password)
4. Use that password in `SMTP_PASSWORD` (NOT your regular password)

#### For Other Email Providers:
- **Outlook**: Set `SMTP_SERVICE=outlook`
- **Yahoo**: Set `SMTP_SERVICE=yahoo`
- **Custom SMTP**: You can configure custom host/port if needed

### Step 3: Run the Development Server
```bash
npm run dev
```

---

## How It Works

When a user submits their email:
1. ✅ Email is saved to `email.json` (prevents duplicates)
2. ✅ Confirmation email is sent to their inbox
3. ✅ User sees success message on the form

The `email.json` file will look like:
```json
[
  "user1@example.com",
  "user2@example.com",
  "user3@example.com"
]
```

---

## Troubleshooting

- **"Cannot find module 'nodemailer'"**: Run `npm install` again
- **"Invalid credentials"**: Check your `SMTP_USER` and `SMTP_PASSWORD` in `.env.local`
- **Gmail Auth Failed**: Make sure you're using an App Password, not your regular password
- **Emails not being sent but form submits**: Check browser console and server logs for errors

---

## API Response Examples

### Success - New Email:
```json
{
  "success": true,
  "message": "Email added successfully",
  "isExisting": false
}
```

### Success - Existing Email:
```json
{
  "success": true,
  "message": "Email already on list",
  "isExisting": true
}
```

### Error:
```json
{
  "success": false,
  "message": "Email is required"
}
```

---

## Next Steps (Optional Enhancements)

- Add database instead of JSON file for scalability
- Add email validation
- Add rate limiting to prevent spam
- Add unsubscribe functionality
- Send admin notification emails
