/* ========================================
   PROJECTS SECTION - INTERACTIVE EFFECTS
======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Animate project cards on scroll
    const projectCards = document.querySelectorAll('.project-card');
    
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

    projectCards.forEach(card => {
        observer.observe(card);
    });

    // Image placeholder animation
    const imagePlaceholders = document.querySelectorAll('.project-image-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            this.style.animation = 'bounce 0.4s ease-out';
        });
    });

    // Project tag hover effects
    const projectTags = document.querySelectorAll('.project-tag');
    projectTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.animation = 'popIn 0.3s ease-out';
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

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
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
`;
document.head.appendChild(style);
