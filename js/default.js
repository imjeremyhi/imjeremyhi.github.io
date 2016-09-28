//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }
        }); 
    });

    //setTimeout(rotate,2000);
    scroll();

    $(function(){
            $("#tiny-text").typed({
              strings: ["", " ^800 Welcome! Check out some of my work below :)"],
              typeSpeed: 20,
              backDelay: 500,
            });
        });


    $(function(){
        $("#rotate").typed({
          strings: ["I am a:^100 developer"/*,"^2000 learner", "^2000 developer", "^2000 entrepreneur"*/],
          typeSpeed: 10,
          backDelay: 500,
        });
    });

    

    
});

function scroll() {
    $("#godown").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1500);
    });
        //setTimeout(autodown,9500);    
}

function autodown() {
    if(!$(window).scrollTop()) {
        $("#godown").trigger('click');
    }
}

function rotate() {
    var person = ["programmer","photographer","entrepreneur"];
    var i = 0;
    var heading = document.querySelector("#rotate");

    function slide() {
        heading.innerHTML = person[i];
        heading.style.opacity = 1;
        setTimeout(next, 4000);
    }

    function next() {
        i++;

        if (i > person.length-1) {
            i=0;
        }
        heading.style.opacity = 0;

        setTimeout(slide,2200);
    }

    slide();
}

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}


