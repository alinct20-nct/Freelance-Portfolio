/**
 * ========================================
 * نظام الترجمة والدعم متعدد اللغات
 * ========================================
 * لماذا هذا النظام موجود:
 * - دعم اللغتين الإنجليزية والعربية
 * - تخزين جميع نصوص الصفحة بلغتين
 * - تسهيل تغيير اللغة بضغطة زر واحدة
 * - السماح للمستخدم باختيار اللغة المفضلة
 */

/**
 * قاموس الترجمة (Translations Dictionary)
 * لماذا موجود:
 * - تخزين جميع النصوص بلغتين (English و Arabic)
 * - سهولة الصيانة: جميع النصوص في مكان واحد
 * - سهولة الإضافة: إذا أردنا إضافة لغة جديدة
 */
const translations = {
    // اللغة الإنجليزية
    en: {
        // ========================================
        // أيقونات التنقل (Navigation)
        // ========================================
        "nav.leagues": "Leagues", // قائمة الدوريات
        "nav.pitches": "Pitches", // قائمة الملاعب
        "nav.myBookings": "My Bookings", // حجوزاتي
        "nav.training": "Training", // التدريب
        "nav.notifications": "Notifications", // الإشعارات
        "nav.person": "Account", // حسابي
        
        // ========================================
        // قسم البطل (Hero Section)
        // ========================================
        "browse.title": "Browse by Location", // العنوان الرئيسي
        "browse.description": "Find best turf near you. Select a governorate to explore professional pitches and local football hubs across Egypt.", // الوصف
        
        // ========================================
        // المحافظات (Governorates)
        // ========================================
        "browse.selectGovernorate": "Select Governorate", // اختر محافظة
        "browse.step1": "Step 1", // الخطوة الأولى
        "browse.activeSelection": "Active Selection", // الاختيار النشط
        "browse.cairo": "Cairo", // القاهرة
        "browse.alexandria": "Alexandria", // الإسكندرية
        "browse.giza": "Giza", // الجيزة
        "browse.redSea": "Red Sea", // البحر الأحمر
        
        // ========================================
        // المناطق (Districts)
        // ========================================
        "browse.districtsIn": "Districts in", // المناطق في
        "browse.step2": "Step 2", // الخطوة الثانية
        "browse.sortByPopularity": "Sort by Popularity", // ترتيب حسب الشعبية
        "browse.nasrCity": "Nasr City", // مدينة نصر
        "browse.maadi": "Maadi", // المعادي
        "browse.sheikhZayed": "Sheikh Zayed", // الشيخ زايد
        "browse.sixthOctober": "6th of October", // السادس من أكتوبر
        "browse.newCairo": "New Cairo", // القاهرة الجديدة
        "browse.heliopolis": "Heliopolis", // هليوبوليس
        "browse.zamalek": "Zamalek", // الزمالك
        
        // ========================================
        // بطاقات الملاعب (Pitch Cards)
        // ========================================
        "browse.availablePitchesIn": "Available Pitches in", // الملاعب المتاحة في
        "browse.proGrade": "Pro Grade", // احترافي
        "browse.popular": "Popular", // شائع
        "browse.new": "New", // جديد
        "browse.viewDetails": "View Details", // عرض التفاصيل
        "browse.loadMorePitches": "Load More Pitches", // تحميل المزيد من الملاعب
        "browse.searchPitches": "Search pitches...", // ابحث عن الملاعب...
        
        // ========================================
        // أسماء الملاعب والتفاصيل
        // ========================================
        "browse.stadium5Arena": "Stadium 5 Arena", // ملعب الاستاد 5
        "browse.eliteTurfClub": "Elite Turf Club", // نادي العشب الفاخر
        "browse.goalPointArena": "Goal Point Arena", // نقطة الهدف
        "browse.hrLabel": "/hr", // /ساعة
        
        // ========================================
        // أنواع الملاعب
        // ========================================
        "professional": "Pro Grade", // احترافي
        "popular": "Popular", // شائع
        "new": "New", // جديد
        
        // ========================================
        // التذييل (Footer)
        // ========================================
        "footer.copyright": "© 2024 KICKZONE. THE NEON PITCH.", // حقوق الملكية
        "footer.privacyPolicy": "Privacy Policy", // سياسة الخصوصية
        "footer.termsOfService": "Terms of Service", // شروط الخدمة
        "footer.partnerWithUs": "Partner with Us", // اسأل عن الشراكة
        "footer.support": "Support" // الدعم
    },
    
    // اللغة العربية
    ar: {
        // ========================================
        // أيقونات التنقل (Navigation)
        // ========================================
        "nav.leagues": "الدوريات", // Leagues
        "nav.pitches": "الملاعب", // Pitches
        "nav.myBookings": "حجوزاتي", // My Bookings
        "nav.training": "التدريب", // Training
        "nav.notifications": "الإشعارات", // Notifications
        "nav.person": "حسابي", // Account
        
        // ========================================
        // قسم البطل (Hero Section)
        // ========================================
        "browse.title": "تصفح حسب الموقع", // Browse by Location
        "browse.description": "ابحث عن أفضل الملاعب بالقرب منك. اختر محافظة لاستكشاف الملاعب الاحترافية ومراكز كرة القدم المحلية في جميع أنحاء مصر.", // Description
        
        // ========================================
        // المحافظات (Governorates)
        // ========================================
        "browse.selectGovernorate": "اختر المحافظة", // Select Governorate
        "browse.step1": "الخطوة 1", // Step 1
        "browse.activeSelection": "الاختيار النشط", // Active Selection
        "browse.cairo": "القاهرة", // Cairo
        "browse.alexandria": "الإسكندرية", // Alexandria
        "browse.giza": "الجيزة", // Giza
        "browse.redSea": "البحر الأحمر", // Red Sea
        
        // ========================================
        // المناطق (Districts)
        // ========================================
        "browse.districtsIn": "المناطق في", // Districts in
        "browse.step2": "الخطوة 2", // Step 2
        "browse.sortByPopularity": "ترتيب حسب الشعبية", // Sort by Popularity
        "browse.nasrCity": "مدينة نصر", // Nasr City
        "browse.maadi": "المعادي", // Maadi
        "browse.sheikhZayed": "الشيخ زايد", // Sheikh Zayed
        "browse.sixthOctober": "السادس من أكتوبر", // 6th of October
        "browse.newCairo": "القاهرة الجديدة", // New Cairo
        "browse.heliopolis": "هليوبوليس", // Heliopolis
        "browse.zamalek": "الزمالك", // Zamalek
        
        // ========================================
        // بطاقات الملاعب (Pitch Cards)
        // ========================================
        "browse.availablePitchesIn": "الملاعب المتاحة في", // Available Pitches in
        "browse.proGrade": "احترافي", // Pro Grade
        "browse.popular": "شائع", // Popular
        "browse.new": "جديد", // New
        "browse.viewDetails": "عرض التفاصيل", // View Details
        "browse.loadMorePitches": "تحميل المزيد من الملاعب", // Load More Pitches
        "browse.searchPitches": "ابحث عن الملاعب...", // Search pitches...
        
        // ========================================
        // أسماء الملاعب والتفاصيل
        // ========================================
        "browse.stadium5Arena": "ملعب الاستاد 5", // Stadium 5 Arena
        "browse.eliteTurfClub": "نادي العشب الفاخر", // Elite Turf Club
        "browse.goalPointArena": "نقطة الهدف", // Goal Point Arena
        "browse.hrLabel": "/ساعة", // /hr
        
        // ========================================
        // أنواع الملاعب
        // ========================================
        "professional": "احترافي", // Pro Grade
        "popular": "شائع", // Popular
        "new": "جديد", // New
        
        // ========================================
        // التذييل (Footer)
        // ========================================
        "footer.copyright": "© 2024 كيك زون. الملعب النيون.", // Copy right
        "footer.privacyPolicy": "سياسة الخصوصية", // Privacy Policy
        "footer.termsOfService": "شروط الخدمة", // Terms of Service
        "footer.partnerWithUs": "اسأل عن الشراكة", // Partner with Us
        "footer.support": "الدعم" // Support
    }
};

