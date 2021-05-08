const searchHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const searchContent = document.querySelector('searchbox').value.trim();
    

    if (searchContent) {
        const response = await fetch('/api/character/search', {
            method: 'POST',
            body: JSON.stringify({ response: searchContent }),
            headers: { 'Content-Type': 'application/json' },
            
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('No results matching search criteria.');
        }
    }
};

document.querySelector('searchbutton').addEventListener('submit', searchHandler);
