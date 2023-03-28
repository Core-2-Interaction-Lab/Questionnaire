// create a function to loop through the data and spit out HTML
const createCollectionHTML = data => {
    
    // store the collection grid variable so that we know where to inset the HTML later
    const collectionGrid = document.getElementById('collection');

    // iterate each item of the returned JSON
    data.forEach(item => {
        console.log(item);
        const listItemHTML = `
            <li class="item" data-filter="${item.genre}">
                <img src="${item.image}" alt="${item.name}"> 
            <span class="caption">
                <p class="item-title" id="info">${item.title}</p>
                <p class="item-artist" id="info">${item.artist}</p>
                </span>
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


const RecordCollection = [
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "Dark Side of the Moon",
            "artist": "Pink Floyd",
            "image": "Assets/1.JS1.png",
            "genre": "Rock"
        },
        {
            "title": "A Rush of Blood to the Head",
            "artist": "U2",
            "image": "Assets/8.JS1.png",
            "genre": "Pop Rock"
        },
        {
            "title": "A Rush of Blood to the Head",
            "artist": "U2",
            "image": "Assets/8.JS1.png",
            "genre": "Pop Rock"
        },
        {
            "title": "A Rush of Blood to the Head",
            "artist": "U2",
            "image": "Assets/8.JS1.png",
            "genre": "Pop Rock"
        },
        {
            "title": "A Rush of Blood to the Head",
            "artist": "U2",
            "image": "Assets/8.JS1.png",
            "genre": "Pop Rock"
        },
        {
            "title": "A Rush of Blood to the Head",
            "artist": "U2",
            "image": "Assets/8.JS1.png",
            "genre": "Pop Rock"
        },
        
        {
            "title": "A Rush of Blood to the Head",
            "artist": "U2",
            "image": "Assets/8.JS1.png",
            "genre": "Pop Rock"
        }
        
    
    
];

const matchingRecords = collection.filter(record => Record.genre == "Rock");

console.log(matchingRecords)

// JSON = javascript object notation


const Records = document.querySelectorAll('.grid-item');

// hide everything that doesn't match and show everything that does match
// if the filter is 'ALL', just show everything

const filterButtons = document.querySelectorAll('.filter-button');

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

filterButtons.forEach(button => {
    // click on filter button
    button.addEventListener('click', () => {
        // get the data-attribute
        const filterValue = button.getAttribute('data-filter');
        // find all of the matching Records (any grid item that has the same data-attribute)
        const matchingRecords = document.querySelectorAll(`.grid-item[data-filter="${filterValue}"]`);
        // first, loop through EVERYTHING and assume it doesn't match (i.e. hide it)
        toggleRecord(Records, 'hide');
        // second, loop through MATCHING elements and show them (remove the 'is-hidden' class we just applied)
        toggleRecord(matchingRecords, 'show');

        if (button.getAttribute('data-filter') == 'All') {
            toggleRecord(Records, 'show');
        };
    });
});

