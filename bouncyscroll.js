//on ready
$(document).ready(function(){
    //create bounce scroll div
    $('body').append('<div id="bounce_scroll_div"></div>');
    //set css
    $('#bounce_scroll_div').css({
        'position':'absolute',
        'width':'1px',
        'height':'1px',
        'overflow':'scroll',
        'z-index':'100',
        //position it via top  a bit lower than bottom of the page
    });
    //on page scroll move infiscroll div a bit lower than viewport
    setInterval(function(){
        //set the top to a sinusoidal function that bounces up and down the page amplitude is twice the viewport height and offset is the current scroll position
        $('#bounce_scroll_div').css('top',(Math.sin(new Date().getTime()/250)*$(window).height()*4)+$(document).scrollTop()+$(window).height()+'px');
    },1);
});
