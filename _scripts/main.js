$(document).ready(function(){
	pullImages();
	var intervalID = window.setInterval(pullImages, 3000);
});

var imgMap = {};

function pullImages() {
	$.get( "readimg.php", function( data ) {
		dataArray = data.split(',');
		dataArray.pop();
		dataArray.sort(function(a,b){
			return b-a;
		})
		console.log(dataArray);

		for(i=0; i<dataArray.length; i++){
			if(imgMap[dataArray[i]] != true) {
				imgMap[dataArray[i]] = true;
				$( "#photos" ).prepend('<li><img src="_upload/' + dataArray[i] + '"></li>');
			}
		}
	});
}