/**
 * ========================================
 * نظام إدارة اللغات
 * ========================================
 * لماذا هذا الجزء موجود:
 * - تتبع اللغة الحالية المختارة من المستخدم
 * - حفظ اختيار اللغة في localStorage حتى لا ينسى
 * - تطبيق الترجمة الصحيحة على كل العناصر
 */

// الحصول على اللغة المحفوظة من قبل أم استخدام الإنجليزية كافتراضية
let currentLanguage = localStorage.getItem('language') || 'en';

/**
 * دالة تبديل اللغة - لماذا موجودة:
 * - عند ضغط المستخدم على زر تبديل اللغة
 * - التبديل بين الإنجليزية والعربية
 * - حفظ الاختيار الجديد في localStorage
 * - استدعاء دالة تطبيق الترجمة الجديدة
 */
function toggleLanguage() {
    // إذا كانت الحالية إنجليزية: تغيير لعربية
    // وإذا كانت عربية: تغيير لإنجليزية
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    
    // حفظ اللغة الجديدة حتى تبقى عند العودة للصفحة
    localStorage.setItem('language', currentLanguage);
    
    // تطبيق الترجمة الجديدة على كل الصفحة
    applyLanguage();
}



/**
 * دالة تطبيق الترجمة - لماذا موجودة:
 * - تطبيق اللغة الجديدة على كل الصفحة
 * - تغيير اتجاه الصفحة (RTL للعربية، LTR للإنجليزية)
 * - تحديث جميع النصوص في الصفحة
 * - تحديث عرض اللغة الحالية
 */
