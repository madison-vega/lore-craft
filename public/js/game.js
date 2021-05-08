async function newFormHandler(event) {
    event.preventDefault();
}


const response = await fetch('/api/gameRoutes/game', {
    method: 'GET',
    body: JSON.stringify({
        game
    }),
    headers:
    'Content-Type: application/json'
});

if (response.of) {
    document.location.replace('/');
} else {
    alert(response.statusText);
}