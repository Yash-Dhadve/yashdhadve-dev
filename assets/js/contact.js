/* ========================================
   CONTACT SECTION - INTERACTIVE EFFECTS
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Animate contact card on scroll
    const contactCard = document.querySelector('.contact-card');
    
    if (contactCard) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(contactCard);
    }

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animate button
            const submitBtn = this.querySelector('.form-submit');
            submitBtn.style.animation = 'pulse 0.6s ease-out';
            
            // Reset form
            setTimeout(() => {
                this.reset();
                submitBtn.style.animation = 'none';
            }, 500);
        });
    }

    // Form field animations
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.animation = 'slideDown 0.3s ease-out';
        });
    });

    // Contact method hover effects
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', function() {
            this.style.animation = 'slideUp 0.3s ease-out';
        });
    });
});

// Add keyframe animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes slideUp {
        from {
            transform: translateY(5px);
        }
        to {
            transform: translateY(-5px);
        }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
