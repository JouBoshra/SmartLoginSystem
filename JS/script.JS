document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('#floatingInput');
    const passwordInput = document.querySelector('#floatingPassword');
    const loginButton = document.querySelector('button.btn-outline-info');
    const errorMessage = document.querySelector('#error-message');
    const successMessage = document.querySelector('#success-message');

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        const user = storedUsers.find(user => user.email === email && user.password === password);

        if (user) {
            errorMessage.style.display = 'none';
            successMessage.textContent = 'Login successful!';
            successMessage.style.display = 'block';
            // Redirect to welcome page 
            setTimeout(() => {
                window.location.href = `welcome.html?name=${encodeURIComponent(user.name)}`; 
            }, 2000); 
        } else {
            errorMessage.textContent = 'Invalid email or password. Please try again.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }
    });
});