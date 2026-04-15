/**
 * ========================================
 * USER AUTHENTICATION SYSTEM
 * ========================================
 * لماذا هذا الجزء موجود:
 * - التحقق من أن المستخدم مسجّل دخول قبل السماح برؤية صفحة تصفح الملاعب
 * - حماية الصفحة من الوصول غير المصرح به
 * - إعادة توجيه إلى صفحة تسجيل الدخول إذا لم يكن المستخدم مسجلاً
 */
class BrowseAuth {
    constructor() {
        // متغير خزن بيانات المستخدم الحالي
        this.currentUser = null;
        // تشغيل التحقق من المصادقة عند إنشاء الكلاس
        this.init();
    }

    /**
     * دالة التهيئة - لماذا موجودة:
     * التحقق من وجود مستخدم مسجل في localStorage
     * إذا لم يوجد: إعادة التوجيه لصفحة تسجيل الدخول
     * إذا وجد: تحميل بيانات المستخدم وتحديث الواجهة
     */
    init() {
        // جلب بيانات المستخدم المحفوظة من localStorage (التخزين المحلي للمتصفح)
        const savedUser = localStorage.getItem('kickzone_user');
        
        // إذا لم يوجد مستخدم: منع الوصول وإعادة التوجيه لتسجيل دخول
        if (!savedUser) {
            // إعادة التوجيه لصفحة تسجيل الدخول مباشرة
            window.location.href = '../login/index.html';
            return;
        }
        
        // إذا كان هناك مستخدم: تحويل البيانات من نص JSON إلى كائن JavaScript
        this.currentUser = JSON.parse(savedUser);
        
        // تحديث الواجهة بإضافة معلومات المستخدم
        this.updateUI();
        
        // إعداد زر تسجيل الخروج
        this.setupLogout();
    }


    /**
     * دالة تحديث الواجهة - لماذا موجودة:
     * عرض اسم المستخدم في شريط التنقل
     * إضافة زر تسجيل الخروج بجانب اسم المستخدم
     * تخصيص الواجهة للمستخدم الحالي
     */
    updateUI() {
        // البحث عن زر الملف الشخصي في التنقل
        const personButton = document.querySelector('button .material-symbols-outlined:contains("person")');
        
        // إذا وجد الزر: إضافة معلومات المستخدم بداخله
        if (personButton) {
            const userContainer = personButton.parentElement;
            userContainer.innerHTML = `
                <div class="user-info" style="display: flex; align-items: center; gap: 8px;">
                    <!-- عرض اسم المستخدم المسجل دخول -->
                    <span class="user-name" style="color: white; font-size: 14px;">${this.currentUser.name}</span>
                    <!-- زر تسجيل الخروج السريع -->
                    <button class="logout-btn" style="background: none; border: none; color: rgba(255,255,255,0.7); cursor: pointer; padding: 8px;">
                        <span class="material-symbols-outlined">logout</span>
                    </button>
                </div>
            `;
        }
        
        // طريقة بديلة: إضافة معلومات المستخدم إذا لم يكن موجود
        const navActions = document.querySelector('.flex.items-center.gap-4');
        if (navActions && !navActions.querySelector('.user-info')) {
            const userInfoDiv = document.createElement('div');
            userInfoDiv.className = 'user-info';
            // تطبيق أنماط الظهور والتخطيط
            userInfoDiv.style.cssText = 'display: flex; align-items: center; gap: 8px; color: white; font-size: 14px;';
            userInfoDiv.innerHTML = `
                <!-- عرض اسم المستخدم -->
                <span>${this.currentUser.name}</span>
                <!-- زر تسجيل الخروج -->
                <button class="logout-btn" style="background: none; border: none; color: rgba(255,255,255,0.7); cursor: pointer; padding: 8px;">
                    <span class="material-symbols-outlined">logout</span>
                </button>
            `;
            // إضافة هذا الجزء للتنقل
            navActions.appendChild(userInfoDiv);
        }
    }

    /**
     * دالة إعداد زر تسجيل الخروج - لماذا موجودة:
     * ربط زر تسجيل الخروج بحدث الضغط عليه
     * تنفيذ عملية تسجيل الخروج عند الضغط على الزر
     */
    setupLogout() {
        // البحث عن زر تسجيل الخروج
        const logoutBtn = document.querySelector('.logout-btn');
        // إضافة حدث الضغط على الزر
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
    }

