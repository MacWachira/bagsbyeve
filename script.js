// script.js - ENHANCED E-COMMERCE WITH CHRISTMAS FEATURES

// --- I. Data and Configuration ---

const translations = {
    en: {
        productDetails: "Product Details", 
        specifications: "Specifications", 
        material: "Material", 
        dimensions: "Dimensions", 
        weight: "Weight", 
        features: "Features",
        relatedProducts: "You Might Also Love", 
        addToBag: "Add to Bag", 
        checkout: "Proceed to Checkout",
        whatsappCheckout: "Checkout on WhatsApp",
        whatsappMessage: "I would like to purchase the following bag: ",
    }
};

const currentLanguage = 'en';

const categories = ['totes', 'crossbody', 'clutches', 'backpacks', 'satchels', 'mini_bags', 'travel_bags'];

// PRODUCT DATA - Expanded with Christmas collection
const products = [
    { 
        id: 1, 
        name: "The Signature Tote", 
        category: "totes", 
        price: 5500, 
        originalPrice: 6200, 
        isSale: true,
        isChristmas: true,
        image: "https://images.unsplash.com/photo-1543883832-6800d981ce81?q=80&w=600&h=600&fit=crop", 
        description: "Our best-selling tote bag, perfect for work or travel. Made of fine Italian leather with durable canvas lining and a secure magnetic clasp. Features a dedicated laptop sleeve.",
        images: [
            "https://images.unsplash.com/photo-1543883832-6800d981ce81?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1574360677840-7e390c25a172?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1582098616171-87455079a400?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Genuine Leather", 
            dimensions: "35cm x 15cm x 30cm", 
            weight: "1.2 kg", 
            features: ["Dedicated Laptop Pocket", "Key Fob", "Adjustable Shoulder Strap"] 
        }
    },
    { 
        id: 2, 
        name: "Urban Crossbody", 
        category: "crossbody", 
        price: 3800, 
        originalPrice: 0, 
        isSale: false, 
        isChristmas: false,
        image: "https://images.unsplash.com/photo-1555026901-26685f02c610?q=80&w=600&h=600&fit=crop", 
        description: "Minimalist design for city life. Carry essentials hands-free and securely. Crafted from sustainable vegan leather. Features a quick-access front zipper pocket.",
        images: [
            "https://images.unsplash.com/photo-1555026901-26685f02c610?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1617056082404-51147571f301?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Vegan Eco-Leather", 
            dimensions: "25cm x 7cm x 18cm", 
            weight: "0.5 kg", 
            features: ["Water Resistant Exterior", "Interior Zipper Pocket", "Adjustable/Detachable Strap"] 
        }
    },
    { 
        id: 3, 
        name: "Evening Clutch", 
        category: "clutches", 
        price: 2950, 
        originalPrice: 0, 
        isSale: false, 
        isChristmas: true,
        image: "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=600&h=600&fit=crop", 
        description: "Sequined and elegant. The perfect accessory for black-tie events and holiday parties.", 
        images: [
            "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1551000000-8484a0c8b3d6?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Silk/Sequins", 
            dimensions: "20cm x 5cm x 12cm", 
            weight: "0.3 kg", 
            features: ["Detachable Chain Strap", "Magnetic Closure"] 
        } 
    },
    { 
        id: 4, 
        name: "Premium Commuter Backpack", 
        category: "backpacks", 
        price: 7900, 
        originalPrice: 8500, 
        isSale: true, 
        isChristmas: false,
        image: "https://images.unsplash.com/photo-1594953922615-566d5113d078?q=80&w=600&h=600&fit=crop", 
        description: "Spacious and durable. Designed for the professional on the move.", 
        images: [
            "https://images.unsplash.com/photo-1594953922615-566d5113d078?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1588667355171-d7fe51280365?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Durable Canvas", 
            dimensions: "30cm x 18cm x 45cm", 
            weight: "1.5 kg", 
            features: ["Padded Back Panel", "External Water Bottle Pocket", "TSA-Friendly Laptop Sleeve"] 
        } 
    },
    { 
        id: 5, 
        name: "Structured Satchel", 
        category: "satchels", 
        price: 6100, 
        originalPrice: 0, 
        isSale: false, 
        isChristmas: true,
        image: "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=600&h=600&fit=crop", 
        description: "Classic silhouette with a modern, structured finish. Available in three colors.", 
        images: [
            "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627027598858-6a5680194098?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Genuine Leather", 
            dimensions: "30cm x 12cm x 25cm", 
            weight: "1.0 kg", 
            features: ["Top Handle", "Interior Divider Pocket"] 
        } 
    },
    { 
        id: 6, 
        name: "The Petite Round Bag", 
        category: "mini_bags", 
        price: 2100, 
        originalPrice: 0, 
        isSale: false, 
        isChristmas: false,
        image: "https://images.unsplash.com/photo-1624378772274-1a5666f4886b?q=80&w=600&h=600&fit=crop", 
        description: "Small but mighty, perfect for your phone and lipstick.", 
        images: [
            "https://images.unsplash.com/photo-1624378772274-1a5666f4886b?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Vegan Eco-Leather", 
            dimensions: "15cm x 5cm x 15cm", 
            weight: "0.2 kg", 
            features: ["Adjustable Fine Chain", "Lined Interior"] 
        } 
    },
    { 
        id: 7, 
        name: "Weekend Duffel Bag", 
        category: "travel_bags", 
        price: 9500, 
        originalPrice: 0, 
        isSale: false, 
        isChristmas: false,
        image: "https://images.unsplash.com/photo-1557456108-8123c52e1281?q=80&w=600&h=600&fit=crop", 
        description: "Stylish and spacious travel companion. Carry-on approved.", 
        images: [
            "https://images.unsplash.com/photo-1557456108-8123c52e1281?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1580633842603-d1f060143890?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Durable Canvas", 
            dimensions: "50cm x 25cm x 30cm", 
            weight: "1.8 kg", 
            features: ["Shoe Compartment", "Detachable Pouch", "Trolley Sleeve"] 
        } 
    },
    { 
        id: 8, 
        name: "The Essential Satchel", 
        category: "satchels", 
        price: 4200, 
        originalPrice: 4800, 
        isSale: true, 
        isChristmas: true,
        image: "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=600&h=600&fit=crop", 
        description: "A versatile bag for every occasion. Genuine leather with metal accents.", 
        images: [
            "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Genuine Leather", 
            dimensions: "28cm x 10cm x 20cm", 
            weight: "0.8 kg", 
            features: ["Magnetic Snap Closure", "Gold-Tone Hardware"] 
        } 
    }
];

