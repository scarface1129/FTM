let button = document.getElementById('update-address');
let wallet = document.getElementById('wallet-area');
let icon = document.getElementById('icon-state')


button.addEventListener('click', function () {

    if (icon.classList.contains("fa-edit")) {
        icon.classList.remove('fa-edit');
        icon.classList.add('fa-check')
        wallet.disabled = false;
        wallet.focus();
    } else {
        icon.classList.remove('fa-check');
        icon.classList.add('fa-edit');
        wallet.disabled = true;
        $.ajax({
            url: "https://www.Luna-bond.com/includes/update-address.php",
            type: "post",
            data: {
                walletAddress: wallet.value
            },
            success: function (response) {
                $("#catch-handle").fadeIn(1500);
                $('#catch-handle').addClass('desktop-margin-top-handle');
                $('.inner-handle').css({"background-color": "#7dffae"});
                $('#catch-message').css({"color": "#28663f"});
                $('#catch-message').html('Wallet address updated successfully.')
                setTimeout(function () {
                    $("#catch-handle").fadeOut(1500);
                }, 3500)

                $('#success').fadeIn(1000).append('<p>' + data.posted + '</p>'); //If successful, than throw a success message
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }
}, false)