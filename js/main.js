$(window).ready(function () {
    windowHeight();
    seeTop();
    left();
})

$(window).resize(function () {
    windowHeight();
    seeTop();
    left();
})

function windowHeight() {
    let windowHeight = $(window).height();
    let fontSize = windowHeight / 12;
    $('.header').css({
        height: windowHeight + 'px'
    })
    $('.name span').css({
        fontSize: fontSize + 'px'
    })
    $('.name').css({
        paddingTop: fontSize * 3 + 'px'
    })
    $('.proff span').css({
        fontSize: fontSize / 1.5 + 'px'
    })
}

function seeTop() {
    let heightProject = $(projects[0]).height();
    let seeClass = $('.see');
    let seeHeight = $(seeClass[0]).height();
    let seeTop = heightProject - seeHeight;
    $(seeClass).css({
        top: seeTop,
        height: heightProject - 100
    })
}

let left = function () {
    let goToWidth = $('#goTo').width();
    let modalWidth = $('.modal-content').width();
    let windowWidth = $(this).innerWidth();
    let leftGoTo = (windowWidth - goToWidth) / 2;
    let leftModal = (windowWidth - modalWidth) / 2;
    $('#goTo').css({
        'left': leftGoTo + 'px'
    });
    $('.modal-content').css({
        'left': leftModal + 'px'
    })
}


let scrollTo = $('#scrollTo').offset().top;


$('#goTo').click(function () {
    $('html, body').animate({
        scrollTop: scrollTo
    }, 800);
})

let projects = $('.project');

projects.click(function () {
    let img = $(this).find('img').attr('src');
    $('.imgModal').attr('src', img);
    let title = $(this).find('img').data('title');
    $('.modal-title').text(title);
    let gitUrl = $(this).find('img').data('git');
    $('.gitUrl').find('a').text(gitUrl);
    $('.gitUrl').find('a').attr('href', gitUrl);
    let responsive = $(this).find('img').data('responsive');
    $('.responsive').text(responsive);
    let technology = $(this).find('img').data('technology');
    $('.technology').text(technology);
    let link = $(this).find('img').data('link');
    $('.blank').click(function () {
        $(this).attr('href', link);
    })
})
