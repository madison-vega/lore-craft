async function newFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#char_name').value;
    const age = document.querySelector('#char_age').value;
    const race = document.querySelector('#char_race').value;
    const bio = document.querySelector('#char_bio').value;

    const response = await fetch('/api/newCharacter', {
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

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
<<<<<<< HEAD
<<<<<<< HEAD
document.querySelector('submit-new-character').addEventListener('submit', newFormHandler);
=======
document.querySelector('').addEventListener('submit', newFormHandler);
>>>>>>> main
=======
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
>>>>>>> main
