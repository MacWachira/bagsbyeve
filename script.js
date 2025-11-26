// script.js - Enhanced for Bags By Love Website

// Language translations
const translations = {
    en: {
        // Header & Navigation
        home: "Home",
        collections: "Collections",
        newArrivals: "New Arrivals",
        bestsellers: "Bestsellers",
        sale: "Sale",
        about: "About",
        contact: "Contact",
        cart: "Cart",
        search: "Search",
        account: "Account",
        
        // Hero Section
        heroTitle: "Elegance Redefined",
        heroSubtitle: "Discover our exclusive collection of handcrafted bags designed for the modern woman",
        shopWhatsApp: "Shop on WhatsApp",
        viewCart: "View Cart",
        
        // Sections
        specialSale: "Special Sale",
        limitedTime: "Limited time offers on selected items",
        featuredCollections: "Featured Collections",
        popularDesigns: "Our most popular and loved designs",
        whatCustomersSay: "What Our Customers Say",
        realReviews: "Real reviews from real customers",
        joinNewsletter: "Join Our Newsletter",
        newsletterSubtitle: "Subscribe to receive updates on new collections, exclusive offers, and styling tips",
        
        // Features
        premiumQuality: "Premium Quality",
        premiumDesc: "Each bag is crafted with the finest materials and attention to detail",
        freeShipping: "Free Shipping",
        shippingDesc: "Enjoy complimentary shipping on all orders over Ksh 3,000",
        easyReturns: "Easy Returns",
        returnsDesc: "Not satisfied? Return within 30 days for a full refund",
        ethicallyMade: "Ethically Made",
        ethicalDesc: "Our products are ethically sourced and manufactured",
        
        // Buttons & Actions
        addToCart: "Add to Cart",
        quickView: "Quick View",
        shopNow: "Shop Now",
        explore: "Explore",
        subscribe: "Subscribe",
        sendMessage: "Send Message",
        continueShopping: "Continue Shopping",
        checkout: "Checkout",
        
        // Product Categories
        totes: "Totes",
        crossbody: "Crossbody Bags",
        clutches: "Clutches",
        backpacks: "Backpacks",
        
        // Footer
        madeForModernWoman: "MADE FOR THE MODERN WOMAN",
        footerDescription: "Creating elegant, functional bags for the contemporary woman who values style and substance",
        shop: "Shop",
        allCollections: "All Collections",
        support: "Support",
        shippingInfo: "Shipping Info",
        returnsExchanges: "Returns & Exchanges",
        faq: "FAQ",
        careInstructions: "Care Instructions"
    },
    sw: {
        // Header & Navigation
        home: "Nyumbani",
        collections: "Mkusanyiko",
        newArrivals: "Vipya",
        bestsellers: "Vinavyouzwa Zaidi",
        sale: "Punguzo",
        about: "Kuhusu",
        contact: "Wasiliana",
        cart: "Mkokoteni",
        search: "Tafuta",
        account: "Akaunti",
        
        // Hero Section
        heroTitle: "Urembo Ulioboreshwa",
        heroSubtitle: "Gundua mkusanyiko wetu wa kipekee wa mikoba iliyotengenezwa kwa mikono iliyoundwa kwa mwanamke wa kisasa",
        shopWhatsApp: "Nunua kupitia WhatsApp",
        viewCart: "Angalia Mkokoteni",
        
        // Sections
        specialSale: "Punguzo Maalum",
        limitedTime: "Ofa za muda mfupi kwenye vitu vilivyochaguliwa",
        featuredCollections: "Mikusanyiko Maarufu",
        popularDesigns: "Miundo yetu maarufu na inayopendwa zaidi",
        whatCustomersSay: "Wateja Wetu Wasemaje",
        realReviews: "Ukaguzi halisi kutoka kwa wateja halisi",
        joinNewsletter: "Jiunge na Jarida Letu",
        newsletterSubtitle: "Jiandikishe kupokea visasisho kuhusu mkusanyiko mpya, ofa za kipekee, na vidokezo vya mitindo",
        
        // Features
        premiumQuality: "Ubora wa Hali ya Juu",
        premiumDesc: "Kila mfuko hutengenezwa kwa nyenzo bora zaidi na umakini wa kina",
        freeShipping: "Usafirishaji Bure",
        shippingDesc: "Furahia usafirishaji wa bure kwa maagizo yote juu ya Ksh 3,000",
        easyReturns: "Kurejeshea Rahisi",
        returnsDesc: "Hauradhishwa? Rudisha ndani ya siku 30 kwa fidia kamili",
        ethicallyMade: "Imetengenezwa Kimaadili",
        ethicalDesc: "Bidhaa zetu zinapatikana kimaadili na kutengenezwa",
        
        // Buttons & Actions
        addToCart: "Ongeza kwenye Mkokoteni",
        quickView: "Angalia Haraka",
        shopNow: "Nunua Sasa",
        explore: "Chunguza",
        subscribe: "Jiandikishe",
        sendMessage: "Tuma Ujumbe",
        continueShopping: "Endelea Kununua",
        checkout: "Maliza",
        
        // Product Categories
        totes: "Mikoba",
        crossbody: "Mikoba ya Mabega",
        clutches: "Mikoba ya Mkono",
        backpacks: "Mikoba ya Mgongoni",
        
        // Footer
        madeForModernWoman: "IMETENGENEZWA KWA MWANAMKE WA KISASA",
        footerDescription: "Kuunda mikoba ya kifahari, inayofanya kazi kwa mwanamke wa kisasa anayethamini mtindo na dhamira",
        shop: "Nunua",
        allCollections: "Mikusanyiko Yote",
        support: "Msaada",
        shippingInfo: "Maelezo ya Usafirishaji",
        returnsExchanges: "Kurejeshea na Kubadilishana",
        faq: "Maswali Yanayoulizwa Mara Kwa Mara",
        careInstructions: "Maagizo ya Utunzaji"
    }
};

