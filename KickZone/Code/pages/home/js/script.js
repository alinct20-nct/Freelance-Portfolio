// DOM Elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const notificationBtn = document.querySelector('.notification-btn');
const userProfile = document.querySelector('.user-profile');
const bookButtons = document.querySelectorAll('.btn-book');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    animateOnScroll();
    initializeCounters();
});

// Event Listeners
function setupEventListeners() {
    // Navigation scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Notification button
    notificationBtn.addEventListener('click', handleNotifications);
    
    // User profile
    userProfile.addEventListener('click', handleUserProfile);
    
    // Book buttons
    bookButtons.forEach(button => {
        button.addEventListener('click', handleBooking);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(6, 12, 11, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(6, 12, 11, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Navigation click handler
function handleNavClick(e) {
    navLinks.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
}

// Notifications handler
function handleNotifications() {
    showNotification('you have 3 new notifications');
}

// User profile handler
function handleUserProfile() {
    // Toggle user menu
    const userMenu = document.createElement('div');
    userMenu.className = 'user-menu';
    userMenu.innerHTML = `
        <div class="user-menu-item">
            <i class="fas fa-user"></i>
            <span>Profile</span>
        </div>
        <div class="user-menu-item">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
        </div>
        <div class="user-menu-item">
            <i class="fas fa-sign-out-alt"></i>
            <span>Logout</span>
        </div>
    `;
    
    // Position the menu
    const rect = userProfile.getBoundingClientRect();
    userMenu.style.position = 'absolute';
    userMenu.style.top = `${rect.bottom + 10}px`;
    userMenu.style.right = `${window.innerWidth - rect.right}px`;
    userMenu.style.background = '#0F1614';
    userMenu.style.border = '1px solid rgba(255, 255, 255, 0.1)';
    userMenu.style.borderRadius = '8px';
    userMenu.style.padding = '10px 0';
    userMenu.style.minWidth = '150px';
    userMenu.style.zIndex = '1001';
    
    document.body.appendChild(userMenu);
    
    // Remove menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function removeMenu() {
            userMenu.remove();
            document.removeEventListener('click', removeMenu);
        });
    }, 100);
}

// Booking handler
function handleBooking(e) {
    const fieldCard = e.target.closest('.field-card');
    const fieldName = fieldCard.querySelector('h4').textContent;
    const fieldLocation = fieldCard.querySelector('p').textContent;
    const fieldPrice = fieldCard.querySelector('.field-price').textContent;
    
    showBookingModal(fieldName, fieldLocation, fieldPrice);
}

// Show booking modal
function showBookingModal(name, location, price) {
    const modal = document.createElement('div');
    modal.className = 'booking-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Book Field</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="field-info">
                    <h4>${name}</h4>
                    <p>${location}</p>
                    <p class="price">${price}</p>
                </div>
                <form class="booking-form">
                    <div class="form-group">
                        <label for="date">Date</label>
                        <input type="date" id="date" required>
                    </div>
                    <div class="form-group">
                        <label for="time">Time</label>
                        <input type="time" id="time" required>
                    </div>
                    <div class="form-group">
                        <label for="duration">Duration (hours)</label>
                        <select id="duration" required>
                            <option value="1">1 hour</option>
                            <option value="2">2 hours</option>
                            <option value="3">3 hours</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="players">Number of Players</label>
                        <input type="number" id="players" min="1" max="22" required>
                    </div>
                    <button type="submit" class="btn-primary">Confirm Booking</button>
                </form>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .booking-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
        }
        
        .modal-content {
            background: #0F1614;
            border-radius: 20px;
            padding: 30px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            z-index: 1;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .modal-header h3 {
            color: #FFFFFF;
            font-size: 1.5rem;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: rgba(255, 255, 255, 0.6);
            font-size: 1.5rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #FFFFFF;
        }
        
        .field-info {
            background: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 20px;
        }
        
        .field-info h4 {
            color: #FFFFFF;
            margin-bottom: 8px;
        }
        
        .field-info p {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 4px;
        }
        
        .field-info .price {
            color: #22C55E;
            font-weight: 600;
            font-size: 1.2rem;
        }
        
        .booking-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
        }
        
        .form-group label {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group select {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            padding: 12px;
            color: #FFFFFF;
            font-size: 1rem;
        }
        
        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #22C55E;
            background: rgba(255, 255, 255, 0.15);
        }
        
        .user-menu-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 20px;
            color: rgba(255, 255, 255, 0.8);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .user-menu-item:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #22C55E;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
    
    document.body.appendChild(modal);
    
    // Close modal handlers
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
        styleSheet.remove();
    });
    
    overlay.addEventListener('click', () => {
        modal.remove();
        styleSheet.remove();
    });
    
    // Form submission
    const form = modal.querySelector('.booking-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Booking confirmed successfully!');
        modal.remove();
        styleSheet.remove();
    });
}

// Smooth scroll handler
function handleSmoothScroll(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animate on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards and field cards
    document.querySelectorAll('.feature-card, .field-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize counters
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const countUp = (counter) => {
        const target = parseInt(counter.innerText.replace('+', ''));
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target + '+';
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                countUp(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: #22C55E;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            z-index: 3000;
            animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
            styleSheet.remove();
        }, 300);
    }, 3000);
    
    // Add slide out animation
    const slideOutStyle = document.createElement('style');
    slideOutStyle.textContent = `
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(slideOutStyle);
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.top = `${rect.top - 40}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - 50}px`;
            tooltip.style.background = '#0F1614';
            tooltip.style.color = '#FFFFFF';
            tooltip.style.padding = '8px 12px';
            tooltip.style.borderRadius = '6px';
            tooltip.style.fontSize = '0.9rem';
            tooltip.style.zIndex = '1000';
            tooltip.style.whiteSpace = 'nowrap';
            
            document.body.appendChild(tooltip);
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTooltips();
});
