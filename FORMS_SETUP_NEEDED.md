# Additional Forms Setup Required

## New Forms Created (November 2025)

Three new forms were added to enhance user engagement:

### 1. Food Donation Form
**Location**: `/forms/food-donation-form.html`
**Purpose**: Allow people to pledge food/consumable donations for chai counters
**Setup Required**: Add Web3Forms access key

### 2. Newsletter Signup
**Location**: `/forms/newsletter-signup.html`
**Purpose**: Email list building for updates and impact stories
**Setup Required**: Add Web3Forms access key

### 3. Stay in Touch Form
**Location**: `/forms/stay-in-touch.html`
**Purpose**: Quick contact form for general inquiries
**Setup Required**: Add Web3Forms access key

## Setup Instructions

### Step 1: Get Your Web3Forms Access Key (if you don't have one)

1. Go to https://web3forms.com
2. Sign up with email: `info@drnf.org`
3. Get your free Access Key (sent to email)

### Step 2: Update Each Form

For each of the 3 forms above, find this line:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

Replace `YOUR_ACCESS_KEY_HERE` with your actual Web3Forms access key.

### Step 3: Test

Visit each form URL after deployment:
- https://drnf.org/forms/food-donation-form.html
- https://drnf.org/forms/newsletter-signup.html
- https://drnf.org/forms/stay-in-touch.html

Submit a test entry to verify emails arrive at `info@drnf.org`.

## Alternative: Use Same Key as Contact Form

If you already set up the main contact form (`/contact.html`), you can use the **same access key** for all these forms. Web3Forms allows unlimited forms with one key.

## Form Features

All forms include:
- ✅ Spam protection (honeypot)
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Mobile responsive design
- ✅ Consistent DRNF branding

## Homepage Integration

These forms are linked from the homepage "Support Our Mission" section:
- Food donation CTA → food-donation-form.html
- Newsletter signup → newsletter-signup.html
- Stay in touch → stay-in-touch.html

---

**Note**: Forms will work immediately after adding the access key. No coding required!