// Product Data
const products = {
    "totes": [
        {
            id: 1,
            name: "Classic Leather Tote",
            price: 4500,
            originalPrice: 5200,
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Spacious and stylish leather tote perfect for work or weekend outings.",
            category: "totes",
            featured: true,
            sale: false
        },
        {
            id: 2,
            name: "Canvas Weekender Tote",
            price: 3800,
            originalPrice: 4500,
            image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Durable canvas tote with leather accents, ideal for travel or daily use.",
            category: "totes",
            featured: false,
            sale: true
        },
        {
            id: 3,
            name: "Structured Work Tote",
            price: 5200,
            originalPrice: 5200,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Professional tote with multiple compartments for organization.",
            category: "totes",
            featured: true,
            sale: false
        },
        {
            id: 4,
            name: "Minimalist Leather Tote",
            price: 4200,
            originalPrice: 5000,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Sleek and simple design with premium leather construction.",
            category: "totes",
            featured: false,
            sale: true
        }
    ],
    "crossbody": [
        {
            id: 5,
            name: "Leather Crossbody Bag",
            price: 3200,
            originalPrice: 3800,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Compact crossbody with adjustable strap, perfect for hands-free convenience.",
            category: "crossbody",
            featured: true,
            sale: false
        },
        {
            id: 6,
            name: "Vintage Inspired Crossbody",
            price: 2800,
            originalPrice: 3500,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Retro design with modern functionality and multiple pockets.",
            category: "crossbody",
            featured: false,
            sale: true
        },
        {
            id: 7,
            name: "Quilted Crossbody Bag",
            price: 3800,
            originalPrice: 4500,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Elegant quilted design with chain and leather strap options.",
            category: "crossbody",
            featured: true,
            sale: false
        },
        {
            id: 8,
            name: "Mini Crossbody Purse",
            price: 2500,
            originalPrice: 3000,
            image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Small but mighty, fits essentials with style.",
            category: "crossbody",
            featured: false,
            sale: true
        }
    ],
    "clutches": [
        {
            id: 9,
            name: "Evening Sparkle Clutch",
            price: 2800,
            originalPrice: 3500,
            image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Glamorous clutch with sequin detailing for special occasions.",
            category: "clutches",
            featured: true,
            sale: false
        },
        {
            id: 10,
            name: "Leather Wristlet Clutch",
            price: 2200,
            originalPrice: 2800,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Compact clutch with wrist strap for easy carrying.",
            category: "clutches",
            featured: false,
            sale: true
        },
        {
            id: 11,
            name: "Envelope Clutch",
            price: 3200,
            originalPrice: 3800,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Sleek envelope design with magnetic closure.",
            category: "clutches",
            featured: true,
            sale: false
        },
        {
            id: 12,
            name: "Beaded Evening Clutch",
            price: 3500,
            originalPrice: 4200,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Hand-beaded clutch with intricate design details.",
            category: "clutches",
            featured: false,
            sale: true
        }
    ],
    "backpacks": [
        {
            id: 13,
            name: "Leather Laptop Backpack",
            price: 5800,
            originalPrice: 6500,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Professional backpack with padded laptop compartment.",
            category: "backpacks",
            featured: true,
            sale: false
        },
        {
            id: 14,
            name: "Mini Leather Backpack",
            price: 4200,
            originalPrice: 5000,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Compact backpack perfect for day trips and casual outings.",
            category: "backpacks",
            featured: false,
            sale: true
        },
        {
            id: 15,
            name: "Canvas Rucksack",
            price: 3500,
            originalPrice: 4200,
            image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Durable canvas backpack with multiple pockets.",
            category: "backpacks",
            featured: true,
            sale: false
        },
        {
            id: 16,
            name: "Convertible Backpack Purse",
            price: 4800,
            originalPrice: 5500,
            image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            description: "Stylish backpack that converts to a handbag.",
            category: "backpacks",
            featured: false,
            sale: true
        }
    ]
};

