<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<?php include_once("includes/viajeExpress.php") ?>
<?php
$calculation_type = filter_input(INPUT_POST, 'calculating');
$service_type = filter_input(INPUT_POST, 'service');
$error = false;
if ($calculation_type == 'Simple') {
    if ($service_type == 'Express') {
        $kilometers = filter_input(INPUT_POST, 'kilometers');
        $hours = filter_input(INPUT_POST, 'hours');
        $minutes = filter_input(INPUT_POST, 'minutes');
        $seconds = filter_input(INPUT_POST, 'seconds');
        $fare = filter_input(INPUT_POST, 'fare');
        $tolls = filter_input(INPUT_POST, 'selected_tolls');
        $viaje = new viajeExpress($kilometers, $hours, $minutes, $seconds, $fare, $tolls, 0.0, 0.0);
        $viaje->calculaMontoTotalViaje();
    }
} else {
    $error = true;
}
if ($calculation_type == 'Details') {
    if ($service_type == 'Express') {
        $kilometers = filter_input(INPUT_POST, 'kilometers');
        $hours = filter_input(INPUT_POST, 'hours');
        $minutes = filter_input(INPUT_POST, 'minutes');
        $seconds = filter_input(INPUT_POST, 'seconds');
        $fare = filter_input(INPUT_POST, 'fare');
        $tolls = filter_input(INPUT_POST, 'selected_tolls');
        $earnings = filter_input(INPUT_POST, 'earnings');
        $tollstotalTripPrice = filter_input(INPUT_POST, 'totalTripPrice');
        $viaje = new viajeExpress($kilometers, $hours, $minutes, $seconds, $fare, $tolls, $earnings, $tollstotalTripPrice);
        $difference = $viaje->getDifference();
    }
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
        <meta name="description" content="Podras verificar tus viajes de la plataforma Didi de una forma, rápida, fácil y segura">
        <meta http-equiv="Expires" content="5">

        <!-- Miniature -->
        <meta property="og:title" content="Calculadora de viajes de Didi" />
        <meta property="og:site_name" content="DidiCalc">
        <meta property="og:url" content="http://crdidicalc.azurewebsites.net/" />
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Aquí podras verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta property="og:image" content="http://crdidicalc.azurewebsites.net/images/calculator_256.png">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
        <link rel="manifest" href="images/manifest.json">
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
        <meta name="theme-color" content="#ffffff">

        <!-- Title -->
        <title>DidiCalc - Calculadora de viajes de Didi</title>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <!-- Default Css Style -->
        <link href="css/default.css" rel="stylesheet">        

        <!-- Send the difference value to change color -->
        <script type="text/javascript">difference = <?php echo number_format($difference, 2) ?></script>
    </head>
    <!-- Cookies modal -->
    <div class="modal fade" id="cookieModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-update" role="document">
            <div class="modal-content modal-content-update">
                <div class="modal-body">
                    <div class="notice d-flex justify-content-between align-items-center">
                        <div class="cookie-text">Al usar este sitio acepta el uso de cookies para análisis y contenido personalizado. <button id="learMore" type="button" class="btn btn-update2 buttons btn-sm">Leer más</button></div>
                        <div class="buttons d-flex flex-column flex-lg-row">
                            <button id="acept" type="button" class="btn btn-update buttons btn-sm" data-dismiss="modal">Acepto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                            <div class="horizontal-center"><h2>Calculo de simple viaje</h2></div>
                            <div class="horizontal-center col-sm-12 col-md12 col-lg-12">
                                <!--AdSense-->
                                <?php include_once("includes/ads.php") ?>  
                                <!--AdSense-->
                            </div> 
                            <div class="justify-text alert alert-info" role="alert">
                                <strong>Información del viaje:<br></strong>
                                <?php echo 'Tipo de servicio: Didi ' . $service_type; ?><br>
                                <?php echo $viaje->toString(); ?><br>
                                <hr>
                                <strong><?php echo "Monto total: &#8353;" . number_format($viaje->calculaMontoTotalViaje(), 2) ?></strong>
                            </div>
                        <?php } 
                        if ($calculation_type == 'Details') {
                        ?>
                            <div class="horizontal-center"><h2>Calculo detallado de viaje</h2></div>
                            <div class="horizontal-center col-sm-12 col-md12 col-lg-12">
                                <!--AdSense-->
                                <?php include_once("includes/ads.php") ?>  
                                <!--AdSense-->
                            </div>                                
                            <div id="contCalcViaje" class="justify-text alert" role="alert">
                                <h4>Detalle del viaje</h4>
                                <p><?php echo 'Tipo de servicio: Didi ' . $service_type; ?></p>
                                <?php if ($viaje->getKilometers() <= 1.5 && $viaje->getFare() == 0) { ?>
                                    <p>Cantidad de Kilometros = <?php echo number_format($viaje->getKilometers(), 2) ?></p>
                                    <p>Cantidad de Minutos = <?php echo number_format($viaje->getTime(), 2) ?></p>
                                    <p>Monto de tarifa mínima= <?php echo "&#8353;" . number_format($viaje->getMinimunFare(), 2) ?></p>
                                    <?php if ($viaje->getTotalTolls() > 0) { ?>
                                    <p>Monto por peajes = <?php echo "&#8353;" . $viaje->getTotalTolls() . " (" . $viaje->getTolls() . ")" ?></p>
                                    <?php } ?>
                                    <p>Comisión de Didi = <?php echo "&#8353;" . number_format($viaje->calculaComisionDidi(), 2) ?></p>
                                    <p><strong>Monto de ganancia = <?php echo "&#8353;" . number_format($viaje->toString_montoGanancia(), 2) ?></strong></p>
                                    <hr>
                                    <h4>Detalle ganancias reportadas en la aplicación</h4>
                                    <p>Total del viaje = <?php echo "&#8353;" . number_format($viaje->getTotalTripPrice(), 2) ?></p>
                                    <p>Ganancia del viaje = <?php echo "&#8353;" . number_format($viaje->getEarnings(), 2) ?></p>
                                    <p><strong>Diferencia = <?php echo "&#8353;" . number_format($viaje->getDifference(), 2) ?></strong></p>                                    
                                <?php } else { ?>
                                    <p>Monto por kilometraje = <?php number_format($viaje->toString_montoKilometraje(), 2) ?></p>
                                    <p>Monto por tiempo = <?php number_format($viaje->toString_montoTiempo(), 2) ?></p>
                                    <?php if ($fare > 0.1) { ?>
                                        <p>Monto tarifa dinámica = <?php number_format($viaje->toString_montoDinamica(), 2) ?></p>
                                    <?php } ?>
                                    <?php if ($tolls > 0) { ?>    
                                        <p>Monto por peajes = <?php echo $viaje->getPeajes() ?></p>
                                    <?php } ?>
                                    <p>Monto total = <?php number_format($viaje->toString_montoTotal(), 2) ?></p>
                                    <p>Comisión de Didi = <?php echo "&#8353;" . number_format($viaje->calculaComisionDidi(), 2) ?></p>
                                    <p><strong>Monto de ganancia = <?php echo "&#8353;" . number_format($viaje->calculaGanancia(), 2) ?></strong></p>
                                    <hr>
                                    <h4>Detalle ganancias reportadas en la aplicación</h4>
                                    <p>Total del viaje = <?php echo "&#8353;" . number_format($viaje->getMontoTotalDelViaje(), 2) ?></p>
                                    <p>Ganancia del viaje = <?php echo "&#8353;" . number_format($viaje->getMontoGanado(), 2) ?></p>
                                    <p><strong>Diferencia = <?php echo "&#8353;" . number_format($difference, 2) ?></strong></p>
                                <?php } ?>
                                <?php if ($viaje->getDifference() < 0) { ?>
                                    <button type="button" class="btn btn-update btn-sm" data-toggle="modal" data-target="#supportMessageModal">Mensaje para revisión de tarifa</button>
                                <?php } ?>
                            </div>
                        <?php } ?>
                        <?php
                    } else {
                        // Redirect to error because $calculation_type is undefine 
                        header("Location: https://crdidicalc.azurewebsites.net/calculationError.php");
                    }
                    ?>   
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Modal -->
<div class="modal fade" id="supportMessageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Mensaje para revisión de tarifas</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">           
                <p id="supportMessage">
                    ¡Hola! Estaba revisando mis granacias y he notado que en este viaje existe una diferencia, 
                    según los datos en la aplicación y el calculo que he hecho. Por tal razón adjunto el detalle 
                    del calculo correcto para el viaje: <br><br>

                    Detalle del viaje <br>
                    <?php echo 'Tipo de servicio: Didi' . $service_type; ?><br>
                    <?php if ($viaje->getKilometers() <= 1.5 && $viaje->getFare() == 0) { ?>
                        Cantidad de kilometros recorridos: <?php echo number_format($viaje->getKilometers(), 2) ?><br>
                        Cantidad de tiempo: <?php echo number_format($viaje->getTime(), 2) ?> en minutos.<br>
                        Monto de tarifa mínima= <?php echo "&#8353;" . number_format($viaje->getMinimunFare(), 2) ?><br>
                        <?php if ($viaje->getTotalTolls() > 0) { ?>
                            Monto por peajes: <?php echo "&#8353;" . $viaje->getTotalTolls() . " (" . $viaje->getTolls() . ")" ?><br>
                        <?php } ?>
                        Comisión de la aplicación: <?php echo "&#8353;" . number_format($viaje->calculaComisionDidi(), 2) ?><br>
                        <strong>Monto de ganancia: <?php echo "&#8353;" . number_format($viaje->toString_montoGanancia(), 2) ?></strong><br>
                        Detalle ganancias reportadas en la aplicación<br>
                        Total del viaje: <?php echo "&#8353;" . number_format($viaje->getTotalTripPrice(), 2) ?><br>
                        Ganancia del viaje: <?php echo "&#8353;" . number_format($viaje->getEarnings(), 2) ?><br>
                        <strong>Diferencia: <?php echo "&#8353;" . number_format($viaje->getDifference(), 2) ?></strong><br>
                        Por tanto existen una diferencia de <?php echo "&#8353;" . number_format($viaje->getDifference(), 2) ?><br><br>
                        Espero me puedan ayudar.<br>
                        Saludos.<br>
                    <?php } else { ?>
                    <!--<?php /*echo 'Tipo de servicio: Didi' . $service_type; ?><br>
                    Tarifa base = <?php echo "&#8353;" . $viaje->getBasicFare() ?><br>
                    Monto por kilometraje = <?php number_format($viaje->toString_montoKilometraje(), 2) ?><br>
                    Monto por tiempo = <?php number_format($viaje->toString_montoTiempo(), 2) ?><br>
                    <?php if ($fare > 0.1) { ?>
                        Monto tarifa dinámica = <?php number_format($viaje->toString_montoDinamica(), 2) ?><br>
                    <?php } ?>
                    <?php if ($tolls > 0) { ?>    
                        Monto por peajes = <?php echo $viaje->getPeajes() ?><br>
                    <?php } ?>
                    Monto total = <?php //number_format($viaje->toString_montoTotal(), 2) ?><br>
                    Comisión de Didi = <?php echo "&#8353;" . number_format($viaje->calculaComisionDidi(), 2) ?><br>
                    <strong>Monto de ganancia = <?php echo "&#8353;" . number_format($viaje->calculaGanancia(), 2) ?></strong><br><br>
                    Detalle ganancias reportadas en la aplicación<br>
                    Total del viaje = <?php echo "&#8353;" . number_format($viaje->getMontoTotalDelViaje(), 2) ?><br>
                    Ganancia del viaje = <?php echo "&#8353;" . number_format($viaje->getMontoGanado(), 2) ?><br>
                    <strong>Diferencia = <?php echo "&#8353;" . number_format($difference, 2) ?></strong><br><br>
                    Por tanto existen una diferencia de <?php echo "&#8353;" . number_format($difference, 2) */?><br><br>
                    Saludos-->            
                    <?php } ?>
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-update2" data-dismiss="modal">Cerrar</button>
                <button id="tollsFares" type="button" class="btn btn-update" onclick="CopyToClipboard('supportMessage')">Copiar</button>
            </div>
        </div>
    </div>
</div>

<footer><?php include_once("includes/footer.php") ?></footer>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<!-- Scripst -->
<script src="js/calculatescripts.js"></script>
<script src="js/jquery.cookie.js"></script>
</body>
</html>




