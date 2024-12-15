(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    let images = ["img/port.png", "img/product-1.png", "img/port.png", "img/port.png"];
let currentIndex = 0;

function changeImage(index) {
    currentIndex = index;
    document.getElementById("productImage").src = images[currentIndex];
    updateDots();
}

function updateDots() {
    let dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Para cambiar la imagen automáticamente cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(currentIndex);
}, 3000);

function scrollLeft() {
    const container = document.querySelector('.product-container');
    container.scrollBy({ left: -300, behavior: 'smooth' }); // Ajusta la cantidad de scroll según sea necesario
}

function scrollRight() {
    const container = document.querySelector('.product-container');
    container.scrollBy({ left: 300, behavior: 'smooth' });
}



    // Countdown Timer
    function countDownTimer() {	
        var endTime = new Date("31 october 2024 23:59:50 GMT+00:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var dias = Math.floor(timeLeft / 86400);
        var horas = Math.floor((timeLeft - (dias * 86400)) / 3600);
        var minutos = Math.floor((timeLeft - (dias * 86400) - (horas * 3600)) / 60);
        var segundos = Math.floor((timeLeft - (dias * 86400) - (horas * 3600) - (minutos * 60)));

        if (dias < "10") {
            dias = "0" + dias;
        }
        if (horas < "10") {
            horas = "0" + horas;
        }
        if (minutos < "10") {
            minutos = "0" + minutos;
        }
        if (segundos < "10") {
            segundos = "0" + segundos;
        }

        $("#cdt-days").html(dias + "<span>Dias</span>");
        $("#cdt-hours").html(horas + "<span>Horas</span>");
        $("#cdt-minutes").html(minutos + "<span>Min</span>");
        $("#cdt-seconds").html(segundos + "<span>Seg </span>");

    }

    setInterval(function () {
        countDownTimer();
    }, 1000);


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    
})(jQuery);

