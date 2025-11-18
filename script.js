// Enhanced JavaScript with modern features

// Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Show sale popup after 2 seconds
    setTimeout(function() {
        document.getElementById('sale-popup').classList.add('active');
    }, 2000);
    
    // Close popup
    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('sale-popup').classList.remove('active');
    });
    
    // Page navigation
    const navLinks = document.querySelectorAll('a[data-page]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            document.getElementById(targetPage).classList.add('active');
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            
            if (targetPage !== 'cart') {
                this.classList.add('active');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // View cart button
    document.getElementById('view-cart').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show cart page
        document.getElementById('cart').classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
    
    // Floating cart
    document.getElementById('floating-cart').addEventListener('click', function() {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show cart page
        document.getElementById('cart').classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseInt(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');
            
            // Check if item already in cart
            const existingItem = cart.find(item => item.id === id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    image,
                    quantity: 1
                });
            }
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Update cart count
            updateCartCount();
            
            // Show confirmation with animation
            showAddToCartConfirmation(name);
        });
    });
    
    function showAddToCartConfirmation(productName) {
        // Create confirmation element
        const confirmation = document.createElement('div');
        confirmation.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
        `;
        confirmation.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-check-circle" style="font-size: 20px;"></i>
                <div>
                    <strong>Added to cart!</strong>
                    <div style="font-size: 14px; margin-top: 5px;">${productName}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(confirmation);
        
        // Animate in
        setTimeout(() => {
            confirmation.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            confirmation.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(confirmation);
            }, 300);
        }, 3000);
    }
    
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        const floatingCartCount = document.querySelector('.cart-count-floating');
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        
        cartCount.textContent = totalItems;
        floatingCartCount.textContent = totalItems;
        
        // Add animation to cart count
        if (totalItems > 0) {
            cartCount.style.transform = 'scale(1.2)';
            floatingCartCount.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
                floatingCartCount.style.transform = 'scale(1)';
            }, 300);
        }
        
        // Update cart page if it's active
        if (document.getElementById('cart').classList.contains('active')) {
            renderCart();
        }
    }
    
    function renderCart() {
        const cartContent = document.getElementById('cart-content');
        let total = 0;
        
        if (cart.length === 0) {
            cartContent.innerHTML = `
                <div style="text-align: center; padding: 60px 20px;">
                    <i class="fas fa-shopping-bag" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                    <h3 style="color: var(--text); margin-bottom: 15px;">Your cart is empty</h3>
                    <p style="color: var(--text); margin-bottom: 30px;">Discover our beautiful collection and add some items to your cart.</p>
                    <a href="#" class="btn" data-page="collections">Start Shopping</a>
                </div>
            `;
            
            // Add event listener to the button
            const startShoppingBtn = cartContent.querySelector('.btn');
            if (startShoppingBtn) {
                startShoppingBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector('a[data-page="collections"]').click();
                });
            }
            
            return;
        }
        
        let cartHTML = '';
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            cartHTML += `
                <div class="cart-item">
                    <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <div class="cart-item-price">Ksh ${item.price}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <div class="cart-item-total">
                        <div class="cart-item-price">Ksh ${itemTotal}</div>
                        <button class="cart-item-remove" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        });
        
        cartHTML += `
            <div class="cart-total">
                <h3>Total: Ksh ${total}</h3>
                <a href="https://wa.me/254711642342?text=Hi%20Bags%20By%20Love,%20I%20would%20like%20to%20purchase%20the%20following%20items:%0A${generateWhatsAppMessage()}" class="btn checkout-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Checkout on WhatsApp
                </a>
            </div>
        `;
        
        cartContent.innerHTML = cartHTML;
        
        // Add event listeners for quantity buttons
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const item = cart.find(item => item.id === id);
                if (item) {
                    item.quantity += 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const item = cart.find(item => item.id === id);
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    updateCartCount();
                }
            });
        });
        
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                cart = cart.filter(item => item.id !== id);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
            });
        });
    }
    
    function generateWhatsAppMessage() {
        let message = '';
        cart.forEach(item => {
            message += `- ${item.name} (Qty: ${item.quantity}) - Ksh ${item.price * item.quantity}%0A`;
        });
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `%0ATotal: Ksh ${total}`;
        
        return message;
    }
    
    // Testimonial slider
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    let currentSlide = 0;
    
    testimonialDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
    
    function goToSlide(slideIndex) {
        testimonialTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
        
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonialDots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }
    
    // Auto slide testimonials
    setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonialDots.length;
        goToSlide(currentSlide);
    }, 5000);
    
    // Fade in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkFade);
    checkFade(); // Check on load
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(0px)';
        }
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email && email.includes('@')) {
                // Show success message
                const submitBtn = this.querySelector('button');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                submitBtn.style.backgroundColor = '#25D366';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    this.reset();
                }, 3000);
            }
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                this.style.pointerEvents = 'none';
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    });
});
