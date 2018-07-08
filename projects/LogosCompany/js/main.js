$('#toUp').hide();

function goTo(a, b) {
    return $(a).animate({
        scrollTop: b
    }, 600);
}

$('#toUp').click(function () {
    goTo('html, body', 0);
})

$(document).ready(function () {
    var windowHeight = $(window).height();
    $('#toUp').css({
        top: $('.navbar')[0].clientHeight + 'px'
    })
})

$(window).scroll(function () {
    if (window.pageYOffset > 300) {
        $('#toUp').fadeIn(500);
    } else {
        $('#toUp').fadeOut(500);
    }
})

var items = $('.nav-item');

for (var i = 0; i < items.length; i++) {
    $(items[i]).click(function () {
        var element = document.getElementById(this.getAttribute('data-menu')).offsetTop;
        var menuHeight = $('.navbar')[0].clientHeight;
        goTo('html, body', element - menuHeight);
    })
}


$('.teacher img').hover(function () {
    this.nextElementSibling.style.backgroundColor = 'rgba(0, 157, 255, 0.76)';
    this.nextElementSibling.style.transition = '0.5s';
})

$('.teacher img').mouseleave(function () {
    this.nextElementSibling.style.backgroundColor = 'rgba(0, 206, 255, 0.35)';
    this.nextElementSibling.style.transition = '0.5s';
})

$('.teacher-info').hover(function () {
    this.style.backgroundColor = 'rgba(0, 157, 255, 0.76)';
    this.style.transition = '0.5s';
})

$('.teacher-info').mouseleave(function () {
    this.style.backgroundColor = 'rgba(0, 206, 255, 0.35)';
    this.style.transition = '0.5s';
})
var func = false;
window.onscroll = function () {
    var windowHeight = this.outerHeight;
    var wrapper = document.getElementById('numbers');
    var xy = wrapper.getBoundingClientRect();
    if (xy.top <= windowHeight - 200) {
        if (!func) {
            $('.about-number').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                })
            })
        }
        func = true;
    }
}


function initMap() {
    var uluru = {
        lat: 49.813,
        lng: 24.044
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
