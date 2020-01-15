(function ($) {
    "use strict";


    // JQuery for countdown timer...
    var second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        month = day * 30;

    var countDown = new Date('Jan 30, 2020 00:00:00').getTime(),
        x = setInterval(function () {

            var now = new Date().getTime(),
                distance = countDown - now;

            var countMonths = Math.floor(distance / (month));


            var countDays = Math.floor((distance % (month)) / (day));

            var countHours = Math.floor((distance % (day)) / (hour));
            var countMinutes = Math.floor((distance % (hour)) / (minute));
            var countSeconds = Math.floor((distance % (minute)) / second);

            $('#months').text(countMonths),
                $('#days').text(countDays),
                $('#hours').text(countHours),
                $('#minutes').text(countMinutes),
                $('#seconds').text(countSeconds);


            var monthsContainer = $('#months');
            var daysContainer = $('#days');
            var hoursContainer = $('#hours');
            var minutesContainer = $('#minutes');
            var secondsContainer = $('#seconds');


            if (parseInt(monthsContainer.text()) < 10) {
                monthsContainer.addClass('add-zero');
            } else {
                monthsContainer.removeClass('add-zero');
            }
            if (parseInt(daysContainer.text()) < 10) {
                daysContainer.addClass('add-zero');
            } else {
                daysContainer.removeClass('add-zero');
            }
            if (parseInt(hoursContainer.text()) < 10) {
                hoursContainer.addClass('add-zero');
            } else {
                hoursContainer.removeClass('add-zero');
            }
            if (parseInt(minutesContainer.text()) < 10) {
                minutesContainer.addClass('add-zero');
            } else {
                minutesContainer.removeClass('add-zero');
            }
            if (parseInt(secondsContainer.text()) < 10) {
                secondsContainer.addClass('add-zero');
            } else {
                secondsContainer.removeClass('add-zero');
            }


        }, second);

    // JQuery for Smooth Scroll
    var links = $("#menu li a[href^='#']");
    var topGap = 80;

    links.on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top - topGap
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
        return false;
    });
    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            mainHeader = $('.header-area');

        if (scroll > 1) {
            mainHeader.addClass("black");
        } else {
            mainHeader.removeClass("black");
        }
    });

    $(window).on("scroll", function () {
        activeMenuItem($(".navbar-area"));
    });
    //function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            home = nav.find(" > ul > li:first");

        sections.each(function () {
            var top = $(this).offset().top - 92,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }

    // Slicknav Mobile Menu
    $('ul#menu').slicknav({
        prependTo: ".mobile-menu"
    });

    /*================================
    Preloader
    ==================================*/
    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () {
            $(this).remove();
        });
    });



}(jQuery));
