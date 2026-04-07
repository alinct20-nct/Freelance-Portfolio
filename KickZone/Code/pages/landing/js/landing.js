// Landing Page Specific JavaScript
class LandingPage {
    constructor() {
        this.init();
    }

    init() {
        this.setupAnimations();
        this.setupFeatureCards();
        this.setupFieldCards();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                window.commonFunctions.scrollToSection(targetId);
            }
        });

        window.addEventListener('resize', () => {
            window.commonFunctions.handleResize();
        });

        window.addEventListener('scroll', () => {
            window.commonFunctions.handleScroll();
        });
    }

    setupAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .field-card').forEach(el => {
            observer.observe(el);
        });
    }

    setupFeatureCards() {
        document.querySelectorAll('.feature-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 100}ms`;
            card.addEventListener('mouseenter', () => {
                this.animateFeatureIcon(card.querySelector('.feature-icon'));
            });
        });
    }

    setupFieldCards() {
        document.querySelectorAll('.field-card').forEach(card => {
            card.addEventListener('click', () => {
                this.showFieldDetails(card);
            });
        });
    }

    initHeroAnimations() {
        const heroHeading = document.querySelector('.hero-heading');
        const heroButtons = document.querySelector('.hero-buttons');
        
        if (heroHeading && heroButtons) {
            setTimeout(() => {
                heroHeading.classList.add('animate-in');
            }, 100);
            
            setTimeout(() => {
                heroButtons.classList.add('animate-in');
            }, 300);
        }
    }

    animateFeatureIcon(icon) {
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }, 200);
        }
    }

    showFieldDetails(card) {
        const fieldName = card.querySelector('h3').textContent;
        const message = window.commonFunctions.currentLang === 'en' 
            ? `Details for ${fieldName} field` 
            : `تفاصيل ملعب ${fieldName}`;
        window.commonFunctions.showNotification(message, 'info');
    }
}

// Initialize landing page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hero-section') || document.querySelector('.features-section')) {
        window.landingPage = new LandingPage();
    }
});

// Global function for navigation
function showSection(sectionId) {
    window.commonFunctions.scrollToSection(sectionId);
}