    /**
     * دالة تسجيل الخروج - لماذا موجودة:
     * حذف بيانات المستخدم من الجهاز
     * عرض رسالة تأكيد تسجيل الخروج
     * إعادة التوجيه لصفحة تسجيل الدخول
     */
    logout() {
        // حذف بيانات المستخدم من localStorage
        localStorage.removeItem('kickzone_user');
        // عرض رسالة نجاح تسجيل الخروج
        this.showNotification('Logged out successfully', 'info');
        // الانتظار ثانية واحدة ثم إعادة التوجيه
        setTimeout(() => {
            window.location.href = '../login/index.html';
        }, 1000);
    }

    /**
     * دالة عرض الإشعارات - لماذا موجودة:
     * إظهار رسائل للمستخدم (نجاح، خطأ، معلومات)
     * إخفاء الرسالة تلقائياً بعد 3 ثواني
     * تحسين تجربة المستخدم بالتواصل البصري
     */
    showNotification(message, type = 'info') {
        // إنشاء عنصر جديد للإشعار
        const notification = document.createElement('div');
        // إضافة الأنماط المطبقة (الفئة)
        notification.className = `notification notification-${type}`;
        // إضافة النص المراد عرضه
        notification.textContent = message;
        
        // إضافة الإشعار للصفحة حتى يظهر
        document.body.appendChild(notification);
        
        // حذف الإشعار تلقائياً بعد 3 ثواني
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}



/**
 * ========================================
 * بيانات الملاعب المتقدمة (PITCH DATABASE)
 * ========================================
 * لماذا هذه البيانات موجودة:
 * - تخزين معلومات جميع الملاعب في كل محافظة ومدينة
 * - عرض الملاعب بناءً على اختيار المستخدم للمحافظة والمدينة
 * - سهولة إضافة أو تعديل الملاعب بدون تغيير الواجهة
 * - تنظيم البيانات بشكل هرمي (محافظة > مدينة > ملاعب)
 */
const pitchData = {
    // محافظة القاهرة
    cairo: {
        name: "القاهرة", // اسم المحافظة بالعربية
        cities: {
            // مدينة نصر
            nasr: {
                name: "مدينة نصر",
                // قائمة الملاعب في هذه المدينة
                pitches: [
                    {
                        id: 1, // معرّف فريد لكل ملعب
                        name: "ملعب الاستاد 5", // اسم الملعب
                        price: "450 جنيه/ساعة", // السعر بالساعة
                        rating: 4.9, // التقييم من 5
                        type: "احترافي", // نوع الملعب (احترافي، شائع، جديد)
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm5hn9_9mEHyL476-W148veEtvyF-1wUQWmGA8fm0wVfbR5KTYkX4gX06RlwQc1ks9wsonpMUMqoxs5PIe_tia6dZUcdonH5oaMe_ziCymO2Kd7sHhvuQcQZ1Pk6qwRKfQlWUjv-IFxqqWG5va2MSCJfNMwOLPDv3bm_ggMHNbmDF9hJKmmvvSsTVOhQwHqAtHZ0zap-6R4Wvty7EflA95snl8B81h2TMtY40QXey4HRA-h6a7ET6n1x30lqPQraKjvmdQ87gdCnwC"
                    },
                    {
                        id: 2,
                        name: "نادي العشب الفاخر",
                        price: "380 جنيه/ساعة",
                        rating: 4.7,
                        type: "شائع",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP7eBfA6kIC7-BO-I21EB6sQcgMlFwoRwAVLCYxNx-viy8R8sC5Pqm-t62GxafewSi_jMz1NEJNVOyeda-402nFURtto5BnC0HWhkiLjCVlX1ltAbfOS9rBOUWxvWfiP0qGT65U4CaaBKUGEH2k1xrBTW4pfiQjAqQ0M0RLwlBvXIAGWnv0ieF6eiKt31DqiQAeXZjUdaUTvu6RW49O55dS55JW27prTTMi7xvH3si9BrjMixXFyWSoISXLgxkJk1PXUlK997TLcLW"
                    },
                    {
                        id: 3,
                        name: "نقطة الهدف",
                        price: "320 جنيه/ساعة",
                        rating: 4.5,
                        type: "جديد",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_Xz6wuH_k6MVacY0NpGqWJFapsTiFyypG7AolmlDg2uKJIGR5L3aITOcgr0zLdF3eng6kyl0kJ9Z6hG-L_kZcKPw53zSLfQpLuhzMd3AD2Fw9XthAuZvOnaE8fox7tBO1lDhJcodZA5XFBhYqMulNyALvG4KSSTpwXUzdR5XhWkS88Npg7EfuM-CAmcMsVSqrNFddNdgLj3d8pFrklp8F8Eh3h-rWnCKSHATh3AkjlyjNshVvkz-GqdP6m_5Str_j-LTHCuT9xurl"
                    },
                    {
                        id: 4,
                        name: "ملعب الأبطال",
                        price: "400 جنيه/ساعة",
                        rating: 4.8,
                        type: "احترافي",
                        image: "https://images.unsplash.com/photo-1551698618-1d0f0c2c2b1b?w=400&h=250&fit=crop"
                    }
                ]
            },
            // مدينة المعادي
            maadi: {
                name: "المعادي",
                pitches: [
                    {
                        id: 5,
                        name: "ملعب النيل",
                        price: "350 جنيه/ساعة",
                        rating: 4.6,
                        type: "شائع",
                        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=250&fit=crop"
                    },
                    {
                        id: 6,
                        name: "نادي المعادي",
                        price: "300 جنيه/ساعة",
                        rating: 4.4,
                        type: "جديد",
                        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
                    }
                ]
            },
            // القاهرة الجديدة
            newcairo: {
                name: "القاهرة الجديدة",
                pitches: [
                    {
                        id: 7,
                        name: "ملعب المستقبل",
                        price: "420 جنيه/ساعة",
                        rating: 4.7,
                        type: "احترافي",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
                    },
                    {
                        id: 8,
                        name: "نادي التكنولوجيا",
                        price: "380 جنيه/ساعة",
                        rating: 4.5,
                        type: "شائع",
                        image: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=400&h=250&fit=crop"
                    }
                ]
            }
        }
    },
    // محافظة الجيزة
    giza: {
        name: "الجيزة",
        cities: {
            // الشيخ زايد
            sheikh: {
                name: "الشيخ زايد",
                pitches: [
                    {
                        id: 9,
                        name: "ملعب الذهبي",
                        price: "500 جنيه/ساعة",
                        rating: 4.9,
                        type: "احترافي",
                        image: "https://images.unsplash.com/photo-1554089165-5f7202111ca2d?w=400&h=250&fit=crop"
                    },
                    {
                        id: 10,
                        name: "ستاد الملوك",
                        price: "450 جنيه/ساعة",
                        rating: 4.8,
                        type: "شائع",
                        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=250&fit=crop"
                    }
                ]
            },
            // الدقي
            dokki: {
                name: "الدقي",
                pitches: [
                    {
                        id: 11,
                        name: "ملعب الأهرامات",
                        price: "320 جنيه/ساعة",
                        rating: 4.5,
                        type: "جديد",
                        image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=400&h=250&fit=crop"
                    },
                    {
                        id: 12,
                        name: "ملعب النيل",
                        price: "280 جنيه/ساعة",
                        rating: 4.3,
                        type: "شائع",
                        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop"
                    }
                ]
            }
        }
    },
    // محافظة الإسكندرية
    alexandria: {
        name: "الإسكندرية",
        cities: {
            // سموحة
            smouha: {
                name: "سموحة",
                pitches: [
                    {
                        id: 13,
                        name: "ملعب البحر",
                        price: "250 جنيه/ساعة",
                        rating: 4.6,
                        type: "شائع",
                        image: "https://images.unsplash.com/photo-1593115057324-376ca6e4f317?w=400&h=250&fit=crop"
                    },
                    {
                        id: 14,
                        name: "ستاد الشاطئ",
                        price: "220 جنيه/ساعة",
                        rating: 4.4,
                        type: "جديد",
                        image: "https://images.unsplash.com/photo-1551698618-1d0f0c2c2b1b?w=400&h=250&fit=crop"
                    }
                ]
            },
            // ميامي
            miami: {
                name: "ميامي",
                pitches: [
                    {
                        id: 15,
                        name: "ملعب الكورنيش",
                        price: "200 جنيه/ساعة",
                        rating: 4.3,
                        type: "شائع",
                        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
                    },
                    {
                        id: 16,
                        name: "ملعب الأحلام",
                        price: "230 جنيه/ساعة",
                        rating: 4.5,
                        type: "جديد",
                        image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=250&fit=crop"
                    }
                ]
            }
        }
    }
};



/**
 * ========================================
 * إعداد العناصر والحالات (SETUP & STATE)
 * ========================================
 * لماذا هذه الأجزاء موجودة:
 * - تخزين مراجع للعناصر المهمة في الصفحة لاستخدامها لاحقاً
 * - تتبع حالة التطبيق (ما اختاره المستخدم حالياً)
 * - تسهيل الوصول للعناصر بدلاً من البحث عنها مراراً
 */

// تهيئة المصادقة عند تحميل الصفحة
const browseAuth = new BrowseAuth();

// الحصول على مراجع العناصر الرئيسية في الصفحة
const nav = document.querySelector('.fixed'); // شريط التنقل
const searchInput = document.querySelector('input[placeholder="Search pitches..."]'); // حقل البحث
const governorateCards = document.querySelectorAll('.group.cursor-pointer'); // بطاقات المحافظات
const districtButtons = document.querySelectorAll('.px-6.py-2.rounded-full'); // أزرار المناطق
const pitchCards = document.querySelectorAll('.glass-card.rounded-xl.overflow-hidden.group'); // بطاقات الملاعب
const loadMoreBtn = document.querySelector('.mt-12.text-center button'); // زر "تحميل المزيد"

/**
 * متغيرات تتبع حالة التطبيق
 * لماذا موجودة: لمعرفة ما اختاره المستخدم حالياً
 */
let selectedGovernorate = null; // المحافظة المختارة حالياً
let selectedDistrict = null; // المنطقة/المدينة المختارة حالياً
let currentPitches = []; // الملاعب المعروضة حالياً



/**
 * تهيئة الصفحة - لماذا موجودة:
 * - انتظار تحميل جميع عناصر الصفحة أولاً
 * - إعداد جميع الأحداث والمستمعين (Event Listeners)
 * - تشغيل الرسوميات والتأثيرات
 * - تحديد المحافظة الافتراضية (القاهرة)
 */
document.addEventListener('DOMContentLoaded', function() {
    // البحث والربط بين أحداث المستخدم والدوال
    setupEventListeners();
    
    // تشغيل التأثيرات البصرية
    initializeAnimations();
    
    // إعداد وظيفة البحث عن الملاعب
    setupSearch();
    
    /**
     * اختيار القاهرة كمحافظة افتراضية - لماذا:
     * حتى يرى المستخدم ملاعب فوراً عند فتح الصفحة
     * لا ينتظر حتى يختار محافظة بنفسه
     */
    setTimeout(() => {
        const cairoCard = document.querySelector('.group.cursor-pointer');
        if (cairoCard) {
            handleGovernorateSelect({ currentTarget: cairoCard });
        }
    }, 100);
});

/**
 * ========================================
 * ربط الأحداث (EVENT LISTENERS)
 * ========================================
 * لماذا هذا الجزء موجود:
 * - تحويل عناصر الصفحة إلى عناصر تفاعلية
 * - الاستجابة لفعل المستخدم (ضغط، كتابة، إلخ)
 * - تنفيذ الدوال المطلوبة عند كل حدث
 */
function setupEventListeners() {
    // ربط أحداث بطاقات المحافظات (عند الضغط على محافظة)
    document.querySelectorAll('.group.cursor-pointer').forEach(card => {
        card.addEventListener('click', handleGovernorateSelect);
    });
    
    // ربط أحداث أزرار المناطق (عند الضغط على منطقة/مدينة)
    document.querySelectorAll('.px-6.py-2.rounded-full').forEach(button => {
        button.addEventListener('click', handleDistrictSelect);
    });
    
    // ربط أحداث بطاقات الملاعب (عند الضغط على ملعب)
    document.querySelectorAll('.glass-card.rounded-xl.overflow-hidden.group').forEach(card => {
        card.addEventListener('click', handlePitchClick);
    });
    
    // ربط حدث زر "تحميل المزيد"
    const loadMoreBtn = document.querySelector('.mt-12.text-center button');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePitches);
    }
    
    // ربط حدث حقل البحث (عند كتابة نص)
    const searchInput = document.querySelector('input[placeholder="Search pitches..."]');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // ربط أحداث الروابط الداخلية (التمرير السلس)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}



