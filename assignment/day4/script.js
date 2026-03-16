document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    const fullnameError = document.getElementById('fullnameError');
    const emailError = document.getElementById('emailError');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    fullnameError.textContent = '';
    emailError.textContent = '';
    usernameError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';
    
    if (fullname.value.trim() === '') {
        fullnameError.textContent = 'Full name is required';
        fullname.classList.add('error');
        fullname.classList.remove('valid');
        isValid = false;
    } else {
        fullname.classList.remove('error');
        fullname.classList.add('valid');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        email.classList.add('error');
        email.classList.remove('valid');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Please enter a valid email';
        email.classList.add('error');
        email.classList.remove('valid');
        isValid = false;
    } else {
        email.classList.remove('error');
        email.classList.add('valid');
    }
    
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        username.classList.add('error');
        username.classList.remove('valid');
        isValid = false;
    } else if (username.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
        username.classList.add('error');
        username.classList.remove('valid');
        isValid = false;
    } else {
        username.classList.remove('error');
        username.classList.add('valid');
    }
    
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        password.classList.add('error');
        password.classList.remove('valid');
        isValid = false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        password.classList.add('error');
        password.classList.remove('valid');
        isValid = false;
    } else {
        password.classList.remove('error');
        password.classList.add('valid');
    }
    
    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.textContent = 'Please confirm your password';
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('valid');
        isValid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('valid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('error');
        confirmPassword.classList.add('valid');
    }
    
    if (isValid) {
        window.location.href = 'blog.html';
    }
});
