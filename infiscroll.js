function belowviewport(){
    var top = $(window).scrollTop();
        top += $(window).height();
        top += 5;
        //add 10% of the viewport height to the top
        top += $(window).height() * 0.1;
    return top;
}
//create div for infiscroll in jquery
$(document).ready(function(){
    $('body').append('<div id="infiscroll_div"></div>');
    $('#infiscroll_div').css({
        'position':'absolute',
        'width':'1px',
        'height':'1px',
        'overflow':'scroll',
        'z-index':'100',
        'top':belowviewport()+'px',
        //position it via top  a bit lower than bottom of the page
    });
    //on page scroll move infiscroll div a bit lower than viewport
    $(window).scroll(function(){
        
        $('#infiscroll_div').css('top',belowviewport()+'px');
    });
});
