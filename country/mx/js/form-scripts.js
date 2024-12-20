var tollsNum = 1;
$(document).ready(function () {
    //Add new toll field
    $("#add_toll").on("click", function(e) {
        tollsNum ++;
        if(tollsNum === 2){
            var divTolls = $('#wrap-toll-1');
            var divToll = document.createElement("div");
            divToll.innerHTML = '<div id="wrap-toll-' + tollsNum + '" class="mb-3 row row-cols-lg-5 align-items-center"><label for="toll-' + tollsNum + '" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Peaje ' + tollsNum + ':</label><div class="col-sm-2 col-md-4 col-lg-6 col-form-label"><input type="number" id="toll-' + tollsNum + '" name="toll-' + tollsNum + '" class="form-control" placeholder="Peaje ' + tollsNum + '"></div><div class="col-sm-2 col-md-4 col-lg-4 col-form-label"><button type="button" id="delete_toll-' + tollsNum + '" class="btn btn-update btn-sm delete" value="' + tollsNum + '">-</button></div><label for="val_toll-' + tollsNum + '" class="col-sm-2 col-md-4 col-lg-2 col-form-label"></label><div class="col-sm-10 col-md-8 col-lg-10 col-form-label"><div id="val_toll-' + tollsNum + '" for="toll-' + tollsNum + '" class="alert alert-danger validation" role="alert" hidden="true"></div></div></div>';
            $(divToll).insertAfter(divTolls);
        } else {
            var divNum = tollsNum - 1;
            var newdiv = '#wrap-toll-' + divNum;
            var divTolls = $(newdiv);
            var divToll = document.createElement("div");
            divToll.innerHTML = '<div id="wrap-toll-' + tollsNum + '" class="mb-3 row row-cols-lg-5 align-items-center"><label for="toll-' + tollsNum + '" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Peaje ' + tollsNum + ':</label><div class="col-sm-2 col-md-4 col-lg-6 col-form-label"><input type="number" id="toll-' + tollsNum + '" name="toll-' + tollsNum + '" class="form-control" placeholder="Peaje ' + tollsNum + '"></div><div class="col-sm-2 col-md-4 col-lg-4 col-form-label"><button type="button" id="delete_toll-' + tollsNum + '" class="btn btn-update btn-sm delete" value="' + tollsNum + '">-</button></div><label for="val_toll-' + tollsNum + '" class="col-sm-2 col-md-4 col-lg-2 col-form-label"></label><div class="col-sm-10 col-md-8 col-lg-10 col-form-label"><div id="val_toll-' + tollsNum + '" for="toll-' + tollsNum + '" class="alert alert-danger validation" role="alert" hidden="true"></div></div></div>';
            $(divToll).insertAfter(divTolls);
        }
    });
 
    $(document).on("click", ".delete", function(e) {
        var bnum = $(this).val();
        var data = [];
        data.push($("#toll-1").val());
        for(var i = 2; i <= tollsNum; i++){
            if(i != bnum){
                var inputData = $("#toll-" + i).val();
                data.push(inputData);
            }
            var wrapper = $("#wrap-toll-" + i);
            $(wrapper).remove();
        }
        tollsNum--;
        $("#toll-1").val(data[0]);
        for(var i = 2; i <= tollsNum; i++){
            if(i === 2){
                var divTolls = $('#wrap-toll-1');
                var divToll = document.createElement("div");
                divToll.innerHTML = '<div id="wrap-toll-' + i + '" class="mb-3 row row-cols-lg-5 align-items-center"><label for="toll-' + i + '" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Peaje ' + i + ':</label><div class="col-sm-2 col-md-4 col-lg-6 col-form-label"><input type="number" id="toll-' + i + '" name="toll-' + i + '" class="form-control" placeholder="Peaje ' + i + '"></div><div class="col-sm-2 col-md-4 col-lg-4 col-form-label"><button type="button" id="delete_toll-' + i + '" class="btn btn-update btn-sm delete" value="' + i + '">-</button></div><label for="val_toll-' + i + '" class="col-sm-2 col-md-4 col-lg-2 col-form-label"></label><div class="col-sm-10 col-md-8 col-lg-10 col-form-label"><div id="val_toll-' + i + '" for="toll-' + i + '" class="alert alert-danger validation" role="alert" hidden="true"></div></div></div>';
                $(divToll).insertAfter(divTolls);
                $("#toll-" + i).val(data[i-1]);
            } else {
                var divNum = i - 1;
                var newdiv = '#wrap-toll-' + divNum;
                var divTolls = $(newdiv);
                var divToll = document.createElement("div");
                divToll.innerHTML = '<div id="wrap-toll-' + i + '" class="mb-3 row row-cols-lg-5 align-items-center"><label for="toll-' + i + '" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Peaje ' + i + ':</label><div class="col-sm-2 col-md-4 col-lg-6 col-form-label"><input type="number" id="toll-' + i + '" name="toll-' + i + '" class="form-control" placeholder="Peaje ' + i + '"></div><div class="col-sm-2 col-md-4 col-lg-4 col-form-label"><button type="button" id="delete_toll-' + i + '" class="btn btn-update btn-sm delete" value="' + i + '">-</button></div><label for="val_toll-' + i + '" class="col-sm-2 col-md-4 col-lg-2 col-form-label"></label><div class="col-sm-10 col-md-8 col-lg-10 col-form-label"><div id="val_toll-' + i + '" for="toll-' + i + '" class="alert alert-danger validation" role="alert" hidden="true"></div></div></div>';
                $(divToll).insertAfter(divTolls);
                $("#toll-" + i).val(data[i-1]);
            }
        }
    });

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
        if (tollsNum > 1) {
            for (var i = 1; i <= tollsNum; i++) {
                if (($('#toll-1').val() > 0 || $('#toll-1').val() === "") && i === 1) {
                    $('#val_toll-1').text("");
                    $('#val_toll-1').attr("hidden", true);
                }
                if ($('#toll-' + i).val() > 0 && i > 1) {
                    $('#val_toll-' + i).text("");
                    $('#val_toll-' + i).attr("hidden", true);
                }
            }
        }
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
        if ($('#toll-1').val() === "0"){
            $('#val_toll-1').text("Debe ingresar un valor para el peaje mayor a cero, o vacio.");
            $('#val_toll-1').attr("hidden", false);
            validate = false;
        }
        if ($('#toll-1').val() < 0) {
            $('#val_toll-1').text("El valor del peaje no puede ser negativo.");
            $('#val_toll-1').attr("hidden", false);
            validate = false;
        }
        if (tollsNum > 1){
            for(var i = 1; i <= tollsNum; i++){
                if ($('#toll-' + i).val() === "" && i > 1) {
                        $('#val_toll-' + i).text("El valor del peaje no puede ser vacio. Ingrese un valor o elimine el campo.");
                        $('#val_toll-' + i).attr("hidden", false);
                        validate = false;
                }
                if ($('#toll-' + i).val() === "0") {
                    $('#val_toll-' + i).text("Debe ingresar un valor para el peaje mayor a cero.");
                    $('#val_toll-' + i).attr("hidden", false);
                    validate = false;
                }
                if ($('#toll-' + i).val() < 0) {
                    $('#val_toll-' + i).text("El valor del peaje no puede ser negativo.");
                    $('#val_toll-' + i).attr("hidden", false);
                    validate = false;
                }              
            }
        }
        //Validate if you just select 1 toll
        if (tollsNum === 1){
            $('#num-tolls').val(1);
            if($('#toll-1').val() > 0 && $('#toll-1').val() !== 0){
                $('#selected_tolls').val($('#toll-1').val());
            }

        }    
        //Validate multiple tolls fields
        if (tollsNum > 1){
           $('#num-tolls').val(tollsNum); 
            for (var i = 1; i <= tollsNum; i++) {
                var aux = 0;
                if (i === 1) {
                    if ($('#toll-' + i).val() === "") {
                        $('#selected_tolls').val(0 + " + ");
                    } else {
                        $('#selected_tolls').val($('#toll-' + i).val() + " + ");
                    }
                }
                if (i > 1 && i != tollsNum) {
                    aux = $('#selected_tolls').val();
                    if ($('#toll-' + i).val() === "") {
                        $('#selected_tolls').val(aux + 0 + " + ");
                    } else {
                        $('#selected_tolls').val(aux + $('#toll-' + i).val() + " + ");
                    }
                }
                if (i === tollsNum) {
                    aux = $('#selected_tolls').val();
                    if ($('#toll-' + i).val() === "") {
                        $('#selected_tolls').val(aux + 0);
                    } else {
                        $('#selected_tolls').val(aux + $('#toll-' + i).val());
                    }
                }
            }
        }       
        return validate;
    });

