// Translation System
const translations = {
    en: {
        // Navigation
        "nav.features": "Features",
        "nav.how-it-works": "How It Works",
        "nav.popular-fields": "Popular Fields",
        "nav.login": "Login",
        "nav.signup": "Sign Up",
        
        // Hero Section
        "hero.line1": "Find. Book.",
        "hero.line2": "Play.",
        "hero.find-fields": "Find Fields",
        "hero.browse-fields": "Browse Fields",
        
        // Features Section
        "features.title": "Getting Started Is Simple",
        "features.step1.title": "Create Account",
        "features.step1.description": "Sign up with us easily and start your journey of booking fields",
        "features.step2.title": "Find Field",
        "features.step2.description": "Explore available fields in your area",
        "features.step3.title": "Book Now",
        "features.step3.description": "Book the perfect field for you with ease",
        
        // Fields Section
        "fields.title": "Popular Fields",
        "fields.field1.name": "Champions Field",
        "fields.field1.location": "Riyadh",
        "fields.field2.name": "Stars Field",
        "fields.field2.location": "Jeddah",
        "fields.field3.name": "Professionals Field",
        "fields.field3.location": "Dammam",
        
        // Login
        "login.title": "Sign In to KickZone",
        "login.subtitle": "Welcome back! Sign in to book your favorite field",
        "login.email": "Email Address",
        "login.email-placeholder": "Enter your email address",
        "login.password": "Password",
        "login.password-placeholder": "Enter your password",
        "login.remember": "Remember me",
        "login.forgot": "Forgot password?",
        "login.submit": "Sign In",
        "login.or": "Or",
        "login.google": "Sign in with Google",
        "login.facebook": "Sign in with Facebook",
        "login.no-account": "Don't have an account?",
        "login.signup-link": "Sign up for free",
        
        // Signup
        "signup.title": "Create New Account",
        "signup.subtitle": "Join us and start booking fields easily",
        "signup.fullname": "Full Name",
        "signup.fullname-placeholder": "Enter your full name",
        "signup.phone": "Phone Number",
        "signup.phone-placeholder": "Enter your phone number",
        "signup.email": "Email Address",
        "signup.email-placeholder": "Enter your email address",
        "signup.password": "Password",
        "signup.password-placeholder": "Enter your password",
        "signup.confirm": "Confirm Password",
        "signup.confirm-placeholder": "Re-enter your password",
        "signup.terms": "I agree to the <a href=\"#\">Terms and Conditions</a> and <a href=\"#\">Privacy Policy</a>",
        "signup.submit": "Create Account Now",
        "signup.or": "Or",
        "signup.google": "Sign up with Google",
        "signup.facebook": "Sign up with Facebook",
        "signup.have-account": "Already have an account?",
        "signup.login-link": "Sign In",
        
        // 404 Page
        "404.title": "Page Not Found",
        "404.message": "Sorry! The page you're looking for doesn't exist. It might have been moved or deleted.",
        "404.home": "Go to Home",
        "404.back": "Go Back",
        
        // Footer
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.help": "Help Center",
        "footer.facebook": "Facebook",
        "footer.twitter": "Twitter",
        "footer.instagram": "Instagram",
        "footer.copyright": "&copy; 2024 KickZone. All rights reserved."
    },
    ar: {
        // Navigation
        "nav.features": "المميزات",
        "nav.how-it-works": "كيف يعمل",
        "nav.popular-fields": "الملاعب الشائعة",
        "nav.login": "تسجيل الدخول",
        "nav.signup": "إنشاء حساب",
        
        // Hero Section
        "hero.line1": "ابحث. احجز.",
        "hero.line2": "العَب.",
        "hero.find-fields": "ابحث عن الملاعب",
        "hero.browse-fields": "تصفح الملاعب",
        
        // Features Section
        "features.title": "البدء سهل وبسيط",
        "features.step1.title": "إنشاء حساب",
        "features.step1.description": "سجل معنا بسهولة وابدأ رحلتك في حجز الملاعب",
        "features.step2.title": "البحث عن الملعب",
        "features.step2.description": "استكشف الملاعب المتاحة في منطقتك",
        "features.step3.title": "احجز الآن",
        "features.step3.description": "احجز الملعب المناسب لك بسهولة",
        
        // Fields Section
        "fields.title": "الملاعب الشائعة",
        "fields.field1.name": "ملعب الأبطال",
        "fields.field1.location": "الرياض",
        "fields.field2.name": "ملعب النجوم",
        "fields.field2.location": "جدة",
        "fields.field3.name": "ملعب المحترفين",
        "fields.field3.location": "الدمام",
        
        // Login
        "login.title": "تسجيل الدخول إلى KickZone",
        "login.subtitle": "أهلاً بعودتك! سجل دخولك لحجز ملعبك المفضل",
        "login.email": "البريد الإلكتروني",
        "login.email-placeholder": "أدخل بريدك الإلكتروني",
        "login.password": "كلمة المرور",
        "login.password-placeholder": "أدخل كلمة المرور",
        "login.remember": "تذكرني",
        "login.forgot": "نسيت كلمة المرور؟",
        "login.submit": "تسجيل الدخول",
        "login.or": "أو",
        "login.google": "تسجيل الدخول بحساب Google",
        "login.facebook": "تسجيل الدخول بحساب Facebook",
        "login.no-account": "ليس لديك حساب؟",
        "login.signup-link": "سجل مجاناً",
        
        // Signup
        "signup.title": "إنشاء حساب جديد",
        "signup.subtitle": "انضم إلينا وابدأ حجز الملاعب بسهولة",
        "signup.fullname": "الاسم الكامل",
        "signup.fullname-placeholder": "أدخل اسمك الكامل",
        "signup.phone": "رقم الهاتف",
        "signup.phone-placeholder": "أدخل رقم هاتفك",
        "signup.email": "البريد الإلكتروني",
        "signup.email-placeholder": "أدخل بريدك الإلكتروني",
        "signup.password": "كلمة المرور",
        "signup.password-placeholder": "أدخل كلمة المرور",
        "signup.confirm": "تأكيد كلمة المرور",
        "signup.confirm-placeholder": "أعد إدخال كلمة المرور",
        "signup.terms": "أوافق على <a href=\"#\">الشروط والأحكام</a> و <a href=\"#\">سياسة الخصوصية</a>",
        "signup.submit": "إنشاء حساب الآن",
        "signup.or": "أو",
        "signup.google": "تسجيل بحساب Google",
        "signup.facebook": "تسجيل بحساب Facebook",
        "signup.have-account": "لديك حساب بالفعل؟",
        "signup.login-link": "تسجيل الدخول",
        
        // 404 Page
        "404.title": "الصفحة غير موجودة",
        "404.message": "عذراً! الصفحة التي تبحث عنها غير موجودة. قد تم نقلها أو حذفها.",
        "404.home": "العودة للرئيسية",
        "404.back": "العودة للخلف",
        
        // Footer
        "footer.privacy": "سياسة الخصوصية",
        "footer.terms": "شروط الخدمة",
        "footer.help": "مركز المساعدة",
        "footer.facebook": "فيسبوك",
        "footer.twitter": "تويتر",
        "footer.instagram": "انستغرام",
        "footer.copyright": "&copy; 2024 KickZone. جميع الحقوق محفوظة."
    }
};

