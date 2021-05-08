async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#char_name').value;
    const age = document.querySelector('#char_age').value;
    const race = document.querySelector('char_race').value;
    const bio = document.querySelector('char_bio"]').value;

    const response = await fetch('/api/newCharRoute', {
        method: 'POST',
        body: JSON.stringify({
            name,
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
