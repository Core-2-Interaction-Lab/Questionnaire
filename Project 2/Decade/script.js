let filterButtons = document.querySelectorAll('.filter-button');

const toggleRecord = (elements, showHide) => {
    // do something
    elements.forEach(el => {
        if (showHide == 'show') {
            el.classList.remove('is-hidden');
        } else {
            el.classList.add('is-hidden');
        }
    });
};

// create a function to loop through the data and spit out HTML
const createCollectionHTML = data => {  
    // store the collection grid variable so that we know where to inset the HTML later
    const collectionGrid = document.getElementById('collection');

    // iterate each item of the returned JSON
    data.forEach(item => {
        const listItemHTML = `
            <li class="item" data-filter="${item.decade}">
                <img src="${item.image}" alt="${item.name}"> 
            <span class="caption">
                <p class="item-title" id="info">${item.title}</p>
                <p class="item-artist" id="info">${item.artist}</p>
                <p class="item-release" id="info">${item.release}</p>
                </span>
            
            </li>
        `
        collectionGrid.insertAdjacentHTML('beforeend', listItemHTML);
    
        filterButtons.forEach(button => {
            // click on filter button
            button.addEventListener('click', () => {
                // get the data-attribute
                
                const filterValue = button.getAttribute('data-filter');
                
                console.log();
                


                const records = document.querySelectorAll(".item");
                // find all of the matching Records (any grid item that has the same data-attribute)

                let matchingRecords = [];
                let index = 0;

                records.forEach(el => {
                    if(el.dataset.filter.includes(filterValue)){
                        matchingRecords[index] = el;
                        index=index+1;
                        console.log(matchingRecords, index)
                    };
                });

                console.log(matchingRecords);

                // first, loop through EVERYTHING and assume it doesn't match (i.e. hide it)
                toggleRecord(records, "hide")
                // second, loop through MATCHING elements and show them (remove the 'is-hidden' class we just applied)
                toggleRecord(matchingRecords, "show")


                if (button.getAttribute('data-filter') == 'All') {
                    toggleRecord(records, 'show');
                };
            });
        });
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


//filters:

var collection = [];

// const matchingRecords = data.filter(record => record.genre == "");

// JSON = javascript object notation



// hide everything that doesn't match and show everything that does match
// if the filter is 'ALL', just show everything









