var movefun = function (event) {
    event.preventDefault();
}

$(function () {
    $.scrollify({
        section: ".box",
        scrollSpeed: 800,
    })
    $(window).on("resize", function () {
        $.scrollify.update()
    })
    $('#openModal1').click(function () {
        $('#modalArea1').fadeIn()
        $.scrollify.disable()
        window.addEventListener('touchmove', movefun, { passive: false })
    })
    $('#closeModal1, #modalBg1').click(function () {
        $('#modalArea1').fadeOut()
        $.scrollify.enable()
        window.removeEventListener('touchmove', movefun, { passive: false })
    })
    $('#openModal2').click(function () {
        $('#modalArea2').fadeIn()
        $.scrollify.disable()
    })
    $('#closeModal2, #modalBg2').click(function () {
        $('#modalArea2').fadeOut()
        $.scrollify.enable()
    })
    $('#openModal3').click(function () {
        $('#modalArea3').fadeIn()
        $.scrollify.disable()
    })
    $('#closeModal3, #modalBg3').click(function () {
        $('#modalArea3').fadeOut()
        $.scrollify.enable()
    })
    $('#openModal4').click(function () {
        $('#modalArea4').fadeIn()
        $.scrollify.disable()
    })
    $('#closeModal4, #modalBg4').click(function () {
        $('#modalArea4').fadeOut()
        $.scrollify.enable()
    })
    $('#openModal5').click(function () {
        $('#modalArea5').fadeIn()
        $.scrollify.disable()
    })
    $('#closeModal5, #modalBg5').click(function () {
        $.scrollify.enable()
        $('#modalArea5').fadeOut()
    })
    $('#openModal6').click(function () {
        $('#modalArea6').fadeIn()
        $.scrollify.disable()
    })
    $('#closeModal6, #modalBg6').click(function () {
        $('#modalArea6').fadeOut()
        $.scrollify.enable()
    })
})