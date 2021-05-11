const searchHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
    // Gather the data from the form elements on the page
    const searchContent = document.querySelector('#search').value.trim();
    console.log(searchContent);
    // search characters
    if (searchContent) {
            const responseChar = await fetch(`/search?searchTerm=${searchContent}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
        
            });

            if (responseChar.ok) {
                // document.location.replace('/search');
            } else {
                alert('No results matching search criteria.');
            }
        }

    

    // search Games






};

document.querySelector('#search-submit').addEventListener('click', searchHandler);



