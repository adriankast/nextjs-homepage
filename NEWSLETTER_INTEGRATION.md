# Email Newsletter Integration Guide

This project includes a newsletter signup feature with a popup modal and footer form. Since the site uses static export, you'll need to integrate with an external email service.

## How to Integrate with Email Services

The newsletter form is located in `components/newsletter-form.tsx`. Update the `handleSubmit` function to integrate with your chosen service:

### Option 1: Formspree
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
```

### Option 2: Mailchimp
Use the Mailchimp API with your API key and list ID.

### Option 3: Netlify Forms
If hosted on Netlify, you can use their built-in form handling.

### Option 4: ConvertKit
Integrate with ConvertKit's API for managing subscribers.

### Option 5: Custom Backend
Set up your own backend service to handle newsletter signups.

## Current Implementation

The current implementation logs email addresses to the console and shows a success message. This is intentional as it allows you to choose your preferred email service provider.

## Features

- **Popup Modal**: Appears once on first visit (tracked via localStorage)
- **Footer Signup**: Always available at the bottom of every page
- **Responsive Design**: Works on all screen sizes
- **Form Validation**: Built-in email validation
- **Loading States**: Shows feedback during submission
- **Success/Error Messages**: Clear user feedback

## Testing

To test the popup appearing on first visit:
1. Open the site
2. Clear localStorage: `localStorage.removeItem('newsletter-popup-seen')`
3. Refresh the page
4. The popup should appear after 2 seconds
