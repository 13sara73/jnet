// ----------------------hero main page swiper 
var swiper = new Swiper('.home-hero-swiper', {
    pagination: {
        el: ' .home-hero-swiper .swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    autoplay: {
        delay: 5000,
    },

    loop: true,
});

// ----------------------------------modal 
$(".play-vid-net").click(function () {
    var target = $(this).attr("data-title");
    var bs = $("#" + target).attr("id");
    $("#" + target).addClass("modal-net-popup");
    $("html").css("overflow-y", "hidden");
    $(".ado-vid video").trigger('play');
});
$(".modal-net .net-xmark").click(function () {
    $(this).parent().removeClass("modal-net-popup");
    $("html").css("overflow-y", "visible");
    $(".ado-vid video").trigger('pause');
});

//   home page swiper for brands
var swiper = new Swiper('.home-brand-swiper', {

    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 3000,
    },

    loop: true,

    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
        992: {
            slidesPerView: 4,
        },

        768: {
            slidesPerView: 3,
        },

        300: {
            slidesPerView: 3,
        },
    },
});
// --------------------------------- special products section swiper 

var swiper = new Swiper('.sp-pro-swiper', {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },

    spaceBetween: 16,
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 2,
        },

        570: {
            slidesPerView: 2,
        },
    },
});

// --------------------------swiper for blog section on home page
var swiper = new Swiper('.home-blog-swiper', {

    pagination: {
        el: ' .home-blog-swiper .swiper-pagination',
        type: 'bullets',
        clickable: true
    },

    autoplay: {
        delay: 3000,
    },

    spaceBetween: 16,
    breakpoints: {
        1200: {
            slidesPerView: 3,

        },
        992: {
            slidesPerView: 2,


        },

        768: {
            slidesPerView: 2,
        },

        300: {
            slidesPerView: 1,
            loop: true,


        },
    },
});

// ----------------------------- responsive menu 
$(".net-bars").click(function (e) {
    e.stopPropagation();
    var menuDn = $(this).attr("data-title");
    $("#" + menuDn).addClass("menu-show");
});

$(".net-xmark").click(function () {
    $(".menu-net").removeClass("menu-show");
});

$("html , body").click(function () {
    $(".menu-net").removeClass("menu-show");
});

$(".menu-net").click(function (e) {
    e.stopPropagation();
});

var size = screen.width;
if (size < 993) {
    $(".dropdown").click(function () {
        $(this).parent().find(" > .drop-down-menu").slideToggle().parent().siblings().find(".drop-down-menu").slideUp();
        $(this).toggleClass("rotate-dropdown").parent().siblings().find(".dropdown").removeClass("rotate-dropdown");
    });
}

// ======================================== header start
$(".has-children > a").after('<span class="arrow-down"></span>')
// ======================================== header send

// --------------------------------------- accordion 
$(".accordion-title").click(function (e) {

    var accordionitem = $(this).attr("data-tab");
    console.log(accordionitem);
    var inneraccordion = $(this).attr("data-tab-inner-acc");

    //slide down the content then slide up other open contents
    $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();
    $("#" + inneraccordion).slideToggle().parent().siblings().find(".accordion-content").slideUp();

    //rotate the plus mark and arrow down
    $(this).find(".tog-acc").toggleClass("tog-acc-active");
    $(this).parent().siblings().find('.tog-acc').removeClass("tog-acc-active");
    // $(".accordions-plus").find(".tog-acc").toggleClass("tog-acc-active");

    //changes the color of item title 
    $(this).find(".accordion-title-header").toggleClass("active-title");
    $(this).parent().siblings().find(".accordion-title-header").removeClass("active-title");
    $(this).siblings().find(".accordion-title-header").removeClass("active-title");


});

// ---------------------------------------------comments about us page 
var swiper = new Swiper(".cm-about-us-swiper ", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next-net",
        prevEl: ".swiper-button-prev-net",
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
});

// sign up and log in page

$('.sign-up').on('click', function () {
    $('.log-in-page').fadeOut();
    $('.sign-up-page').fadeIn();
});



$('.log-in').on('click', function () {
    $('.log-in-page').fadeIn();
    $('.sign-up-page').fadeOut();
});

// ===================== category hero swiper
var swiper = new Swiper(".cat-swiper-2", {
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesProgress: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 2,
        },

        576: {
            slidesPerView: 2,
        },

        300: {
            slidesPerView: 1,
        },
    },
});
var swiper2 = new Swiper(".cat-swiper", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});
// =============================================== category page video swiper

var swiper = new Swiper(".cat-video-swiper-2", {
    spaceBetween: 10,
    slidesPerView: 1,
    watchSlidesProgress: true,
    pagination: {
        el: ' .cat-video-swiper-2 .swiper-pagination',
        type: 'bullets',
        clickable: true
    },
});
var swiper2 = new Swiper(".cat-video-swiper", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
    navigation: {
        nextEl: ".cat-video-content .swiper-button-prev",
        prevEl: ".cat-video-content .swiper-button-next",
    },
});

swiper.on('slideChange', function () {
    $(".cat-video-swiper video").trigger("pause");
});

// ======================================== podcast swiper
var swiper = new Swiper(".podcast-swiper", {
    spaceBetween: 16,
    slidesPerView: 2,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".cat-podcast-content .swiper-button-prev",
        prevEl: ".cat-podcast-content .swiper-button-next",
    },
    pagination: {
        el: ' .podcast-swiper .swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        1200: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 1,
        },

        300: {
            slidesPerView: 1,
        },
    },
});

$(".vid-swiper-play-btn").click(function () {
    var getVidData = $(this).attr("data-target-cat-vid");
    videoNet = document.getElementById(getVidData);
    if (videoNet.paused == true) {
        $(videoNet).trigger('play');
    } else {
        $(videoNet).trigger('pause');
    }
});

// ==================================== audio palyer
$(".podasct-play-btn").each(function () {
    var audioNet = $(this).attr("data-target-audio");
    var audio = document.getElementById(audioNet);
    var timeleft = $(this).parent().find(".timeleft-audio")[0];
    var duration = parseInt(audio.duration);
    var second = duration % 60;
    var minute = Math.floor(duration / 60) % 60;
    var hour = Math.floor(duration / 60 / 60) % 60;
    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;
    hour = hour < 10 ? "0" + hour : hour;
    timeleft.innerHTML = hour + ":" + minute + ":" + second;
})

$(".podasct-play-btn").click(function () {
    var audioNet = $(this).attr("data-target-audio");
    var audio = document.getElementById(audioNet);
    var timeline = $(this).parent().find(".timeleft-audio")[0];
    if (audio.paused == true) {
        $("#" + audioNet).trigger('play');
    } else {
        $("#" + audioNet).trigger('pause');
    }
    $(this).parent().parent().parent().parent().siblings().find("audio").trigger('pause');
    $(this).parent().parent().parent().parent().siblings().find(".pulse-bar").removeClass("equalizer-play");
    $(this).find(".pulse-bar").toggleClass("equalizer-play");


    audio.addEventListener("timeupdate", function () {
        var s = parseInt(audio.currentTime % 60);
        var m = parseInt((audio.currentTime / 60) % 60);
        var h = Math.floor(audio.currentTime / 60 / 60) % 60;
        s = s < 10 ? "0" + s : s;
        m = m < 10 ? "0" + m : m;
        h = h < 10 ? "0" + h : h;
        timeline.innerHTML = h + ":" + m + ':' + s;
    }, false);
});