/**
 * ========================================
 * معالجة اختيار المحافظة
 * ========================================
 * لماذا هذا الجزء موجود:
 * - تحديث التصميم لإظهار المحافظة المختارة
 * - تحميل المناطق التابعة للمحافظة المختارة
 * - تحديث الملاعب المعروضة
 */
function handleGovernorateSelect(e) {
    // الحصول على العنصر الذي تم الضغط عليه
    const card = e.currentTarget;
    
    /**
     * إزالة التحديد من جميع المحافظات الأخرى
     * لماذا: حتى يظهر أن محافظة واحدة فقط مختارة
     */
    document.querySelectorAll('.group.cursor-pointer').forEach(c => {
        // إزالة أنماط التحديد
        c.classList.remove('border-2', 'border-primary', 'shadow-[0_0_20px_rgba(29,185,84,0.1)]');
        // إعادة أنماط غير مختارة
        c.classList.add('glass-card', 'hover:border-primary/50', 'transition-all');
        
        // إخفاء الأيقونة التحقق ✓
        const checkIcon = c.querySelector('.absolute.top-4.right-4');
        if (checkIcon) {
            checkIcon.style.display = 'none';
        }
        
        // إخفاء تسمية "اختيار نشط"
        const activeLabel = c.querySelector('.text-xs.font-bold.text-primary');
        if (activeLabel) {
            activeLabel.style.display = 'none';
        }
    });
    
    /**
     * إضافة التحديد إلى المحافظة المختارة
     * لماذا: إظهار المستخدم أن هذه المحافظة مختارة
     */
    card.classList.remove('glass-card', 'hover:border-primary/50', 'transition-all');
    card.classList.add('border-2', 'border-primary', 'shadow-[0_0_20px_rgba(29,185,84,0.1)]');
    
    // عرض أيقونة التحقق
    const checkIcon = card.querySelector('.absolute.top-4.right-4');
    if (checkIcon) {
        checkIcon.style.display = 'flex';
    }
    
    // عرض تسمية المحافظة المختارة
    const activeLabel = card.querySelector('.text-xs.font-bold.text-primary');
    if (activeLabel) {
        activeLabel.style.display = 'block';
    }
    
    /**
     * الحصول على بيانات المحافظة من القائمة
     * لماذا: تحميل المناطق والملاعب التابعة للمحافظة الجديدة
     */
    const governorateName = card.querySelector('h3').textContent; // اسم المحافظة من العنصر
    const governorateKey = getGovernorateKey(governorateName); // التحويل للمفتاح المستخدم
    const governorateData = pitchData[governorateKey]; // الحصول على البيانات
    
    // إذا وجدنا بيانات للمحافظة: تحديث المناطق والملاعب
    if (governorateData) {
        selectedGovernorate = governorateKey; // حفظ اختيار المحافظة
        updateDistricts(governorateData); // تحديث قائمة المناطق
    }
    
    /**
     * تشغيل تأثير بصري - لماذا:
     * إضافة حركة سلسة لتعزيز تفاعل المستخدم
     */
    animateSelection(card);
}