function applyLanguage() {
    /**
     * تعيين اتجاه الصفحة والخصائص اللغوية
     * لماذا موجود: دعم اللغات التي تقرأ من اليمين (RTL) مثل العربية
     */
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    document.body.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    
    // إضافة فئة اللغة للـ body لتطبيق أنماط خاصة بكل لغة
    document.body.classList.remove('lang-en', 'lang-ar');
    document.body.classList.add(`lang-${currentLanguage}`);

    /**
     * تحديث جميع العناصر التي تحتوي على نصوص مترجمة
     * لماذا موجود: عرض النصوص الصحيحة حسب اللغة المختارة
     */
    document.querySelectorAll('[data-i18n]').forEach(element => {
        // الحصول على مفتاح الترجمة من خاصية data-i18n
        const key = element.getAttribute('data-i18n');
        
        // الحصول على النص المترجم أو المفتاح إذا لم توجد ترجمة
        const text = translations[currentLanguage][key] || key;
        
        /**
         * التعامل مع أنواع مختلفة من العناصر
         * لماذا موجود: كل نوع عنصر يحتاج معاملة مختلفة
         */
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // للحقول: تحديث النص الحجز (Placeholder)
            element.placeholder = text;
        } else if (element.children.length > 0 && element.querySelector('[class*="material"], i, [class*="icon"]')) {
            // للعناصر التي تحتوي على أيقونات: تحديث النص فقط
            const textNode = element.childNodes[0];
            if (textNode && textNode.nodeType === Node.TEXT_NODE) {
                textNode.textContent = text;
            }
        } else {
            // للعناصر العادية: تحديث كل النص
            element.textContent = text;
        }
    });

    /**
     * تحديث عرض اللغة الحالية (EN/AR)
     * لماذا موجود: إظهار اللغة الحالية للمستخدم في الزر
     */
    const currentLangSpan = document.getElementById('current-lang');
    if (currentLangSpan) {
        // عرض اختصار اللغة (EN أو AR)
        currentLangSpan.textContent = currentLanguage.toUpperCase();
    }
}

/**
 * ========================================
 * دالات الدعم والتوافقية
 * ========================================
 * لماذا هذه الأجزاء موجودة:
 * - توفير طرق سهلة للوصول لدوال الترجمة
 * - دعم الحواسيب والملفات القديمة
 * - توفير دالة global للترجمة من أي مكان في الكود
 */

/**
 * كائن translation للتوافقية مع الملفات القديمة
 * لماذا موجود: حتى لا تتعطل الملفات القديمة إذا تم تغيير الكود
 */
const translation = {
    currentLang: currentLanguage, // اللغة الحالية
    translate: function(key) {
        // دالة للترجمة من أي مكان
        return translations[currentLanguage][key] || key;
    },
    toggleLanguage: toggleLanguage // دالة تبديل اللغة
};

/**
 * دالة عامة للترجمة - لماذا موجودة:
 * - سهولة استخدام الترجمة من أي مكان في الكود بدلاً من كتابة المفتاح الطويل
 * - توفير دالة global يمكن استدعاؤها من script.js و HTML
 */
function translate(key) {
    return translations[currentLanguage][key] || key;
}

/**
 * تابع قاعدة الصفحة - لماذا موجود:
 * - انتظار تحميل الصفحة كاملاً
 * - تطبيق الترجمة الافتراضية عند فتح الصفحة
 * - حتى يرى المستخدم الصفحة بلغته المفضلة من البداية
 */
document.addEventListener('DOMContentLoaded', function() {
    // تطبيق الترجمة المحفوظة من قبل
    applyLanguage();
});
