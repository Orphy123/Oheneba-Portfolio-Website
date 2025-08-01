# 📧 EmailJS Setup Guide

## Quick Fix for Contact Form

Your contact form now has better error handling - it won't load infinitely anymore! Follow these steps to get email functionality working:

## 🚀 Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://emailjs.com)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. **Copy the Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy the Public Key**

### 5. Create Environment File
Create a `.env` file in your project root:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_xxxxxxxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
VITE_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Replace the `xxxxxxxx` with your actual values from steps 2, 3, and 4.

### 6. Test Your Setup
1. Restart your development server: `npm run dev`
2. Try sending a test message through your contact form
3. Check your email inbox for the message

## 🔒 Security Notes

- ✅ `.env` is already in your `.gitignore`
- ✅ These are public keys (safe to use in frontend)
- ✅ EmailJS handles the actual email sending securely

## 🐛 Troubleshooting

**Still seeing errors?**
- Make sure your `.env` file is in the project root
- Restart your development server after creating `.env`
- Double-check all IDs are copied correctly
- Verify your email service is connected in EmailJS dashboard

**Form works but no email received?**
- Check your spam folder
- Verify the email template variables match the code
- Test with a different email address

## 💡 Quick Test Without Setup

For now, the form will show a friendly message directing users to email you directly at `theempireberk@gmail.com` if EmailJS isn't configured yet.

---

Once set up, your contact form will be fully functional! 🎉 