function changeImage() {
  var image = document.getElementsByClassName("parallax-slider");
  if (image.src.match("dino")) {
    image.src = "dino.jpg";
  } else {
    image.src = "dinodrinking.jpg";
  }
}