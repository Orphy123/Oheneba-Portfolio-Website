# 📧 Contact Form Setup Instructions

Your new "Let's Connect" section is ready! Here's how to set up the email functionality:

## 🚀 Quick Setup

### 1. EmailJS Configuration

1. Go to [EmailJS.com](https://emailjs.com) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{subject}}` - email subject
   - `{{message}}` - email message

### 2. Environment Variables

Create a `.env` file in your project root with:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Update Contact Information

Update the contact information in `src/components/LetsConnect.jsx`:

```javascript
const contactInfo = [
  {
    // ... email configuration
    content: "your.email@domain.com", // Update with your email
    link: "mailto:your.email@domain.com", // Update with your email
  },
  {
    // ... LinkedIn configuration
    content: "Connect with me",
    link: "https://linkedin.com/in/yourusername", // Update with your LinkedIn
  },
  // ... other contact methods
];
```

## 🎨 Features Included

✅ **Modern Contact Form** with validation  
✅ **Contact Info Cards** with hover effects  
✅ **Social Media Links** (GitHub, LinkedIn, Email)  
✅ **Responsive Design** for all devices  
✅ **Loading States** and success/error feedback  
✅ **Smooth Animations** with Framer Motion  

## 🔧 Customization

### Update Colors
The component uses your existing color scheme but you can customize gradients in:
- Contact cards: `from-purple-500 to-blue-500`
- Submit button: `from-purple-500 to-blue-500`
- Social buttons: Various gradient combinations

### Add More Contact Methods
Add new contact cards by extending the `contactInfo` array with:
- Icon (SVG or image)
- Title
- Content text
- Link (optional)

## 🎯 Testing

1. Start your development server: `npm run dev`
2. Navigate to the "Connect" section
3. Fill out the form (you'll need EmailJS configured for actual sending)
4. Test the contact card interactions

Your visitors can now easily reach out through the beautiful contact interface! 🚀 