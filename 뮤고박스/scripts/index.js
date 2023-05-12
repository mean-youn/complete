$('li.main').mouseenter(function(){
    $(this).find('ul.sub').show()
})
$('header').mouseleave(function(){
    $('ul.sub').hide()
})
$('.tabmenu li a').click(function(e){
    e.preventDefault()
    $('.tabmenu li a').removeClass('on')
    $(this).addClass('on')
    let href=$(this).attr('href');
    $('article').removeClass('on')
    $(href).addClass('on')
})

$('.tabwrap li a').click(function(e){
    e.preventDefault()
    $('.tabwrap li a').removeClass('on')
    $(this).addClass('on')

    let href=$(this).attr('href')
    $('.art2').removeClass('on')
    $(href).addClass('on')

    $('.books').stop().animate({opacity: "0"})
    $('.desc1').stop().animate({opacity: "0"})

    $(href).find('.books').animate({opacity: "1", left :"50%"})
    $(href).find('.desc1').animate({opacity: "1"})
})

// a태그로하는 방법 id설정과 a href='id'가 설정되있어야한다.
    // $('.tabmenu li a').click(function(e){
    //     e.preventDefault()
    //     let href=$(this).attr('href');
    //     $('article').removeClass('on');
    //     $(href).addClass('on'); 
    // });


    
// ul>li리스트로 하는 방법
// tabmenu와tabcontents가 각각 디브로 감싸져있어야함
    // $('.tabmenu li').click(function(e){
    //     e.preventDefault()
    //     let i=$(this).index()
    //     // alert(i)
    //     $('article').removeClass('on')
    //     $('article').eq(i).addClass('on')
    // })

// 퀵버튼
let sw=1
$(".quickmenu").click(function(){
sw = !sw
if(sw){
    $(this).addClass('on')
}else{
    $(this).removeClass('on')
}
})