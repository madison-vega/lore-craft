async function newFormHandler(event) {
    event.preventDefault();
}

const gameName = document.querySelector('.game_name').nodeValue;

const response = await fetch('/api/gameRoutes/game', {
    method: 'POST',
    body: JSON.stringify({
        game_name
    }),
    headers:
    'Content-Type: application/json'
});

if (response.of) {
    document.location.replace('/game');
} else {
    alert(response.statusText);
}

document.querySelector('').addEventListener('submit', newFormHandler)