const cart = [];
const whatsappNumber = "254711642342";
let appliedCoupon = null;
let giftWrapping = false;
let giftMessage = "";

// Coupon codes
const coupons = {
    'XMAS2023': { discount: 10, type: 'percentage', minAmount: 0 },
    'WELCOME10': { discount: 10, type: 'percentage', minAmount: 0 },
    'HOLIDAY25': { discount: 25, type: 'percentage', minAmount: 10000 }
};

// --- II. Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Initialize sale popup
    initializeSalePopup();
    
    // Initialize hero slider
    initializeHeroSlider();
    
    // Set up search functionality
    document.getElementById('search-toggle').addEventListener('click', toggleSearch);
    
    // Set up modal close buttons
    document.getElementById('close-quick-view').addEventListener('click', () => {
        closeModal('quick-view-modal');
    });

    // Close modal when clicking outside
    document.getElementById('quick-view-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('quick-view-modal')) {
            closeModal('quick-view-modal');
        }
    });

    // Set up filter functionality
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const sortOptions = document.getElementById('sort-options');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    if (sortOptions) {
        sortOptions.addEventListener('change', applySorting);
    }

    // Set up coupon functionality
    document.getElementById('apply-coupon').addEventListener('click', applyCoupon);
    
    // Set up gift options
    document.getElementById('gift-wrapping').addEventListener('change', updateGiftOptions);
    document.getElementById('gift-message').addEventListener('change', toggleGiftMessage);

    // Set up coupon tags
    document.querySelectorAll('.coupon-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.getElementById('coupon-code').value = tag.getAttribute('data-code');
        });
    });

    // Override the default click behavior for internal navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            if (targetId && targetId !== '#') {
                e.preventDefault();
                
                const pageName = targetId.replace('-page', '');
                loadPage(pageName);
            }
        });
    });

    // Determine initial page
    const initialHash = window.location.hash.substring(1);
    let initialPage = 'home';
    
    if (initialHash) {
        if (initialHash.startsWith('product-')) {
            const productId = parseInt(initialHash.replace('product-', ''));
            loadProductPage(productId);
            return;
        } else {
            initialPage = initialHash.replace('-page', '');
        }
    }
    
    loadPage(initialPage);

    // Add listener for URL hash changes
    window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.substring(1);
        
        if (newHash.startsWith('product-')) {
            const productId = parseInt(newHash.replace('product-', ''));
            loadProductPage(productId);
        } else {
            const pageName = newHash.replace('-page', '') || 'home';
            loadPage(pageName);
        }
    });
});

