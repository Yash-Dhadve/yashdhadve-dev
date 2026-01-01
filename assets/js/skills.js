/* ========================================
   SKILLS SECTION - INTERACTIVE EFFECTS
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Animate skill cards on scroll
    const skillCards = document.querySelectorAll('.skill-card.professional-card');
    
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

    skillCards.forEach(card => {
        observer.observe(card);
    });

    // Skill bubble animation on hover
    const skillBubbles = document.querySelectorAll('.skill-bubble');
    skillBubbles.forEach(bubble => {
        bubble.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-out';
        });
    });

    // Skill item animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.05)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
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
            transform: scale(1.15);
        }
        100% {
            transform: scale(1.1);
        }
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);