/**
 * دالة مساعدة: تحويل اسم المحافظة لمفتاح في قاموس البيانات
 * لماذا موجودة: ربط اسم المحافظة المعروض بمفتاح البيانات الصحيح
 */
function getGovernorateKey(name) {
    // قاموس التحويل من الأسماء للمفاتيح
    const keys = {
        'القاهرة': 'cairo',
        'الإسكندرية': 'alexandria', 
        'الجيزة': 'giza',
        'البحر الأحمر': 'redsea'
    };
    // إرجاع المفتاح أو القاهرة كقيمة افتراضية
    return keys[name] || 'cairo';
}



/**
 * ========================================
 * تحديث قائمة المناطق
 * ========================================
 * لماذا هذا الجزء موجود:
 * - عرض المناطق التابعة للمحافظة المختارة فقط
 * - حذف المناطق القديمة من المحافظة السابقة
 * - تحديد أول منطقة كمختارة افتراضياً
 */
function updateDistricts(governorateData) {
    // الحصول على حاوية أزرار المناطق
    const districtContainer = document.querySelector('.flex.flex-wrap.gap-3');
    
    // مسح جميع الأزرار القديمة
    districtContainer.innerHTML = '';
    
    /**
     * إنشاء زر جديد لكل منطقة/مدينة
     * لماذا: عرض فقط المناطق الموجودة في المحافظة المختارة
     */
    Object.entries(governorateData.cities).forEach(([cityKey, cityData], index) => {
        // إنشاء زر جديد
        const button = document.createElement('button');
        
        // تطبيق الأنماط (الشكل والمظهر)
        button.className = 'px-6 py-2 rounded-full glass-card hover:bg-white/10 text-white font-medium text-sm transition-all active:scale-95';
        
        // إضافة نص المدينة
        button.textContent = cityData.name;
        
        // حفظ مفتاح المدينة لاستخدامه لاحقاً
        button.setAttribute('data-city', cityKey);
        
        /**
         * جعل أول منطقة مختارة افتراضياً
         * لماذا: حتى يرى المستخدم ملاعب فوراً بعد اختيار محافظة
         */
        if (index === 0) {
            // تطبيق أنماط المختار
            button.classList.remove('glass-card', 'text-white');
            button.classList.add('bg-primary', 'text-on-primary');
            
            // حفظ أول منطقة كمختارة
            selectedDistrict = cityKey;
            
            // تحديث الملاعب المعروضة
            updatePitches(cityKey);
        }
        
        // ربط حدث الضغط على الزر
        button.addEventListener('click', handleDistrictSelect);
        
        // إضافة الزر لحاوية الأزرار
        districtContainer.appendChild(button);
    });
    
    /**
     * تحديث العنوان - لماذا:
     * إظهار اسم المحافظة المختارة بجانب كلمة "المناطق في"
     */
    const districtTitle = document.querySelector('h2.text-xl.font-bold.text-white');
    if (districtTitle) {
        districtTitle.textContent = `${translation.translate('districtsIn')} ${governorateData.name}`;
    }
}