// --- III. Sale Popup and Timer ---

function initializeSalePopup() {
    const popup = document.getElementById('sale-popup');
    const closeBtn = document.getElementById('close-popup');
    
    // Show popup after 2 seconds
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 2000);
    
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    // Initialize sale timer (countdown to Christmas)
    updateSaleTimer();
    setInterval(updateSaleTimer, 1000);
}

function updateSaleTimer() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // December 25
    if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }
    
    const diff = christmas - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('sale-timer').textContent = 
        `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
}

// --- IV. Hero Slider ---

function initializeHeroSlider() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides
    setInterval(nextSlide, 5000);
    
    // Manual controls
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);
}

// --- V. Search Functionality ---

function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('active');
    
    if (searchBar.classList.contains('active')) {
        document.getElementById('search-input').focus();
    }
}

// --- VI. Page Loading and Navigation ---

function loadPage(pageName, filter = null) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the requested page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.style.display = 'block';
        
        // Update active navigation link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + pageName + '-page') {
                link.classList.add('active');
            }
        });

        // Load specific content based on page
        switch(pageName) {
            case 'home':
                loadFeaturedProducts();
                break;
            case 'collections':
                if (filter === 'sale') {
                    // Show only sale items
                    const saleCheckbox = document.querySelector('input[name="sale"]');
                    if (saleCheckbox) saleCheckbox.checked = true;
                    applyFilters();
                } else if (filter === 'christmas') {
                    // Show Christmas collection
                    const christmasCheckbox = document.querySelector('input[name="christmas"]');
                    if (christmasCheckbox) christmasCheckbox.checked = true;
                    applyFilters();
                } else {
                    loadCollectionProducts(filter);
                }
                break;
            case 'cart':
                renderCartPage();
                break;
            case 'product':
                // Product pages are handled separately via loadProductPage
                break;
        }
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return;

    // Get first 6 products as featured
    const featuredProducts = products.slice(0, 6);
    
    featuredContainer.innerHTML = featuredProducts.map(product => renderProductCardHTML(product)).join('');
    
    // Attach event listeners to the newly created product cards
    attachProductCardListeners();
}

function loadCollectionProducts(filter = null) {
    const collectionContainer = document.getElementById('collection-products');
    if (!collectionContainer) return;

    let filteredProducts = [...products];
    
    // Apply filter if provided
    if (filter) {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    // Update product count
    document.getElementById('products-count').textContent = `${filteredProducts.length} products`;
    
    collectionContainer.innerHTML = filteredProducts.map(product => renderProductCardHTML(product)).join('');
    
    // Attach event listeners to the newly created product cards
    attachProductCardListeners();
}

function renderProductCardHTML(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${product.isSale ? '<span class="sale-badge">SALE</span>' : ''}
                ${product.isChristmas ? '<span class="christmas-badge">CHRISTMAS</span>' : ''}
                <button class="quick-view-btn" data-id="${product.id}">Quick View</button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category.replace('_', ' ')}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price-group">
                    <span class="product-price">Ksh ${product.price.toLocaleString('en-US')}</span>
                    ${product.originalPrice ? `<span class="product-price-original">Ksh ${product.originalPrice.toLocaleString('en-US')}</span>` : ''}
                </div>
                <button class="btn btn-add-to-cart" data-id="${product.id}">Add to Bag</button>
            </div>
        </div>
    `;
}

