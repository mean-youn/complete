$("li.main").mouseenter(function () {
    $("header").animate({
      height: "345px",
    });
    $(".sub").slideDown();
  });
  $("header").mouseleave(function () {
    $(this).animate({
      height: "100px",
    });
    $(".sub").slideUp();
  });


  
  // setInterval(() => {
  //   $(".slidewrap").animate({ "margin-left": "-100%" }, function () {
  //     $(".slide:first").appendTo(".slidewrap");
  //     $(".slidewrap").css({ "margin-left": "0" });
  //   });
  // }, 3000);

//   숫자값이 있다면 모두 애니메이션으로 움직일 수 있다.
//   헤더bg내려오기