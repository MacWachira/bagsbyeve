// script.js - ENHANCED E-COMMERCE LOGIC (Adding Product Detail Page)

// --- I. Data and Configuration (Expanded with Details) ---

const translations = {
    // ... (Keeping existing translations)
    en: {
        // ... (Existing keys)
        
        // New Collection Page Keys (Retained from previous version)
        collectionTitle: "The Entire Collection", results: "Results", sortBy: "Sort By", filter: "Filter", priceRange: "Price Range",
        
        // Expanded Bag Categories 
        totes: "Totes", crossbody: "Crossbody", clutches: "Clutches", backpacks: "Backpacks", satchels: "Satchels", mini_bags: "Mini Bags", travel_bags: "Travel & Duffel",
        
        // Product Page Keys
        productDetails: "Product Details", specifications: "Specifications", material: "Material", dimensions: "Dimensions", weight: "Weight", features: "Features",
        relatedProducts: "You Might Also Love", addToBag: "Add to Bag", checkout: "Proceed to Checkout",

        // New Home Page Rich Content Keys
        shopByMaterial: "Shop By Material", leather: "Genuine Leather", canvas: "Durable Canvas", vegan: "Vegan Eco-Leather",
        styleGuideTitle: "The Eve Style Guide", styleGuideSubtitle: "How to carry your style, from day to night.",
    }
};

const currentLanguage = 'en';

// BAG CATEGORIES - Retained
const categories = ['totes', 'crossbody', 'clutches', 'backpacks', 'satchels', 'mini_bags', 'travel_bags'];

