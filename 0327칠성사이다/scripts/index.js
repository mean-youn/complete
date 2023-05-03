$("ul.tabmenu li").click(function () {
  $("ul.tabmenu li").removeClass("on");
  $(this).addClass("on");
  let i = $(this).index();
  $("article").removeClass("on");
  $("article").eq(i).addClass("on");
  dotAni($(this));
});

// let firstP=$(".tabmenu li").first().offset().left
// let firstW=$(".tabmenu li").first().width()/2
// $('.dot').animate({left:firstP+firstW-5})

dotAni($(".tabmenu li").first());

function dotAni(active) {
  let current = active;
  // offset: 어디서부터 얼마나 떨어졌는지 계산하는 거
  // offset.left 왼쪽으로부터 얼마나 떨어졌는지
  let currentPos = current.offset().left;
  let currentWid = current.width() / 2;
  // 현재 위치에서 현재 너비의 절반을 빼주어야+ 점넓이 절반도 빼줘야 정확한 위치.
  $(".dot")
    .stop()
    .animate({ left: currentPos + currentWid - 5 });
}
$(window).resize(function () {
  dotAni($(".tabmenu li").first());
});

// sect2
let grid;
const frame = ".grid";
const box = ".grid-item";
const speed = ".5s";
const productBg = [
  "allPd_t1_bg.jpg",
  "allPd_t2_bg.jpg",
  "allPd_t3_bg.jpg",
  "allPd_t4_bg.jpg",
  "allPd_t5_bg.jpg",
  "allPd_t6_bg.jpg",
  "allPd_t7_bg.jpg",
];
let allPd = document.querySelector(".allPd");
function init() {
  grid = new Isotope(frame, {
    itemSelector: box,
    columnWidth: box,
    transition: speed,
    filter: ".soda",
  });
}

window.addEventListener("load", function () {
  init();
});

//sect2 선택시 배경 바뀌기
const items = document.querySelectorAll(".item li a");

items.forEach((item, i) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    allPd.querySelector("img").setAttribute("src", "./images/" + productBg[i]);
    let href = this.getAttribute("href");
    grid.arrange({ filter: href });
    items.forEach((item) => {
      item.classList.remove("on");
    });
    this.classList.add("on");
  });
});

//헤더 스크롤시 사라지고 스크롤업시 보이기
// 1000내려야 top 버튼 모이고 누르면 탑으로 이동
const headerEl = document.querySelector("header");

window.addEventListener("wheel", function (e) {
  e.preventDefault();
  let delta = e.deltaY;
  let topbtn =this.document.querySelector('a.top')
  // this.alert(delta)
  if (delta < 0) {
    headerEl.style.opacity = "1";
  } else if (delta > 0) {
    headerEl.style.opacity = "0";
  }
  let scrTop = window.scrollY;
  if (scrTop >= 1000) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
});

topbtn.addEventListener("scroll", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//타이틀 페이드