/**
 * ========================================
 * معالجة اختيار المنطقة/المدينة
 * ========================================
 * لماذا هذا الجزء موجود:
 * - تحديث تصميم الزر المختار
 * - تحميل الملاعب الخاصة بالمنطقة المختارة
 */
function handleDistrictSelect(e) {
    // الحصول على الزر الذي تم الضغط عليه
    const button = e.currentTarget;
    
    // اسم المدينة/المنطقة المعروضة
    const cityName = button.textContent;
    
    /**
     * إزالة التحديد من جميع المناطق الأخرى
     * لماذا: حتى تظهر منطقة واحدة فقط كمختارة
     */
    document.querySelectorAll('.px-6.py-2.rounded-full').forEach(btn => {
        // إزالة أنماط المختار
        btn.classList.remove('bg-primary', 'text-on-primary', 'font-bold', 'shadow-[0_0_15px_rgba(29,185,84,0.3)]');
        // إعادة أنماط غير مختار
        btn.classList.add('glass-card', 'hover:bg-white/10', 'text-white', 'font-medium', 'transition-all', 'active:scale-95');
    });
    
    /**
     * إضافة أنماط التحديد للزر المختار
     * لماذا: إظهار المستخدم أن هذه المنطقة مختارة
     */
    button.classList.remove('glass-card', 'hover:bg-white/10', 'text-white', 'font-medium');
    button.classList.add('bg-primary', 'text-on-primary', 'font-bold', 'shadow-[0_0_15px_rgba(29,185,84,0.3)]');
    
    /**
     * تحميل الملاعب الخاصة بالمنطقة الجديدة
     * لماذا: عرض الملاعب المتاحة في المنطقة المختارة
     */
    const cityKey = getCityKey(cityName); // تحويل الاسم لمفتاح
    selectedDistrict = cityKey; // حفظ الاختيار
    updatePitches(cityKey); // تحديث الملاعب
    
    // تشغيل تأثير بصري
    animateSelection(button);
}

