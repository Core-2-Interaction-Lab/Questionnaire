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
        // console.log(item);
        // const listItemHTML = `
        //     <li class="item" data-filter="${item.genre}">
        //         <img class="myImages" id="myImg" src="${item.image}" alt="${item.name}"> 
        //         <div id="myModal" class="modal">
        //             <img class="modal-content" id="img01" src="${item.image}" >
                    // <div id="caption"> src="${item.title}" </div>
                    // <div id="caption"> src="${item.artist}" </div>
                    // <div id="caption">Country Purchased: src="${item.country}" </div>
                    // <div id="caption">Label: src="${item.label}" </div>
                    // <div id="caption">Genre: src="${item.genre}" </div>
                    // <div id="caption">Released: src="${item.release}" </div>
                    
                    // <div id="caption">Listen<a src="${item.link}">here</a></div>

        //             <button class="button-close-modal">X</button>
                        
        //         </div>
        //         <span class="caption">
        //             <p class="item-title" id="info">${item.title}</p>
        //             <p class="item-artist" id="info">${item.artist}</p>
        //         </span>
                
        //     </li>
        // `;

        let li = document.createElement("li");
        li.classList.add("item");
        li.dataset.filter = `${item.title}`;
        


        let img = document.createElement("img");
        img.classList.add("myImages");
        img.id="myImg"
        img.src = `${item.image}`;
        img.alt = `${item.name}`;

        let div = document.createElement("div");
        div.id = "myModal"
        div.classList.add("modal", "hide");

        let img2 = document.createElement("img");
        img2.classList.add("modal-content");
        img2.id = "img01"
        img2.src = `${item.image}`;

        let button = document.createElement("button");
        button.classList.add("button-close-modal");
        button.innerHTML = "X"
    
        let span = document.createElement("span");
        span.classList.add("caption");

        let p = document.createElement("p");
        p.classList.add("item-title");
        p.id = "info"
        p.innerHTML = `${item.title}`;

        let p2 = document.createElement("p");
        p2.classList.add("item-artist");
        p2.id = "info"
        p2.innerHTML = `${item.artist}`;

        li.addEventListener("click", ()=>{
            console.log("clicked");
            div.classList.toggle("hide") ;
        });

        div.append(img2, button);
        span.append(p, p2);

        li.append(img, div, span);

        let collection = document.querySelector("#collection");
        collection.append(li);
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



// const matchingRecords = collection.filter(record => Record.genre == "Rock");

// console.log(matchingRecords)

// // JSON = javascript object notation


// const Records = document.querySelectorAll('.grid-item');

// // hide everything that doesn't match and show everything that does match
// // if the filter is 'ALL', just show everything

// const filterButtons = document.querySelectorAll('.filter-button');

// const toggleRecord = (elements, showHide) => {
//     // do something
//     elements.forEach(el => {
//         if (showHide == 'show') {
//             el.classList.remove('is-hidden');
//         } else {
//             el.classList.add('is-hidden');
//         }
//     });
// };

// filterButtons.forEach(button => {
//     // click on filter button
//     button.addEventListener('click', () => {
//         // get the data-attribute
//         const filterValue = button.getAttribute('data-filter');
//         // find all of the matching Records (any grid item that has the same data-attribute)
//         const matchingRecords = document.querySelectorAll(`.grid-item[data-filter="${filterValue}"]`);
//         // first, loop through EVERYTHING and assume it doesn't match (i.e. hide it)
//         toggleRecord(Records, 'hide');
//         // second, loop through MATCHING elements and show them (remove the 'is-hidden' class we just applied)
//         toggleRecord(matchingRecords, 'show');

//         if (button.getAttribute('data-filter') == 'All') {
//             toggleRecord(Records, 'show');
//         };
//     });
// });


// Get the modal



var modal = document.querySelectorAll(".myModal");


// Get the image and insert it inside the modal - use its "alt" text as a caption




