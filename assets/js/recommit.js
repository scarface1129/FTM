let recbutton = document.getElementById('recommit-btn');
let modalrecommit = document.getElementById('modal-recommit');
let modalclosebtn = document.getElementById('modal-btn-close');
let mainbtn = document.getElementById('recommit-btn-main')
let Earning = document.getElementById('earning-transfer').value;
let User = document.getElementById('username').value

modalclosebtn.addEventListener('click', function(){
    modalrecommit.style.opacity = 0,
    modalrecommit.style.visibility = "hidden",
    modalrecommit.style.transition = "visibility 0s, opacity 0.5s linear"
}, false)

recbutton.addEventListener('click', function(){
    modalrecommit.style.opacity = 1;
    modalrecommit.style.visibility = "visible"
}, false)

// mainbtn.addEventListener('click', function(){
//     console.log('somethig clicked')
//     $.ajax({
//         url: "includes/recommit.php",
//         type: "post",
//         data: {
//             InvestmentEarning: Earning,
//             user: User
//         },
//         success: function(response) {
//             alert(response);
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log(textStatus, errorThrown);
//         }
//     })
// })

