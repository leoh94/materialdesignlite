function menuClicked() {
alert("You clicked the menu");
}

function replaceGraphs() {
	var img = document.createElement("IMG");
	img.src = "images/ucl.png";
	document.getElementById('graphdiv').replaceChild(img, graphdiv)
}