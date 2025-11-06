# Contact Form Setup Guide

## Your New Contact Form is Ready! 🎉

A professional contact form has been added to `/contact` with lead capture fields including:
- Full Name
- Email Address
- Phone Number (optional)
- Interest/Purpose (dropdown with 7 options)
- Message

## Quick Setup (5 minutes)

### Step 1: Get Your Free Web3Forms Access Key

1. Go to https://web3forms.com
2. Click "Get Started" (it's 100% FREE)
3. Enter your email: `info@drnf.org`
4. They'll send you an **Access Key** to that email

### Step 2: Add Your Access Key to the Form

1. Open `/contact.html`
2. Find line 475: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">`
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual key from the email
4. Save the file
5. Commit and push to GitHub

### Step 3: Test It!

1. Visit https://drnf.org/contact
2. Fill out the form
3. Submit
4. You'll receive submissions at **info@drnf.org**

## Form Features

✅ **Lead Fields**: Name, Email, Phone, Interest Type, Message
✅ **Spam Protection**: Built-in honeypot field
✅ **Success Page**: Redirects to `/contact?success=true` after submission
✅ **Loading States**: Button shows "Sending..." during submission
✅ **Mobile Responsive**: Works perfectly on all devices
✅ **Privacy Focused**: Data goes directly to your email, not stored by third parties
✅ **Professional Design**: Matches your website's style

## Interest/Lead Types

The form categorizes leads into:
1. **Volunteering** - People wanting to volunteer
2. **Partnership** - Organizations seeking partnerships
3. **Donation** - People wanting to support/donate
4. **Corporate CSR** - Companies for CSR collaboration
5. **Media** - Press inquiries
6. **General** - General questions
7. **Other** - Catch-all

## Email Notifications

Every form submission will be sent to `info@drnf.org` with:
- Subject: "New Contact Form Submission from DRNF Website"
- All form fields included
- Timestamp
- IP address (for spam prevention)

## Alternative: Use Google Forms (Optional)

If you prefer Google Forms:
1. Create a form at https://forms.google.com
2. Get the embed code
3. Replace the current form section in contact.html

## Need Help?

- **Web3Forms Docs**: https://docs.web3forms.com
- **Support**: They have excellent support via their website
- **Cost**: Completely FREE for unlimited submissions

## What's Next?

Once the form is live, all "Get Involved" buttons throughout the website will lead people to this form. You can track leads, follow up, and manage inquiries all from your email!

---

**Note**: The form will work immediately after you add your Access Key. No coding knowledge required!
