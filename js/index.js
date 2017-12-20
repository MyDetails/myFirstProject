$(document).ready(function(){
    $(window).scroll(function(){
        let scrollTop=$(window).scrollTop();
        let innerHeight=window.innerHeight;
        if(scrollTop>innerHeight){
            $('.upfloor').show();
            $('.nav-bg').css({
                position:'fixed',
                left:'0',
                top:'0',
                zIndex:999
            });
        }else{
            $('.upfloor').hide();
            $('.nav-bg').css({
                position:'static',
                left:'0',
                top:'0'
            });
        }
    });
    $('.mobile-tab-name').on('touchstart', function() {
        $('.mobile-tab-name').css({'background-color':'#000', 'color':'#29fca5'})
    })
    $('.upfloor').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    });
});