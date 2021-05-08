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
<<<<<<< HEAD
        headers: 
            'Content-Type: application/json'
    
=======
        headers:
            'Content-Type: application/json'

>>>>>>> dbc4edfa2411a3fd8fb11d83687dfdb80a3caf74
    });

    if (response.of) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
<<<<<<< HEAD
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
=======
document.querySelector('').addEventListener('submit', newFormHandler);
>>>>>>> dbc4edfa2411a3fd8fb11d83687dfdb80a3caf74