/**
 * دالة مساعدة: تحويل اسم المدينة لمفتاح في قاموس البيانات
 * لماذا موجودة: ربط الاسم المعروض بمفتاح البيانات الصحيح
 */
function getCityKey(name) {
    const keys = {
        'مدينة نصر': 'nasr',
        'المعادي': 'maadi',
        'الشيخ زايد': 'sheikh',
        '6th of October': 'october',
        'New Cairo': 'newcairo',
        'Heliopolis': 'heliopolis',
        'Zamalek': 'zamalek'
    };
    return keys[name] || 'nasr';
}



/**
 * ========================================
 * تحديث الملاعب المعروضة
 * ========================================
 * لماذا هذا الجزء موجود:
 * - جلب الملاعب من قاعدة البيانات (pitchData)
 * - تحديث متغير currentPitches الذي يحتوي على الملاعب الحالية
 * - تشغيل دالة العرض لإظهار الملاعب الجديدة
 */
function updatePitches(cityKey) {
    /**
     * التحقق من صحة الاختيار
     * لماذا: التأكد من وجود المحافظة والمدينة في البيانات
     */
    if (!selectedGovernorate || !pitchData[selectedGovernorate]?.cities[cityKey]) {
        currentPitches = []; // إذا لم توجد: ملاعب فارغة
        renderPitches(); // عرض الصفحة (بدون ملاعب)
        return;
    }
    
    /**
     * جلب الملاعب الخاصة بالمدينة المختارة
     * لماذا: الحصول على قائمة الملاعب المطلوبة
     */
    const cityData = pitchData[selectedGovernorate].cities[cityKey];
    currentPitches = cityData.pitches; // حفظ الملاعب في متغير عام
    
    // عرض الملاعب الجديدة بتأثير بصري
    renderPitches();
}

