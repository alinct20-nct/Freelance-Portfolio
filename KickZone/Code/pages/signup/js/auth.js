// Authentication Pages JavaScript
class AuthPages {
    constructor() {
        this.init();
    }

    init() {
        this.setupFormValidation();
        this.setupSocialLogin();
        this.setupPasswordVisibility();
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('auth-form')) {
                e.preventDefault();
                this.handleFormSubmit(e.target);
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-social')) {
                const provider = e.target.classList.contains('btn-google') ? 'google' : 'facebook';
                this.handleSocialLogin(provider);
            }
        });
    }

    setupFormValidation() {
        const inputs = document.querySelectorAll('input[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => window.commonFunctions.validateField(input));
            input.addEventListener('input', () => window.commonFunctions.clearFieldError(input));
        });

        const confirmPassword = document.getElementById('confirmPassword');
        const password = document.getElementById('signup-password');
        
        if (confirmPassword && password) {
            confirmPassword.addEventListener('input', () => {
                window.commonFunctions.validatePasswordMatch(password, confirmPassword);
            });
        }
    }

    setupSocialLogin() {
        // Social login buttons are handled by event listeners above
    }

    setupPasswordVisibility() {
        const passwordInputs = document.querySelectorAll('input[type="password"]');
        passwordInputs.forEach(input => {
            window.commonFunctions.addPasswordToggle(input);
        });
    }

    handleFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        if (!this.validateForm(form)) {
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = window.commonFunctions.currentLang === 'en' ? 'Processing...' : 'جاري المعالجة...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            if (form.id === 'login-form' || form.querySelector('input[type="email"]') && form.querySelector('input[type="password"]') && !document.getElementById('fullName')) {
                this.handleLoginSuccess(data);
            } else {
                this.handleSignupSuccess(data);
            }
        }, 2000);
    }

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            if (!window.commonFunctions.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    handleLoginSuccess(data) {
        const message = window.commonFunctions.currentLang === 'en' 
            ? 'Login successful!' 
            : 'تم تسجيل الدخول بنجاح!';
        window.commonFunctions.showNotification(message, 'success');
        setTimeout(() => {
            window.location.href = '../landing/index.html';
        }, 1500);
    }

    handleSignupSuccess(data) {
        const message = window.commonFunctions.currentLang === 'en' 
            ? 'Account created successfully!' 
            : 'تم إنشاء الحساب بنجاح!';
        window.commonFunctions.showNotification(message, 'success');
        setTimeout(() => {
            window.location.href = '../login/index.html';
        }, 1500);
    }

    handleSocialLogin(provider) {
        const message = window.commonFunctions.currentLang === 'en' 
            ? `${provider} login in development` 
            : `تسجيل الدخول بحساب ${provider} قيد التطوير`;
        window.commonFunctions.showNotification(message, 'info');
    }
}

// Initialize auth pages when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.auth-container')) {
        window.authPages = new AuthPages();
    }
});

// Global functions for form handling
function handleLogin(event) {
    event.preventDefault();
    window.authPages.handleFormSubmit(event.target);
}

function handleSignup(event) {
    event.preventDefault();
    window.authPages.handleFormSubmit(event.target);
}
