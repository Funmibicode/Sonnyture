// Image Gallery Functionality
function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = '1';
    }, 200);
}

// Add to Cart Functionality
function addToCart() {
    const size = document.getElementById('sizeSelect').value;
    const qty = document.getElementById('qtySelect').value;
    
    if (!size) {
        alert('Please select a size before adding to cart!');
        return;
    }
    
    // Add animation effect to button
    const btn = document.querySelector('.add-to-cart-btn');
    btn.textContent = '✓ Added to Cart!';
    btn.style.background = 'linear-gradient(135deg, #14a085 0%, #0d7377 100%)';
    
    setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)';
    }, 2000);
    
    console.log(`Added to cart: Size ${size}, Quantity ${qty}`);
}

// Newsletter Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            const email = emailInput.value;
            
            if (email) {
                alert(`Thank you for subscribing with: ${email}`);
                emailInput.value = '';
            }
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation on main image load
    const mainImage = document.getElementById('mainImage');
    mainImage.style.transition = 'opacity 0.3s ease-in-out';
});
