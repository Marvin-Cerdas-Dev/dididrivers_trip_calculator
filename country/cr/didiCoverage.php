<!DOCTYPE html>
<?php include_once("../../includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="En este sitio se encuentra con la covertura por provincias y cantones donde se ofrece el servicio de Didi">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, Covertura, Cantones, Provincias">
        <meta http-equiv="Expires" content="5">

        <?php include_once("../../includes/headinfo.php") ?>
        
        <!-- build:css ../../dist/css -->
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">
        <link href="../../css/default.css" rel="stylesheet">        
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Covertura del servicio de Didi</title>

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
                <img src="../../img/didi_coverage_background.jpg" class="card-img-top" alt="Covertura de servicios de Didi en tu ciudad">
                <div class="card-body">
                    <h5 class="card-title">Covertura del servicio de didi</h5>
                    <p class="card-text">
                        Desde el noviembre del 2019 que Didi inició operaciones su covertura está en:
                    <ul>
                        <li>San José</li>
                        <li>Heredia</li>
                        <li>Alajuela</li>
                        <li>Puntarenas</li>
                    </ul>
                    A continuación puede ver el detalle de los cantones en los cuales Didi opera desde el inicio:
                    </p>
                    <p class="card-text">
                        <!--AdSense-->
                        <?php include_once("../../includes/ads.php") ?>  
                        <!--AdSense-->
                    </p>
                    <p class="card-text">
                    <center>
                        <img class="img-fluid" src="../../img/mapa_covertura.svg"/>
                        <p class="fuente">Fuente: Aguilar Arroyo, Yenci (2019) Didi arranca este martes con promos que busca desbancar a Uber, La Teja, Fecha de consulta: 9 de abril del 2019. URL: <a href="https://www.lateja.cr/nacional/didi-arranca-este-martes-con-promos-que-buscan/VQE7MUUXBBFNLDV7TZKTZTPEQQ/story/" title="Didi arranca este martes con promos que busca desbancar a Uber" hreflang="es">https://www.lateja.cr/nacional/didi-arranca-este-martes-con-promos-que-buscan/VQE7MUUXBBFNLDV7TZKTZTPEQQ/story/</a></p>
                    </center>
                    </p>
                </div>
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
