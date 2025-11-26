/* New Styles for Specs & Features */
.product-specs, .product-care {
    margin: 15px 0;
    font-size: 14px;
    color: var(--text);
}

.product-features h3, .product-care h3 {
    font-size: 18px;
    color: var(--primary);
    margin-bottom: 10px;
}

.product-features ul {
    list-style: none;
    padding: 0;
}

.product-features li {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.product-features i {
    color: var(--primary);
    font-size: 12px;
}

/* Image Optimizations */
img {
    max-width: 100%;
    height: auto;
    loading: lazy; /* Fallback for older browsers */
}

/* Responsive for Rich Modals */
@media (max-width: 768px) {
    .modal-body {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    .product-features ul {
        font-size: 14px;
    }
}