/**
 * ========================================
 * عرض الملاعب على الصفحة
 * ========================================
 * لماذا هذا الجزء موجود:
 * - حذف الملاعب القديمة من الشاشة
 * - إنشاء بطاقات جديدة لكل ملعب
 * - تحديث عنوان الملاعب بعدد الملاعب المتاحة
 */
function renderPitches() {
    // الحصول على الحاوية التي سيتم عرض الملاعب فيها
    const resultsSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
    
    // الحصول على العنصر الذي يحتوي على العنوان (عدد الملاعب)
    const titleElement = document.querySelector('.text-2xl.font-black.text-white.uppercase.tracking-tight');
    
    // التحقق من وجود العناصر
    if (!resultsSection || !titleElement) return;
    
    /**
     * تحديث العنوان - لماذا:
     * عرض عدد الملاعب المتاحة في المنطقة المختارة
     */
    if (selectedDistrict && selectedGovernorate) {
        // الحصول على اسم المحافظة والمدينة المختارة
        const governorateData = pitchData[selectedGovernorate];
        const cityData = governorateData.cities[selectedDistrict];
        
        // تحديث العنوان مع العدد
        titleElement.innerHTML = `${translation.translate('availablePitchesIn')} ${cityData.name} <span class="text-primary ml-2">(${currentPitches.length})</span>`;
    } else {
        // إذا لم يتم اختيار: عرض العنوان الافتراضي
        titleElement.innerHTML = translation.translate('availablePitchesIn');
    }
    
    /**
     * مسح الملاعب القديمة من الشاشة
     * لماذا: حتى لا نرى ملاعب من المناطق السابقة
     */
    resultsSection.innerHTML = '';
    
    /**
     * إنشاء وعرض بطاقات جديدة لكل ملعب
     * لماذا: تحويل بيانات الملاعب إلى عناصر مرئية
     */
    currentPitches.forEach((pitch, index) => {
        // إنشاء بطاقة لكل ملعب
        const pitchCard = createPitchCard(pitch, index);
        // إضافة البطاقة للحاوية
        resultsSection.appendChild(pitchCard);
    });
    
    /**
     * تشغيل التأثيرات البصرية على الملاعب الجديدة
     * لماذا: إضافة حركة سلسة عند ظهور الملاعب الجديدة
     */
    animatePitches();
}

