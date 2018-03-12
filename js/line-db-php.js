$(document).ready(function() {

	/**
	 * call the data.php file to fetch the result from db table.
	 */
	$.ajax({
		url : "http://localhost/chartjs2/api/data.php",
		type : "GET",
		success : function(data){
			console.log(data);

			var value = {
				Temperature : [],
				Humidity : []
			};

			var len = data.length;

			for (var i = 0; i < len; i++) {
				if (data[i].measured == "Temp 1") {
					value.Humidity.push(data[i].value);
				}
				else if (data[i].measured == "Temp 2") {
					value.Temperature.push(data[i].value);
				}
			}

			//get canvas
			var ctx = $("#line-chartcanvas");

			var data = {
				labels : ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
				datasets : [
					{
						label : "Humidity",
						data : value.Humidity,
						backgroundColor : "blue",
						borderColor : "lightblue",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					},
					{
						label : "Temperature",
						data : value.Temperature,
						backgroundColor : "green",
						borderColor : "lightgreen",
						fill : false,
						lineTension : 0,
						pointRadius : 5
					}
				]
			};

			var options = {
				title : {
					display : true,
					position : "top",
					text : "Sensor Data",
					fontSize : 18,
					fontColor : "#111"
				},
				legend : {
					display : true,
					position : "bottom"
				}
			};

			var chart = new Chart( ctx, {
				type : "line",
				data : data,
				options : options
			} );

		},
		error : function(data) {
			console.log(data);
		}
	});

});
