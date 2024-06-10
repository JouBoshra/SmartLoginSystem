document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('section .boxshadow');
    const nameInput = document.querySelector('#floatingInput[name="name"]');
    const emailInput = document.querySelector('#floatingInput[name="email"]');
    const passwordInput = document.querySelector('#floatingPassword');
    const signUpButton = document.querySelector('button.btn-outline-info');
    const errorMessage = document.querySelector('#error-message');
    const successMessage = document.querySelector('#success-message');

    signUpButton.addEventListener('click', (event) => {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (name === '' || email === '' || password === '') {
            errorMessage.textContent = 'All fields are required!';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none'; // Hide success message
            return;
        }

        // Get from local storage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check the email 
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            errorMessage.textContent = 'Email is already registered. Please use a different email.';
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            return;
        }

        const userData = {
            name: name,
            email: email,
            password: password
        };

        // Add the new user data
        users.push(userData);

        // Save back to local storage
        localStorage.setItem('users', JSON.stringify(users));

        errorMessage.style.display = 'none';
        successMessage.textContent = 'Signup successful!';
        successMessage.style.display = 'block';
        
        // Redirect to login page
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 2000); 
    });
});