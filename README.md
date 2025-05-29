# Dr. Rabinder Nath Foundation Website

A beautiful, modern website for the Dr. Rabinder Nath Foundation showcasing their community service initiatives, free chai counters, donation drives, educational workshops, and environmental activities.

## 🌟 Features

### Design & UI
- **Modern, Responsive Design** - Works beautifully on all devices
- **Beautiful Typography** - Inter + Playfair Display font combination
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Professional Color Scheme** - Green and brown themed for community/nature feel
- **Glassmorphism Effects** - Modern translucent elements
- **Interactive Hover Effects** - Engaging micro-interactions

### Sections
- **Hero Section** - Impressive full-screen intro with animated statistics
- **Social Media Integration** - Beautiful social media cards
- **About Section** - Foundation's legacy and mission
- **Free Chai Counters** - Complete coverage with media, stats, and expansion plans
- **Donation Drives** - Photo gallery and impact numbers
- **Workshops** - Educational and sanitation workshops with videos
- **Environmental Initiatives** - Tree plantation and animal welfare
- **Books & Literary Legacy** - Dr. Rabinder Nath's publications
- **Contact Section** - Multiple contact methods and volunteer opportunities

### Interactive Features
- **Sticky Navigation** - Smart navbar with active section highlighting
- **Mobile Menu** - Hamburger menu for mobile devices
- **Image Lightbox** - Click images for full-screen view
- **Video Integration** - Embedded YouTube videos and local video support
- **Animated Counters** - Statistics animate when scrolled into view
- **Back to Top Button** - Smooth scroll to top functionality
- **Form Validation** - Contact form validation (ready for backend)
- **Notification System** - Toast notifications for user feedback

## 📁 Project Structure

```
DRNF_website/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Main stylesheet with modern design
├── js/
│   └── main.js             # JavaScript for interactivity
├── images/                 # All website images
│   ├── DRNF_logo.jpg
│   ├── rabinder_nath2.1.jpg
│   ├── Untitled.png - Untitled 7.png
│   ├── loocafe_no_bg_collage.png
│   ├── LooCafe_Workstation.png
│   ├── rabinder_nath_drive.jpg
│   ├── rabinder_nath_5.1.jpg
│   ├── rabinder_nath_5.5.jpg
│   ├── rabinder_nath_1.6.jpg
│   └── WhatsApp_Video_*.mp4
└── README.md               # This file
```

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open index.html** in a web browser
3. **That's it!** The website is ready to use

### For Development:
```bash
# If using a local server (recommended)
npx http-server .
# or
python -m http.server 8000
# or
php -S localhost:8000
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization:

```css
:root {
    --primary-color: #2c5530;      /* Dark green */
    --secondary-color: #8b4513;     /* Brown */
    --accent-color: #f39c12;        /* Orange */
    --text-primary: #2c3e50;        /* Dark gray */
    --text-secondary: #7f8c8d;      /* Light gray */
}
```

### Fonts
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Content Updates
- **Statistics**: Update numbers in the hero section and employment section
- **Images**: Replace images in the `/images` folder
- **Contact Info**: Update contact details in the contact section and footer
- **Social Links**: Update social media URLs

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🔧 Technical Features

### Performance
- **Optimized Images** - Responsive images with proper sizing
- **Lazy Loading** - Images load as needed
- **Debounced Scroll Events** - Smooth scrolling performance
- **Minimal Dependencies** - Only essential external libraries

### Accessibility
- **Semantic HTML** - Proper heading structure and landmarks
- **Alt Text** - All images have descriptive alt text
- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Friendly** - ARIA labels and roles

### SEO Ready
- **Meta Tags** - Proper title, description, and meta tags
- **Structured Data** - Ready for schema markup
- **Fast Loading** - Optimized for search engine crawling

## 🌐 Deployment Options

### 1. Static Hosting (Recommended)
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: `firebase deploy`

### 2. Traditional Web Hosting
- Upload all files to your web hosting via FTP
- Ensure `index.html` is in the root directory

### 3. Content Delivery Network (CDN)
- Upload to any CDN service
- Perfect for global distribution

## 📊 Analytics Integration

The website is ready for analytics integration. Add your tracking code:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📧 Contact Form Backend

The contact form is ready for backend integration. You can:

1. **Use a form service** like Formspree, Netlify Forms, or Typeform
2. **Add a backend** with Node.js, PHP, or Python
3. **Use serverless functions** with Netlify Functions or Vercel Functions

Example Formspree integration:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

## 🔮 Future Enhancements

- **Dark Mode Toggle** - Theme switching capability
- **Multi-language Support** - Hindi/Telugu translations
- **Blog Section** - News and updates
- **Event Calendar** - Upcoming events and workshops
- **Donation Integration** - Online payment gateway
- **Volunteer Portal** - Registration and management system

## 📝 Content Management

### Adding New Initiatives
1. Create a new section in `index.html`
2. Add corresponding styles in `css/style.css`
3. Update navigation menu
4. Add images to `/images` folder

### Updating Statistics
- Hero section: `.stat-number` elements
- Employment section: `.employment-number` elements
- JavaScript will automatically animate the counters

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions about the website:
- **Email**: hello@ixoragroup.com
- **Phone**: +91 9966906781

## 📄 License

This website is created for the Dr. Rabinder Nath Foundation. All content and images belong to the foundation.

---

**Built with ❤️ for the Dr. Rabinder Nath Foundation community**

*Last updated: November 2024* 