function attachProductCardListeners() {
    // Add to cart buttons
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        });
    });

    // Quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.getAttribute('data-id'));
            showQuickViewModal(productId);
        });
    });

    // Product card clicks (navigate to product page)
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('btn-add-to-cart') && 
                !e.target.classList.contains('quick-view-btn')) {
                const productId = parseInt(card.getAttribute('data-id'));
                loadProductPage(productId);
            }
        });
    });
}

// --- VII. Product Detail Page ---

function loadProductPage(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Hide all pages and show product page
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    
    const productPage = document.getElementById('product-page');
    productPage.style.display = 'block';

    // Update URL hash
    window.location.hash = `product-${productId}`;

    // Render product details
    renderProductDetails(product);

    // Load related products
    loadRelatedProducts(productId, product.category);
}

function renderProductDetails(product) {
    const container = document.getElementById('product-detail-container');
    
    container.innerHTML = `
        <div class="pdp-gallery">
            <div class="main-image-container">
                <img src="${product.images[0]}" alt="${product.name}" id="main-product-image">
            </div>
            <div class="thumbnail-gallery" id="thumbnail-gallery">
                ${product.images.map((img, index) => `
                    <img src="${img}" alt="${product.name} - View ${index + 1}" 
                         class="thumb-image ${index === 0 ? 'active' : ''}" 
                         data-index="${index}">
                `).join('')}
            </div>
        </div>
        <div class="pdp-details">
            <div class="pdp-category">${product.category.replace('_', ' ')}</div>
            <h1 class="pdp-name">${product.name}</h1>
            <div class="pdp-price-group">
                <span class="pdp-price ${product.isSale ? 'sale-price-pdp' : ''}">Ksh ${product.price.toLocaleString('en-US')}</span>
                ${product.originalPrice ? `<span class="pdp-price-original">Ksh ${product.originalPrice.toLocaleString('en-US')}</span>` : ''}
            </div>
            
            <div class="pdp-description-box">
                <h3>${translations[currentLanguage].productDetails}</h3>
                <p>${product.description}</p>
            </div>
            
            <button class="btn btn-primary pdp-add-to-cart" data-id="${product.id}">
                ${translations[currentLanguage].addToBag}
            </button>
            
            <div class="pdp-specifications">
                <h3>${translations[currentLanguage].specifications}</h3>
                <div class="spec-item">
                    <span class="spec-label">${translations[currentLanguage].material}</span>
                    <span class="spec-value">${product.specifications.material}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">${translations[currentLanguage].dimensions}</span>
                    <span class="spec-value">${product.specifications.dimensions}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">${translations[currentLanguage].weight}</span>
                    <span class="spec-value">${product.specifications.weight}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">${translations[currentLanguage].features}</span>
                    <div class="spec-value">
                        <ul class="feature-list">
                            ${product.specifications.features.map(feature => `<li><i class="fas fa-check"></i>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Attach event listeners for the product page
    attachPdpListeners(product);
}

function attachPdpListeners(product) {
    // Add to cart button
    const addToCartBtn = document.querySelector('.pdp-add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCart(product.id);
        });
    }

    // Thumbnail gallery
    setupImageGallery(product.images);
}

function setupImageGallery(images) {
    const thumbnails = document.querySelectorAll('.thumb-image');
    const mainImage = document.getElementById('main-product-image');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Update active thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            
            // Update main image
            const imageIndex = parseInt(thumb.getAttribute('data-index'));
            mainImage.src = images[imageIndex];
        });
    });
}

function loadRelatedProducts(currentProductId, category) {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;

    // Get products from the same category, excluding the current product
    const relatedProducts = products.filter(p => 
        p.category === category && p.id !== currentProductId
    ).slice(0, 4);

    relatedContainer.innerHTML = relatedProducts.map(product => renderProductCardHTML(product)).join('');
    
    // Attach event listeners to the related products
    attachProductCardListeners();
}

