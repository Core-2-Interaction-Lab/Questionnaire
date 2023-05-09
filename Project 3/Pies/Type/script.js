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
	const Large = data.filter(item => item.pooltype == 'Large').length;
	const Olympic = data.filter(item => item.pooltype == 'Olympic').length;
	const Mini = data.filter(item => item.pooltype == 'Mini').length;
	const Wading = data.filter(item => item.pooltype == 'Wading').length;
	const Intermediate = data.filter(item => item.pooltype == 'Intermediate').length;
	const Diving = data.filter(item => item.pooltype == 'Diving').length;

	const dataLabels = ['Large', 'Olympic', 'Mini', 'Wading', 'Intermediate', 'Diving'];
	const dataValues = [Large, Olympic, Mini, Wading, Intermediate, Diving];

    console.log(dataValues)


	const ctx = document.getElementById('myChart');

	new Chart(ctx, {
	  type: 'pie',
	  data: {
		labels: ['Large', 'Olympic', 'Mini', 'Wading', 'Intermediate', 'Diving'],
		datasets: [
			{
				label: '# of Pools',
				data: [Large, Olympic, Mini, Wading, Intermediate, Diving],
				backgroundColor: ['rgb(195, 25, 90)','rgb(48, 144, 255)','rgb(255, 176, 40)','rgb(230, 78, 17)','rgb(55, 86, 176)','rgb(128, 203, 196)','rgb(55, 86, 176)'],
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