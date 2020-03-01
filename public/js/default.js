$( document ).ready(function() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-66598892-2', 'auto');
        ga('send', 'pageview');

    // $(window).scroll( function(){
    //     //Check the location of each desired element 
    //     $('.hideme').each( function(i){
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
    //         // If the object is completely visible in the window, fade it it 
    //         if( bottom_of_window > bottom_of_object ){
    //             $(this).animate({'opacity':'1'},500);
    //         }
    //     }); 
    // });

    $("#godown").click(function() {
        $('html, body').animate({
            scrollTop: $("#project").offset().top
        }, 1500);
    });
});