// --- VIII. Cart Management ---

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity });
    }
    
    updateCartCount();
    showNotification(`${product.name} added to your bag.`);
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartCount();
        renderCartPage();
        showNotification('Item removed from cart');
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartCount = document.getElementById('cart-count');
    const cartCountFloating = document.getElementById('cart-count-floating');
    
    if (cartCount) cartCount.textContent = totalItems;
    if (cartCountFloating) cartCountFloating.textContent = totalItems;
}

function renderCartPage() {
    const cartContainer = document.getElementById('cart-items-container');
    const cartSummary = document.getElementById('cart-summary');
    const itemCount = document.getElementById('item-count');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.3;"></i>
                <p>Your bag is empty</p>
                <p>Explore our <a href="#collections-page" onclick="loadPage('collections')">Collections</a> to find your perfect bag!</p>
            </div>
        `;
        cartSummary.innerHTML = '';
        if (itemCount) itemCount.textContent = '0 items';
        return;
    }

    // Generate cart item HTML
    let itemsHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const itemTotal = product.price * item.quantity;
            subtotal += itemTotal;

            itemsHTML += `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h4>${product.name}</h4>
                        <p>Ksh ${product.price.toLocaleString('en-US')}</p>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${product.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                    </div>
                    <div class="cart-item-total">
                        <span>Ksh ${itemTotal.toLocaleString('en-US')}</span>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
        }
    });

    // Calculate discounts and totals
    let discount = 0;
    if (appliedCoupon) {
        const coupon = coupons[appliedCoupon];
        if (coupon.type === 'percentage') {
            discount = (subtotal * coupon.discount) / 100;
        }
    }
    
    const giftWrapCost = giftWrapping ? 500 : 0;
    const total = subtotal - discount + giftWrapCost;

    // Generate summary HTML
    cartSummary.innerHTML = `
        <div class="summary-line"><span>Subtotal:</span><span>Ksh ${subtotal.toLocaleString('en-US')}</span></div>
        ${discount > 0 ? `<div class="summary-line"><span>Discount (${appliedCoupon}):</span><span>- Ksh ${discount.toLocaleString('en-US')}</span></div>` : ''}
        ${giftWrapCost > 0 ? `<div class="summary-line"><span>Gift Wrapping:</span><span>Ksh ${giftWrapCost.toLocaleString('en-US')}</span></div>` : ''}
        <div class="summary-line total-line"><span>Total:</span><span>Ksh ${total.toLocaleString('en-US')}</span></div>
        
        <button class="btn btn-primary" onclick="checkoutCart()" style="margin-top: 20px; width: 100%;">
            <i class="fab fa-whatsapp"></i> ${translations[currentLanguage].whatsappCheckout}
        </button>
    `;
    
    cartContainer.innerHTML = itemsHTML;
    if (itemCount) itemCount.textContent = `${cart.length} ${cart.length === 1 ? 'item' : 'items'}`;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderCartPage();
        }
    }
}

// --- IX. Coupon and Gift Options ---

function applyCoupon() {
    const code = document.getElementById('coupon-code').value.trim().toUpperCase();
    
    if (coupons[code]) {
        appliedCoupon = code;
        showNotification(`Coupon ${code} applied successfully!`);
        renderCartPage();
    } else {
        showNotification('Invalid coupon code');
    }
}

function updateGiftOptions() {
    giftWrapping = document.getElementById('gift-wrapping').checked;
    renderCartPage();
}

function toggleGiftMessage() {
    const messageInput = document.getElementById('gift-message-input');
    if (document.getElementById('gift-message').checked) {
        messageInput.style.display = 'block';
    } else {
        messageInput.style.display = 'none';
    }
}

// --- X. Checkout Functionality ---

