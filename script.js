// Cart data structure
let cart = [];

// Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Show sale popup after page loads
    setTimeout(() => {
        document.getElementById('sale-popup').classList.add('active');
    }, 1000);
    
    // Close popup functionality
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('sale-popup').classList.remove('active');
    });
    
    // Fix for "Shop Sale Item" button in popup
    document.getElementById('shop-sale-item').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('sale-popup').classList.remove('active');
        showPage('sale');
    });
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a, .logo, .floating-cart, .back-button, .category-card');
    const pages = document.querySelectorAll('.page');
    
    // Function to show a specific page
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        document.getElementById(pageId).classList.add('active');
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Scroll to top when changing pages
        window.scrollTo(0, 0);
        
        // If showing cart page, update cart display
        if (pageId === 'cart') {
            updateCartDisplay();
        }
    }
    
    // Add click event to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });
    
    // Fix for hero page cart button
    document.getElementById('view-cart').addEventListener('click', function(e) {
        e.preventDefault();
        showPage('cart');
    });
    
    // Fix for floating cart
    document.getElementById('floating-cart').addEventListener('click', function() {
        showPage('cart');
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Testimonial slider
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;
    
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            currentTestimonial = slideIndex;
            
            testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
            
            testimonialDots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Auto-advance testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
        testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        
        testimonialDots.forEach(d => d.classList.remove('active'));
        testimonialDots[currentTestimonial].classList.add('active');
    }, 6000);

    // Fade-in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    
    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'));
            const image = button.getAttribute('data-image');
            
            addToCart(id, name, price, image);
            
            // Add animation effect
            button.innerHTML = '<i class="fas fa-check"></i> Added!';
            button.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-shopping-bag"></i> Add to Cart';
                button.style.backgroundColor = '';
            }, 2000);
        }
    });

    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('bagsByEveCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
});

// Function to add item to cart
function addToCart(id, name, price, image) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    // Update cart count
    updateCartCount();
    
    // Save cart to localStorage
    localStorage.setItem('bagsByEveCart', JSON.stringify(cart));
}

// Function to update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count, .cart-count-floating').forEach(element => {
        element.textContent = totalItems;
    });
}

// Function to update cart display
function updateCartDisplay() {
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Add some beautiful bags to your cart!</p>
                <a href="#" class="btn" data-page="collections">Shop Now</a>
            </div>
        `;
        
        // Add event listener to the shop now button
        const shopNowButton = cartContent.querySelector('.btn');
        shopNowButton.addEventListener('click', function(e) {
            e.preventDefault();
            showPage('collections');
        });
        
        return;
    }
    
    let cartHTML = `
        <div class="cart-items">
            <h3>Your Items (${cart.length})</h3>
    `;
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-img" style="background-image: url('${item.image}');"></div>
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Quantity: ${item.quantity}</p>
                    <div class="cart-item-price">Ksh ${itemTotal.toLocaleString()}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item" data-index="${index}">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
    });
    
    cartHTML += `
        </div>
        <div class="cart-summary">
            <div class="cart-total">
                Total: Ksh ${total.toLocaleString()}
            </div>
            <a href="https://wa.me/254711642342?text=${generateWhatsAppMessage()}" class="btn btn-whatsapp" target="_blank" style="margin-bottom: 15px;">
                <i class="fab fa-whatsapp"></i> Checkout on WhatsApp
            </a>
            <button class="btn btn-outline" id="continue-shopping">
                Continue Shopping
            </button>
        </div>
    `;
    
    cartContent.innerHTML = cartHTML;
    
    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
    
    // Add event listener to continue shopping button
    document.getElementById('continue-shopping').addEventListener('click', function() {
        showPage('collections');
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
    localStorage.setItem('bagsByEveCart', JSON.stringify(cart));
}

// Function to generate WhatsApp message with images
function generateWhatsAppMessage() {
    let message = "Hello BagsByEve! I'd like to purchase the following items:%0A%0A";
    
    cart.forEach(item => {
        message += `👜 ${item.name}%0A`;
        message += `📦 Quantity: ${item.quantity}%0A`;
        message += `💰 Price: Ksh ${(item.price * item.quantity).toLocaleString()}%0A`;
        message += `🖼️ Image: ${item.image}%0A%0A`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `💳 Total: Ksh ${total.toLocaleString()}%0A%0A`;
    message += "Please let me know the next steps for completing my order. Thank you!";
    
    return encodeURIComponent(message);
}

// Function to show page (needed for cart functionality)
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
    
    // If showing cart page, update cart display
    if (pageId === 'cart') {
        updateCartDisplay();
    }
}
