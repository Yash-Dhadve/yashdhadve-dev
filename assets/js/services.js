/* ========================================
   SERVICES SECTION - INTERACTIVE EFFECTS
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Animate service cards on scroll
    const serviceCards = document.querySelectorAll('.service-card.professional-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.6s ease-out forwards`;
                entry.target.style.animationDelay = `${index * 0.15}s`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Interactive feature list
    const featureItems = document.querySelectorAll('.service-features li');
    featureItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.animation = 'bounce 0.4s ease-out';
            }
        });
    });

    // Tech tags hover effect
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.animation = 'popIn 0.3s ease-out';
        });
    });

    // Card number counter
    let cardCount = 0;
    serviceCards.forEach(card => {
        cardCount++;
        const badgeElement = document.createElement('div');
        badgeElement.className = 'card-number-badge';
        badgeElement.textContent = `0${cardCount}`;
        card.prepend(badgeElement);
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

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
    }

    @keyframes popIn {
        0% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    .card-number-badge {
        position: absolute;
        top: -12px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: linear-gradient(135deg, var(--color-primary), rgba(139, 92, 246, 0.8));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: #000;
        font-size: 0.9rem;
        box-shadow: 0 4px 12px rgba(8, 203, 0, 0.3);
    }
`;
document.head.appendChild(style);
