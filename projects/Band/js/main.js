$(document).ready(function () {
    windowHeight();
    links();
    topPx();
    showHide();
    $('textarea').val('');
})

$(window).resize(function () {
    windowHeight();
    topPx();
})

$(window).scroll(function () {
    showHide();
    onceTimeAnimation();
})



//      show/hide #toUp button

function showHide() {
    let windowHeight = $(window).height();
    if (window.pageYOffset > windowHeight) {
        $('#toUp').fadeIn(500);
    } else {
        $('#toUp').fadeOut(500);
    }
}




function onceTimeAnimation() {
    $('.once').each(function (i, e) {
        let windowHeight = $(window).height();
        var xy = e.getBoundingClientRect();
        if (xy.top <= windowHeight - 500) {
            $(e).addClass(' animateOnce ');
        }
    })
}


//      top position #toUp element

function topPx() {
    let windowHeight = $(window).height();
    $('#toUp').css({
        top: $('.navbar')[0].clientHeight + 'px'
    })
}



//      100% window height of header

function windowHeight() {
    let windowHeight = $(window).height();
    let fontSize = windowHeight / 5;
    $('.header').css({
        height: windowHeight + 'px'
    })
    $('.logo').css({
        fontSize: fontSize + 'px',
        paddingBottom: fontSize * 2.5 + 'px'
    })
    $('.clouds').css({
        top: fontSize + 'px'
    })
}



//      slow move

function goTo(a) {
    return $('html, body').animate({
        scrollTop: a
    }, 600);
}



//      menu links

function links() {
    let items = $('.nav-item');

    for (let i = 0; i < items.length; i++) {
        $(items[i]).click(function () {
            let element = document.getElementById(this.getAttribute('data-menu')).offsetTop;
            let menuHeight = $('.navbar')[0].clientHeight;
            goTo(element - menuHeight);
        })
    }
}



//      parralax effect

$('.header, .navbar').mousemove(function (e) {
    let width = $(window).width();
    let height = $(window).height();
    let offsetX = 0.5 - e.pageX / width;
    let offsetY = 0.5 - e.pageY / height;

    $('.parallax').each(function (i, e) {
        let offset = $(e).attr('data-offset');
        let translate = 'translate3d(' + Math.round(offsetX * offset) + 'px, ' + Math.round(offsetY * offset) + 'px, 0px)';

        $(e).css({
            transform: translate
        })
    })
})




$('.project').mouseover(function () {
    $(this).find('.project-head img').animate({
        width: '80%',
        margin: '10% 10% 0 10%'
    }, 300)
})
$('.project').mouseleave(function () {
    $(this).find('.project-head img').animate({
        width: '100%',
        margin: '0%'
    }, 150)
})

//$('.info-photo').mouseleave(function () {
//    $(this).find('#show').animate({
//        margin: '0 auto',
//        width: '100%',
//        padding: '0%'
//    }, 500)
//})


$('#show').click(function () {
    $(this).hide();
    $('.hidden').css({
        display: 'block'
    })
})