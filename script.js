// Modern JavaScript for Bags By Love Website

class BagsByLove {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadPageContent();
        this.updateCartCount();
        this.showSalePopup();
        this.setupTestimonialSlider();
        this.setupScrollAnimations();
        this.setupHeaderScroll();
    }

    setupEventListeners() {
        // Page navigation
        document.querySelectorAll('a[data-page]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = e.target.getAttribute('data-page');
                this.navigateToPage(targetPage);
            });
        });

        // View cart button
        document.getElementById('view-cart').addEventListener('click', (e) => {
            e.preventDefault();
            this.navigateToPage('cart');
        });

        // Floating cart
        document.getElementById('floating-cart').addEventListener('click', () => {
            this.navigateToPage('cart');
        });

        // Close popup
        document.getElementById('close-popup').addEventListener('click', () => {
            document.getElementById('sale-popup').classList.remove('active');
        });

        // Newsletter form
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
        }
    }

    navigateToPage(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        // Show target page
        document.getElementById(page).classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
        if (page !== 'cart') {
            document.querySelector(`a[data-page="${page}"]`).classList.add('active');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        this.currentPage = page;
        
        // Load page-specific content
        this.loadPageContent(page);
    }

    loadPageContent(page = this.currentPage) {
        switch(page) {
            case 'home':
                this.loadHomeContent();
                break;
            case 'collections':
                this.loadCollectionsPage();
                break;
            case 'new-arrivals':
                this.loadNewArrivalsPage();
                break;
            case 'bestsellers':
                this.loadBestsellersPage();
                break;
            case 'sale':
                this.loadSalePage();
                break;
            case 'cart':
                this.renderCart();
                break;
        }
    }

    loadHomeContent() {
        this.loadSaleItems('.sale-section .collections');
        this.loadFeaturedItems('.featured-section .collections');
        this.loadTestimonials();
    }

    loadSaleItems(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const saleItems = [
            {
                id: 13,
                name: "Weekender Bag",
                price: 2500,
                originalPrice: 3500,
                image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                discount: "30% OFF"
            },
            {
                id: 14,
                name: "Satchel Bag",
                price: 1900,
                originalPrice: 2800,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                discount: "25% OFF"
            },
            {
                id: 15,
                name: "Bucket Bag",
                price: 1600,
                originalPrice: 2400,
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                discount: "40% OFF"
            }
        ];

        container.innerHTML = saleItems.map(item => this.createProductCard(item, true)).join('');
        this.attachAddToCartListeners();
    }

    loadFeaturedItems(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const featuredItems = [
            {
                id: 1,
                name: "Classic Tote",
                price: 2500,
                image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                name: "Evening Clutch",
                price: 1800,
                image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 3,
                name: "Crossbody Bag",
                price: 2200,
                image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ];

        container.innerHTML = featuredItems.map(item => this.createProductCard(item)).join('');
        this.attachAddToCartListeners();
    }

    loadCollectionsPage() {
        const container = document.querySelector('#collections .category-grid');
        if (!container) return;

        const categories = [
            { name: "New Arrivals", icon: "fas fa-star", page: "new-arrivals" },
            { name: "Bestsellers", icon: "fas fa-fire", page: "bestsellers" },
            { name: "Sale", icon: "fas fa-tag", page: "sale" },
            { name: "Tote Bags", icon: "fas fa-suitcase" },
            { name: "Work Bags", icon: "fas fa-briefcase" },
            { name: "Evening Bags", icon: "fas fa-moon" },
            { name: "Crossbody Bags", icon: "fas fa-bag-shopping" },
            { name: "Backpacks", icon: "fas fa-backpack" },
            { name: "Clutch Bags", icon: "fas fa-gem" },
            { name: "Shoulder Bags", icon: "fas fa-bag-shopping" },
            { name: "Hobo Bags", icon: "fas fa-circle" },
            { name: "Cosmetic Bags", icon: "fas fa-palette" },
            { name: "Travel Bags", icon: "fas fa-plane" },
            { name: "Saddle Bags", icon: "fas fa-horse" },
            { name: "Satchels", icon: "fas fa-briefcase" }
        ];

        container.innerHTML = categories.map(category => `
            <a href="#" class="category-card" data-page="${category.page || ''}">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3>${category.name}</h3>
                <p>Explore our ${category.name.toLowerCase()} collection</p>
            </a>
        `).join('');

        // Re-attach event listeners for category cards
        document.querySelectorAll('#collections .category-card[data-page]').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const page = card.getAttribute('data-page');
                this.navigateToPage(page);
            });
        });
    }

    loadNewArrivalsPage() {
        this.loadProductPage('new-arrivals', [1, 2, 3, 4, 5, 6]);
    }

    loadBestsellersPage() {
        this.loadProductPage('bestsellers', [1, 3, 5, 4, 2, 5]);
    }

    loadSalePage() {
        this.loadProductPage('sale', [13, 14, 15, 16, 17, 18], true);
    }

    loadProductPage(page, productIds, isSale = false) {
        const container = document.querySelector(`#${page} .collections`);
        if (!container) return;

        const allProducts = {
            1: { id: 1, name: "Classic Tote", price: 2500, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            2: { id: 2, name: "Evening Clutch", price: 1800, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            3: { id: 3, name: "Crossbody Bag", price: 2200, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            4: { id: 4, name: "Satchel Bag", price: 2800, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            5: { id: 5, name: "Bucket Bag", price: 2400, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            6: { id: 6, name: "Crossbody Bag", price: 2200, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
            13: { id: 13, name: "Weekender Bag", price: 2500, originalPrice: 3500, image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", discount: "30% OFF" },
            14: { id: 14, name: "Satchel Bag", price: 1900, originalPrice: 2800, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", discount: "25% OFF" },
            15: { id: 15, name: "Bucket Bag", price: 1600, originalPrice: 2400, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", discount: "40% OFF" },
            16: { id: 16, name: "Crossbody Bag", price: 1430, originalPrice: 2200, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", discount: "35% OFF" },
            17: { id: 17, name: "Classic Tote", price: 2000, originalPrice: 2500, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", discount: "20% OFF" },
            18: { id: 18, name: "Evening Clutch", price: 1530, originalPrice: 1800, image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", discount: "15% OFF" }
        };

        const products = productIds.map(id => allProducts[id]);
        container.innerHTML = products.map(product => this.createProductCard(product, isSale)).join('');
        this.attachAddToCartListeners();
    }

    createProductCard(product, isSale = false) {
        return `
            <div class="collection-card fade-in">
                ${isSale && product.discount ? `<div class="sale-badge">${product.discount}</div>` : ''}
                <div class="collection-img" style="background-image: url('${product.image}')"></div>
                <div class="collection-info">
                    <h3>${product.name}</h3>
                    <p>Perfect for any occasion and style.</p>
                    <div class="price">
                        <div>
                            ${isSale && product.originalPrice ? `<span class="original-price">Ksh ${product.originalPrice}</span>` : ''}
                            <span class="${isSale ? 'sale-price' : ''}">Ksh ${product.price}</span>
                        </div>
                        <button class="add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    attachAddToCartListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const name = e.target.getAttribute('data-name');
                const price = parseInt(e.target.getAttribute('data-price'));
                const image = e.target.getAttribute('data-image');
                
                this.addToCart({ id, name, price, image });
            });
        });
    }

    addToCart(product) {
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.updateCartCount();
        this.showAddToCartConfirmation(product.name);
    }

    showAddToCartConfirmation(productName) {
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

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        const floatingCartCount = document.querySelector('.cart-count-floating');
        const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
        
        if (cartCount) cartCount.textContent = totalItems;
        if (floatingCartCount) floatingCartCount.textContent = totalItems;
        
        // Add animation to cart count
        if (totalItems > 0) {
            if (cartCount) cartCount.style.transform = 'scale(1.2)';
            if (floatingCartCount) floatingCartCount.style.transform = 'scale(1.2)';
            setTimeout(() => {
                if (cartCount) cartCount.style.transform = 'scale(1)';
                if (floatingCartCount) floatingCartCount.style.transform = 'scale(1)';
            }, 300);
        }
    }

    renderCart() {
        const cartContent = document.getElementById('cart-content');
        let total = 0;
        
        if (this.cart.length === 0) {
            cartContent.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-bag"></i>
                    <h3>Your cart is empty</h3>
                    <p>Discover our beautiful collection and add some items to your cart.</p>
                    <a href="#" class="btn" data-page="collections">Start Shopping</a>
                </div>
            `;
            
            // Re-attach event listener
            cartContent.querySelector('.btn').addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToPage('collections');
            });
            
            return;
        }
        
        let cartHTML = '';
        
        this.cart.forEach(item => {
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
                <a href="https://wa.me/254711642342?text=Hi%20Bags%20By%20Love,%20I%20would%20like%20to%20purchase%20the%20following%20items:%0A${this.generateWhatsAppMessage()}" class="btn checkout-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Checkout on WhatsApp
                </a>
            </div>
        `;
        
        cartContent.innerHTML = cartHTML;
        
        // Add event listeners for cart actions
        this.attachCartActionListeners();
    }

    attachCartActionListeners() {
        // Increase quantity
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const item = this.cart.find(item => item.id === id);
                if (item) {
                    item.quantity += 1;
                    this.saveCart();
                    this.updateCartCount();
                    this.renderCart();
                }
            });
        });
        
        // Decrease quantity
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const item = this.cart.find(item => item.id === id);
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                    this.saveCart();
                    this.updateCartCount();
                    this.renderCart();
                }
            });
        });
        
        // Remove item
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                this.cart = this.cart.filter(item => item.id !== id);
                this.saveCart();
                this.updateCartCount();
                this.renderCart();
            });
        });
    }

    generateWhatsAppMessage() {
        let message = '';
        this.cart.forEach(item => {
            message += `- ${item.name} (Qty: ${item.quantity}) - Ksh ${item.price * item.quantity}%0A`;
        });
        
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `%0ATotal: Ksh ${total}`;
        
        return message;
    }

    loadTestimonials() {
        const container = document.querySelector('.testimonial-track');
        if (!container) return;

        const testimonials = [
            {
                text: "I absolutely love my new tote bag! The quality is exceptional and it's so versatile. I've received countless compliments! The customer service was also outstanding.",
                author: "Sarah J."
            },
            {
                text: "The attention to detail in these bags is remarkable. I purchased the crossbody bag for my vacation and it was perfect - stylish yet practical. Will definitely be buying more!",
                author: "Michelle R."
            },
            {
                text: "As someone who values both fashion and functionality, Bags By Love hits the perfect balance. The evening clutch I bought elevated my entire outfit for a special event.",
                author: "Jessica T."
            }
        ];

        container.innerHTML = testimonials.map(testimonial => `
            <div class="testimonial">
                <p>"${testimonial.text}"</p>
                <div class="author">- ${testimonial.author}</div>
            </div>
        `).join('');
    }

    setupTestimonialSlider() {
        const track = document.querySelector('.testimonial-track');
        const dots = document.querySelectorAll('.testimonial-dot');
        let currentSlide = 0;

        if (!track || dots.length === 0) return;

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                this.goToSlide(slideIndex);
            });
        });

        // Auto slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % dots.length;
            this.goToSlide(currentSlide);
        }, 5000);

        this.goToSlide = (slideIndex) => {
            track.style.transform = `translateX(-${slideIndex * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
            currentSlide = slideIndex;
        };
    }

    showSalePopup() {
        setTimeout(() => {
            document.getElementById('sale-popup').classList.add('active');
        }, 2000);
    }

    setupScrollAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const checkFade = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', checkFade);
        checkFade(); // Check on load
    }

    setupHeaderScroll() {
        window.addEventListener('scroll', () => {
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
    }

    handleNewsletterSubmit(e) {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Simple validation
        if (email && email.includes('@')) {
            // Show success message
            const submitBtn = e.target.querySelector('button');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            submitBtn.style.backgroundColor = '#25D366';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                e.target.reset();
            }, 3000);
        }
    }

    handleContactSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Show success message
        const submitBtn = e.target.querySelector('button');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.style.backgroundColor = '#25D366';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.backgroundColor = '';
            e.target.reset();
        }, 3000);
        
        console.log('Contact form submitted:', data);
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BagsByLove();
});

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
