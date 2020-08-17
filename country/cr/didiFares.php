<!DOCTYPE html>
<?php include_once("../../includes/analyticstracking.php") ?>
<?php include_once("../../includes/viajeExpress.php") ?>
<?php $viaje = new viajeExpress(0, 0, 0, 0, 0, 0, 0, 0) ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podras verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi">
        <meta http-equiv="Expires" content="5">

        <?php include_once("../../includes/headinfo.php") ?>
        
        <!-- build:css ../../dist/css -->
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">
        <link href="../../css/default.css" rel="stylesheet">        
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Tarifas de Didi en Costa Rica</title>

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
        <?php include_once("../../includes/header.php") ?>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div class="card md-3 card-update">
                <img src="../../images/didi_fares_background.jpg" class="card-img-top" alt="Didi Fares">
                <div class="card-body">
                    <h1 class="card-title">Tarifas de Didi</h1>
                    <p class="card-text">
                        A partir del 19 de noviembre del 2019 la empresa china Didi empesó sus operaciones en Costa Rica ofreciendo descuentos para los usurios y deneficios económicos a los conductores.<br><br>
                        Este servicio opera en San José, Alajuela, Heredia, Cartago y Puntarenas (ver todos cantones de covertura <a href="didiCoverage.php" hreflang="es"><b>aquí</b></a>)<br><br>
                        La tarifas ofrecidas para los conductores son las siguientes:<br>
                    <ul>
                        <li>Tarifa mínima: <?php echo "&#8353;" . $viaje->getMinimunFare() ?></li>
                        <li>Tarifa base: <?php echo "&#8353;" . $viaje->getBasicFare() ?></li>
                        <li>&ensp;+ por km: <?php echo "&#8353;" . $viaje->getKilometerFare() ?>/km</li>
                        <li>&ensp;+ por minuto: <?php echo "&#8353;" . $viaje->getMinuteFare() ?>/min</li>
                        <li>Distancia larga: <?php echo "&#8353;" . $viaje->getExtraCharge10KmFare() ?>/km (Se cobrará una tarifa de distancia larga en viajes cuyo recorrido excedan los 10km)</li>
                    </ul>
                    </p>
                    <p class="card-text">
                        Puede verificar de forma detallada sus ganancias aquí:
                    </p>
                    <p class="card-text">
                        <button type="button" class="btn btn-update btn-lg btn-block" id="calc_details">Verificar ganancias detallada</button>
                    </p>
                    <p class="card-text">
                        <!--AdSense-->
                        <?php include_once("../../includes/ads.php") ?>  
                        <!--AdSense-->
                    </p>
                    <p class="card-text">
                        También si lo prefiere puede verificar sus ganancias de forma simple aquí:
                    </p>
                    <p class="card-text">
                        <button type="button" class="btn btn-update btn-lg btn-block" id="calc_simple">Verificar ganancias simple</button>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <footer><?php include_once("../../includes/footer.php") ?></footer>
    <!-- JavaScript -->
    <!-- build:js ../../dis/js -->
    <script src="../../node_modules/jquery/dist/jquery.min.js"></script>
    <script src="../../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../../js/index-scripts.js"></script>
    <script src="../../js/jquery.cookie.js"></script>
    <script src="../../js/country.js"></script>
    <script src="../../js/form-scripts.js"></script>
    <script src="../../js/calculatescripts.js"></script>
    <script src="../../js/defaultscripts.js"></script>
    <!-- endbuild -->
</body>
</html>
