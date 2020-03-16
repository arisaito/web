$(function() {
  setTimeout(function() {
    $(".loading-bg").fadeOut(1000);
  }, 100);
});

$(window).on("load", function() {
  console.log("glitch");
  $(".glitch").glitch({
    maxint: 1,
    minint: 0.1,
    maxglitch: 100,
    direction: "random"
  });
  $(".glitch-light").glitch({
    maxint: 3,
    minint: 1,
    maxglitch: 5,
    direction: "random"
  });
});
