var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});

function rotateImage() {
    var image = document.getElementById("image");
    if (image.style.webkitAnimationPlayState == "running") {
      image.style.webkitAnimationPlayState = "paused";
    } else {
      image.style.webkitAnimationPlayState = "running";
    }
  }

  $('#GFG_UP').text(
    "Click on button to toggle the DIV Box using Bootstrap.");
      
    function toggler(content) {
        $("#" + content).toggle();
    }
      
    function GFG_Fun() {
        toggler('content');
        $('#GFG_DOWN').text("content Box is toggling.");
    }