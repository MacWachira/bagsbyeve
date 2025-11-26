// Enhanced JavaScript for Bags By Eve Website

// Enhanced Product Data with more categories and items
const products = {
    "totes": [
        {
            id: 1,
            name: "Classic Leather Tote",
            price: 4500,
            originalPrice: 5200,
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Spacious and stylish leather tote perfect for work or weekend outings. Features multiple compartments and premium leather construction.",
            category: "totes",
            featured: true,
            sale: false,
            features: ["Genuine Leather", "Multiple Compartments", "Adjustable Strap", "Water Resistant"],
            colors: ["Brown", "Black", "Tan"],
            sizes: ["Medium", "Large"]
        },
        {
            id: 2,
            name: "Canvas Weekender Tote",
            price: 3800,
            originalPrice: 4500,
            image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Durable canvas tote with leather accents, ideal for travel or daily use. Perfect for carrying all your essentials in style.",
            category: "totes",
            featured: false,
            sale: true,
            features: ["Durable Canvas", "Leather Accents", "Zipper Closure", "Interior Pocket"],
            colors: ["Navy", "Beige", "Olive"],
            sizes: ["Large"]
        }
    ],
    "crossbody": [
        {
            id: 3,
            name: "Leather Crossbody Bag",
            price: 3200,
            originalPrice: 3800,
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Compact crossbody with adjustable strap, perfect for hands-free convenience. Ideal for evenings out or daily errands.",
            category: "crossbody",
            featured: true,
            sale: false,
            features: ["Adjustable Strap", "Multiple Pockets", "Magnetic Closure", "Lightweight"],
            colors: ["Black", "Brown", "Burgundy"],
            sizes: ["Small", "Medium"]
        }
    ],
    "clutches": [
        {
            id: 4,
            name: "Evening Sparkle Clutch",
            price: 2800,
            originalPrice: 3500,
            image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Glamorous clutch with sequin detailing for special occasions. Makes a statement at any event.",
            category: "clutches",
            featured: true,
            sale: false,
            features: ["Sequin Detailing", "Wrist Strap", "Compact Size", "Elegant Design"],
            colors: ["Gold", "Silver", "Black"],
            sizes: ["One Size"]
        }
    ],
    "backpacks": [
        {
            id: 5,
            name: "Leather Laptop Backpack",
            price: 5800,
            originalPrice: 6500,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Professional backpack with padded laptop compartment. Combines style with functionality for the modern professional.",
            category: "backpacks",
            featured: true,
            sale: false,
            features: ["Padded Laptop Sleeve", "Multiple Compartments", "Water Bottle Pocket", "Ergonomic Straps"],
            colors: ["Black", "Brown", "Navy"],
            sizes: ["15-inch", "17-inch"]
        }
    ],
    "shoulder-bags": [
        {
            id: 6,
            name: "Structured Shoulder Bag",
            price: 4200,
            originalPrice: 4900,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Elegant shoulder bag with structured design. Perfect for both professional and casual settings.",
            category: "shoulder-bags",
            featured: true,
            sale: true,
            features: ["Structured Design", "Top Handle", "Detachable Strap", "Interior Organization"],
            colors: ["Camel", "Black", "Red"],
            sizes: ["Medium"]
        }
    ],
    "bucket-bags": [
        {
            id: 7,
            name: "Leather Bucket Bag",
            price: 3500,
            originalPrice: 4200,
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Trendy bucket bag with drawstring closure. Combines bohemian style with modern functionality.",
            category: "bucket-bags",
            featured: false,
            sale: true,
            features: ["Drawstring Closure", "Adjustable Strap", "Spacious Interior", "Magnetic Pocket"],
            colors: ["Tan", "Black", "Olive"],
            sizes: ["Medium"]
        }
    ],
    "mini-bags": [
        {
            id: 8,
            name: "Mini Crossbody Purse",
            price: 2500,
            originalPrice: 3000,
            image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Small but mighty, fits essentials with style. Perfect for minimalists who value both form and function.",
            category: "mini-bags",
            featured: true,
            sale: false,
            features: ["Compact Size", "Adjustable Chain", "Card Slots", "Key Holder"],
            colors: ["Pink", "Black", "White"],
            sizes: ["Mini"]
        }
    ]
};

