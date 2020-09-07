<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podras verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi">
        <meta http-equiv="Expires" content="5">

        <?php include_once("includes/headinfo.php") ?>
        
        <!-- build:css dist/css -->
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
        <link href="/css/default.css" rel="stylesheet">        
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Calculadora de viajes de Didi</title>

    </head>
    <!-- Loading page -->
    <div id="loading" class="loader">
        <div class="img-loading spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
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
    <div class="page-container">
        <header>
            <?php include_once("includes/header.php") ?>
        </header>
        <div class="container-fluid">
            <div class="row">
                <div id="cal_details" class="col-sm-12 col-md-12 col-lg-12">
                    <div class="card card-margin padding-container">
                        <center>
                            <h2>CALCULADOR DE VIAJES DE DIDI</h2>
                            <h3>Selecione su país</h3>
                        </center>
                        <div class="rounded mx-auto d-block">
                            <center>
                                <a id="flag-cr" href="country/cr/index.php">
                                <img class="img-responsive" src="img/costa_rica.png" alt="Costa Rica"  width="60%" height="60%">
                                </a>
                            </center>  
                        </div>
                        <div class="rounded mx-auto d-block">
                            <center>
                                <a id="flag-mx" href="country/mx/index.php">
                                <img class="img-responsive" src="img/mexico.png" alt="México" width="60%" height="60%">
                                </a>
                            </center>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer><?php include_once("includes/footer.php") ?></footer>
    </div>
<!-- JavaScript -->
<!-- build:js dis/js -->
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/popper.js/dist/popper.min.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="js/index-scripts.js"></script>
<script src="js/jquery.cookie.js"></script>
<!-- endbuild -->
</body>
</html>
