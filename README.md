Bags By Eve - Luxury Handbags E-commerce Website
https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&h=600&fit=crop

A sophisticated, fully-featured e-commerce website for luxury handbags, designed for the modern woman. Built with modern web technologies and featuring a complete shopping experience with WhatsApp integration.

🌟 Features
🛍️ E-commerce Capabilities
Complete Product Catalog - Browse through various bag categories (Totes, Crossbody, Clutches, Backpacks, etc.)

Advanced Filtering - Filter by category, price range, sale items, and special collections

Product Detail Pages - Comprehensive product information with image galleries and specifications

Shopping Cart - Full cart management with quantity controls and item removal

WhatsApp Checkout - Seamless checkout experience via WhatsApp integration

🎄 Seasonal Features
Christmas Sale Popup - Automatic promotional popup with countdown timer

Holiday Collection - Special Christmas-themed products and badges

Festive Promotions - Seasonal coupon codes and gift wrapping options

Limited Time Offers - Countdown timers for special promotions

🎁 Gift & Special Features
Gift Ideas Section - Curated collections for different occasions

Gift Cards - Digital gift card purchases in multiple denominations

Gift Wrapping - Optional luxury gift wrapping service

Gift Messages - Personalized messages for gift recipients

💰 Promotional Features
Coupon System - Apply discount codes at checkout

Sale Badges - Clear visual indicators for discounted items

Multiple Payment Options - WhatsApp-based order processing

Free Shipping - Automatic free shipping on orders over Ksh 5,000

📱 User Experience
Responsive Design - Optimized for all device sizes

Image Slider - Hero section with auto-rotating product images

Quick View Modal - Preview products without leaving the page

Search Functionality - Find products quickly with search bar

Smooth Animations - Elegant transitions and hover effects

🎨 Design & Theme
Color Scheme
Primary: Deep Brown (#5D4037)

Secondary: Royal Purple (#4A235A)

Accent: Light Brown (#8D6E63)

Background: Cream (#FFF8F0)

Text: Dark Brown (#3E2723)

Typography
Headings: Playfair Display (Elegant serif font)

Body: Inter (Clean, readable sans-serif)

Visual Elements
Luxury card-based design with subtle shadows

Elegant hover effects and transitions

Professional product photography from Unsplash

Christmas-themed decorative elements

📁 Project Structure
text
bags-by-eve/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # All JavaScript functionality
├── README.md           # This documentation
└── assets/             # Additional assets (if any)
🚀 Installation & Setup
Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge)

Basic understanding of HTML, CSS, and JavaScript

Web server for deployment (optional for local development)

Local Development
Clone or Download the project files

Open index.html in your web browser

No build process required - works directly in browser

Deployment Options
Netlify: Drag and drop the folder for instant deployment

Vercel: Connect your GitHub repository for automatic deployments

GitHub Pages: Host directly from your GitHub repository

Traditional Web Hosting: Upload files via FTP/SFTP

🛠️ Customization Guide
Adding New Products
Edit the products array in script.js:

javascript
{
    id: 11, // Unique ID
    name: "New Bag Name",
    category: "totes", // Existing category
    price: 6500,
    originalPrice: 7200, // 0 if not on sale
    isSale: true,
    isChristmas: false, // Set to true for Christmas collection
    image: "https://images.unsplash.com/photo-...",
    description: "Product description...",
    images: [
        "image1.jpg",
        "image2.jpg"
    ],
    specifications: {
        material: "Genuine Leather",
        dimensions: "30cm x 15cm x 25cm",
        weight: "1.1 kg",
        features: ["Feature 1", "Feature 2"]
    }
}
Modifying Categories
Update the categories array in script.js:

javascript
const categories = ['totes', 'crossbody', 'clutches', 'backpacks', 'satchels', 'mini_bags', 'travel_bags', 'new_category'];
Changing Business Information
Update contact details in index.html:

html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <div>
        <h3>Phone</h3>
        <p>+254 711 642 342</p> <!-- Update phone number -->
    </div>
</div>
Customizing Colors
Modify CSS variables in styles.css:

css
:root {
    --primary: #5D4037;        /* Main brand color */
    --secondary: #4A235A;      /* Secondary color */
    --accent: #8D6E63;         /* Accent color */
    --light: #FFF8F0;          /* Background */
    --dark: #3E2723;           /* Text color */
}
WhatsApp Integration
Update the phone number in script.js:

javascript
const whatsappNumber = "254711642342"; // Replace with your number
📧 Contact Information Configuration
Update the following sections in index.html:

Store Information
html
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <div>
        <h3>Our Store</h3>
        <p>123 Fashion Street, Nairobi, Kenya</p>
    </div>
</div>
Business Hours
html
<div class="contact-item">
    <i class="fas fa-clock"></i>
    <div>
        <h3>Opening Hours</h3>
        <p>Monday - Saturday: 9AM - 8PM</p>
        <p>Sunday: 11AM - 6PM</p>
    </div>
</div>
🎯 Marketing Features
Coupon System
Pre-configured coupon codes in script.js:

javascript
const coupons = {
    'XMAS2023': { discount: 10, type: 'percentage', minAmount: 0 },
    'WELCOME10': { discount: 10, type: 'percentage', minAmount: 0 },
    'HOLIDAY25': { discount: 25, type: 'percentage', minAmount: 10000 }
};
Seasonal Promotions
Christmas sale popup with countdown timer

Seasonal product badges

Limited-time coupon codes

Gift wrapping promotions

📱 Responsive Design
The website is fully responsive and optimized for:

Desktop (1200px+): Full feature set with multi-column layouts

Tablet (768px - 1199px): Adapted layouts with maintained functionality

Mobile (< 768px): Single-column layouts with touch-friendly interfaces

🔧 Technical Details
Technologies Used
HTML5: Semantic markup and modern structure

CSS3: Flexbox, Grid, CSS Variables, and animations

Vanilla JavaScript: No frameworks required

Font Awesome: Icon library for UI elements

Google Fonts: Typography (Inter, Playfair Display)

Browser Compatibility
Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

Performance Features
Optimized images from Unsplash CDN

Efficient JavaScript with event delegation

CSS animations for smooth interactions

Minimal external dependencies

📞 Support & Contact
For technical support or customization requests:

Email: info@bagsbyeve.com

Phone: +254 711 642 342

Store Address: 123 Fashion Street, Nairobi, Kenya

📄 License
This project is licensed for commercial use. Please ensure you have the proper licenses for any third-party assets used.

🔄 Updates & Maintenance
Regular Maintenance Tasks
Update product inventory monthly

Refresh seasonal promotions

Test WhatsApp integration

Update business information as needed

Check for broken images or links

Seasonal Updates
Update Christmas promotions annually

Refresh sale items and coupons

Update seasonal imagery

Modify countdown timers for new promotions

🚀 Getting Started Checklist
Update business information (phone, address, hours)

Add your product catalog

Customize color scheme if needed

Test WhatsApp integration with your number

Update social media links

Add your logo and branding

Test on different devices and browsers

Deploy to your chosen hosting platform

💡 Pro Tips
Image Optimization: Use high-quality product images with consistent dimensions

SEO: Add meta tags and descriptions for better search visibility

Analytics: Integrate Google Analytics for traffic monitoring

Backup: Regular backups of your product data and customizations

Testing: Thoroughly test the WhatsApp checkout process

Built with ❤️ for Bags By Eve - Crafting elegance for the modern woman since 2015.

