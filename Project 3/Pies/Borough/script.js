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
	const B = data.filter(item => item.borough == 'B').length;
	const X = data.filter(item => item.borough == 'X').length;
	const M = data.filter(item => item.borough == 'M').length;
	const Q = data.filter(item => item.borough == 'Q').length;
	const R = data.filter(item => item.borough == 'R').length;

	const dataLabels = ['B', 'X', 'M', 'Q', 'R'];
	const dataValues = [B, X, M, Q, R];

    console.log(dataValues)


	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	  type: 'pie',
	  data: {
		labels: ['Brooklyn', 'Bronx', 'Manhattan', 'Queens', 'Staten Island'],
		datasets: [
			{
				label: '# of Pools',
				data: [B, X, M, Q, R],
				backgroundColor: ['rgb(195, 25, 90)','rgb(48, 144, 255)','rgb(255, 176, 40)','rgb(230, 78, 17)','rgb(55, 86, 176)'],
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