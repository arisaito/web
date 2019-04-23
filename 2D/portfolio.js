$(function () {
    $('#openModal1').click(function () {
        $('#modalArea1').fadeIn();
        $(function scrollFixed() {
            $('body').css({
                position: 'fixed',
                width: '100%'
            });
        });
    });
    $('#closeModal1, #modalBg1').click(function () {
        $('#modalArea1').fadeOut();
    });
});

$(function () {
    $('#openModal2').click(function () {
        $('#modalArea2').fadeIn();
    });
    $('#closeModal2, #modalBg2').click(function () {
        $('#modalArea2').fadeOut();
    });
});


$(function () {
    $('#openModal3').click(function () {
        $('#modalArea3').fadeIn();
    });
    $('#closeModal3, #modalBg3').click(function () {
        $('#modalArea3').fadeOut();
    });
});

$(function () {
    $('#openModal4').click(function () {
        $('#modalArea4').fadeIn();
    });
    $('#closeModal4, #modalBg4').click(function () {
        $('#modalArea4').fadeOut();
    });
});

$(function () {
    $('#openModal5').click(function () {
        $('#modalArea5').fadeIn();
    });
    $('#closeModal5, #modalBg5').click(function () {
        $('#modalArea5').fadeOut();
    });
});