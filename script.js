// Cart data structure
let cart = [];

// Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initSalePopup();
    initNavigation();
    initHeaderScroll();
    initHeroSlider();
    initTestimonialSlider();
    initScrollAnimations();
    initCartFunctionality();
    initNewsletterForm();
    
    // Show hero content with delay
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('active');
    }, 300);
});

// Sale Popup Functionality
function initSalePopup() {
    // Show sale popup after page loads
    setTimeout(() => {
        document.getElementById('sale-popup').classList.add('active');
    }, 1500);
    
    // Close popup functionality
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('sale-popup').classList.remove('active');
    });
    
    // Shop sale item button
    document.getElementById('shop-sale-item').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('sale-popup').classList.remove('active');
        showPage('sale');
    });
}

// Navigation Functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a, .logo, .floating-cart, .back-button, .category-card');
    const pages = document.querySelectorAll('.page');
    
    // Function to show a specific page
    function showPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        // Show target page
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
    
    // Make showPage function globally accessible
    window.showPage = showPage;
}

// Header Scroll Effect
function initHeaderScroll() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Hero Slider
function initHeroSlider() {
    const heroImages = document.querySelectorAll('.hero-image');
    const heroDots = document.querySelectorAll('.hero-dot');
    let currentHeroSlide = 0;
    let heroSlideInterval;
    
    function showHeroSlide(slideIndex) {
        heroImages.forEach(img => img.classList.remove('active'));
        heroDots.forEach(dot => dot.classList.remove('active'));
        
        heroImages[slideIndex].classList.add('active');
        heroDots[slideIndex].classList.add('active');
        currentHeroSlide = slideIndex;
    }
    
    function nextHeroSlide() {
        let nextSlide = (currentHeroSlide + 1) % heroImages.length;
        showHeroSlide(nextSlide);
    }
    
    function startHeroSlide() {
        heroSlideInterval = setInterval(nextHeroSlide, 5000);
    }
    
    function resetHeroSlide() {
        clearInterval(heroSlideInterval);
        startHeroSlide();
    }
    
    // Add click events to hero dots
    heroDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showHeroSlide(slideIndex);
            resetHeroSlide();
        });
    });
    
    // Start auto-slide
    startHeroSlide();
    
    // Pause on hover
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(heroSlideInterval);
    });
    
    heroSection.addEventListener('mouseleave', () => {
        startHeroSlide();
    });
}

// Testimonial Slider
function initTestimonialSlider() {
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentTestimonial = 0;
    let autoSlideInterval;
    
    function goToSlide(slideIndex) {
        currentTestimonial = slideIndex;
        testimonialTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
        
        testimonialDots.forEach(d => d.classList.remove('active'));
        testimonialDots[currentTestimonial].classList.add('active');
    }
    
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
            resetAutoSlide();
        });
    });
    
    function nextSlide() {
        currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
        goToSlide(currentTestimonial);
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    
    // Start auto-slide
    startAutoSlide();
    
    // Pause on hover
    testimonialTrack.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    testimonialTrack.addEventListener('mouseleave', () => {
        startAutoSlide();
    });
}

// Scroll Animations
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });
}

// Cart Functionality
function initCartFunctionality() {
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
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Added!';
            button.style.backgroundColor = '#4CAF50';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.backgroundColor = '';
                button.disabled = false;
            }, 2000);
        }
    });

    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('bagsByEveCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (validateEmail(email)) {
                // Simulate form submission
                const submitBtn = this.querySelector('button');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                    emailInput.value = '';
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                }, 1500);
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
}

// Email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

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
    
    // Show floating cart animation
    animateFloatingCart();
}

// Function to update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count, .cart-count-floating').forEach(element => {
        element.textContent = totalItems;
        // Add animation when count changes
        if (parseInt(element.textContent) > 0) {
            element.style.transform = 'scale(1.2)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 300);
        }
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
    // Add removal animation
    const cartItem = document.querySelectorAll('.cart-item')[index];
    cartItem.style.transform = 'translateX(100%)';
    cartItem.style.opacity = '0';
    
    setTimeout(() => {
        cart.splice(index, 1);
        updateCartCount();
        updateCartDisplay();
        localStorage.setItem('bagsByEveCart', JSON.stringify(cart));
    }, 300);
}

// Function to generate WhatsApp message
function generateWhatsAppMessage() {
    let message = "Hello BagsByEve! I'd like to purchase the following items:%0A%0A";
    
    cart.forEach(item => {
        message += `👜 ${item.name}%0A`;
        message += `📦 Quantity: ${item.quantity}%0A`;
        message += `💰 Price: Ksh ${(item.price * item.quantity).toLocaleString()}%0A%0A`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `💳 Total: Ksh ${total.toLocaleString()}%0A%0A`;
    message += "Please let me know the next steps for completing my order. Thank you!";
    
    return encodeURIComponent(message);
}

// Floating cart animation
function animateFloatingCart() {
    const floatingCart = document.getElementById('floating-cart');
    floatingCart.style.transform = 'scale(1.2)';
    setTimeout(() => {
        floatingCart.style.transform = 'scale(1)';
    }, 300);
}
