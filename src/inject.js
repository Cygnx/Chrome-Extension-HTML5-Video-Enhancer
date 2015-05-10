var playerList;
var x = 1,
    y = 1;
var rotate = function() {
    playerList = document.getElementsByTagName("video");
    for (var i = 0; i < playerList.length; i++) {
        var scale = "scale(" + x + "," + y + ")";
        playerList[i].style.cssText = "-webkit-transform: " + scale + ";";
    }
}
var setRotations = function(_x, _y) {
    x = _x;
    y = _y;
}
var enforceRotations = function() {
    rotate();
}
$(document).keydown(function(e) {
	console.log(e.keyCode);
	if(e.shiftKey)
		console.log("SHIFT");
		
	if(e.altKey)
		console.log("ALT");
		
    if (e.keyCode == 38 || e.keyCode == 37)
        if (e.shiftKey && e.altKey) {
            x = 1;
            y = 1;
        }
    if (e.keyCode == 39 && e.shiftKey && e.altKey) {
        x = -1;
        y = 1;
    }
    if (e.keyCode == 40 && e.shiftKey && e.altKey) {
        x = 1;
        y = -1;
    }
});
console.log("HTML5 Rotator");
setInterval(enforceRotations, 100);