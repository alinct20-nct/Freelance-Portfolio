document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePassword');

    togglePasswordIcon.addEventListener('click', () => {
        // تغيير نوع الإدخال بينكلمة مرورونص
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // تغيير أيقونة العين إذا أردت (هنا نبقيها كما هي لمطابقة الصورة تماماً)
    });
});
