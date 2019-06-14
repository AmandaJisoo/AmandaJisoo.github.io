var slideImg = $(".portrait");
var slides = $(".portrait").find(">div");
var currentIndex = 0;
var slideCount = slides.length;

function showNext() {
  var nextIndex = (currentIndex + 1) % slideCount; //next images
  console.log(nextIndex);
  slides.eq(currentIndex).fadeOut(800); // removing current images
  slides.eq(nextIndex).fadeIn(800); // appering next image
  currentIndex = nextIndex; /
}
setInterval(showNext, 3000);