// Enhanced Categories
const categories = [
    {
        id: "totes",
        name: "Totes",
        description: "Spacious and versatile bags for work, travel, and everyday use",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        count: "12 products"
    },
    {
        id: "crossbody",
        name: "Crossbody Bags",
        description: "Hands-free convenience with style, perfect for active days",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        count: "8 products"
    },
    {
        id: "clutches",
        name: "Clutches",
        description: "Elegant evening bags for special occasions and nights out",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        count: "6 products"
    },
    {
        id: "backpacks",
        name: "Backpacks",
        description: "Functional and fashionable bags for work, school, and travel",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        count: "10 products"
    },
    {
        id: "shoulder-bags",
        name: "Shoulder Bags",
        description: "Classic shoulder carry bags with timeless appeal",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        count: "9 products"
    },
    {
        id: "bucket-bags",
        name: "Bucket Bags",
        description: "Trendy drawstring bags with bohemian inspiration",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        count: "7 products"
    },
    {
        id: "mini-bags",
        name: "Mini Bags",
        description: "Compact bags for essentials-only outings",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        count: "5 products"
    }
];

// Enhanced Testimonials
const testimonials = [
    {
        name: "Sarah M.",
        location: "Nairobi",
        text: "I absolutely love my Bags By Eve tote! The quality is exceptional and it's so versatile. The leather has held up beautifully over months of daily use.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Grace W.",
        location: "Mombasa",
        text: "The customer service is outstanding! They helped me choose the perfect clutch for my wedding and even did a special customization.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        name: "Linda K.",
        location: "Kisumu",
        text: "I've purchased three bags and each one has exceeded my expectations. The attention to detail and craftsmanship is remarkable!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

// Instagram Posts
const instagramPosts = [
    {
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: "2.4k",
        comments: "124"
    },
    {
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: "1.8k",
        comments: "89"
    },
    {
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: "3.2k",
        comments: "156"
    },
    {
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: "2.1k",
        comments: "98"
    },
    {
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: "1.9k",
        comments: "112"
    },
    {
        image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        likes: "2.7k",
        comments: "134"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('bagsByEveCart')) || [];

// Language and Theme State
let currentLanguage = localStorage.getItem('bagsByEveLanguage') || 'en';
let currentTheme = localStorage.getItem('bagsByEveTheme') || 'light';

// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('[data-page]');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.querySelector('.cart-count');
const floatingCart = document.getElementById('floating-cart');
const cartCountFloating = document.querySelector('.cart-count-floating');
const salePopup = document.getElementById('sale-popup');
const closePopup = document.getElementById('close-popup');
const shopSaleItem = document.getElementById('shop-sale-item');
const themeToggle = document.getElementById('theme-toggle');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const exploreCollectionsBtn = document.getElementById('explore-collections');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    loadHomePageContent();
    
    // Show sale popup after 3 seconds
    setTimeout(() => {
        showSalePopup();
    }, 3000);
});

// Initialize website settings
function initializeWebsite() {
    setLanguage(currentLanguage);
    setTheme(currentTheme);
    updateCartCount();
    initializeParticles();
    initializeScrollAnimations();
}

// Set up all event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            
            // Close mobile menu if open
            if (mobileNav.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Cart functionality
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        showPage('cart');
    });

    floatingCart.addEventListener('click', function() {
        showPage('cart');
    });

    // Popup functionality
    closePopup.addEventListener('click', closeSalePopup);
    shopSaleItem.addEventListener('click', function(e) {
        e.preventDefault();
        closeSalePopup();
        showPage('sale');
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Mobile menu
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Explore collections button
    if (exploreCollectionsBtn) {
        exploreCollectionsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('collections');
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
            
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });

    // Keyboard events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('bagsByEveLanguage', lang);
    updateTextContent();
}

