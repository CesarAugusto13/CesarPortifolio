$(document).ready(function() {
    $('#mobile-btn').on('click', function () {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItens = $('.nav-list');

    $(window).on('scroll', function () {
        const header = $ ('header');
        const scrollPosition
    })
});