// Categories
const categories = [
    {
        id: "totes",
        name: "Totes",
        description: "Spacious and versatile bags for work, travel, and everyday use",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "crossbody",
        name: "Crossbody Bags",
        description: "Hands-free convenience with style, perfect for active days",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "clutches",
        name: "Clutches",
        description: "Elegant evening bags for special occasions and nights out",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: "backpacks",
        name: "Backpacks",
        description: "Functional and fashionable bags for work, school, and travel",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
];

// Testimonials
const testimonials = [
    {
        name: "Sarah M.",
        location: "Nairobi",
        text: "I absolutely love my Bags By Love tote! The quality is exceptional and it's so versatile. I use it for work, shopping, and even as a weekend bag. The leather has held up beautifully over months of daily use.",
        rating: 5
    },
    {
        name: "Grace W.",
        location: "Mombasa",
        text: "The customer service at Bags By Love is outstanding! They helped me choose the perfect clutch for my wedding and even did a special customization. I felt so special carrying it on my big day.",
        rating: 5
    },
    {
        name: "Linda K.",
        location: "Kisumu",
        text: "I've purchased three bags from Bags By Love and each one has exceeded my expectations. The attention to detail and craftsmanship is remarkable. These bags are definitely worth the investment!",
        rating: 5
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Language and Theme State
let currentLanguage = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links a, .footer-links a, .back-button, .logo');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.querySelector('.cart-count');
const floatingCart = document.getElementById('floating-cart');
const cartCountFloating = document.querySelector('.cart-count-floating');
const cartContent = document.getElementById('cart-content');
const cartTotalAmount = document.getElementById('cart-total-amount');
const salePopup = document.getElementById('sale-popup');
const closePopup = document.getElementById('close-popup');
const shopSaleItem = document.getElementById('shop-sale-item');
const viewCartBtn = document.getElementById('view-cart');
const checkoutWhatsApp = document.getElementById('checkout-whatsapp');
const themeToggle = document.getElementById('theme-toggle');
const languageBtn = document.getElementById('language-btn');
const languageOptions = document.querySelectorAll('.language-option');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language and theme
    setLanguage(currentLanguage);
    setTheme(currentTheme);
    
    // Show sale popup after 2 seconds
    setTimeout(() => {
        salePopup.style.display = 'flex';
    }, 2000);

    // Load initial content
    loadFeaturedProducts();
    loadSaleProducts();
    loadCategories();
    loadTestimonials();
    updateCartCount();

    // Set up event listeners
    setupEventListeners();
});

// Set up all event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Cart icon
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('cart');
    });

    // Floating cart
    floatingCart.addEventListener('click', function() {
        showPage('cart');
    });

    // View cart button
    viewCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('cart');
    });

    // Close popup
    closePopup.addEventListener('click', function() {
        salePopup.style.display = 'none';
    });

    // Shop sale item from popup
    shopSaleItem.addEventListener('click', function(e) {
        e.preventDefault();
        salePopup.style.display = 'none';
        showPage('sale');
    });

    // Checkout via WhatsApp
    checkoutWhatsApp.addEventListener('click', function(e) {
        e.preventDefault();
        checkoutViaWhatsApp();
    });

    // Theme toggle
    themeToggle.addEventListener('click', function() {
        toggleTheme();
    });

    // Language switcher
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
            this.reset();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you within 24 hours.');
            this.reset();
        });
    }
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update language button text
    const langBtnText = languageBtn.querySelector('span');
    langBtnText.textContent = lang === 'en' ? 'EN' : 'SW';
    
    // Update all translatable elements
    updateTextContent();
}