// PRODUCT DATA - Refreshed with multiple images and specifications
const products = [
    { 
        id: 1, name: "The Signature Tote", category: "totes", price: 5500, originalPrice: 6200, isSale: true,
        image: "https://images.unsplash.com/photo-1543883832-6800d981ce81?q=80&w=1500&h=1500&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        images: [
            "https://images.unsplash.com/photo-1543883832-6800d981ce81?q=80&w=1500&h=1500&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1574360677840-7e390c25a172?q=80&w=1500&h=1500&fit=crop",
            "https://images.unsplash.com/photo-1582098616171-87455079a400?q=80&w=1500&h=1500&fit=crop"
        ],
        description: "Our best-selling tote bag, perfect for work or travel. Made of fine Italian leather with durable canvas lining and a secure magnetic clasp. Features a dedicated laptop sleeve.",
        specifications: {
            material: "Genuine Leather", dimensions: "35cm x 15cm x 30cm", weight: "1.2 kg", 
            features: ["Dedicated Laptop Pocket", "Key Fob", "Adjustable Shoulder Strap"]
        }
    },
    { 
        id: 2, name: "Urban Crossbody", category: "crossbody", price: 3800, originalPrice: 0, isSale: false, 
        image: "https://images.unsplash.com/photo-1555026901-26685f02c610?q=80&w=1500&h=1500&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        images: [
            "https://images.unsplash.com/photo-1555026901-26685f02c610?q=80&w=1500&h=1500&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1617056082404-51147571f301?q=80&w=1500&h=1500&fit=crop",
            "https://images.unsplash.com/photo-1579290074693-4a6c6c74d6c6?q=80&w=1500&h=1500&fit=crop"
        ],
        description: "Minimalist design for city life. Carry essentials hands-free and securely. Crafted from sustainable vegan leather. Features a quick-access front zipper pocket.",
        specifications: {
            material: "Vegan Eco-Leather", dimensions: "25cm x 7cm x 18cm", weight: "0.5 kg", 
            features: ["Water Resistant Exterior", "Interior Zipper Pocket", "Adjustable/Detachable Strap"]
        }
    },
    // ... (Add specifications and image arrays to the rest of the products)
    { id: 3, name: "Evening Clutch", category: "clutches", price: 2950, originalPrice: 0, isSale: false, image: "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=1500&h=1500&fit=crop", images: ["https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=1500&h=1500&fit=crop"], description: "Sequined and elegant. The perfect accessory for black-tie events.", specifications: { material: "Silk/Sequins", dimensions: "20cm x 5cm x 12cm", weight: "0.3 kg", features: ["Detachable Chain Strap", "Magnetic Closure"] } },
    { id: 4, name: "Premium Commuter Backpack", category: "backpacks", price: 7900, originalPrice: 8500, isSale: true, image: "https://images.unsplash.com/photo-1594953922615-566d5113d078?q=80&w=1500&h=1500&fit=crop", images: ["https://images.unsplash.com/photo-1594953922615-566d5113d078?q=80&w=1500&h=1500&fit=crop"], description: "Spacious and durable. Designed for the professional on the move.", specifications: { material: "Durable Canvas", dimensions: "30cm x 18cm x 45cm", weight: "1.5 kg", features: ["Padded Back Panel", "External Water Bottle Pocket", "TSA-Friendly Laptop Sleeve"] } },
    { id: 5, name: "Structured Satchel", category: "satchels", price: 6100, originalPrice: 0, isSale: false, image: "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=1500&h=1500&fit=crop", images: ["https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=1500&h=1500&fit=crop"], description: "Classic silhouette with a modern, structured finish. Available in three colors.", specifications: { material: "Genuine Leather", dimensions: "30cm x 12cm x 25cm", weight: "1.0 kg", features: ["Top Handle", "Interior Divider Pocket"] } },
    { id: 6, name: "The Petite Round Bag", category: "mini_bags", price: 2100, originalPrice: 0, isSale: false, image: "https://images.unsplash.com/photo-1624378772274-1a5666f4886b?q=80&w=1500&h=1500&fit=crop", images: ["https://images.unsplash.com/photo-1624378772274-1a5666f4886b?q=80&w=1500&h=1500&fit=crop"], description: "Small but mighty, perfect for your phone and lipstick.", specifications: { material: "Vegan Eco-Leather", dimensions: "15cm x 5cm x 15cm", weight: "0.2 kg", features: ["Adjustable Fine Chain", "Lined Interior"] } },
    { id: 7, name: "Weekend Duffel Bag", category: "travel_bags", price: 9500, originalPrice: 0, isSale: false, image: "https://images.unsplash.com/photo-1557456108-8123c52e1281?q=80&w=1500&h=1500&fit=crop", images: ["https://images.unsplash.com/photo-1557456108-8123c52e1281?q=80&w=1500&h=1500&fit=crop"], description: "Stylish and spacious travel companion. Carry-on approved.", specifications: { material: "Durable Canvas", dimensions: "50cm x 25cm x 30cm", weight: "1.8 kg", features: ["Shoe Compartment", "Detachable Pouch", "Trolley Sleeve"] } },
    { id: 8, name: "The Essential Satchel", category: "satchels", price: 4200, originalPrice: 4800, isSale: true, image: "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1500&h=1500&fit=crop", images: ["https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1500&h=1500&fit=crop"], description: "A versatile bag for every occasion. Genuine leather with metal accents.", specifications: { material: "Genuine Leather", dimensions: "28cm x 10cm x 20cm", weight: "0.8 kg", features: ["Magnetic Snap Closure", "Gold-Tone Hardware"] } },
    { id: 9, name: "Luxury Chain Clutch", category: "clutches", price: 3400, originalPrice: 0, isSale: false, image: "https://images.unsplash.com/photo-1616010023447-7b243b9d6288?q=80&w=1500&h=1500&fit=crop", images: ["https://images.unsplash.com/photo-1616010023447-7b243b9d6288?q=80&w=1500&h=1500&fit=crop"], description: "Sleek and glossy, featuring a detachable gold chain.", specifications: { material: "Patent Leather", dimensions: "22cm x 4cm x 10cm", weight: "0.2 kg", features: ["Chain Shoulder Strap", "Inner Slip Pocket"] } },
    { id: 10, name: "Minimalist Work Tote", category: "totes", price: 6800, originalPrice: 0, isSale: false, image: "https://images.unsplash.com/photo-1555529712-88ec25f94b15?q=80&w=1500&h=1500&fit=crop", images: ["https://images.unsplash.com/photo-1555529712-88ec25f94b15?q=80&w=1500&h=1500&fit=crop"], description: "Fits a 13-inch laptop. A must-have for the professional wardrobe.", specifications: { material: "Genuine Leather", dimensions: "38cm x 15cm x 33cm", weight: "1.3 kg", features: ["Fully Lined", "Secure Top Zipper"] } },
];

