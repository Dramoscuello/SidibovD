$(document).ready(function(){   
    
    
    //scroll top
    $('.goTop').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        });
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.goTop').slideDown(300);
        }else{
            $('.goTop').slideUp(300);
        }
    });
    
});