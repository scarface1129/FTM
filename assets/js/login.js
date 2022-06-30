$(function () {
    setTimeout(function () {
        $(".handle").fadeOut(1500);
    }, 3500)
})


const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const alternateColor = document.querySelectorAll(".blue-show");
const alternatingColorBlack = document.querySelectorAll(".alt-color-show")
const hamsign = document.querySelector('.ham-sign')

$(function () {
  $(document).scroll(function () {
    let $intro = $(".divide");
    var $nav = $(".navbar");
    var $svgfill = $(".alt-color-show")
    var $svgfill2 = $(".blue-show")
    var $desktopmenu = $(".desktop-menu");
    var $hamburger = $(".hamburger");
    var $logocontainer = $(".logo-container");

    if (menu.classList.contains("showMenu")) {
      console.log('hello')
      hamsign.style.color = "#000"
    } else {
      hamsign.style.color = "#000"
    };


    // $nav.toggleClass('scrolled', $(this).scrollTop() > $intro.height());
    $svgfill.toggleClass('alt-color-show-scroll', $(this).scrollTop() > $nav.height());
    $hamburger.toggleClass('hamburger-colored ham-sign-scroll', $(this).scrollTop() > $nav.height());
    $desktopmenu.toggleClass('desktop-menu-color', $(this).scrollTop() > $intro.height());
    $svgfill2.toggleClass('blue-show-scroll', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('nav-pad logo-shift-initial', $(this).scrollTop() > $nav.height())
    $logocontainer.toggleClass('signup-logo-toggle', $(this).scrollTop() > $nav.height())
    $(".handle").fadeOut(1500);
  });


  $('.hamburger').on('click', function () {
    var $desktopmenudisplay = $(".desktop-menu")
    $desktopmenudisplay.toggleClass('showMenu');
    if (menu.classList.contains("showMenu")) {
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
      document.body.style.overflow = 'hidden'
      console.log('something happened');
      hamsign.style.color = "#000"
    } else {
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      document.body.style.overflow = 'initial'
      hamsign.style.color = "#fff"
    };
  })
})

console.log('hello')