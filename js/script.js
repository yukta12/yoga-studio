$(function () {
    new WOW().init();

   

    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $("nav").addClass("top-nav");
            $(".btn-back-to-top").fadeIn();
        }else{
            $("nav").removeClass("top-nav");
            $(".btn-back-to-top").fadeOut();
        }
    });
    
    $("a.smooth-scroll").click(function(event){
        //prevents to perform the default operation
        event.preventDefault();
        
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top-69,
        }, 1250, "easeInOutExpo");
    });
    if($(this).scrollTop()>100){
            $("nav").addClass("top-nav");
            $(".btn-back-to-top").fadeIn();
        }else{
            $("nav").removeClass("top-nav");
            $(".btn-back-to-top").fadeOut();
        }

});
