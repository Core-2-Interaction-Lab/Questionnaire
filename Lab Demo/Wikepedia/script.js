// create a function to loop through the data and spit out HTML
const createCollectionHTML = data => {
    
    // store the collection grid variable so that we know where to inset the HTML later
    const collectionGrid = document.getElementById('collection');

    // iterate each item of the returned JSON
    data.forEach(item => {
        console.log(item);
        const listItemHTML = `
            <li>
            <div class="cont">
            <div class="left">
                <p class="item-PageTitle">${item.PageTitle}</p>
                <a href="${item.PageURL}"> <p class="item-year">${item.PageURL}</p> </a>
                <p class="item-description">Last Edited: ${item.LastEdited}</p>
            </div>
            <div class="right">
                <img src="${item.Image}" alt="${item.ImageCaption}">
                <p class="item-cap">${item.ImageCaption}</p>
            </div>
            </div>
            </li>
        `
        collectionGrid.insertAdjacentHTML('beforeend', listItemHTML);
    });
}


fetch('collection.json')
    // first, check if the request is approved/"OK" or if something bad happened
    // return the documen in JSON format
    .then(response => response.json())
    // now that we have the document in JSON format, let's work with it
    .then(data => {
        // send it into the function we made above (fill in the blank/variable)
        createCollectionHTML(data);
    })