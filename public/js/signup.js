const signupFormHandler = async (event) => {

    event.preventDefault();
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successfully logged out, redirect to the login page
        document.location.replace('/signup');
    } else {
        alert(response.statusText);
    }
};



if (document.location == '/signup') {
    document.querySelector('#signUp').addEventListener('click', signupFormHandler);
};