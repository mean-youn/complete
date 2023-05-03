// 스무스스크롤
$("ul.menu li a").click(function (e) {
  // e.preventDefault()

  // $('ul.menu li').removeClass('on')
  // $(this).parent("li").addClass('on')

  let href = $(this).attr("href");
  let artTop = $(href).offset().top;
  $("html").animate({ scrollTop: artTop }, 500);
});

$(window).scroll(function () {
  let scrTop = $(this).scrollTop();
  // $("h3").text(scrTop);

  //  3 for문에서 i가 하나씩 증가한다는 것도 each함수로 바꿀 수 있다.
  $("article").each(function (i) {
    let artTop = $(this).offset().top;
    // console.log(`${i}번째 Article의 시작값 ${artTop}`)
    if (scrTop >= artTop) {
      $(".menu li").removeClass("on");
      $(".menu li").eq(i).addClass("on");
    }
  });

//   // let h = $(window).height();
//   // 1
//   // if(scrTop>=h*0 && scrTop< h*1){
//   //     $('.menu li').removeClass('on')
//   //     $('.menu li').eq(0).addClass('on')
//   // }
//   // if(scrTop>=h*1 && scrTop< h*2){
//   //     $('.menu li').removeClass('on')
//   //     $('.menu li').eq(1).addClass('on')
//   // }
//   // if(scrTop>=h*2 && scrTop< h*3){
//   //     $('.menu li').removeClass('on')
//   //     $('.menu li').eq(2).addClass('on')
//   // }
//   // if(scrTop>=h*3 && scrTop< h*4){
//   //     $('.menu li').removeClass('on')
//   //     $('.menu li').eq(3).addClass('on')
//   // }
//   // if(scrTop+100 >= h*4){
//   //     $('.menu li').removeClass('on')
//   //     $('.menu li').eq(4).addClass('on')
//   // }

//   // let count = $("article").length;
//   //  2 반복되는 if문은 for문으로 대체가능.
// //     for (let i = 0; i < count; i++) {
// //       if (scrTop >= h * i && scrTop < h * (i + 1)) {
// //         $(".menu li").removeClass("on");
// //         $(".menu li").eq(i).addClass("on");
// //       }
// //     }
});



// js로 휠스무스
document.querySelectorAll('article').forEach(function(article){
  article.addEventListener('wheel', function(e){
    e.preventDefault()
    let delta=e.deltaY

    let target
    if(delta<0){
      target = this.previousElementSibling
    }
    else if(delta>0){
      target = this.nextElementSibling
    }
    if(target){
      let artTop = target.offsetTop
      window.scrollTo({top:artTop, behavior:'smooth'})
    }
  })
})

// top 버튼
$( document ).ready( function() {
  $( '.top' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  } );
} );




