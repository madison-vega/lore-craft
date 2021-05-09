const searchHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const searchContent = document.querySelector('#search').value.trim();
    // search characters
    if (searchContent) {
        const responseChar = await fetch('/api/character/search', {
            method: 'POST',
            body: JSON.stringify({ response: searchContent }),
            headers: { 'Content-Type': 'application/json' },
            
        });

        if (responseChar.ok) {
            document.location.replace('/');
        } else {
            alert('No results matching search criteria.');
        }
    }
    // search Games






};

document.querySelector('#search-submit').addEventListener('submit', searchHandler);