function checkoutCart() {
    if (cart.length === 0) {
        showNotification("Your bag is empty!");
        return;
    }

    const initialMessage = "Hello! I would like to purchase the following items from Bags By Eve:\n\n";
    let cartDetails = "";
    let subtotal = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const price = product.price * item.quantity;
            subtotal += price;
            
            cartDetails += `• ${item.quantity}x ${product.name} - Ksh ${price.toLocaleString('en-US')}\n`;
            cartDetails += `  (Image: ${product.image})\n\n`;
        }
    });

    // Calculate final total
    let discount = 0;
    if (appliedCoupon) {
        const coupon = coupons[appliedCoupon];
        if (coupon.type === 'percentage') {
            discount = (subtotal * coupon.discount) / 100;
        }
    }
    
    const giftWrapCost = giftWrapping ? 500 : 0;
    const total = subtotal - discount + giftWrapCost;

    let finalMessage = initialMessage + cartDetails;
    finalMessage += `--- ORDER SUMMARY ---\n`;
    finalMessage += `Subtotal: Ksh ${subtotal.toLocaleString('en-US')}\n`;
    if (discount > 0) {
        finalMessage += `Discount (${appliedCoupon}): -Ksh ${discount.toLocaleString('en-US')}\n`;
    }
    if (giftWrapping) {
        finalMessage += `Gift Wrapping: Ksh ${giftWrapCost.toLocaleString('en-US')}\n`;
    }
    finalMessage += `TOTAL: Ksh ${total.toLocaleString('en-US')}\n\n`;
    
    if (giftMessage) {
        finalMessage += `Gift Message: ${giftMessage}\n\n`;
    }
    
    finalMessage += `I look forward to completing my purchase!`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(finalMessage);
    
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open the link in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Provide user feedback
    showNotification("Redirecting you to WhatsApp now!");
}

// --- XI. Filtering & Sorting ---

function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);
    
    const saleOnly = document.querySelector('input[name="sale"]:checked') !== null;
    const christmasOnly = document.querySelector('input[name="christmas"]:checked') !== null;
    
    const priceMin = document.getElementById('price-min').value;
    const priceMax = document.getElementById('price-max').value;
    
    let filteredProducts = [...products];
    
    // Apply category filter
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category)
        );
    }
    
    // Apply sale filter
    if (saleOnly) {
        filteredProducts = filteredProducts.filter(product => product.isSale);
    }
    
    // Apply Christmas filter
    if (christmasOnly) {
        filteredProducts = filteredProducts.filter(product => product.isChristmas);
    }
    
    // Apply price filter
    if (priceMin) {
        filteredProducts = filteredProducts.filter(product => product.price >= parseInt(priceMin));
    }
    
    if (priceMax) {
        filteredProducts = filteredProducts.filter(product => product.price <= parseInt(priceMax));
    }
    
    // Apply current sorting
    const sortValue = document.getElementById('sort-options').value;
    filteredProducts = applySortingToProducts(filteredProducts, sortValue);
    
    // Update the display
    const collectionContainer = document.getElementById('collection-products');
    collectionContainer.innerHTML = filteredProducts.map(product => renderProductCardHTML(product)).join('');
    
    // Update product count
    document.getElementById('products-count').textContent = `${filteredProducts.length} products`;
    
    // Attach event listeners to the newly created product cards
    attachProductCardListeners();
}

function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    document.getElementById('price-min').value = '';
    document.getElementById('price-max').value = '';
    
    // Reload all products
    loadCollectionProducts();
}

function applySorting() {
    applyFilters();
}

function applySortingToProducts(productArray, sortValue) {
    switch(sortValue) {
        case 'price-low':
            return productArray.sort((a, b) => a.price - b.price);
        case 'price-high':
            return productArray.sort((a, b) => b.price - a.price);
        case 'name':
            return productArray.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest':
            return productArray.sort((a, b) => b.id - a.id);
        case 'featured':
        default:
            return productArray;
    }
}

// --- XII. Modal & Notification Functions ---

function showQuickViewModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const modalContent = document.getElementById('quick-view-content');
    
    modalContent.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-image">
        <div class="modal-details">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="modal-price">Ksh ${product.price.toLocaleString('en-US')}</span>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal('quick-view-modal')">Add to Bag</button>
                <button class="btn btn-secondary" onclick="loadProductPage(${product.id}); closeModal('quick-view-modal')">View Details</button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    notificationText.textContent = message;
    notification.classList.add('show');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
