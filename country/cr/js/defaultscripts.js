$(document).ready(function () {
    // Show the cookies modal
    var cookie_policy = $.cookie('Didicalc_cookies');
    if (cookie_policy === undefined) {
        $('#cookieModal').modal('show');
    } else {
        if (cookie_policy === "acepted") {
            $('#cookieModal').modal('hide');
        } else {
            $('#cookieModal').modal('show');
        }
    }
 
    // Cookies link Leer mas
    $('#learMore').click(function () {
        window.location.href = 'privacypolicy.php';
    });

    // Cookie acept cookies use
    $('#acept').click(function () {
        $.cookie('Didicalc_cookies', 'acepted', {expires: 365, path: '/'});
    });

    $('#calc_details').click(function () {
        window.location.href = 'details.php';
    });

    $('#calc_simple').click(function () {
        window.location.href = 'simple.php';
    });

    $('#mcountryCR').click(function () {
        window.location.href = 'https://crdidicalc.azurewebsites.net/country/cr/index.php';
    });
    
    $('#mcountryMX').click(function () {
        window.location.href = 'https://crdidicalc.azurewebsites.net/country/mx/index.php';
    });
    
    $('#mcountryCR').mouseover(function () {
        $('#mcountryCR').addClass("modalover");
    });
    
    $('#mcountryCR').mouseout(function(){
        $('#mcountryCR').removeClass("modalover");
    });
    
    $('#mcountryMX').mouseover(function () {
        $('#mcountryMX').addClass("modalover");
    });

    $('#mcountryMX').mouseout(function () {
        $('#mcountryMX').removeClass("modalover");
    });

});