// Validate the simple form
    $('#form_simpl_calc').submit(function () {
        var validate = true;
        $('#val_kilometers').attr("hidden", true);
        $('#val_time').attr("hidden", true);
        if (tollsNum > 1) {
            for (var i = 1; i <= tollsNum; i++) {
                if (($('#toll-1').val() > 0 || $('#toll-1').val() === "") && i === 1) {
                    $('#val_toll-1').text("");
                    $('#val_toll-1').attr("hidden", true);
                }
                if ($('#toll-' + i).val() > 0 && i > 1) {
                    $('#val_toll-' + i).text("");
                    $('#val_toll-' + i).attr("hidden", true);
                }
            }
        }        
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
                $('#val_hours').text("Debe indicar un valor para las horas.");
                $('#val_hours').attr("hidden", false);
                validate = false;
            }
            if ($('#minutes').val() === "") {
                $('#val_hours').text("Debe indicar un valor para las minutos.");
                $('#val_hours').attr("hidden", false);
                validate = false;
            }
            if ($('#seconds').val() === "") {
                $('#val_hours').text("Debe indicar un valor para las segundos.");
                $('#val_hours').attr("hidden", false);
                validate = false;
            }
        }
        if ($('#toll-1').val() === "0"){
            $('#val_toll-1').text("Debe ingresar un valor para el peaje mayor a cero, o vacio.");
            $('#val_toll-1').attr("hidden", false);
            validate = false;
        }
        if ($('#toll-1').val() < 0) {
            $('#val_toll-1').text("El valor del peaje no puede ser negativo.");
            $('#val_toll-1').attr("hidden", false);
            validate = false;
        }
        if (tollsNum > 1){
            for(var i = 1; i <= tollsNum; i++){
                if ($('#toll-' + i).val() === "" && i > 1) {
                        $('#val_toll-' + i).text("El valor del peaje no puede ser vacio. Ingrese un valor o elimine el campo.");
                        $('#val_toll-' + i).attr("hidden", false);
                        validate = false;
                }
                if ($('#toll-' + i).val() === "0") {
                    $('#val_toll-' + i).text("Debe ingresar un valor para el peaje mayor a cero.");
                    $('#val_toll-' + i).attr("hidden", false);
                    validate = false;
                }
                if ($('#toll-' + i).val() < 0) {
                    $('#val_toll-' + i).text("El valor del peaje no puede ser negativo.");
                    $('#val_toll-' + i).attr("hidden", false);
                    validate = false;
                }              
            }
        }        
        //Validate if you just select 1 toll
        if (tollsNum === 1){
            $('#num-tolls').val(1);
            if($('#toll-1').val() > 0 && $('#toll-1').val() !== 0){
                $('#selected_tolls').val($('#toll-1').val());
            }

        }    
        //Validate multiple tolls fields
        if (tollsNum > 1){
           $('#num-tolls').val(tollsNum); 
            for (var i = 1; i <= tollsNum; i++) {
                var aux = 0;
                if (i === 1) {
                    if ($('#toll-' + i).val() === "") {
                        $('#selected_tolls').val(0 + "+");
                    } else {
                        $('#selected_tolls').val($('#toll-' + i).val() + "+");
                    }
                }
                if (i > 1 && i != tollsNum) {
                    aux = $('#selected_tolls').val();
                    if ($('#toll-' + i).val() === "") {
                        $('#selected_tolls').val(aux + 0 + "+");
                    } else {
                        $('#selected_tolls').val(aux + $('#toll-' + i).val() + "+");
                    }
                }
                if (i === tollsNum) {
                    aux = $('#selected_tolls').val();
                    if ($('#toll-' + i).val() === "") {
                        $('#selected_tolls').val(aux + 0);
                    } else {
                        $('#selected_tolls').val(aux + $('#toll-' + i).val());
                    }
                }
            }
        }         
        return validate;
    });
}
);