// Set theme
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('bagsByEveTheme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Toggle theme
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (mobileNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Show specific page
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Update active nav link
        updateActiveNavLink(pageId);
        
        // Load page-specific content
        loadPageContent(pageId);
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Update active navigation link
function updateActiveNavLink(pageId) {
    const allNavLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    allNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
}

// Load content for specific page
function loadPageContent(pageId) {
    switch(pageId) {
        case 'home':
            loadHomePageContent();
            break;
        case 'collections':
            loadCollectionsPage();
            break;
        case 'new-arrivals':
            loadNewArrivalsPage();
            break;
        case 'bestsellers':
            loadBestsellersPage();
            break;
        case 'sale':
            loadSalePage();
            break;
        case 'about':
            loadAboutPage();
            break;
        case 'contact':
            loadContactPage();
            break;
        case 'cart':
            loadCartPage();
            break;
    }
}

// Load home page content
function loadHomePageContent() {
    loadFeaturedCollections();
    loadNewArrivals();
    loadCategories();
    loadTestimonials();
    loadInstagramPosts();
}

// Load featured collections
function loadFeaturedCollections() {
    const container = document.querySelector('.collections-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    const featuredProducts = getFeaturedProducts().slice(0, 6);
    
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Load new arrivals
function loadNewArrivals() {
    const container = document.querySelector('.products-carousel');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Get all products and take the first 8 as new arrivals
    const allProducts = getAllProducts().slice(0, 8);
    
    allProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Initialize carousel if needed
    initializeCarousel();
}

// Load categories
function loadCategories() {
    const container = document.querySelector('.categories-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = createCategoryCard(category);
        container.appendChild(categoryCard);
    });
}

// Load testimonials
function loadTestimonials() {
    const container = document.querySelector('.testimonials-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    testimonials.forEach(testimonial => {
        const testimonialCard = createTestimonialCard(testimonial);
        container.appendChild(testimonialCard);
    });
}

// Load Instagram posts
function loadInstagramPosts() {
    const container = document.querySelector('.instagram-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    instagramPosts.forEach(post => {
        const postElement = createInstagramPost(post);
        container.appendChild(postElement);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.sale ? '<div class="product-badge">Sale</div>' : ''}
            ${product.featured ? '<div class="product-badge" style="background: var(--secondary); color: var(--black);">Featured</div>' : ''}
            <div class="product-overlay">
                <button class="btn btn-primary quick-view-btn" data-product="${product.id}">
                    <i class="fas fa-eye"></i> Quick View
                </button>
                <button class="btn btn-secondary add-to-cart-btn" data-product="${product.id}">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                ${product.originalPrice && product.originalPrice > product.price ? 
                    `<span class="original-price">Ksh ${product.originalPrice.toLocaleString()}</span>` : ''}
                <span class="current-price">Ksh ${product.price.toLocaleString()}</span>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary add-to-cart-btn" data-product="${product.id}">
                    <i class="fas fa-shopping-bag"></i> Add to Cart
                </button>
                <button class="btn btn-outline wishlist-btn" data-product="${product.id}">
                    <i class="far fa-heart"></i>
                </button>
            </div>
        </div>
    `;
    
    // Add event listeners
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => addToCart(product));
    
    const quickViewBtn = card.querySelector('.quick-view-btn');
    quickViewBtn.addEventListener('click', () => showQuickView(product));
    
    const wishlistBtn = card.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', () => toggleWishlist(product));
    
    return card;
}

// Create category card
function createCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'category-card fade-in';
    card.innerHTML = `
        <div class="category-image">
            <img src="${category.image}" alt="${category.name}" loading="lazy">
            <div class="category-overlay">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <span class="product-count">${category.count}</span>
                <button class="btn btn-primary explore-category" data-category="${category.id}">
                    Explore Collection
                </button>
            </div>
        </div>
    `;
    
    const exploreBtn = card.querySelector('.explore-category');
    exploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('collections');
        // You could also filter the collections page by this category
    });
    
    return card;
}

// Create testimonial card
function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card fade-in';
    card.innerHTML = `
        <div class="testimonial-content">
            <div class="testimonial-text">"${testimonial.text}"</div>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
                <div class="author-info">
                    <div class="author-name">${testimonial.name}</div>
                    <div class="author-location">${testimonial.location}</div>
                </div>
            </div>
            <div class="testimonial-rating">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
            </div>
        </div>
    `;
    
    return card;
}

// Create Instagram post
function createInstagramPost(post) {
    const element = document.createElement('div');
    element.className = 'instagram-post fade-in';
    element.innerHTML = `
        <div class="post-image">
            <img src="${post.image}" alt="Instagram post" loading="lazy">
            <div class="post-overlay">
                <div class="post-stats">
                    <span><i class="fas fa-heart"></i> ${post.likes}</span>
                    <span><i class="fas fa-comment"></i> ${post.comments}</span>
                </div>
            </div>
        </div>
    `;
    
    return element;
}

// Add to cart functionality
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
    
    // Update storage and UI
    localStorage.setItem('bagsByEveCart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart!`, 'success');
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCount) cartCount.textContent = totalItems;
    if (cartCountFloating) cartCountFloating.textContent = totalItems;
    
    // Update floating cart appearance
    if (floatingCart) {
        if (totalItems > 0) {
            floatingCart.classList.add('has-items');
        } else {
            floatingCart.classList.remove('has-items');
        }
    }
}