const cart = [];

// --- II. E-commerce Core Logic (Updated Routing) ---

/**
 * Main function to load a page, handling product detail IDs if present.
 */
function loadPage(path) {
    // Clear previous page styling/scroll locks
    document.body.classList.remove('no-scroll');
    
    // Determine if we are loading a specific product page (e.g., #product-1)
    const parts = path.split('-'); // path = 'product-page-1'
    const pageId = parts[0] + '-page'; // 'product-page'
    const productId = parts[1] ? parseInt(parts[1]) : null;

    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => page.style.display = 'none');

    // Show the requested page
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
        pageElement.style.display = 'block';
    }

    // Special handling for dynamic pages
    if (pageId === 'collections-page') {
        initCollectionFilters();
    } else if (pageId === 'product-page' && productId) {
        loadProductPage(productId);
    }
    
    // Update the URL hash
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page load
}

// --- III. Product Detail Page (PDP) Functions ---

/**
 * Loads and displays the specific product detail page.
 * @param {number} productId - The ID of the product to display.
 */
function loadProductPage(productId) {
    const product = products.find(p => p.id === productId);
    const container = document.getElementById('product-detail-container');
    if (!product || !container) {
        // Fallback or error page logic here
        container.innerHTML = `<div class="container" style="padding: 100px 0;"><h2>Product Not Found</h2><p>The bag you are looking for does not exist.</p><a href="#collections-page" onclick="loadPage('collections')" class="btn btn-primary">Back to Collections</a></div>`;
        return;
    }

    // Generate price HTML
    let priceHTML = `<span class="pdp-price">Ksh ${product.price.toLocaleString('en-US')}</span>`;
    if (product.isSale) {
        priceHTML = `
            <span class="pdp-price sale-price-pdp">Ksh ${product.price.toLocaleString('en-US')}</span>
            <span class="pdp-price-original">Ksh ${product.originalPrice.toLocaleString('en-US')}</span>
        `;
    }

    // Generate specification list HTML
    const specListHTML = Object.keys(product.specifications).map(key => {
        let value = product.specifications[key];
        // Handle features array
        if (Array.isArray(value)) {
            value = `<ul class="feature-list">${value.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}</ul>`;
        }
        const keyName = translations[currentLanguage][key] || key.charAt(0).toUpperCase() + key.slice(1);
        
        return `
            <div class="spec-item">
                <span class="spec-label">${keyName}:</span>
                <span class="spec-value">${value}</span>
            </div>
        `;
    }).join('');

    // Generate Image Gallery HTML
    const galleryHTML = product.images.map((img, index) => 
        `<img src="${img}" alt="${product.name} View ${index + 1}" class="thumb-image" data-main-src="${img}">`
    ).join('');
    
    const relatedProducts = filterAndSortProducts(products, { 
        category: [product.category], // Show same category first
        price: { min: 0, max: 10000 },
        sortBy: 'featured'
    }).filter(p => p.id !== productId).slice(0, 4); // Get 4 related, excluding current

    // Build the container HTML
    container.innerHTML = `
        <div class="container pdp-grid">
            <div class="pdp-gallery">
                <div class="main-image-container">
                    <img src="${product.image}" alt="${product.name}" id="main-product-image">
                </div>
                <div class="thumbnail-gallery" id="thumbnail-gallery">
                    ${galleryHTML}
                </div>
            </div>

            <div class="pdp-details">
                <p class="pdp-category">${translations[currentLanguage][product.category.replace('_', '')]}</p>
                <h1 class="pdp-name">${product.name}</h1>
                <div class="pdp-price-group">${priceHTML}</div>
                
                <div class="pdp-description-box">
                    <h3>${translations[currentLanguage].productDetails}</h3>
                    <p>${product.description}</p>
                </div>

                <div class="pdp-specifications">
                    <h3>${translations[currentLanguage].specifications}</h3>
                    ${specListHTML}
                </div>

                <button class="btn btn-primary pdp-add-to-cart" data-id="${product.id}">
                    <i class="fas fa-shopping-bag"></i> ${translations[currentLanguage].addToBag}
                </button>
            </div>
        </div>

        <div class="container related-products-section">
            <h2 class="section-title">${translations[currentLanguage].relatedProducts}</h2>
            <div class="product-grid-container">
                ${relatedProducts.map(p => renderProductCardHTML(p)).join('')}
            </div>
        </div>
    `;
    
    // Attach PDP specific event listeners
    attachPdpListeners(productId);
    
    // Set up the image switching mechanism
    setupImageGallery();
}

