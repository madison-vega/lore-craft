const signup = async (event) => {
console.log('sign up event handler hit');
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successfully logged out, redirect to the login page
        document.location.replace('/signup');
    } else {
        alert(response.statusText);
    }
};



// if (document.location == '/signup') {
    console.log('SIGN Up location hit');
    document.querySelector('#sign-up').addEventListener('submit', signup);
// };
