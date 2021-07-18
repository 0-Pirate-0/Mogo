$(function () {
    let header = $("header"),
        inrtroH = $("#intro").innerHeight(),
        nav = $("nav");

    /* Smoth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top

        $("html, body").animate({
            scrollTop: blockOffset - header.height()
        }, 500);
    });

    /* Fixed Header */
    setInterval(() => {
        if ($(window).scrollTop() > inrtroH - header.height() && !nav.hasClass('active')) {
            header.addClass("fixed")
        } else if ($(window).scrollTop() >= 0 && nav.hasClass('active')) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }, 1);


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass("active");
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});