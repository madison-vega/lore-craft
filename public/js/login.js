const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },

        });
        

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in, try again!');
        }
    }
};
if (window.location.href.indexOf('/login') > 0) {
    document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
};
