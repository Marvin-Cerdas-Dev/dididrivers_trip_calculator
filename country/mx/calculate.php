<!DOCTYPE html>
<?php include_once("./includes/analyticstracking.php") ?>
<?php include_once("includes/viajeExpress.php") ?>
<?php include_once("./includes/viajeProtect.php") ?>
<?php include_once("./includes/viajeEconomy.php") ?>
<?php include_once("./includes/viajeEntrega.php") ?>
<?php 
$calculation_type = filter_input(INPUT_POST, 'calculating');
$service_type = filter_input(INPUT_POST, 'service');
$payment_type = filter_input(INPUT_POST, 'payment');
$RFC = filter_input(INPUT_POST, 'RFC');
$eGuanajuato = filter_input(INPUT_POST, 'Guanajuato');
$error = false;
if ($calculation_type == 'Simple') {
    $kilometers = filter_input(INPUT_POST, 'kilometers');
    $hours = filter_input(INPUT_POST, 'hours');
    $minutes = filter_input(INPUT_POST, 'minutes');
    $seconds = filter_input(INPUT_POST, 'seconds');
    $fare = filter_input(INPUT_POST, 'fare');
    $tolls = filter_input(INPUT_POST, 'selected_tolls');
    if (filter_input(INPUT_POST, 'discount') == "") {
        $discount = 0;
    } else {
        $discount = filter_input(INPUT_POST, 'discount');
    }
    if (filter_input(INPUT_POST, 'pendingamount') == "") {
        $pendingAmount = 0;
    } else {
        $pendingAmount = filter_input(INPUT_POST, 'pendingamount');
    }
    if (filter_input(INPUT_POST, 'extra') == "") {
        $extras = 0;
    } else {
        $extras = filter_input(INPUT_POST, 'extra');
    }
    if ($service_type == 'Express') {
        $viaje = new viajeExpress($kilometers, $hours, $minutes, $seconds, $fare, $tolls, 0.0, 0.0, $pendingAmount, 0.0, $extras, $payment_type, $RFC, $eGuanajuato);
    }
    if ($service_type == 'Protect') {
        $viaje = new viajeProtect($kilometers, $hours, $minutes, $seconds, $fare, $tolls, 0.0, 0.0, $pendingAmount, 0.0, $extras, $payment_type, $RFC, $eGuanajuato);
    }
    if ($service_type == 'Entrega') {
        $viaje = new viajeEntrega($kilometers, $hours, $minutes, $seconds, $fare, $tolls, 0.0, 0.0, $pendingAmount, 0.0, $extras, $payment_type, $RFC, $eGuanajuato);
    }
    if ($service_type == 'Economy') {
        $viaje = new viajeEconomy($kilometers, $hours, $minutes, $seconds, $fare, $tolls, 0.0, 0.0, $pendingAmount, 0.0, $extras, $payment_type, $RFC, $eGuanajuato);
    }
    $viaje->calculaMontoTotalViaje();
} else {
    $error = true;
}
if ($calculation_type == 'Details') {
    $kilometers = filter_input(INPUT_POST, 'kilometers');
    $hours = filter_input(INPUT_POST, 'hours');
    $minutes = filter_input(INPUT_POST, 'minutes');
    $seconds = filter_input(INPUT_POST, 'seconds');
    $fare = filter_input(INPUT_POST, 'fare');
    $tolls = filter_input(INPUT_POST, 'selected_tolls');
    $earnings = filter_input(INPUT_POST, 'earnings');
    $totalTripPrice = filter_input(INPUT_POST, 'totalTripPrice');
    if (filter_input(INPUT_POST, 'discount') == "") {
        $discount = 0;
    } else {
        $discount = filter_input(INPUT_POST, 'discount');
    }
    if (filter_input(INPUT_POST, 'pendingamount') == "") {
        $pendingAmount = 0;
    } else {
        $pendingAmount = filter_input(INPUT_POST, 'pendingamount');
    }
    if (filter_input(INPUT_POST, 'extra') == "") {
        $extras = 0;
    } else {
        $extras = filter_input(INPUT_POST, 'extra');
    }
    if ($service_type == 'Express') {
        $viaje = new viajeExpress($kilometers, $hours, $minutes, $seconds, $fare, $tolls, $earnings, $totalTripPrice, $pendingAmount, $discount, $extras, $payment_type, $RFC, $eGuanajuato);
    }
    if ($service_type == 'Protect') {
        $viaje = new viajeProtect($kilometers, $hours, $minutes, $seconds, $fare, $tolls, $earnings, $totalTripPrice, $pendingAmount, $discount, $extras, $payment_type, $RFC, $eGuanajuato);
    }
    if ($service_type == 'Entrega') {
        $viaje = new viajeEntrega($kilometers, $hours, $minutes, $seconds, $fare, $tolls, $earnings, $totalTripPrice, $pendingAmount, $discount, $extras, $payment_type, $RFC, $eGuanajuato);
    }
    if ($service_type == 'Economy') {
        $viaje = new viajeEconomy($kilometers, $hours, $minutes, $seconds, $fare, $tolls, $earnings, $totalTripPrice, $pendingAmount, $discount, $extras, $payment_type, $RFC, $eGuanajuato);
    }
    $difference = $viaje->getDifference();
} else {
    $error = true;
}
?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil, segura y 100% gratuito">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, México">
        <meta http-equiv="Expires" content="5">

        <!-- Canonical Tag -->        
        <link rel="canonical" href="https://crdidicalc.azurewebsites.net/country/mx/" />

        <!-- Facebook Meta Tags -->
        <meta property="og:url" content="https://crdidicalc.azurewebsites.net/">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Calculadora de viajes de Didi">
        <meta property="og:description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil, segura y 100% gratuito">
        <meta property="og:image" content="https://crdidicalc.azurewebsites.net/img/calculator-128.png">

        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="crdidicalc.azurewebsites.net">
        <meta property="twitter:url" content="https://crdidicalc.azurewebsites.net/">
        <meta name="twitter:title" content="Calculadora de viajes de Didi">
        <meta name="twitter:description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta property="twitter:image:alt" content="DidiCalc">
        <meta name="twitter:image" content="https://crdidicalc.azurewebsites.net/img/calculator-128.png">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
        <meta name="theme-color" content="#ffffff">

        <script type="application/ld+json">
            {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "DidiCalc",
            "url": "https://crdidicalc.azurewebsites.net/",
            "address": "México",
            "sameAs": [
            "https://www.facebook.com/calculadoradeplataformasdigitales/"
            ]
            }
        </script>

        <script type="application/ld+json">
            {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "DidiCalc",
            "url": "http://crdidicalc.azurewebsites.net/",
            "address": "México",
            "potentialAction": {
            "@type": "SearchAction",
            "target": "http://crdidicalc.azurewebsites.net/search?q={search_term_string}Buscar",
            "query-input": "required name=search_term_string"
            }
            }
        </script>
        
        <!--AdSense-->
        <?php include_once("includes/ads.php") ?>     

        <!-- build:css css/styles.css -->
        <link rel="stylesheet" href="css/default.css">
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">        
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Cálculo de viaje de Didi</title> 

        <!-- Send the difference value to change color -->
        <script type="text/javascript">difference = <?php echo number_format($difference, 2) ?></script>
    </head>
    <body>
        <!-- Cookies modal -->
        <?php include_once("includes/cookies_modal.php") ?>
        <!-- Content -->        
        <header>
            <?php include_once("includes/header.php") ?>
        </header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md12 col-lg-12">
                    <div class="thumbnail"> 
                        <?php if ($error != false) { ?> 
                            <?php if ($calculation_type == 'Simple') { ?>
                                <div class="horizontal-center litle-margins"><h1>Cálculo de simple viaje</h1></div>
                                <div class="justify-text alert alert-info" role="alert">
                                    <strong>Información del viaje:<br></strong>
                                    <?php echo 'Tipo de servicio: Didi ' . $service_type; ?><br>
                                    <?php echo 'Método de pago: ' . $payment_type; ?><br>
                                    <?php $viaje->toStringSimple(); ?><br> 
                                    <hr>
                                    <p><strong>Ganancia del viaje = <?php $viaje->toString_Ganancia() ?></strong></p>

                                </div>
                                <?php
                            }
                            if ($calculation_type == 'Details') {
                                ?>
                                <div class="horizontal-center litle-margins"><h2>Cálculo detallado de viaje</h2></div>                              
                                <div id="contCalcViaje" class="justify-text alert" role="alert">
                                    <h4>Detalle del viaje</h4>
                                    <p><?php echo 'Tipo de servicio: Didi ' . $service_type; ?></p>
                                    <p><?php echo 'Método de pago: ' . $payment_type; ?></p>
                                    <?php if ($viaje->getKilometers() <= 1.5 && $viaje->getFare() == 0) { ?> 
                                        <p>Cantidad de Kilómetros = <?php echo number_format($viaje->getKilometers(), 2) ?></p> 
                                        <p>Cantidad de Minutos = <?php echo number_format($viaje->getTime(), 2) ?></p>
                                        <p>Monto de tarifa mínima = <?php echo "&#36;" . number_format($viaje->getMinimunFare(), 2) ?></p> 
                                        <?php if ($viaje->getTotalTolls() > 0) { ?> <!-- Si esta en los metodos -->
                                            <p>Monto por peajes = <?php echo "&#36;" . $viaje->getTotalTolls() . " => (" . $viaje->getTolls() . ")" ?></p> 
                                        <?php } ?>
                                        <?php if ($viaje->getExtraAmount() > 0) { ?>
                                            <p>Gratificación extra = <?php echo "&#36;" . $viaje->getExtraAmount() ?></p>
                                        <?php } ?>
                                        <?php if ($viaje->getPendingAmount() > 0 && $viaje->getPayment() == "Efectivo") { ?>
                                            <p>Saldo pendiente = <?php echo "&#36;" . $viaje->getPendingAmount() ?></p>
                                        <?php } ?>                                          
                                        <p>Monto total = <?php number_format($viaje->toString_montoTotal(), 2) ?></p> 
                                        <p>Comisión de Didi = <?php echo "&#36;" . number_format($viaje->calculaComisionDidi(), 2) ?></p>                         
                                        <p>Detalle de impuestos: <?php $viaje->toString_taxes() ?></p>
                                        <p><strong>Monto de ganancia = <?php $viaje->toString_Ganancia() ?></strong></p>
                                        <hr>
                                        <h4>Detalle ganancias reportadas en la aplicación</h4>
                                        <p>Total del viaje = <?php echo "&#36;" . number_format($viaje->getTotalTripPrice(), 2) ?></p>
                                        <?php if ($viaje->getDiscount() > 0) { ?>
                                            <p>Descuentos = <?php echo "&#36;" . number_format($viaje->getDiscount(), 2) ?></p>
                                        <?php } ?>
                                        <?php if ($viaje->getPendingAmount() > 0 && $viaje->getPayment() == "Tarjeta") { ?>
                                            <p>Saldo pendiente = <?php echo "&#36;" . $viaje->getPendingAmount() ?></p>
                                        <?php } ?>   
                                        <p>Ganancia del viaje = <?php echo "&#36;" . number_format($viaje->getEarnings(), 2) ?></p>
                                        <p><strong>Diferencia = <?php $viaje->toStringDifference() ?></strong></p>                                   
                                    <?php } else { ?>
                                        <p>Tarifa base = <?php echo "&#36;" . $viaje->getBasicFare() ?></p>
                                        <p>Monto por kilometraje = <?php number_format($viaje->toString_montoKilometraje(), 2) ?></p>
                                        <p>Monto por tiempo = <?php number_format($viaje->toString_montoTiempo(), 2) ?></p>
                                        <?php if ($fare > 0.1) { ?>
                                            <p>Monto tarifa dinámica = <?php number_format($viaje->toString_montoDinamica(), 2) ?></p>
                                        <?php } ?>
                                        <?php if ($tolls > 0) { ?>    
                                            <p>Monto por peajes = <?php echo "&#36;" . $viaje->getTotalTolls() . " => (" . $viaje->getTolls() . ")" ?></p>
                                        <?php } ?>
                                        <?php if ($viaje->getExtraAmount() > 0) { ?>
                                            <p>Gratificación extra = <?php echo "&#36;" . $viaje->getExtraAmount() ?></p>
                                        <?php } ?>
                                        <?php if ($viaje->getPendingAmount() > 0 && $viaje->getPayment() == "Efectivo") { ?>
                                            <p>Saldo pendiente = <?php echo "&#36;" . $viaje->getPendingAmount() ?></p>
                                        <?php } ?>                                        
                                        <p>Monto total = <?php number_format($viaje->toString_montoTotal(), 2) ?></p>
                                        <p>Comisión de Didi = <?php echo "&#36;" . number_format($viaje->calculaComisionDidi(), 2) ?></p>
                                        <p>Detalle de impuestos: <?php $viaje->toString_taxes() ?></p>
                                        <p><strong>Monto de ganancia = <?php $viaje->toString_Ganancia() ?></strong></p>
                                        <hr>
                                        <h4>Detalle ganancias reportadas en la aplicación</h4>
                                        <p>Total del viaje = <?php echo "&#36;" . number_format($viaje->getTotalTripPrice(), 2) ?></p>
                                        <?php if ($viaje->getDiscount() > 0) { ?>
                                            <p>Descuentos = <?php echo "&#36;" . number_format($viaje->getDiscount(), 2) ?></p>
                                        <?php } ?>
                                        <?php if ($viaje->getPendingAmount() > 0 && $viaje->getPayment() == "Tarjeta") { ?>
                                            <p>Saldo pendiente = <?php echo "&#36;" . $viaje->getPendingAmount() ?></p>
                                        <?php } ?>   
                                        <p>Ganancia del viaje = <?php echo "&#36;" . number_format($viaje->getEarnings(), 2) ?></p>
                                        <p><strong>Diferencia = <?php $viaje->toStringDifference() ?></strong></p>
                                    <?php } ?>  
                                    <?php if ($viaje->getDifference() < 0) { ?>
                                        <button type="button" class="btn btn-update btn-lg" data-bs-toggle="modal" data-bs-target="#supportMessageModal">Mensaje para revisión de tarifa</button>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                            <?php
                        } else {
                            // Redirect to error because $calculation_type is undefine 
                            header("Location: https://crubercalc.azurewebsites.net/country/mx/error.php?calculate=true");
                        }
                        ?>   
                    </div>
                </div>
            </div>
        </div>



        <!-- Message Modal -->
        <div id="supportMessageModal" class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Mensaje para revisión de tarifas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p id="supportMessage">
                            ¡Hola! Estaba revisando mis ganancias y he notado que en este viaje existe una 
                            diferencia, según los datos en la aplicación y el cálculo que he hecho. Por tal 
                            razón adjunto el detalle del cálculo correcto para el viaje: <br><br>

                            Detalle del viaje<br>
                            <?php echo 'Tipo de servicio: Didi' . $service_type; ?><br>
                            <?php echo 'Tipo de pago: ' . $payment_type; ?><br>
                            <?php if ($viaje->getKilometers() <= 1.5 && $viaje->getFare() == 0) { ?>
                                Cantidad de kilómetros recorridos: <?php echo number_format($viaje->getKilometers(), 2) ?><br>
                                Cantidad de tiempo: <?php echo number_format($viaje->getTime(), 2) ?> en minutos.<br>
                                Monto de tarifa mínima: <?php echo "&#36;" . number_format($viaje->getMinimunFare(), 2) ?><br>
                                <?php if ($viaje->getTotalTolls() > 0) { ?>
                                    Monto por peajes = <?php echo "&#36;" . $viaje->getTotalTolls() . " => (" . $viaje->getTolls() . ")" ?><br>
                                <?php } ?>
                                <?php if ($viaje->getExtraAmount() > 0) { ?>
                                    Gratificación extra = <?php echo "&#36;" . $viaje->getExtraAmount() ?><br>
                                <?php } ?>
                                <?php if ($viaje->getPendingAmount() > 0 && $viaje->getPayment() == "Efectivo") { ?>
                                    Saldo pendiente = <?php echo "&#36;" . $viaje->getPendingAmount() ?><br>
                                <?php } ?>
                                Monto total = <?php number_format($viaje->toString_montoTotal(), 2) ?><br>
                                Comisión de la aplicación: <?php echo "&#36;" . number_format($viaje->calculaComisionDidi(), 2) ?><br>
                                Detalle de impuestos: <?php $viaje->toString_taxesModal() ?><br>
                                <strong>Monto de ganancia = <?php echo "&#36;" . number_format($viaje->calculaGanancia(), 2) ?></strong><br><br>
                                Detalle ganancias reportadas en la aplicación<br>
                                Total del viaje = <?php echo "&#36;" . number_format($viaje->getTotalTripPrice(), 2) ?><br>
                                <?php if ($viaje->getDiscount() > 0) { ?>
                                    Descuentos = <?php echo "&#36;" . number_format($viaje->getDiscount(), 2) ?><br>
                                <?php } ?>
                                <?php if ($viaje->getPendingAmount() > 0 && $viaje->getPayment() == "Tarjeta") { ?>
                                    Saldo pendiente = <?php echo "&#36;" . $viaje->getPendingAmount() ?><br>
                                <?php } ?>   
                                Ganancia del viaje = <?php echo "&#36;" . number_format($viaje->getEarnings(), 2) ?><br>
                                <strong>Diferencia = <?php $viaje->toStringDifference() ?></strong><br><br>
                                Por tanto existen una diferencia de <?php $viaje->toStringDifference() ?><br><br>            
                                Espero me puedan ayudar.<br>
                                Saludos.<br>
                            <?php } else { ?>
                                Tarifa base = <?php echo "&#36;" . $viaje->getBasicFare() ?><br>
                                Monto por kilometraje = <?php number_format($viaje->toString_montoKilometraje(), 2) ?><br>
                                Monto por tiempo = <?php number_format($viaje->toString_montoTiempo(), 2) ?><br>
                                <?php if ($fare > 0.1) { ?>
                                    Monto tarifa dinámica = <?php number_format($viaje->toString_montoDinamica(), 2) ?><br>
                                <?php } ?>
                                <?php if ($tolls > 0) { ?>
                                    Monto por peajes = <?php echo "&#36;" . $viaje->getTotalTolls() . " => (" . $viaje->getTolls() . ")" ?><br>
                                <?php } ?>
                                <?php if ($viaje->getExtraAmount() > 0) { ?>
                                    Gratificación extra = <?php echo "&#36;" . $viaje->getExtraAmount() ?><br>
                                <?php } ?>
                                <?php if ($viaje->getPendingAmount() > 0 && $viaje->getPayment() == "Efectivo") { ?>
                                    Saldo pendiente = <?php echo "&#36;" . $viaje->getPendingAmount() ?><br>
                                <?php } ?>                                  
                                Monto total = <?php number_format($viaje->toString_montoTotal(), 2) ?><br>
                                Comisión de Didi = <?php echo "&#36;" . number_format($viaje->calculaComisionDidi(), 2) ?><br>
                                Detalle de impuestos: <?php $viaje->toString_taxesModal() ?><br>
                                <strong>Monto de ganancia = <?php echo "&#36;" . number_format($viaje->calculaGanancia(), 2) ?></strong><br><br>
                                Detalle ganancias reportadas en la aplicación<br>
                                Total del viaje = <?php echo "&#36;" . number_format($viaje->getTotalTripPrice(), 2) ?><br>
                                <?php if ($viaje->getDiscount() > 0) { ?>
                                    Descuentos = <?php echo "&#36;" . number_format($viaje->getDiscount(), 2) ?><br>
                                <?php } ?>
                                <?php if ($viaje->getPendingAmount() > 0 && $viaje->getPayment() == "Tarjeta") { ?>
                                    Saldo pendiente = <?php echo "&#36;" . $viaje->getPendingAmount() ?><br>
                                <?php } ?>   
                                Ganancia del viaje = <?php echo "&#36;" . number_format($viaje->getEarnings(), 2) ?><br>
                                <strong>Diferencia = <?php $viaje->toStringDifference() ?></strong><br><br>
                                Por tanto existen una diferencia de <?php $viaje->toStringDifference() ?><br><br>            
                                Espero me puedan ayudar.<br>
                                Saludos.<br>
                            <?php } ?>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-update2" data-bs-dismiss="modal">Cerrar</button>
                        <button id="tollsFares" type="button" class="btn btn-update" onclick="CopyToClipboard('supportMessage')">Copiar</button>
                    </div>
                </div>
            </div>
        </div>

        <footer><?php include_once("includes/footer.php") ?></footer>
        <!-- build:js js/js.js -->
        <script src="../../node_modules/jquery/dist/jquery.js"></script>
        <script src="../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
        <script src="js/index-scripts.js"></script>
        <script src="js/form-scripts.js"></script>
        <script src="js/calculatescripts.js"></script>
        <script src="js/defaultscripts.js"></script>
        <script src="js/jquery.cookie.js"></script>
        <!-- endbuild -->
    </body>
</html>




