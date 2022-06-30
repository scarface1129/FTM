const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const alternateColor = document.querySelectorAll(".blue-show");
const alternatingColorBlack = document.querySelectorAll(".alt-color-show")

$(function () {
    $(document).scroll(function () {
      let $intro = $(".divide");
      var $nav = $(".navbar");
      var $svgfill = $(".alt-color-show")
      var $svgfill2 = $(".blue-show")
      var $desktopmenu = $(".desktop-menu");
      var $hamburger = $(".hamburger");
      var $logocontainer = $(".logo-container")

      // $nav.toggleClass('scrolled', $(this).scrollTop() > $intro.height());
      $svgfill.toggleClass('alt-color-show-scroll', $(this).scrollTop() > $nav.height());
      $hamburger.toggleClass('ham-dash-new', $(this).scrollTop() > $nav.height());
      $desktopmenu.toggleClass('desktop-menu-color', $(this).scrollTop() > $intro.height());
      $svgfill2.toggleClass('blue-show-scroll', $(this).scrollTop() > $nav.height());
      $nav.toggleClass('nav-pad logo-shift-initial', $(this).scrollTop() > $nav.height())
      $logocontainer.toggleClass('signup-logo-toggle', $(this).scrollTop() > $nav.height())
      $('logo-dash-switch').toggleClass('logo-dash-switch-black', $(this).scrollTop() > $nav.height())
      $desktopmenu.toggleClass('desk-dash-scroll', $(this).scrollTop() > $nav.height())
    });
    $('.hamburger').on('click', function () {
      var $desktopmenudisplay = $(".desktop-menu")
      $desktopmenudisplay.toggleClass('showMenu');
      if (menu.classList.contains("showMenu")) {
        closeIcon.style.display = "block";
        // closeIcon.style.color = "#fff"
        menuIcon.style.display = "none";
        document.body.style.overflow = 'hidden'
        closeIcon.classList.add('rec-close');
        for (i = 0; i < 7; i++) {
          console.log(alternatingColorBlack[i]);
          alternatingColorBlack[i].classList.add('rec-close')
      }
      } else {
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        document.body.style.overflow = 'initial';
        menuIcon.classList.remove('rec-close');
        closeIcon.classList.remove('rec-close');
        for (i = 0; i < 8; i++) {
          console.log(alternateingColorBlack[i]);
          // alternatingColorBlack[i].classList.remove('rec-close')
      }
      };
    })
  })


for (i = 0; i < 4; i++) {
    alternateColor[i].style.fill = "#0D60D8";
}

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        for (i = 0; i < 4; i++) {
            alternateColor[i].style.fill = "#0D60D8";
        }
        for (i = 0; i < 8; i++) {
            alternatingColorBlack[i].classList.remove('rec-close')
        }
        closeIcon.style.color = "#fff"

    } else {
        for (i = 0; i < 4; i++) {
            alternateColor[i].style.fill = "#fff";
        }
        for (i = 0; i < 8; i++) {
            alternatingColorBlack[i].classList.add('rec-close')
        }
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

//Master Search Tab Function
function tablc(e, t) {
    for (var n = document.getElementsByClassName("tabs-link"), l = 0; l < n.length; l++) n[l].style.display = "none";
    document.getElementById(t).style.display = "block";
}
//Tab Search Bar Button Focus
let allBtn = document.querySelectorAll('.switch-btn');
let Btn1 = document.querySelector('.switch-btn-1');

function initialstate() {
    Btn1.style.background = "#fff";
    Btn1.style.color = "#B3AEBF"
}

initialstate()

allBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        allBtn.forEach(reset => {
            reset.style.background = "transparent";
            reset.style.color = "#fff"
        })
        btn.style.color = "#B3AEBF"
        btn.style.backgroundColor = "#fff"
    })
})
// console.log(allBtn);
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach(closeall => {
            closeall.classList.remove("open");
        })
        item.classList.toggle("open");
    });
});