async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#char_name').value;
    const age = document.querySelector('#char_age').value;
    const race = document.querySelector('#char_race').value;
    const bio = document.querySelector('#char_bio').value;

    const response = await fetch('/api/newCharRoute', {
        method: 'POST',
        body: JSON.stringify({
            name,
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
document.querySelector('').addEventListener('submit', newFormHandler);