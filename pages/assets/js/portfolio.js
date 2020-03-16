$(function() {
  $.scrollify({
    section: ".box",
    scrollSpeed: 1000
  });
  $(window).on("resize", function() {
    $.scrollify.update();
  });
  $("#openModal1").click(function() {
    $("#modalArea1").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal1, #modalBg1").click(function() {
    $("#modalArea1").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal2").click(function() {
    $("#modalArea2").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal2, #modalBg2").click(function() {
    $("#modalArea2").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal3").click(function() {
    $("#modalArea3").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal3, #modalBg3").click(function() {
    $("#modalArea3").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal4").click(function() {
    $("#modalArea4").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal4, #modalBg4").click(function() {
    $("#modalArea4").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal5").click(function() {
    $("#modalArea5").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal5, #modalBg5").click(function() {
    $.scrollify.enable();
    $("#modalArea5").fadeOut();
  });
  $("#openModal6").click(function() {
    $("#modalArea6").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal6, #modalBg6").click(function() {
    $("#modalArea6").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal7").click(function() {
    $("#modalArea7").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal7, #modalBg7").click(function() {
    $("#modalArea7").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal9").click(function() {
    $("#modalArea9").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal9, #modalBg9").click(function() {
    $("#modalArea9").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal10").click(function() {
    $("#modalArea10").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal10, #modalBg10").click(function() {
    $("#modalArea10").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal11").click(function() {
    $("#modalArea11").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal11, #modalBg11").click(function() {
    $("#modalArea11").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal12").click(function() {
    $("#modalArea12").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal12, #modalBg12").click(function() {
    $("#modalArea12").fadeOut();
    $.scrollify.enable();
  });
  $("#openModal13").click(function() {
    $("#modalArea13").fadeIn();
    $.scrollify.disable();
  });
  $("#closeModal13, #modalBg13").click(function() {
    $("#modalArea13").fadeOut();
    $.scrollify.enable();
  });
});
