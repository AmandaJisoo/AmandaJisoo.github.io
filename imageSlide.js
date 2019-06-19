var slideImg = $(".portrait");
var slides = $(".portrait>div");
var currentIndex = 0;
var slideCount = slides.length;

function showNext() {
  var nextIndex = (currentIndex + 1) % slideCount; //next images
  console.log(nextIndex);
  slides[currentIndex].fadeOut(800); // removing current images
  slides[nextIndex].fadeIn(800); // appearing next image
  currentIndex = nextIndex;
}
setInterval(showNext, 3000);
