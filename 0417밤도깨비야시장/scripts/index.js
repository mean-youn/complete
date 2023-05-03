const headerBg = [
  "rgb(30, 44, 90)",
  "rgb(30, 44, 90)",
  "rgb(238, 120, 31)",
  "rgb(255, 225, 0)",
  "rgb(112, 87, 163)",
  "rgb(235, 110, 165)",
  "rgb(196, 215, 0)",
  "rgb(0, 52, 31)",
];
const logoImg = ["header_nav_logo_y.png", "header_nav_logo_n.png", "header_nav_logo_w.png"];
const menuY = [
  "header_nav_menu_introduce_y.png",
  "header_nav_menu_yyd_y.png",
  "header_nav_menu_banpo_y.png",
  "header_nav_menu_ddp_y.png",
  "header_nav_menu_cgc_y.png",
  "header_nav_menu_season_market_y.png",
  "header_nav_menu_cm_y.png",
];
const menuN = [
  "header_nav_menu_introduce_n.png",
  "header_nav_menu_yyd_n.png",
  "header_nav_menu_banpo_n.png",
  "header_nav_menu_ddp_n.png",
  "header_nav_menu_cgc_n.png",
  "header_nav_menu_season_market_n.png",
  "header_nav_menu_cm_n.png",
];
const menuW = [
  "header_nav_menu_introduce_w.png",
  "header_nav_menu_yyd_w.png",
  "header_nav_menu_banpo_w.png",
  "header_nav_menu_ddp_w.png",
  "header_nav_menu_cgc_w.png",
  "header_nav_menu_season_market_w.png",
  "header_nav_menu_cm_w.png",
];
const snsY = [
  "sns_facebook_icon_y.png",
  "sns_insta_icon_y.png",
  "sns_youtube_icon_y.png",
];
const snsN = [
  "sns_facebook_icon_n.png",
  "sns_insta_icon_n.png",
  "sns_youtube_icon_n.png",
];
const snsW = [
  "sns_facebook_icon_w.png",
  "sns_insta_icon_w.png",
  "sns_youtube_icon_w.png",
];

let headerElem = document.querySelector("header");

headerElem.style.backgroundColor = headerBg[0];

let menuElem = headerElem.querySelectorAll(".menu li");
let snsElem = headerElem.querySelectorAll(".gnb li");
let secElem = document.querySelectorAll("section");
let home = document.querySelector("a.home");

menuElem.forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();
    let href = li.querySelector("a").getAttribute("href");
    let secTop = document.querySelector(href).offsetTop;
    window.scrollTo({ top: secTop, behavior: "smooth" });
  });
});

window.addEventListener("scroll", function () {
  let scrTop = window.scrollY;
  secElem.forEach((section, i) => {
    let secTop = section.offsetTop;
    // 연결연산자
    console.log(secTop + "<=>" + scrTop);
    if (scrTop >= secTop) {
      headerElem.style.backgroundColor = headerBg[i];
      if (i == 0 || i == 1 || i == 4) {
        headerElem.querySelector("h1.logo img").setAttribute("src", "./images/"+logoImg[0]);
        menuElem.forEach((li, j) => {
          li.querySelector("img").setAttribute("src", "./images/"+menuY[j]);
        });
        snsElem.forEach((li, k) => {
          li.querySelector("img").setAttribute("src", "./images/"+snsY[k]);
        });
      } else if (i == 2 || i == 3 || i == 5 || i == 6) {
        headerElem
          .querySelector("h1.logo img")
          .setAttribute("src", "./images/" + logoImg[1]);
        menuElem.forEach((li, j) => {
          li.querySelector("img").setAttribute("src", "./images/" + menuN[j]);
        });
        snsElem.forEach((li, k) => {
          li.querySelector("img").setAttribute("src", "./images/" + snsN[k]);
        });
      } else {
        headerElem
          .querySelector("h1.logo img")
          .setAttribute("src", "./images/" + logoImg[2]);
        menuElem.forEach((li, j) => {
          li.querySelector("img").setAttribute("src", "./images/" + menuW[j]);
        });
        snsElem.forEach((li, k) => {
          li.querySelector("img").setAttribute("src", "./images/" + snsW[k]);
        });
      }
    }
  });
  if (scrTop >= 1000) {
    home.style.opacity = 1;
  } else {
    home.style.opacity = 0;
  }
});

home.addEventListener("scroll", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// // 바닐라 스무스 스크롤 내꺼
// const nav = document.querySelector('ul.menu li a')
// function onMove(){
//   let href = nav.getAttribute('href')
//   let secTop = href.offsetTop
//   // document.html.scrollTo(secTop)
//    window.scrollTo({top:secTop, behavior:"smooth"})
// }
// nav.addEventListener("click", onMove)

// // 제이쿼리버전 스무스스크롤
// $("ul.menu li a").click(function (e) {
//   // e.preventDefault()
//   let href = $(this).attr("href");
//   let secTop = $(href).offset().top;
//   $("html").animate({ scrollTop: secTop }, 500);
// });
// //홈로고도
// $(a.logo).click(function(e){
//   let href = $(this).attr("href");
//   let secTop =$(href).offset().top;
//   $('html').animate({scrollTop:secTop}, 500);
// })
