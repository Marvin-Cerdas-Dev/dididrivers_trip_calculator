<!DOCTYPE html>
<?php include_once("../../includes/analyticstracking.php") ?>
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
        <link href="../../node_modules/aos/dist/aos.css" rel="stylesheet"> 
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc Site Map</title>

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
            <div id="cal_details" class="col-sm-12 col-md-12 col-lg-12">
                <div class="border rounded padding-container">
                    <div id="top">
                        <h1>DidiCalc Site Map</h1>

                    </div>
                    <div>
                        <p>
                            Ultima actualización: 10 de Abril del 2020 - Total de páginas:
                        </p>
                        <p>
                        <ul>
                            <li class="lpage"><a href="https://crdidicalc.azurewebsites.net/" title="CRDidiCalc - Calculadora de viajes de Didi">CRDidiCalc - Calculadora de viajes de Didi</a></li>
                            <li class="lpage"><a href="https://crdidicalc.azurewebsites.net/index.php" title="CRDidiCalc - Calculadora de viajes de Didi">CRDidiCalc - Calculadora de viajes de Didi</a></li>
                            <li class="lpage"><a href="https://crdidicalc.azurewebsites.net/didiFares.php" title="CRDidiCalc - Tarifas de Didi en Costa Rica">CRDidiCalc - Tarifas de Didi en Costa Rica</a></li>
                            <li class="lpage"><a href="https://crdidicalc.azurewebsites.net/didiCoverage.php" title="CRDidiCalc - Covertura del servicio de Didi">CRDidiCalc - Covertura del servicio de Didi</a></li>
                            <li class="lpage"><a href="https://crdidicalc.azurewebsites.net/calcDetails.php" title="CRDidiCalc - Calculadora detallada">CRDidiCalc - Calculadora detallada</a></li>
                            <li class="lpage"><a href="https://crdidicalc.azurewebsites.net/calcSimple.php" title="CRDidiCalc - Calculadora simple">CRDidiCalc - Calculadora simple</a></li>
                            <li class="lpage"><a href="https://crdidicalc.azurewebsites.net/help.php" title="CRDidiCalc - Ayuda en caso de emergencia">CRDidiCalc - Ayuda en caso de emergencia</a></li>
                            <li class="lpage last-page"><a href="https://crdidicalc.azurewebsites.net/privacypolicy.php" title="CRDidiCalc - Política de privacidad">CRDidiCalc - Política de privacidad</a></li>
                        </ul> 
                        </p>
                    </div>
                    <div>
                        <p>
                            <!--
                            Please note:
                            You are not allowed to remove the copyright notice below.
                            Thank you!
                            www.xml-sitemaps.com
                            -->
                            Page created with <a target="_blank" href="https://www.xml-sitemaps.com"><b>Google XML sitemap and html sitemaps generator</b></a> | Copyright &copy; 2005-2020 XML-Sitemaps.com
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
<script src="../../node_modules/aos/dist/aos.js"></script>
<!-- endbuild -->
</body>
</html>