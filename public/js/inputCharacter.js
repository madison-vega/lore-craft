async function newFormHandler(event) {
    event.preventDefault();


    const age = document.querySelector('input[name = "age"]').value;
    const race = document.querySelector('input[name = "race"]').value;
    const bio = document.querySelector('input[name = "bio"]').value;

    const response = await fetch('/api/newCharRoute', {
        method: 'POST',
        body: JSON.stringify({
            age,
            race,
            bio
        }),
        headers: 
            'Content-Type: application/json'
    
    });

    if (response.of) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);