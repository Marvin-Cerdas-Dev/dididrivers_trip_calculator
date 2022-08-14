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

    // Validate the details form
    $('#form_details_calc').submit(function () {
        var validate = true;
        $('#val_earnings').attr("hidden", true);
        $('#val_totalTripPrice').attr("hidden", true);
        $('#val_kilometers').attr("hidden", true);
        $('#val_time').attr("hidden", true);
        if ($('#calculating').val() === "") {
            $('#calculating').val("Details");
        }
        if ($('#earnings').val() === "") {
            $('#val_earnings').text("Debe ingresar un valor para las ganancias recibidas.");
            $('#val_earnings').attr("hidden", false);
            validate = false;
        }
        if ($('#totalTripPrice').val() === "") {
            $('#val_totalTripPrice').text("Debe ingresar un valor para el monto total del viaje. (Pago total del usuario)");
            $('#val_totalTripPrice').attr("hidden", false);
            validate = false;
        }
        if ($('#kilometers').val() === "") {
            $('#val_kilometers').text("Debe ingresar un valor de los kilómetros recorridos.");
            $('#val_kilometers').attr("hidden", false);
            validate = false;
        }
        if ($('#hours').val() === "") {
            $('#val_time').text("El valor de las horas no puede estar vacio.");
            $('#val_time').attr("hidden", false);
            validate = false;
        } else {
            if ($('#hours').val() < 0) {
                $('#val_time').text("El valor de las horas no puede ser menor a cero.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
            if ($('#hours').val() >= 25) {
                $('#val_time').text("El valor de las horas no puede ser mayor a 24.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
        }
        if ($('#minutes').val() === "") {
            $('#val_time').text("El valor de los minutos no puede estar vacio.");
            $('#val_time').attr("hidden", false);
            validate = false;
        } else {
            if ($('#minutes').val() == 0) {
                $('#val_time').text("El valor de los minutos no puede ser cero.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
            if ($('#minutes').val() < 0) {
                $('#val_time').text("El valor de los minutos no puede ser menor que cero.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
            if ($('#minutes').val() >= 60) {
                $('#val_time').text("El valor de los minutos no puede ser mayor a 59.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
        }
        if ($('#seconds').val() === "") {
            $('#val_time').text("El valor de los segundos no puede estar vacio.");
            $('#val_time').attr("hidden", false);
            validate = false;
        } else {
            if ($('#seconds').val() < 0) {
                $('#val_time').text("El valor de los segundos no puede ser negativo.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
            if ($('#seconds').val() >= 60) {
                $('#val_time').text("El valor de los segundos no puede ser mayor a 59.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
        }
        if ($('#hours').val() === "" && $('#minutes').val() === "" && $('#seconds').val() === "") {
            $('#val_time').text("Debe ingresar un valor para el tiempo de duración del viaje.");
            $('#val_time').attr("hidden", false);
            validate = false;
        }
        return validate;
    });

// Validate the simple form
    $('#form_simpl_calc').submit(function () {
        var validate = true;
        $('#val_kilometers').attr("hidden", true);
        $('#val_time').attr("hidden", true);
        if ($('#calculating').val() === "") {
            $('#calculating').val("Simple");
        }
        if ($('#kilometers').val() === "") {
            $('#val_kilometers').text("Debe ingresar un valor de los kilómetros recorridos");
            $('#val_kilometers').attr("hidden", false);
            validate = false;
        }
        if ($('#hours').val() === "" && $('#minutes').val() === "" && $('#seconds').val()) {
            $('#val_time').text("Debe ingresar un valor para el tiempo de duración del viaje");
            $('#val_time').attr("hidden", false);
            validate = false;
        } else {
            if ($('#hours').val() === "") {
                $('#val_time').text("Debe indicar un valor para las horas.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
            if ($('#minutes').val() === "") {
                $('#val_time').text("Debe indicar un valor para las minutos.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
            if ($('#seconds').val() === "") {
                $('#val_time').text("Debe indicar un valor para las segundos.");
                $('#val_time').attr("hidden", false);
                validate = false;
            }
        }
        return validate;
    });

// Add the modal checked in the modal
    var selectedTollsArray = [];
    $('#tollsFares').click(function () {
        selectedTollsArray.length = 0;
        $("input:checkbox:checked").each(function () {
            selectedTollsArray.push($(this).val());
        });
        selectedTollsArray.forEach(function (element, index) {
            if (index === 0) {
                $('#selected_tolls').val(element);
            } else {
                var value = $('#selected_tolls').val();
                $('#selected_tolls').val("");
                $('#selected_tolls').val(value + " + " + element);
            }
        });
        $('#tollsModal').modal('hide');
    });

// Modal check what checkbox is checked
    $('input[type="checkbox"]').click(function () {
// Atenas
        if ($('#Atenas').is(":checked")) {
            $('#AtenasLabel').addClass("btn-update2");
        } else if ($('#Atenas').is(":not(:checked)")) {
            $('#AtenasLabel').removeClass("btn-update2");
        }
// Braulio Carrillo
        if ($('#BraulioCarrillo').is(":checked")) {
            $('#BraulioCarrilloLabel').addClass("btn-update2");
        } else if ($('#BraulioCarrillo').is(":not(:checked)")) {
            $('#BraulioCarrilloLabel').removeClass("btn-update2");
        }
// Bernardo Soto
        if ($('#BernardoSoto').is(":checked")) {
            $('#BernardoSotoLabel').addClass("btn-update2");
        } else if ($('#BernardoSoto').is(":not(:checked)")) {
            $('#BernardoSotoLabel').removeClass("btn-update2");
        }
// Cuidad Colón
        if ($('#CuidadColon').is(":checked")) {
            $('#CuidadColonLabel').addClass("btn-update2");
        } else if ($('#CuidadColon').is(":not(:checked)")) {
            $('#CuidadColonLabel').removeClass("btn-update2");
        }
// Escazú
        if ($('#Escazu').is(":checked")) {
            $('#EscazuLabel').addClass("btn-update2");
        } else if ($('#Escazu').is(":not(:checked)")) {
            $('#EscazuLabel').removeClass("btn-update2");
        }
// Florencio del Castillo
        if ($('#FlorencioDelCastillo').is(":checked")) {
            $('#FlorencioDelCastilloLabel').addClass("btn-update2");
        } else if ($('#FlorencioDelCastillo').is(":not(:checked)")) {
            $('#FlorencioDelCastilloLabel').removeClass("btn-update2");
        }
// General Cañas
        if ($('#GeneralCanas').is(":checked")) {
            $('#GeneralCanasLabel').addClass("btn-update2");
        } else if ($('#GeneralCanas').is(":not(:checked)")) {
            $('#GeneralCanasLabel').removeClass("btn-update2");
        }
// Guacima
        if ($('#Guacima').is(":checked")) {
            $('#GuacimaLabel').addClass("btn-update2");
        } else if ($('#Guacima').is(":not(:checked)")) {
            $('#GuacimaLabel').removeClass("btn-update2");
        }
// Pozón
        if ($('#Pozon').is(":checked")) {
            $('#PozonLabel').addClass("btn-update2");
        } else if ($('#Pozon').is(":not(:checked)")) {
            $('#PozonLabel').removeClass("btn-update2");
        }
// Rampa Atenas
        if ($('#RampaAtenas').is(":checked")) {
            $('#RampaAtenasLabel').addClass("btn-update2");
        } else if ($('#Atenas').is(":not(:checked)")) {
            $('#RampaAtenasLabel').removeClass("btn-update2");
        }
// Rampa Pozón
        if ($('#RampaPozon').is(":checked")) {
            $('#RampaPozonLabel').addClass("btn-update2");
        } else if ($('#RampaPozon').is(":not(:checked)")) {
            $('#RampaPozonLabel').removeClass("btn-update2");
        }
// San Rafael
        if ($('#SanRafael').is(":checked")) {
            $('#SanRafaelLabel').addClass("btn-update2");
        } else if ($('#SanRafael').is(":not(:checked)")) {
            $('#SanRafaelLabel').removeClass("btn-update2");
        }
// Siquiares
        if ($('#Siquiares').is(":checked")) {
            $('#SiquiaresLabel').addClass("btn-update2");
        } else if ($('#Siquiares').is(":not(:checked)")) {
            $('#SiquiaresLabel').removeClass("btn-update2");
        }
    });
}
);