// Update all text content based on current language
function updateTextContent() {
    const t = translations[currentLanguage];
    
    // Update navigation
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update buttons and other elements
    const elementsToTranslate = {
        '#view-cart': 'viewCart',
        '.btn-whatsapp': 'shopWhatsApp',
        '.newsletter-form button': 'subscribe',
        '#checkout-whatsapp': 'checkout',
        '.cart-actions .btn-outline': 'continueShopping'
    };
    
    for (const selector in elementsToTranslate) {
        const element = document.querySelector(selector);
        if (element && t[elementsToTranslate[selector]]) {
            element.textContent = t[elementsToTranslate[selector]];
        }
    }
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    setTheme(currentTheme);
}

// Set theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Show specific page and hide others
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Load page-specific content
        switch(pageId) {
            case 'home':
                loadFeaturedProducts();
                loadSaleProducts();
                break;
            case 'collections':
                loadCategories();
                break;
            case 'new-arrivals':
                loadNewArrivals();
                break;
            case 'bestsellers':
                loadBestsellers();
                break;
            case 'sale':
                loadSalePage();
                break;
            case 'cart':
                loadCart();
                break;
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Load featured products on home page
function loadFeaturedProducts() {
    const featuredContainer = document.querySelector('#home .featured-section .collections');
    if (!featuredContainer) return;
    
    featuredContainer.innerHTML = '';
    
    // Get all featured products
    const featuredProducts = [];
    Object.values(products).forEach(category => {
        category.forEach(product => {
            if (product.featured) {
                featuredProducts.push(product);
            }
        });
    });
    
    // Display up to 6 featured products
    featuredProducts.slice(0, 6).forEach(product => {
        const productCard = createProductCard(product);
        featuredContainer.appendChild(productCard);
    });
}

// Load sale products on home page
function loadSaleProducts() {
    const saleContainer = document.querySelector('#home .sale-section .collections');
    if (!saleContainer) return;
    
    saleContainer.innerHTML = '';
    
    // Get all sale products
    const saleProducts = [];
    Object.values(products).forEach(category => {
        category.forEach(product => {
            if (product.sale) {
                saleProducts.push(product);
            }
        });
    });
    
    // Display up to 4 sale products
    saleProducts.slice(0, 4).forEach(product => {
        const productCard = createProductCard(product);
        saleContainer.appendChild(productCard);
    });
}

// Load categories on collections page
function loadCategories() {
    const categoryContainer = document.querySelector('.category-grid');
    if (!categoryContainer) return;
    
    categoryContainer.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-image">
                <img src="${category.image}" alt="${category.name}">
                <div class="category-overlay">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    <a href="#" class="btn btn-outline" data-category="${category.id}">${translations[currentLanguage].explore}</a>
                </div>
            </div>
        `;
        
        categoryContainer.appendChild(categoryCard);
        
        // Add event listener to explore button
        const exploreBtn = categoryCard.querySelector('.btn');
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryId = this.getAttribute('data-category');
            showCategoryProducts(categoryId);
        });
    });
}

// Show products for a specific category
function showCategoryProducts(categoryId) {
    // Create a temporary page for category products
    const categoryPage = document.createElement('div');
    categoryPage.id = 'category-products';
    categoryPage.className = 'page active';
    categoryPage.innerHTML = `
        <div class="container page-content">
            <a href="#" class="back-button" data-page="collections">
                <i class="fas fa-arrow-left"></i> ${translations[currentLanguage].backToCollections}
            </a>
            <div class="section-title">
                <h2>${categories.find(c => c.id === categoryId).name}</h2>
                <p>${categories.find(c => c.id === categoryId).description}</p>
            </div>
            <div class="collections">
                <!-- Products will be populated here -->
            </div>
        </div>
    `;
    
    // Add to DOM
    document.body.appendChild(categoryPage);
    
    // Hide other pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Load products for this category
    const productsContainer = categoryPage.querySelector('.collections');
    products[categoryId].forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
    
    // Add event listener to back button
    const backButton = categoryPage.querySelector('.back-button');
    backButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.removeChild(categoryPage);
        showPage('collections');
    });
}

// Load new arrivals
function loadNewArrivals() {
    const newArrivalsContainer = document.querySelector('#new-arrivals .collections');
    if (!newArrivalsContainer) return;
    
    newArrivalsContainer.innerHTML = '';
    
    // Get all products (for demo, we'll use a mix)
    const allProducts = [];
    Object.values(products).forEach(category => {
        allProducts.push(...category);
    });
    
    // Display products (for demo, we'll show the first 8)
    allProducts.slice(0, 8).forEach(product => {
        const productCard = createProductCard(product);
        newArrivalsContainer.appendChild(productCard);
    });
}

// Load bestsellers
function loadBestsellers() {
    const bestsellersContainer = document.querySelector('#bestsellers .collections');
    if (!bestsellersContainer) return;
    
    bestsellersContainer.innerHTML = '';
    
    // Get featured products as bestsellers for demo
    const bestsellers = [];
    Object.values(products).forEach(category => {
        category.forEach(product => {
            if (product.featured) {
                bestsellers.push(product);
            }
        });
    });
    
    // Display bestsellers
    bestsellers.forEach(product => {
        const productCard = createProductCard(product);
        bestsellersContainer.appendChild(productCard);
    });
}

// Load sale page
function loadSalePage() {
    const saleContainer = document.querySelector('#sale .collections');
    if (!saleContainer) return;
    
    saleContainer.innerHTML = '';
    
    // Get all sale products
    const saleProducts = [];
    Object.values(products).forEach(category => {
        category.forEach(product => {
            if (product.sale) {
                saleProducts.push(product);
            }
        });
    });
    
    // Display sale products (10-12 as requested)
    saleProducts.slice(0, 12).forEach(product => {
        const productCard = createProductCard(product);
        saleContainer.appendChild(productCard);
    });
}

// Create product card HTML
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    const discount = product.originalPrice ? 
        Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
    productCard.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.sale ? `<div class="sale-badge">${discount}% OFF</div>` : ''}
            <div class="product-overlay">
                <button class="btn btn-primary quick-view" data-product="${product.id}">${translations[currentLanguage].quickView}</button>
                <button class="btn btn-outline add-to-cart" data-product="${product.id}">${translations[currentLanguage].addToCart}</button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                ${product.originalPrice && product.originalPrice > product.price ? 
                    `<span class="original-price">Ksh ${product.originalPrice}</span>` : ''}
                <span class="current-price">Ksh ${product.price}</span>
            </div>
        </div>
    `;
    
    // Add event listeners
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        addToCart(product);
    });
    
    const quickViewBtn = productCard.querySelector('.quick-view');
    quickViewBtn.addEventListener('click', function() {
        showQuickView(product);
    });
    
    return productCard;
}