// Common functionality
class CommonFunctions {
    constructor() {
        this.currentLang = 'en';
        this.loadSavedLanguage();
    }

    // Language System
    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
        this.updateLanguage();
        this.saveLanguage();
    }

    updateLanguage() {
        document.documentElement.lang = this.currentLang;
        document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // Update language toggle button
        const currentLangElement = document.getElementById('current-lang');
        if (currentLangElement) {
            currentLangElement.textContent = this.currentLang.toUpperCase();
        }
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[this.currentLang][key];
            if (translation) {
                element.innerHTML = translation;
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = translations[this.currentLang][key];
            if (translation) {
                element.placeholder = translation;
            }
        });
    }

    saveLanguage() {
        localStorage.setItem('preferred-language', this.currentLang);
    }

    loadSavedLanguage() {
        const saved = localStorage.getItem('preferred-language');
        if (saved && translations[saved]) {
            this.currentLang = saved;
            this.updateLanguage();
        }
    }

    // Utility Functions
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    isValidPhone(phone) {
        return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.length >= 10;
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            ${this.currentLang === 'ar' ? 'left: 20px' : 'right: 20px'};
            background: ${type === 'success' ? '#1db954' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: ${this.currentLang === 'ar' ? 'slideInRTL' : 'slideIn'} 0.3s ease-out;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = `${this.currentLang === 'ar' ? 'slideOutRTL' : 'slideOut'} 0.3s ease-out`;
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 100;
            const sectionTop = section.offsetTop - offset;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    }

    toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu && navToggle) {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        }
    }

    handleResize() {
        if (window.innerWidth > 768) {
            const navMenu = document.querySelector('.nav-menu');
            const navToggle = document.querySelector('.nav-toggle');
            
            if (navMenu && navToggle) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    }

    handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // Form Validation
    validateField(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';

        if (input.hasAttribute('required') && !value) {
            errorMessage = this.currentLang === 'en' ? 'This field is required' : 'هذا الحقل مطلوب';
            isValid = false;
        }

        if (input.type === 'email' && value && !this.isValidEmail(value)) {
            errorMessage = this.currentLang === 'en' ? 'Invalid email address' : 'بريد إلكتروني غير صالح';
            isValid = false;
        }

        if (input.type === 'tel' && value && !this.isValidPhone(value)) {
            errorMessage = this.currentLang === 'en' ? 'Invalid phone number' : 'رقم هاتف غير صالح';
            isValid = false;
        }

        if (input.type === 'password' && value && value.length < 8) {
            errorMessage = this.currentLang === 'en' ? 'Password must be at least 8 characters' : 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
            isValid = false;
        }

        this.showFieldError(input, errorMessage);
        return isValid;
    }

    validatePasswordMatch(password, confirmPassword) {
        if (password.value !== confirmPassword.value) {
            const errorMessage = this.currentLang === 'en' ? 'Passwords do not match' : 'كلمات المرور غير متطابقة';
            this.showFieldError(confirmPassword, errorMessage);
            return false;
        } else {
            this.clearFieldError(confirmPassword);
            return true;
        }
    }

    showFieldError(input, message) {
        this.clearFieldError(input);
        
        if (message) {
            input.classList.add('error');
            
            const errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.textContent = message;
            input.parentNode.appendChild(errorElement);
        }
    }

    clearFieldError(input) {
        input.classList.remove('error');
        const errorElement = input.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    addPasswordToggle(input) {
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'password-toggle';
        toggle.innerHTML = '👁️';
        toggle.style.cssText = `
            position: absolute;
            ${this.currentLang === 'ar' ? 'right: 10px' : 'left: 10px'};
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            font-size: 16px;
        `;

        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        wrapper.appendChild(toggle);

        toggle.addEventListener('click', () => {
            const type = input.type === 'password' ? 'text' : 'password';
            input.type = type;
            toggle.innerHTML = type === 'password' ? '👁️' : '👁️‍🗨️';
        });
    }
}

// Global functions
window.commonFunctions = new CommonFunctions();

function toggleLanguage() {
    window.commonFunctions.toggleLanguage();
}

function toggleMobileMenu() {
    window.commonFunctions.toggleMobileMenu();
}

function goBack() {
    window.history.back();
}
