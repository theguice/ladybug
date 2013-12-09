$(document).ready(function(){
	pullImages();
	var intervalID = window.setInterval(pullImages, 1000);
});

var imgMap = {};
var date = 'Dec 9th 2012';

function pullImages() {
	$.get( "_scripts/readimg.php", function( data ) {
		// convert the returned json string into a javascript object
		data = $.parseJSON(data);
		//console.log(data);

		for(i=0; i<data.length; i++){
			
			// ignore directories starting with '.'
			var re = /^\./;
			if (! (data[i].match(re)) ) {
				if(imgMap[data[i]] != true) {

					console.log("New Image Detected: ", data[i]);

					imgMap[data[i]] = true;
					var html = '<li><img src="_upload/' + data[i] + '"/></li>'
								+ ' <li class="date"><h3>' + date + '</h3><hr>';
						// any libraries that can deduce the average color of an image?
						// any libraries that can give a color name to a hex value?
						// any shape recognition libraries?

					$( "#photos" ).append(html);
					$('html, body').animate({scrollTop:$(document).height()}, 'slow');
				}
			}
		}
	});
}