// Show quick view modal
function showQuickView(product) {
    const modal = document.getElementById('quick-view-modal');
    if (!modal) return;
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal"><i class="fas fa-times"></i></button>
            <div class="quick-view-content">
                <div class="product-gallery">
                    <div class="main-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                </div>
                <div class="product-details">
                    <h2>${product.name}</h2>
                    <div class="product-price">
                        ${product.originalPrice && product.originalPrice > product.price ? 
                            `<span class="original-price">Ksh ${product.originalPrice.toLocaleString()}</span>` : ''}
                        <span class="current-price">Ksh ${product.price.toLocaleString()}</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-features">
                        <h4>Features</h4>
                        <ul>
                            ${product.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="product-options">
                        <div class="option-group">
                            <label>Color:</label>
                            <div class="color-options">
                                ${product.colors.map(color => 
                                    `<button class="color-option" style="background-color: ${getColorValue(color)}" data-color="${color}"></button>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="option-group">
                            <label>Size:</label>
                            <div class="size-options">
                                ${product.sizes.map(size => 
                                    `<button class="size-option" data-size="${size}">${size}</button>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-actions">
                        <button class="btn btn-primary add-to-cart-large" data-product="${product.id}">
                            <i class="fas fa-shopping-bag"></i> Add to Cart - Ksh ${product.price.toLocaleString()}
                        </button>
                        <button class="btn btn-secondary buy-now-whatsapp" data-product="${product.id}">
                            <i class="fab fa-whatsapp"></i> Buy Now on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add event listeners
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => closeModal(modal));
    
    const addToCartBtn = modal.querySelector('.add-to-cart-large');
    addToCartBtn.addEventListener('click', () => {
        addToCart(product);
        closeModal(modal);
    });
    
    const whatsappBtn = modal.querySelector('.buy-now-whatsapp');
    whatsappBtn.addEventListener('click', () => {
        checkoutSingleProduct(product);
        closeModal(modal);
    });
    
    // Show modal
    modal.classList.add('active');
}

// Checkout single product via WhatsApp
function checkoutSingleProduct(product) {
    const message = `Hi Bags By Eve! I'm interested in purchasing the ${product.name}. \n\nProduct: ${product.name}\nPrice: Ksh ${product.price.toLocaleString()}\nImage: ${product.image}\n\nPlease provide more details and payment information.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254711642342?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
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
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Initialize particles for hero section
function initializeParticles() {
    const container = document.getElementById('hero-particles');
    if (!container) return;
    
    // Simple particle system
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255,255,255,0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
        `;
        container.appendChild(particle);
    }
    
    // Add CSS for particle animation
    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float {
                0% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '-' : ''}100px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Show sale popup
function showSalePopup() {
    if (salePopup) {
        salePopup.classList.add('active');
    }
}

// Close sale popup
function closeSalePopup() {
    if (salePopup) {
        salePopup.classList.remove('active');
    }
}

// Close modal
function closeModal(modal) {
    modal.classList.remove('active');
}

// Close all modals
function closeAllModals() {
    document.querySelectorAll('.modal.active').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Handle newsletter submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate API call
    showNotification('Thank you for subscribing to our newsletter!', 'success');
    e.target.reset();
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    e.target.reset();
}

// Utility functions
function getFeaturedProducts() {
    const featured = [];
    Object.values(products).forEach(category => {
        category.forEach(product => {
            if (product.featured) {
                featured.push(product);
            }
        });
    });
    return featured;
}

function getAllProducts() {
    const allProducts = [];
    Object.values(products).forEach(category => {
        allProducts.push(...category);
    });
    return allProducts;
}

function getColorValue(color) {
    const colorMap = {
        'Brown': '#8B4513',
        'Black': '#000000',
        'Tan': '#D2B48C',
        'Navy': '#000080',
        'Beige': '#F5F5DC',
        'Olive': '#808000',
        'Burgundy': '#800020',
        'Gold': '#FFD700',
        'Silver': '#C0C0C0',
        'Camel': '#C19A6B',
        'Red': '#FF0000',
        'Pink': '#FFC0CB',
        'White': '#FFFFFF'
    };
    return colorMap[color] || '#CCCCCC';
}

// Initialize carousel (placeholder for future enhancement)
function initializeCarousel() {
    // This would be implemented with a proper carousel library
    // For now, we're using CSS grid for responsiveness
}

console.log('Bags By Eve website enhanced with modern design and functionality!');
