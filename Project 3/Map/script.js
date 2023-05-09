// GETTING STARTED WITH THE GOOGLE MAPS JAVASCRIPT API

// SETUP
// 1. Go to console.cloud.google.com
// 2. Create a 'new project'
// 3. You can leave "organization" and "location" blank
// 4. Google will start creating the project for you (will take a moment)
// 5. Select the project
// 6. Open up the navigation and click on "APIs & Services > Library"
// 7. Click on Maps JavaScript API > Enable
// 8. Agree to terms and services
// 9. Save your API key in your scripts.js file. If you don't see it, go to "APIs & Services > Credentials > Create Credentials > API Key"
// 10. If you are prompted to "restrict the API key", ignore it

// LOAD THE MAP
// 1. new google.maps.Map
// 2. to set your own style, go to https://mapstyle.withgoogle.com/
// 3. paste the JSON into Map Styles > Import JSON > Save
// 4. create a Map ID in Map Management
// 5. in Map Styles, assign the new Map ID to the style > Save
// 6. paste the mapID below
// If you hit trouble, check https://www.youtube.com/watch?v=CdDXbvBFXLY

// SET PINS
// 1. get all of the lat and longs you need and store them as an array of objects
// 2. iterate through the array
// 3. for each item in the array, run new google.maps.Marker

// Initialize and add the map


// playground-385101
// AIzaSyA73BD5cjaAZwPjI7L5a4kJzP_DmZxfcR8


// HOW TO FETCH DATA ACROSS THE WEB
const json = './pools.json';

fetch(json)
  .then(response => response.json())
	// pass the data to the function!
	.then(data => playWithData(data))


// QUERY, MANIPULATE, VISUALIZE THE DATASET
const playWithData = data => {
	
	

	// first, load the map 
	const NYCposition = { lat: 40.7311, lng: -73.9715 };

	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 11.3,
		center: NYCposition,
		mapId: '650fec3e3aefc93'
	})

	let lastPopupMessage = false;
	
	data.forEach(pool => {

		const poolPosition = { lat: parseFloat(pool.y), lng: parseFloat(pool.x) };

		const marker = new google.maps.Marker({
			map: map,
			position: poolPosition,
			icon: {
				url: 'dot6.png',
				scaledSize: new google.maps.Size(6, 14), // size
			},
			animation: google.maps.Animation.DROP
		})

		let popupMessage = `
			<ul>
				<li>name: ${pool.NAME}</li>
				<li>borough: ${pool.BOROUGH}</li>
				<li>location: ${pool.ADRESS}</li>
				<li>pool type: ${pool.POOLTYPE}</li>
				<li>location: ${pool.LOCATION}</li>
			<ul>
		`;

		// if (squirrel.eating == true) {
		// 	popupMessage = "don't bother me, i'm eating";
		// } else if (squirrel.indifferent == true) {
		// 	popupMessage = "don't bother me, i'm indifferent";
		// }
		
		const popupContent = new google.maps.InfoWindow({
			content: popupMessage
		});

		google.maps.event.addListener(marker, 'click', () => {
			if (lastPopupMessage) {
				lastPopupMessage.close();
			};
			lastPopupMessage = popupContent;
			popupContent.open(map, marker);			
		})



	})

	


	

}