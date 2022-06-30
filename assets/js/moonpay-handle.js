let moonpaybtn =  document.getElementById('moonpay-logo');
let moonpaymodal =  document.getElementById('moonpay-modal');
let body = document.getElementById('make-payment-overflow-disable')
moonpaybtn.addEventListener('click', function(){
    moonpaymodal.style.display="flex";
    body.style.overflow = "hidden"
}, false)

moonpaymodal.addEventListener('click', function(){
    moonpaymodal.style.display = "none";
    body.style.overflow = "initial"

}, false)

$(".moonpay-logo").click(function(){
    $("iframe").each(function(){
        $(this).attr("src", $(this).data("src"));
    });
});