document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePassword');
    const confirmInput = document.getElementById('confirm');
    const toggleConfirmIcon = document.getElementById('toggleConfirm');

    // Toggle password visibility
    if (togglePasswordIcon) {
        togglePasswordIcon.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
        });
    }

    // Toggle confirm password visibility
    if (toggleConfirmIcon) {
        toggleConfirmIcon.addEventListener('click', () => {
            const type = confirmInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmInput.setAttribute('type', type);
        });
    }

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Check if passwords match
            if (passwordInput.value !== confirmInput.value) {
                alert('Passwords do not match!');
                return;
            }
            
            // Here you would typically submit the form
            console.log('Signup form submitted');
        });
    }
});
