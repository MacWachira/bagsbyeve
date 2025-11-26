// script.js - ENHANCED E-COMMERCE LOGIC (Dark Theme, PDP, and WhatsApp Checkout)

// --- I. Data and Configuration (Expanded with Rich Images) ---

const translations = {
    en: {
        // Product Page Keys
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
        
        // WhatsApp Message Placeholders
        whatsappMessage: "I would like to purchase the following bag: ",
    }
};

const currentLanguage = 'en';

const categories = ['totes', 'crossbody', 'clutches', 'backpacks', 'satchels', 'mini_bags', 'travel_bags'];

// PRODUCT DATA - Refreshed with multiple images and specifications
const products = [
    { 
        id: 1, 
        name: "The Signature Tote", 
        category: "totes", 
        price: 5500, 
        originalPrice: 6200, 
        isSale: true,
        image: "https://images.unsplash.com/photo-1543883832-6800d981ce81?q=80&w=600&h=600&fit=crop", 
        description: "Our best-selling tote bag, perfect for work or travel. Made of fine Italian leather with durable canvas lining and a secure magnetic clasp. Features a dedicated laptop sleeve.",
        // 5-6 Images for Rich PDP
        images: [
            "https://images.unsplash.com/photo-1543883832-6800d981ce81?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1574360677840-7e390c25a172?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1582098616171-87455079a400?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1546944686-3532f1464303?q=80&w=1000&h=1000&fit=crop", // Full shot
            "https://images.unsplash.com/photo-1557088916-2485e967a3f5?q=80&w=1000&h=1000&fit=crop" // On model
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
        image: "https://images.unsplash.com/photo-1555026901-26685f02c610?q=80&w=600&h=600&fit=crop", 
        description: "Minimalist design for city life. Carry essentials hands-free and securely. Crafted from sustainable vegan leather. Features a quick-access front zipper pocket.",
        // 5-6 Images for Rich PDP
        images: [
            "https://images.unsplash.com/photo-1555026901-26685f02c610?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1617056082404-51147571f301?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1579290074693-4a6c6c74d6c6?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1628104860012-78d120a1c1d8?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1547000574-d4f1fa20f666?q=80&w=1000&h=1000&fit=crop"
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
        image: "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=600&h=600&fit=crop", 
        description: "Sequined and elegant. The perfect accessory for black-tie events.", 
        images: [
            "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1551000000-8484a0c8b3d6?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1601924619941-949f2b8017c5?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1542848943-70e062c3e4c4?q=80&w=1000&h=1000&fit=crop"
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
        image: "https://images.unsplash.com/photo-1594953922615-566d5113d078?q=80&w=600&h=600&fit=crop", 
        description: "Spacious and durable. Designed for the professional on the move.", 
        images: [
            "https://images.unsplash.com/photo-1594953922615-566d5113d078?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1588667355171-d7fe51280365?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1582310183187-573e35a1656c?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1522276498395-d5107994c65d?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1616429215858-a5796c0032e5?q=80&w=1000&h=1000&fit=crop",
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
        image: "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=600&h=600&fit=crop", 
        description: "Classic silhouette with a modern, structured finish. Available in three colors.", 
        images: [
            "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627027598858-6a5680194098?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1596707328511-2d7c04100c4c?q=80&w=1000&h=1000&fit=crop"
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
        image: "https://images.unsplash.com/photo-1624378772274-1a5666f4886b?q=80&w=600&h=600&fit=crop", 
        description: "Small but mighty, perfect for your phone and lipstick.", 
        images: [
            "https://images.unsplash.com/photo-1624378772274-1a5666f4886b?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627027598858-6a5680194098?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1546944686-3532f1464303?q=80&w=1000&h=1000&fit=crop"
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
        image: "https://images.unsplash.com/photo-1557456108-8123c52e1281?q=80&w=600&h=600&fit=crop", 
        description: "Stylish and spacious travel companion. Carry-on approved.", 
        images: [
            "https://images.unsplash.com/photo-1557456108-8123c52e1281?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1580633842603-d1f060143890?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1592237834720-6d4512e20d6b?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1628104860012-78d120a1c1d8?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1574360677840-7e390c25a172?q=80&w=1000&h=1000&fit=crop"
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
        image: "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=600&h=600&fit=crop", 
        description: "A versatile bag for every occasion. Genuine leather with metal accents.", 
        images: [
            "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1596707328511-2d7c04100c4c?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627027598858-6a5680194098?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Genuine Leather", 
            dimensions: "28cm x 10cm x 20cm", 
            weight: "0.8 kg", 
            features: ["Magnetic Snap Closure", "Gold-Tone Hardware"] 
        } 
    },
    { 
        id: 9, 
        name: "Luxury Chain Clutch", 
        category: "clutches", 
        price: 3400, 
        originalPrice: 0, 
        isSale: false, 
        image: "https://images.unsplash.com/photo-1616010023447-7b243b9d6288?q=80&w=600&h=600&fit=crop", 
        description: "Sleek and glossy, featuring a detachable gold chain.", 
        images: [
            "https://images.unsplash.com/photo-1616010023447-7b243b9d6288?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1542848943-70e062c3e4c4?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1551000000-8484a0c8b3d6?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Patent Leather", 
            dimensions: "22cm x 4cm x 10cm", 
            weight: "0.2 kg", 
            features: ["Chain Shoulder Strap", "Inner Slip Pocket"] 
        } 
    },
    { 
        id: 10, 
        name: "Minimalist Work Tote", 
        category: "totes", 
        price: 6800, 
        originalPrice: 0, 
        isSale: false, 
        image: "https://images.unsplash.com/photo-1555529712-88ec25f94b15?q=80&w=600&h=600&fit=crop", 
        description: "Fits a 13-inch laptop. A must-have for the professional wardrobe.", 
        images: [
            "https://images.unsplash.com/photo-1555529712-88ec25f94b15?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1543883832-6800d981ce81?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1574360677840-7e390c25a172?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1546944686-3532f1464303?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Genuine Leather", 
            dimensions: "38cm x 15cm x 33cm", 
            weight: "1.3 kg", 
            features: ["Fully Lined", "Secure Top Zipper"] 
        } 
    },
    { 
        id: 11, 
        name: "Hobo Shoulder Bag", 
        category: "hobo", 
        price: 4500, 
        originalPrice: 0, 
        isSale: false, 
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=600&h=600&fit=crop", 
        description: "Soft and slouchy hobo bag with a comfortable shoulder strap.", 
        images: [
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Soft Nappa Leather", 
            dimensions: "28cm x 18cm x 10cm", 
            weight: "0.7 kg", 
            features: ["Slouchy Silhouette", "Magnetic Closure", "Adjustable Strap"] 
        } 
    },
    { 
        id: 12, 
        name: "Bucket Bag", 
        category: "bucket", 
        price: 5200, 
        originalPrice: 0, 
        isSale: false, 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&h=600&fit=crop", 
        description: "Trendy bucket bag with drawstring closure and detachable strap.", 
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { 
            material: "Genuine Leather", 
            dimensions: "25cm x 25cm x 15cm", 
            weight: "0.6 kg", 
            features: ["Drawstring Closure", "Detachable Strap", "Interior Pocket"] 
        } 
    }
];

const cart = [];
const whatsappNumber = "254711642342"; // +254 711 642 342

// --- II. E-commerce Core Logic ---

/**
 * Loads a specific page and hides others
 */
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
                loadCollectionProducts(filter);
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

/**
 * Loads featured products on the home page
 */
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return;

    // Get first 6 products as featured
    const featuredProducts = products.slice(0, 6);
    
    featuredContainer.innerHTML = featuredProducts.map(product => renderProductCardHTML(product)).join('');
    
    // Attach event listeners to the newly created product cards
    attachProductCardListeners();
}

/**
 * Loads all products for the collections page
 */
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

/**
 * Renders HTML for a product card
 */
function renderProductCardHTML(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                ${product.isSale ? '<span class="sale-badge">SALE</span>' : ''}
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

/**
 * Attaches event listeners to product cards
 */
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
            // Don't navigate if clicking on buttons inside the card
            if (!e.target.classList.contains('btn-add-to-cart') && 
                !e.target.classList.contains('quick-view-btn')) {
                const productId = parseInt(card.getAttribute('data-id'));
                loadProductPage(productId);
            }
        });
    });
}

/**
 * Loads a specific product page
 */
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

/**
 * Renders product details on the product page
 */
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

/**
 * Attaches event listeners for the product detail page
 */
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

/**
 * Sets up the image gallery functionality
 */
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

/**
 * Loads related products based on category
 */
function loadRelatedProducts(currentProductId, category) {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;

    // Get products from the same category, excluding the current product
    const relatedProducts = products.filter(p => 
        p.category === category && p.id !== currentProductId
    ).slice(0, 4); // Show max 4 related products

    relatedContainer.innerHTML = relatedProducts.map(product => renderProductCardHTML(product)).join('');
    
    // Attach event listeners to the related products
    attachProductCardListeners();
}

// --- III. WhatsApp Checkout Logic ---

/**
 * Handles the WhatsApp checkout process.
 * Generates a structured message with cart contents and opens WhatsApp link.
 */
function checkoutCart() {
    if (cart.length === 0) {
        showNotification("Your bag is empty!");
        return;
    }

    const initialMessage = translations[currentLanguage].whatsappMessage + "\n\n";
    let cartDetails = "";
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            const price = product.price * item.quantity;
            total += price;
            
            // Format the details for the WhatsApp message
            cartDetails += `\n*${item.quantity}x ${product.name}* (Ksh ${price.toLocaleString('en-US')})`;
            cartDetails += `\nImage Link: ${product.image}`; // Include the product image link
            cartDetails += `\n-----------------`;
        }
    });

    const finalMessage = initialMessage + 
                         `--- Your Order ---\n` +
                         cartDetails + 
                         `\n\n*TOTAL: Ksh ${total.toLocaleString('en-US')}*` +
                         `\n\nI look forward to finalizing my order!`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(finalMessage);
    
    // Construct the WhatsApp URL (using web API for desktop users)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open the link in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Provide user feedback
    showNotification("Redirecting you to WhatsApp now!");
}

