/* Ricreare lo slideshow / carousel base come fatto in live coding a lezione stamattina.
Per chi ha meno tempo potete partire da questo repo:
https://bitbucket.org/booleancareers/lc-ex-slider-layout/src/master/ */

// @ts-check

$(".slider-wrapper > .next > .fas").click(nextSlideNextIndicator);
$(".slider-wrapper > .prev > .fas").click(prevSlidePrevIndicator);

function nextSlideNextIndicator() {
    var currentSlide = $(".slider-wrapper > .images > img.active");
    var currentIndicator = $(".slider-wrapper > .nav > .fas.active");
    currentSlide.removeClass("active");
    currentIndicator.removeClass("active");
    // if the current slide is the last one, the next slide and indicator will be the first ones
    if (currentSlide.hasClass("last")) {
        $(".slider-wrapper > .images > img.first").addClass("active");
        $(".slider-wrapper > .nav > .fas.first").addClass("active");
    }
    // else, they will be the next ones
    else {
        currentSlide.next().addClass("active");
        currentIndicator.next().addClass("active");
    }
}

function prevSlidePrevIndicator() {
    var currentSlide = $(".slider-wrapper > .images > img.active");
    var currentIndicator = $(".slider-wrapper > .nav > .fas.active");
    currentSlide.removeClass("active");
    currentIndicator.removeClass("active");
    // if the current slide is the first one, the previous slide and indicator will be the last ones
    if (currentSlide.hasClass("first")) {
        $(".slider-wrapper > .images > img.last").addClass("active");
        $(".slider-wrapper > .nav > .fas.last").addClass("active");
    }
    // else, they will be the previous ones
    else {
        currentSlide.prev().addClass("active");
        currentIndicator.prev().addClass("active");
    }
}
