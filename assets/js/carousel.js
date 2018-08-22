console.log("carousel js")
$(window).load(function() {
  $('.platineSlider.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: true,
    slideshowSpeed: 3000,
    animationSpeed: 600,
    touch: true,
    randomize: true,
  });
  $('.orSlider.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: true,
    slideshowSpeed: 1000,
    animationSpeed: 300,
    touch: true,
    randomize: true,
  });
});
