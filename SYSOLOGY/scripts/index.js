// 좌측 네비바 쇼, 하이드
function menuHide() {
  $("nav").stop().animate({ "margin-left": "-200px" });
}
function menuShow() {
  $("nav").stop().animate({ "margin-left": "0px" });
}
let sw=1
$(".more").click(function () {
  sw=!sw
  if(sw){
    menuShow()
  }
  else{
    menuHide()
  }
});
$('.close').click(function(){
  menuHide()
})


// 주로 애니메이션에만 콜백가능
function mainHide() {
  $("main video").stop().animate({ top: "-1000px" });
  $("main .btn").delay(300).stop().animate({ top: "800px" });
  $(".mainImg")
    .delay(500)
    .stop().animate({ "margin-left": "500px" }, function () {
      lineShow();
      // animation으로 mainImg가 나온뒤 라인 나와라
    });
}

function lineShow() {
  $("span.top").stop().animate({ width: "100%" }, function () {
    $("span.right").stop().animate({ height: "100%" }, function () {
      $("span.bottom").stop().animate({ width: "100%" }, function () {
        $("span.left").stop().animate({ height: "100%" }, function () {
          $(".eventwrap").stop().animate({ opacity: "1" });
        });
      });
    });
  });
}
// 아래와 같이 하나씩 만든 다음에 괄호 안에 넣어야 덜 헷갈린다.
// function lineShow(){
//   $('span.top').stop().animate({"width":"100%"}, function(){})
//   $('span.right').stop().animate({"height":"100%"}, function(){})
//   $('span.bottom').stop().animate({"width":"100%"}, function(){})
//   $('span.left').stop().animate({"height":"100%"}, function(){
//     $('.storywrap').stop().animate({"opacity":"1"})
//   })
// }
$(".btn li a").click(function (e) {
  e.preventDefault();
  let href = $(this).attr("href");
  $("article").removeClass("on");
  $(href).addClass("on");
  mainHide();
});
// *애니메이션시간이 오래걸려 다음 활동에 겹쳐지거나, 다끝날때까지 기다릴 수 없을 경우
// animate앞에 .stop()을 전부 넣어줘야한다
function mainShow() {
  $("main video").delay(1000).stop().animate({ top: "0" });
  $("main .btn").delay(1300).stop().animate({ top: "460px" });
  $(".mainImg")
    .delay(1500)
    .stop().animate({ "margin-left": "300px" }, function () {});
}
function lineHide() {
  $("span.top").stop().animate({ width: "0" });
  $("span.right").stop().stop().animate({ height: "0" });
  $("span.bottom").stop().animate({ width: "0" });
  $("span.left").stop().animate({ height: "0" });
  $(".eventwrap").stop().animate({ opacity: "0" }, function () {
    $("article").removeClass("on");
  });
  mainShow();
}

$(".clsbtn").click(function () {
  lineHide();
});

// icon 클릭시 리스트 보이기
$(".mainImg").click(function () {
  $(".iconclick").stop().animate({ height: "380px" });
});
$(".button").click(function () {
  $(".iconclick").stop().animate({ height: "0" });
});
