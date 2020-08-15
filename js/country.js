$(document).ready(function () {
    var cookie_country = $.cookie('Didicalc_country');
    if (cookie_country === undefined) {
        window.location.replace("http://crdidicalc.azurewebsites.net/");
    } else {
        if (cookie_country === "México") {
            window.location.replace("http://crdidicalc.azurewebsites.net/country/mx");
        }
        if (cookie_country === "Costa Rica") {
            window.location.replace("http://crdidicalc.azurewebsites.net/country/cr");
        }
        // Redirect specific country 
    }

    $('#flag-mx').click(function () {
        $.cookie('Didicalc_cookies', 'México', {expires: 180, path: '/'});
    });

    $('#flag-cr').click(function () {
        $.cookie('Didicalc_cookies', 'Costa Rica', {expires: 180, path: '/'});
    });
}

