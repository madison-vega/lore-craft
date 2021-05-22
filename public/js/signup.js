async function signupFormHandler (event) {
    
    event.preventDefault();
    console.log('signupFormHandler was called');

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Make a POST request to destroy the session on the back end
    try {
        console.log('POSTing to dom');
        await fetch('api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        window.location = 'login';


    } catch (error) {
        alert(response.statusText);
        console.log(error);
    }
    
}


if (window.location.href.indexOf('/signup') > 0) {

    document.querySelector('#sign-up').addEventListener('submit', signupFormHandler);
    console.log("compare of location of window working!");
}

