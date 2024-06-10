document.addEventListener('DOMContentLoaded', () => {
    const usernameSpan = document.querySelector('#username');

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    if (name) {
        usernameSpan.textContent = name;
    } else {
        usernameSpan.textContent = 'Guest';
    }
});