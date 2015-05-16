var playerList;
var deg = 0;
var speed = 1;
var rotate = function() {
    playerList = document.getElementsByTagName("video");
    for (var i = 0; i < playerList.length; i++) {
        playerList[i].style.cssText = "-webkit-transform: rotate(" + deg + "deg);";
        $("video")[0].playbackRate = speed;
    }
}
var setRotations = function(_deg) {
    deg += _deg;
}
var setSpeed = function(_speed) {
    if (speed < 1 && _speed < 1)
        _speed = -.1
    speed += _speed;
}
var enforceRotations = function() {
    rotate();
}
$(document).keydown(function(e) {
    if (e.keyCode == 37 && e.shiftKey && e.altKey)
        setRotations(90);
    if (e.keyCode == 39 && e.shiftKey && e.altKey)
        setRotations(-90);
    if (e.keyCode == 107 || e.keyCode == 187 && e.shiftKey && e.altKey) // plus
        setSpeed(.5);
    if (e.keyCode == 109 || e.keyCode == 189 && e.shiftKey && e.altKey) // down
        setSpeed(-.5);
    if (e.keyCode == 96 || e.keyCode == 48 && e.shiftKey && e.altKey) // reset speed
        speed = 1;
    if (e.keyCode == 190 && e.shiftKey && e.altKey) { // frame by frame > keyCode
        $("video")[0].play();
        setTimeout(function() {
            $("video")[0].pause();
        }, 10);

    }
});
console.log("HTML5 Rotator");
setInterval(enforceRotations, 100);