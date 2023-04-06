// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//   modal.style.display = "none";
// }

var span = document.getElementsByClassName("button-close-modal")[0];

span.onclick = function() {
  console.log("span.onclick");
  modal.style.display = "none";
}

// document.addEventListener(
//   "click",
//   (event) => {
//     // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
//     if (event.target.matches(".button-close-modal") ||
//       !event.target.closest(".modal")) {
//         console.log("closeModal()");
//       closeModal();
//     }
//   },
//   false
// )

function closeModal() {
  document.querySelector(".modal").style.display = "none"
}