/**
 * Sets up listeners for the PDP (Add to Cart, Image Gallery)
 */
function attachPdpListeners(productId) {
    document.querySelector('.pdp-add-to-cart').addEventListener('click', () => {
        addToCart(productId);
    });
    
    // Re-attach quick view listeners to the new related product cards
    document.querySelectorAll('.quick-view-btn').forEach(button => {
        button.addEventListener('click', (e) => showQuickViewModal(parseInt(e.currentTarget.dataset.id)));
    });
    document.querySelectorAll('.product-card').forEach(card => {
        card.querySelector('.btn-add-to-cart').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(e.currentTarget.dataset.id));
        });
    });
}

/**
 * Handles logic for switching the main image based on thumbnail clicks.
 */
function setupImageGallery() {
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('#thumbnail-gallery .thumb-image');

    // Set the first thumbnail as active initially
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
    }

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Update main image source
            mainImage.src = thumb.dataset.mainSrc;
            
            // Update active state
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
}


// --- IV. Collection Page Logic (Retained & Simplified) ---

// Helper function to render product card HTML
function renderProductCardHTML(product) {
    const categoryName = translations[currentLanguage][product.category.replace('_', '')] || product.category;
    
    let priceHTML = `<span class="product-price">Ksh ${product.price.toLocaleString('en-US')}</span>`;
    if (product.isSale) {
        priceHTML = `
            <span class="product-price sale-price">Ksh ${product.price.toLocaleString('en-US')}</span>
            <span class="product-price-original">Ksh ${product.originalPrice.toLocaleString('en-US')}</span>
        `;
    }
    
    return `
        <div class="product-card" data-id="${product.id}" onclick="loadPage('product-page-${product.id}')">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${product.isSale ? '<div class="sale-badge">SALE</div>' : ''}
                <button class="quick-view-btn" data-id="${product.id}" onclick="event.stopPropagation(); showQuickViewModal(${product.id});">Quick View</button>
            </div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <p class="product-category">${categoryName}</p>
                <div class="product-price-group">${priceHTML}</div>
            </div>
            <button class="btn btn-add-to-cart" data-id="${product.id}" onclick="event.stopPropagation(); addToCart(${product.id});">${translations.en.addToBag}</button>
        </div>
    `;
}

// ... (Retain filterAndSortProducts, getCurrentFilters, renderCollectionPage, updateCollectionDisplay, and initCollectionFilters from previous script)
// Note: These functions are assumed to be present and functional for the collections page.

// --- V. Utility Functions (Retained) ---

// ... (Retain addToCart, updateCartCount, showQuickViewModal, closeQuickViewModal, setupModalListeners, setupSalePopup, showNotification, and setupNavigation from previous script)

// --- VI. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // ... (Retain initialization calls like setupNavigation, setupModalListeners, updateCartCount, etc.)

    // Determine initial page path from hash (e.g., #collections, #product-page-1)
    const initialPath = window.location.hash.substring(1) || 'home';
    loadPage(initialPath);

    // Add listener for URL hash changes (for browser back/forward buttons)
    window.addEventListener('hashchange', () => {
        const newPath = window.location.hash.substring(1) || 'home';
        loadPage(newPath);
    });
});
