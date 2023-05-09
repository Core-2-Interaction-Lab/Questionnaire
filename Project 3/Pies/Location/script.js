// HOW TO FETCH DATA ACROSS THE WEB
const url = 'https://data.cityofnewyork.us/resource/y5rm-wagw.json?$limit=50000';

fetch(url)
  .then(response => response.json())
	// pass the data to the function!
	.then(data => playWithData(data))




// QUERY, MANIPULATE, VISUALIZE THE DATASET
const playWithData = data => {

	console.log(data);
	// how many instances were QUAA-ING?
	const Indoor = data.filter(item => item.location == 'Indoor').length;
	const Outdoor = data.filter(item => item.location == 'Outdoor').length;

	const dataLabels = ['Indoor', 'Outdoor'];
	const dataValues = [Indoor, Outdoor];

    console.log(dataValues)


	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	  type: 'pie',
	  data: {
		labels: ['Indoor', 'Outdoor'],
		datasets: [
			{
				label: 'Pool Location',
				data: [Indoor, Outdoor],
				backgroundColor: ['rgb(48, 144, 255)','rgb(58, 86, 178)','rgb(255, 176, 40)','rgb(230, 78, 17)'],
				borderWidth: 0,
				fillColor : "#FFFFFF",
                strokeColor : "#FFFFFF",
                pointColor : "#FFFFFF",
                pointStrokeColor : "#FFFFFF",
                pointHighlightFill : "#FFFFFF",
                pointHighlightStroke : "rgba(151,187,205,1)",
			}
		]
	  },
	//   options: {
	// 	scales: {
	// 		x: {
	// 			ticks: {
	// 			  color: "white"
	// 			},
	// 			grid: {
	// 				color: "white"
	// 			  }
	// 		  },
	// 		  y: {
	// 			ticks: {
	// 			  color: "white"
	// 			},
	// 			grid: {
	// 				color: "white"
	// 			  }
	// 		  },
	options: {
        responsive: true,
		plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#FFFFFF'
                },
				display: true,
         		position: 'right',
            }
        },
		layout: {
            padding: {
				left: 20
			}
        }
    },
	
});

}