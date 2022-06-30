let payout = document.getElementById('payout-btn');
let loader = document.getElementById('loader');

setTimeout(function(){
    $('#loader').text('Payout')
}, 2500)

payout.addEventListener('click', function(){
    $(function(){
        $('#loader').html('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" stroke="#ffffff" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50"keyTimes="0;1"></animateTransform></circle>')
    })
    $.ajax({
        url: "includes/payout.php",
        type: "POST",
        data: {
            payout: "payout",
            amtEarned: $('#amtEarned').val(),
            amtFunded: $('#amtFunded').val(),
        },
        success: function (response) {
            alert(response);
            $(function(){
                $('#loader').text('Payout');
                payout.disabled = true;
                // $('.dash-display').toggleClass('dash-display-visible')
                setTimeout(function(){
                    location.reload();
                }, 2500)
            })
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}, false)