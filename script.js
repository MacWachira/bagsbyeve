// script.js - ENHANCED E-COMMERCE LOGIC (Dark Theme, PDP, and WhatsApp Checkout)

// --- I. Data and Configuration (Expanded with Rich Images) ---

const translations = {
    // ... (Keeping existing translations)
    en: {
        // ... (Existing keys)
        
        // New Product Page Keys
        productDetails: "Product Details", specifications: "Specifications", material: "Material", dimensions: "Dimensions", weight: "Weight", features: "Features",
        relatedProducts: "You Might Also Love", addToBag: "Add to Bag", checkout: "Proceed to Checkout",
        whatsappCheckout: "Checkout on WhatsApp", // New Key
        
        // WhatsApp Message Placeholders
        whatsappMessage: "I would like to purchase the following bag: ",
    }
};

const currentLanguage = 'en';

const categories = ['totes', 'crossbody', 'clutches', 'backpacks', 'satchels', 'mini_bags', 'travel_bags'];

// PRODUCT DATA - Refreshed with multiple images and specifications
const products = [
    { 
        id: 1, name: "The Signature Tote", category: "totes", price: 5500, originalPrice: 6200, isSale: true,
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
        specifications: { material: "Genuine Leather", dimensions: "35cm x 15cm x 30cm", weight: "1.2 kg", features: ["Dedicated Laptop Pocket", "Key Fob", "Adjustable Shoulder Strap"] }
    },
    { 
        id: 2, name: "Urban Crossbody", category: "crossbody", price: 3800, originalPrice: 0, isSale: false, 
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
        specifications: { material: "Vegan Eco-Leather", dimensions: "25cm x 7cm x 18cm", weight: "0.5 kg", features: ["Water Resistant Exterior", "Interior Zipper Pocket", "Adjustable/Detachable Strap"] }
    },
    { 
        id: 3, name: "Evening Clutch", category: "clutches", price: 2950, originalPrice: 0, isSale: false, 
        image: "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=600&h=600&fit=crop", 
        description: "Sequined and elegant. The perfect accessory for black-tie events.", 
        images: [
            "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1551000000-8484a0c8b3d6?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1601924619941-949f2b8017c5?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1542848943-70e062c3e4c4?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { material: "Silk/Sequins", dimensions: "20cm x 5cm x 12cm", weight: "0.3 kg", features: ["Detachable Chain Strap", "Magnetic Closure"] } 
    },
    { 
        id: 4, name: "Premium Commuter Backpack", category: "backpacks", price: 7900, originalPrice: 8500, isSale: true, 
        image: "https://images.unsplash.com/photo-1594953922615-566d5113d078?q=80&w=600&h=600&fit=crop", 
        description: "Spacious and durable. Designed for the professional on the move.", 
        images: [
            "https://images.unsplash.com/photo-1594953922615-566d5113d078?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1588667355171-d7fe51280365?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1582310183187-573e35a1656c?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1522276498395-d5107994c65d?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1616429215858-a5796c0032e5?q=80&w=1000&h=1000&fit=crop",
        ],
        specifications: { material: "Durable Canvas", dimensions: "30cm x 18cm x 45cm", weight: "1.5 kg", features: ["Padded Back Panel", "External Water Bottle Pocket", "TSA-Friendly Laptop Sleeve"] } 
    },
    { 
        id: 5, name: "Structured Satchel", category: "satchels", price: 6100, originalPrice: 0, isSale: false, 
        image: "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=600&h=600&fit=crop", 
        description: "Classic silhouette with a modern, structured finish. Available in three colors.", 
        images: [
            "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627027598858-6a5680194098?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1596707328511-2d7c04100c4c?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { material: "Genuine Leather", dimensions: "30cm x 12cm x 25cm", weight: "1.0 kg", features: ["Top Handle", "Interior Divider Pocket"] } 
    },
    { 
        id: 6, name: "The Petite Round Bag", category: "mini_bags", price: 2100, originalPrice: 0, isSale: false, 
        image: "https://images.unsplash.com/photo-1624378772274-1a5666f4886b?q=80&w=600&h=600&fit=crop", 
        description: "Small but mighty, perfect for your phone and lipstick.", 
        images: [
            "https://images.unsplash.com/photo-1624378772274-1a5666f4886b?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627027598858-6a5680194098?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1546944686-3532f1464303?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { material: "Vegan Eco-Leather", dimensions: "15cm x 5cm x 15cm", weight: "0.2 kg", features: ["Adjustable Fine Chain", "Lined Interior"] } 
    },
    { 
        id: 7, name: "Weekend Duffel Bag", category: "travel_bags", price: 9500, originalPrice: 0, isSale: false, 
        image: "https://images.unsplash.com/photo-1557456108-8123c52e1281?q=80&w=600&h=600&fit=crop", 
        description: "Stylish and spacious travel companion. Carry-on approved.", 
        images: [
            "https://images.unsplash.com/photo-1557456108-8123c52e1281?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1580633842603-d1f060143890?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1592237834720-6d4512e20d6b?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1628104860012-78d120a1c1d8?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1574360677840-7e390c25a172?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { material: "Durable Canvas", dimensions: "50cm x 25cm x 30cm", weight: "1.8 kg", features: ["Shoe Compartment", "Detachable Pouch", "Trolley Sleeve"] } 
    },
    { 
        id: 8, name: "The Essential Satchel", category: "satchels", price: 4200, originalPrice: 4800, isSale: true, 
        image: "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=600&h=600&fit=crop", 
        description: "A versatile bag for every occasion. Genuine leather with metal accents.", 
        images: [
            "https://images.unsplash.com/photo-1627402636453-625cc7889759?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1626084196160-50b865611f8e?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1596707328511-2d7c04100c4c?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1627027598858-6a5680194098?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { material: "Genuine Leather", dimensions: "28cm x 10cm x 20cm", weight: "0.8 kg", features: ["Magnetic Snap Closure", "Gold-Tone Hardware"] } 
    },
    { 
        id: 9, name: "Luxury Chain Clutch", category: "clutches", price: 3400, originalPrice: 0, isSale: false, 
        image: "https://images.unsplash.com/photo-1616010023447-7b243b9d6288?q=80&w=600&h=600&fit=crop", 
        description: "Sleek and glossy, featuring a detachable gold chain.", 
        images: [
            "https://images.unsplash.com/photo-1616010023447-7b243b9d6288?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1549487593-9426f491c121?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1542848943-70e062c3e4c4?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1551000000-8484a0c8b3d6?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { material: "Patent Leather", dimensions: "22cm x 4cm x 10cm", weight: "0.2 kg", features: ["Chain Shoulder Strap", "Inner Slip Pocket"] } 
    },
    { 
        id: 10, name: "Minimalist Work Tote", category: "totes", price: 6800, originalPrice: 0, isSale: false, 
        image: "https://images.unsplash.com/photo-1555529712-88ec25f94b15?q=80&w=600&h=600&fit=crop", 
        description: "Fits a 13-inch laptop. A must-have for the professional wardrobe.", 
        images: [
            "https://images.unsplash.com/photo-1555529712-88ec25f94b15?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1543883832-6800d981ce81?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1574360677840-7e390c25a172?q=80&w=1000&h=1000&fit=crop",
            "https://images.unsplash.com/photo-1546944686-3532f1464303?q=80&w=1000&h=1000&fit=crop"
        ],
        specifications: { material: "Genuine Leather", dimensions: "38cm x 15cm x 33cm", weight: "1.3 kg", features: ["Fully Lined", "Secure Top Zipper"] } 
    },
];

const cart = [];
const whatsappNumber = "254711642342"; // +254 711 642 342

// --- II. E-commerce Core Logic (Retained loadPage and PDP functions) ---

// Retain loadPage, loadProductPage, attachPdpListeners, setupImageGallery, renderProductCardHTML...
// (These functions from the previous response are assumed to be included here.)

// --- III. WhatsApp Checkout Logic (NEW) ---

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

// --- IV. Utility Functions (Updated addToCart and showQuickViewModal) ---

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

    // Generate cart item HTML (Retained logic)
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

// --- V. Initialization (Ensure Cart Page is rendered when loaded) ---

document.addEventListener('DOMContentLoaded', () => {
    // ... (Retain setupNavigation, setupModalListeners, updateCartCount, etc.)

    // Override the default click behavior for internal navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('href').substring(1);
            if (targetId && targetId !== '#') {
                e.preventDefault();
                loadPage(targetId);
            }
        });
    });

    // Determine initial page path from hash (e.g., #collections, #product-page-1)
    const initialPath = window.location.hash.substring(1) || 'home-page';
    loadPage(initialPath);

    // Add listener for URL hash changes (for browser back/forward buttons)
    window.addEventListener('hashchange', () => {
        const newPath = window.location.hash.substring(1) || 'home-page';
        loadPage(newPath);
    });
});

// Assuming loadPage has been updated to handle the 'cart-page' render:
function loadPage(path) {
    // ... (logic to hide/show pages)
    
    // Special handling for dynamic pages
    // ...
    if (pageId === 'cart-page') {
        renderCartPage(); // Ensure cart page content is rendered
    } else if (pageId === 'product-page' && productId) {
        loadProductPage(productId);
    }
    
    // Update the URL hash
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
