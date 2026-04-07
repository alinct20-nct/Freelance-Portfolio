// Navigation JavaScript
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupSmoothScroll();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.onclick && e.target.onclick.toString().includes('navigateToPage')) {
                e.preventDefault();
            }
        });

        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                window.commonFunctions.toggleMobileMenu();
            });
        }

        window.addEventListener('resize', () => {
            window.commonFunctions.handleResize();
        });

        window.addEventListener('scroll', () => {
            window.commonFunctions.handleScroll();
        });
    }

    setupSmoothScroll() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.navbar')) {
        window.navigation = new Navigation();
    }
});

// Global function for navigation
function navigateToPage(pageName) {
    // Navigate to the appropriate page
    switch(pageName) {
        case 'landing':
            window.location.href = '../landing/index.html';
            break;
        case 'login':
            window.location.href = '../login/index.html';
            break;
        case 'signup':
            window.location.href = '../signup/index.html';
            break;
        case '404':
            window.location.href = '../404/index.html';
            break;
        default:
            window.location.href = '../404/index.html';
    }
}