// Create Pitch Card
function createPitchCard(pitch, index) {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300';
    card.style.animationDelay = `${index * 100}ms`;
    
    card.innerHTML = `
        <div class="relative aspect-video">
            <img class="w-full h-full object-cover" src="${pitch.image}" alt="${pitch.name}">
            <div class="absolute top-4 left-4">
                <span class="bg-primary/20 backdrop-blur-md text-primary px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest border border-primary/30" data-translate="${pitch.type}">${translation.translate(pitch.type)}</span>
            </div>
            <div class="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-lg">
                <span class="text-primary font-bold">${pitch.price}</span>
            </div>
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">${pitch.name}</h3>
                <div class="flex items-center text-primary">
                    <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1">star</span>
                    <span class="text-sm font-bold ml-1">${pitch.rating}</span>
                </div>
            </div>
            <div class="flex items-center text-on-surface-variant text-sm mb-6">
                <span class="material-symbols-outlined text-base mr-1">location_on</span>
                ${selectedGovernorate && selectedDistrict ? pitchData[selectedGovernorate].cities[selectedDistrict].name : ''}
            </div>
            <div class="flex items-center gap-3">
                <button class="flex-1 bg-primary text-on-primary font-bold py-3 rounded-xl transition-all active:scale-95 shadow-[0_0_15px_rgba(29,185,84,0.2)]" onclick="bookPitch('${pitch.name}')" data-translate="viewDetails">${translation.translate('viewDetails')}</button>
                <button class="w-12 h-12 flex items-center justify-center glass-card rounded-xl hover:text-primary transition-colors" onclick="toggleFavorite(this)">
                    <span class="material-symbols-outlined">favorite</span>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Search Functionality
function setupSearch() {
    const searchInput = document.querySelector('input[placeholder="Search pitches..."]');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderPitches();
        return;
    }
    
    const filteredPitches = currentPitches.filter(pitch => 
        pitch.name.toLowerCase().includes(searchTerm) ||
        pitch.type.toLowerCase().includes(searchTerm)
    );
    
    renderFilteredPitches(filteredPitches);
}

function renderFilteredPitches(pitches) {
    const resultsSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3.gap-8');
    const titleElement = document.querySelector('.text-2xl.font-black.text-white.uppercase.tracking-tight');
    
    titleElement.innerHTML = `نتائج البحث: <span class="text-primary ml-2">${pitches.length}</span> ملعب`;
    
    resultsSection.innerHTML = '';
    
    if (pitches.length === 0) {
        resultsSection.innerHTML = `
            <div class="text-center py-12">
                <span class="material-symbols-outlined text-6xl text-white/40">search_off</span>
                <p class="text-white/60 mt-4">لم يتم العثور على ملاعب مطابقة</p>
            </div>
        `;
        return;
    }
    
    pitches.forEach((pitch, index) => {
        const pitchCard = createPitchCard(pitch, index);
        resultsSection.appendChild(pitchCard);
    });
    
    animatePitches();
}

// Load More Pitches
function loadMorePitches() {
    // Simulate loading more pitches
    const newPitches = [
        {
            name: 'ملعب إضافي 1',
            price: '280 جنيه/ساعة',
            rating: 4.3,
            type: 'جديد',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm5hn9_9mEHyL476-W148veEtvyF-1wUQWmGA8fm0wVfbR5KTYkX4gX06RlwQc1ks9wsonpMUMqoxs5PIe_tia6dZUcdonH5oaMe_ziCymO2Kd7sHhvuQcQZ1Pk6qwRKfQlWUjv-IFxqqWG5va2MSCJfNMwOLPDv3bm_ggMHNbmDF9hJKmmvvSsTVOhQwHqAtHZ0zap-6R4Wvty7EflA95snl8B81h2TMtY40QXey4HRA-h6a7ET6n1x30lqPQraKjvmdQ87gdCnwC'
        },
        {
            name: 'ملعب إضافي 2',
            price: '350 جنيه/ساعة',
            rating: 4.6,
            type: 'احترافي',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP7eBfA6kIC7-BO-I21EB6sQcgMlFwoRwAVLCYxNx-viy8R8sC5Pqm-t62GxafewSi_jMz1NEJNVOyeda-402nFURtto5BnC0HWhkiLjCVlX1ltAbfOS9rBOUWxvWfiP0qGT65U4CaaBKUGEH2k1xrBTW4pfiQjAqQ0M0RLwlBvXIAGWnv0ieF6eiKt31DqiQAeXZjUdaUTvu6RW49O55dS55JW27prTTMi7xvH3si9BrjMixXFyWSoISXLgxkJk1PXUlK997TLcLW'
        }
    ];
    
    currentPitches = [...currentPitches, ...newPitches];
    renderPitches();
    
    // Hide load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

// Booking Function
function bookPitch(pitchName) {
    showNotification(`تم اختيار ملعب: ${pitchName}`);
    // Here you would typically navigate to booking page or open modal
}

// Toggle Favorite
function toggleFavorite(button) {
    const icon = button.querySelector('.material-symbols-outlined');
    const isFavorite = icon.style.fontVariationSettings.includes('FILL 1');
    
    if (isFavorite) {
        icon.style.fontVariationSettings = "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24";
        showNotification('تم الإزالة من المفضلة');
    } else {
        icon.style.fontVariationSettings = "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24";
        showNotification('تم الإضافة للمفضلة');
    }
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-6 bg-primary text-on-primary px-4 py-2 rounded-lg shadow-lg z-50 animate-slide-in';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('animate-slide-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Smooth Scroll
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

// Animations
function initializeAnimations() {
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
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
        
        .animate-slide-in {
            animation: slideIn 0.3s ease-out;
        }
        
        .animate-slide-out {
            animation: slideOut 0.3s ease-in;
        }
        
        .animate-fade-in {
            animation: fadeInUp 0.6s ease-out backwards;
        }
    `;
    document.head.appendChild(style);
}

function animateSelection(element) {
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 150);
}

function animatePitches() {
    const cards = document.querySelectorAll('.glass-card.rounded-xl.overflow-hidden.group');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-fade-in');
        }, index * 100);
    });
}

// Initialize tooltips
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-background/90 text-white px-2 py-1 rounded text-xs z-50';
            tooltip.textContent = e.target.getAttribute('data-tooltip');
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.top = `${rect.top - 40}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - 50}px`;
            
            document.body.appendChild(tooltip);
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.absolute.bg-background\\/90.text-white.px-2.py-1.rounded.text-xs.z-50');
            if (tooltip) tooltip.remove();
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initializeTooltips();
});
