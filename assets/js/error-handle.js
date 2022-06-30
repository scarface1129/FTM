$(function () {
    setTimeout(function () {
        $(".handle").fadeOut(1500);
    }, 2500)
})


// $(function () {
//     $(document).scroll(function () {
//         var $slideup = $(".blue-show");
//         var $nav = $(".navbar");
//         $slideup.toggleClass('slideup', $(this).scrollTop() > $nav.height());
//     });
// });


// $(function () {
//     window.onload = function(){
//         $(".handle").addClass('slidedown');
//     }
//     setTimeout(function () {
//         $(".handle").css({"transform": "translateY(-170px)"});
//         // $(".handle").css({"display": "none"});
//     }, 2500)
//     $(document).scroll(function () {
//         var $nav = $(".navbar");
//         var $svgfill = $(".alt-color-show")
//         var $svgfill2 = $(".blue-show")
//         var $nav = $(".navbar");
//         $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//         $svgfill.toggleClass('alt-color-show-scroll', $(this).scrollTop() > $nav.height());
//         $svgfill2.toggleClass('blue-show-scroll', $(this).scrollTop() > $nav.height());
//     });
// });