// Show quick view modal
function showQuickView(product) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal quick-view-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal"><i class="fas fa-times"></i></button>
            <div class="modal-body">
                <div class="product-image-large">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h2>${product.name}</h2>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        ${product.originalPrice && product.originalPrice > product.price ? 
                            `<span class="original-price">Ksh ${product.originalPrice}</span>` : ''}
                        <span class="current-price">Ksh ${product.price}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary add-to-cart-modal" data-product="${product.id}">${translations[currentLanguage].addToCart}</button>
                        <button class="btn btn-outline">Save for Later</button>
                    </div>
                    <div class="product-features">
                        <h3>Features</h3>
                        <ul>
                            <li><i class="fas fa-check"></i> Premium quality materials</li>
                            <li><i class="fas fa-check"></i> Handcrafted with attention to detail</li>
                            <li><i class="fas fa-check"></i> Durable construction</li>
                            <li><i class="fas fa-check"></i> Functional design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add to DOM
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    const addToCartBtn = modal.querySelector('.add-to-cart-modal');
    addToCartBtn.addEventListener('click', function() {
        addToCart(product);
        document.body.removeChild(modal);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Add product to cart
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show confirmation
    showNotification(`${product.name} added to cart!`);
}

// Update cart count in header and floating cart
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCountFloating.textContent = totalItems;
    
    // Show/hide floating cart based on cart items
    if (totalItems > 0) {
        floatingCart.classList.add('has-items');
    } else {
        floatingCart.classList.remove('has-items');
    }
}

