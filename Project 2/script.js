// create a function to loop through the data and spit out HTML
const createCollectionHTML = data => {
    //store the collection grid variable so that we know where to insert the HTML later
    const document.getElementById('collection');
    //iterate each item of the returned JSON
    data.forEach(item => {
        console.log(item);
        const listItemHTML =
        <li>
            <p class="item-title">${item.name}</p>
        </li>
    })
}

    fetch('collection.json')
    //first, ceck if the request is approved/"ok" or if something bad happened
    // return the document in JSON format
        .then (response => response.json())
        // now that we have the document in JSON format, let's work with it
        .then(data => {
            //send it into the function we made above (fill in the blank/variable)
            createCollectionHTML(data);
        })