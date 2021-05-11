const logout = async (event) => {

    event.preventDefault();

    // Make a POST request to destroy the session on the back end
    const response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successfully logged out, redirect to the login page
        document.location.replace('/logout');
    } else {
        alert(response.statusText);
    }
};

if (document.location == '/logout') {
    document.querySelector('#logOut').addEventListener('click', logout);
};