// --- IV. Cart Management ---

/**
 * Adds product to the cart and shows a notification.
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    
    updateCartCount();
    showNotification(`${product.name} added to your bag.`);
}

/**
 * Renders the cart page content, including the WhatsApp checkout button.
 */
function renderCartPage() {
    const cartContainer = document.getElementById('cart-items-container');
    const cartSummary = document.getElementById('cart-summary');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart-message">Your bag is empty. Explore our <a href="#collections-page" onclick="loadPage(\'collections\')">Collections</a>!</p>';
        cartSummary.innerHTML = '';
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
                    <div class="cart-item-quantity">
                        <span>Qty: ${item.quantity}</span>
                    </div>
                    <div class="cart-item-total">
                        <span>Ksh ${itemTotal.toLocaleString('en-US')}</span>
                    </div>
                </div>
            `;
        }
    });

    // Generate summary HTML
    cartSummary.innerHTML = `
        <h3>Order Summary</h3>
        <div class="summary-line"><span>Subtotal:</span><span>Ksh ${subtotal.toLocaleString('en-US')}</span></div>
        <div class="summary-line"><span>Shipping:</span><span>Free</span></div>
        <div class="summary-line total-line"><span>Total:</span><span>Ksh ${subtotal.toLocaleString('en-US')}</span></div>
        
        <button class="btn btn-primary" onclick="checkoutCart()">
            <i class="fab fa-whatsapp"></i> ${translations[currentLanguage].whatsappCheckout}
        </button>
    `;
    
    cartContainer.innerHTML = itemsHTML;
}

/**
 * Updates the cart count in the header and floating cart
 */
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartCount = document.getElementById('cart-count');
    const cartCountFloating = document.getElementById('cart-count-floating');
    
    if (cartCount) cartCount.textContent = totalItems;
    if (cartCountFloating) cartCountFloating.textContent = totalItems;
}

// --- V. Modal & Notification Functions ---

/**
 * Shows the quick view modal with product details
 */
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
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

/**
 * Closes a modal
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

/**
 * Shows a notification toast
 */
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

// --- VI. Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Set up modal close buttons
    const closeQuickView = document.getElementById('close-quick-view');
    if (closeQuickView) {
        closeQuickView.addEventListener('click', () => {
            closeModal('quick-view-modal');
        });
    }

    // Close modal when clicking outside
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
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

    // Override the default click behavior for internal navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            if (targetId && targetId !== '#') {
                e.preventDefault();
                
                // Extract page name from hash (e.g., #home-page -> home)
                const pageName = targetId.replace('-page', '');
                loadPage(pageName);
            }
        });
    });

    // Determine initial page path from hash (e.g., #collections, #product-page-1)
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

    // Add listener for URL hash changes (for browser back/forward buttons)
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

// --- VII. Filtering & Sorting Functions ---

/**
 * Applies filters to the collection products
 */
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
        .map(cb => cb.value);
    
    const selectedMaterials = Array.from(document.querySelectorAll('input[name="material"]:checked'))
        .map(cb => cb.value);
    
    const saleOnly = document.querySelector('input[name="sale"]:checked') !== null;
    
    const priceMin = document.getElementById('price-min').value;
    const priceMax = document.getElementById('price-max').value;
    
    let filteredProducts = [...products];
    
    // Apply category filter
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category)
        );
    }
    
    // Apply material filter (simplified - in a real app, products would have material property)
    if (selectedMaterials.length > 0) {
        // This is a simplified implementation
        // In a real app, you would check product.material against selectedMaterials
        filteredProducts = filteredProducts.filter(product => {
            // For demo purposes, we'll use a simple mapping
            const materialMap = {
                'leather': ['The Signature Tote', 'Structured Satchel', 'The Essential Satchel', 'Minimalist Work Tote', 'Hobo Shoulder Bag', 'Bucket Bag'],
                'canvas': ['Premium Commuter Backpack', 'Weekend Duffel Bag'],
                'vegan': ['Urban Crossbody', 'The Petite Round Bag']
            };
            
            return selectedMaterials.some(material => 
                materialMap[material] && materialMap[material].includes(product.name)
            );
        });
    }
    
    // Apply sale filter
    if (saleOnly) {
        filteredProducts = filteredProducts.filter(product => product.isSale);
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

/**
 * Resets all filters
 */
function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    
    document.getElementById('price-min').value = '';
    document.getElementById('price-max').value = '';
    
    // Reload all products
    loadCollectionProducts();
}

/**
 * Applies sorting when the sort option changes
 */
function applySorting() {
    applyFilters(); // Reapply filters which will include the new sorting
}

/**
 * Applies sorting to a product array
 */
function applySortingToProducts(productArray, sortValue) {
    switch(sortValue) {
        case 'price-low':
            return productArray.sort((a, b) => a.price - b.price);
        case 'price-high':
            return productArray.sort((a, b) => b.price - a.price);
        case 'name':
            return productArray.sort((a, b) => a.name.localeCompare(b.name));
        case 'newest':
            // For demo, we'll consider higher IDs as newer
            return productArray.sort((a, b) => b.id - a.id);
        case 'featured':
        default:
            return productArray;
    }
}