// Load cart page
function loadCart() {
    if (!cartContent) return;
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Add some beautiful bags to your cart</p>
                <a href="#" class="btn btn-primary" data-page="collections">${translations[currentLanguage].continueShopping}</a>
            </div>
        `;
        
        // Add event listener to shopping button
        const shopBtn = cartContent.querySelector('.btn');
        shopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('collections');
        });
        
        // Hide cart summary
        document.querySelector('.cart-summary').style.display = 'none';
    } else {
        cartContent.innerHTML = '';
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <p class="cart-item-price">Ksh ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-total">
                    <span>Ksh ${itemTotal}</span>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            cartContent.appendChild(cartItem);
        });
        
        // Update total
        cartTotalAmount.textContent = `Ksh ${total}`;
        
        // Show cart summary
        document.querySelector('.cart-summary').style.display = 'block';
        
        // Add event listeners to cart items
        const minusBtns = document.querySelectorAll('.quantity-btn.minus');
        const plusBtns = document.querySelectorAll('.quantity-btn.plus');
        const removeBtns = document.querySelectorAll('.cart-item-remove');
        
        minusBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                updateCartItemQuantity(this.getAttribute('data-id'), -1);
            });
        });
        
        plusBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                updateCartItemQuantity(this.getAttribute('data-id'), 1);
            });
        });
        
        removeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                removeCartItem(this.getAttribute('data-id'));
            });
        });
    }
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id == productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeCartItem(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            loadCart();
        }
    }
}

// Remove item from cart
function removeCartItem(productId) {
    cart = cart.filter(item => item.id != productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCart();
    
    showNotification('Item removed from cart');
}

// Checkout via WhatsApp
function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items before checking out.');
        return;
    }
    
    let message = "Hi BagsByLove, I'd like to purchase the following items:%0A%0A";
    
    cart.forEach(item => {
        message += `- ${item.name} (Qty: ${item.quantity}) - Ksh ${item.price * item.quantity}%0A`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `%0ATotal: Ksh ${total}%0A%0A`;
    message += "Please confirm availability and provide payment details.";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/254711642342?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
}

// Load testimonials
function loadTestimonials() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (!testimonialTrack) return;
    
    testimonialTrack.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialEl = document.createElement('div');
        testimonialEl.className = 'testimonial';
        testimonialEl.innerHTML = `
            <div class="testimonial-content">
                <div class="testimonial-text">"${testimonial.text}"</div>
                <div class="testimonial-author">
                    <div class="author-name">${testimonial.name}</div>
                    <div class="author-location">${testimonial.location}</div>
                </div>
                <div class="testimonial-rating">
                    ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                </div>
            </div>
        `;
        
        testimonialTrack.appendChild(testimonialEl);
    });
    
    // Set up testimonial slider
    setupTestimonialSlider();
}

// Set up testimonial slider
function setupTestimonialSlider() {
    const dots = document.querySelectorAll('.testimonial-dot');
    const track = document.querySelector('.testimonial-track');
    
    if (!dots.length || !track) return;
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            
            // Update active dot
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            
            // Move track
            track.style.transform = `translateX(-${slideIndex * 100}%)`;
        });
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
        const activeDot = document.querySelector('.testimonial-dot.active');
        let nextIndex = parseInt(activeDot.getAttribute('data-slide')) + 1;
        
        if (nextIndex >= dots.length) {
            nextIndex = 0;
        }
        
        dots[nextIndex].click();
    }, 5000);
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Hero image animation
function animateHeroImages() {
    const heroImages = document.querySelector('.hero-images');
    if (!heroImages) return;
    
    // Clone first few images and append to end for seamless loop
    const images = heroImages.querySelectorAll('.hero-image-item');
    for (let i = 0; i < 3; i++) {
        const clone = images[i].cloneNode(true);
        heroImages.appendChild(clone);
    }
    
    // Set animation
    heroImages.style.animation = 'scrollHero 30s linear infinite';
}

// Initialize hero animation
animateHeroImages();

console.log('Bags By Love website enhanced with language switching and dark mode!');
