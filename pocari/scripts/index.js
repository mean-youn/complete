// $('li.main').mouseenter(function(){
//     $(this).find('.sub').stop().slideDown(600);
// });
// $('li.main').mouseleave(function(){
//     $('.sub').stop().slideUp(600);
// });


// $('.tabmenu li').click(function(e){
//     e.preventDefault()
//     $('.tabmenu li').removeClass('on')
//     $(this).addClass('on')
//     let idx = $(this).index()
//     $('.tab').hide()
//     $('.tab').eq(idx).show()
// })

$('aside').mouseenter(function(){
    $('.ball').addClass("out");
});
$('aside').mouseleave(function(){
    $('.ball').removeClass("out");
});